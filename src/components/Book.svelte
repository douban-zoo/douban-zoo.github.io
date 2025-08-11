<script lang="ts">
  import {onMount} from 'svelte';
  import {gsap} from 'gsap';
  import {BookScene} from './BookScene';
  import {config} from './config';

  let container: HTMLDivElement;
  let bookScene: BookScene | null = null;

  let globalProgress = 0;
  let progressTween = {value: 0};
  let isDragging = false;
  let startX = 0;
  let startProgress = 0;
  let velocityX = 0;
  let lastMoveTime = 0;
  let lastMoveX = 0;

  onMount(() => {
    if (!container) return;

    bookScene = new BookScene(container);

    let animation: number;
    const animate = () => {
      animation = requestAnimationFrame(animate);
      bookScene?.render();
    };

    bookScene.init().then(() => {
      animate();
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animation);
      bookScene?.dispose();
    };
  });

  function updateScene(progress: number) {
    globalProgress = progress;
    bookScene?.update(progress);
  }

  function handleResize() {
    bookScene?.handleResize();
  }

  function onPointerDown(event: PointerEvent) {
    gsap.killTweensOf(progressTween);
    isDragging = true;
    startX = event.clientX;
    startProgress = globalProgress;
    lastMoveX = event.clientX;
    lastMoveTime = performance.now();
    velocityX = 0;
  }

  function onPointerMove(event: PointerEvent) {
    if (!isDragging) return;

    const currentX = event.clientX;
    const now = performance.now();
    const dx = event.movementX || currentX - lastMoveX;
    const dt = now - lastMoveTime;

    if (dt > 0) velocityX = dx / dt;
    lastMoveTime = now;
    lastMoveX = currentX;

    const deltaX = currentX - startX;
    const progressDelta = (-deltaX / container.clientWidth) * config.dragSensitivity;
    const newProgress = Math.max(0, Math.min(1, startProgress + progressDelta));
    updateScene(newProgress);
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;

    const progressPerSegment = 1 / config.numPages;
    const currentSegment = globalProgress / progressPerSegment;
    const velocityToPageFactor = 0.6;
    let pageDelta = -velocityX * velocityToPageFactor;
    pageDelta = Math.max(-3, Math.min(3, pageDelta));

    let targetSegment = Math.round(currentSegment + pageDelta);
    targetSegment = Math.max(0, Math.min(config.numPages, targetSegment));
    const targetProgress = targetSegment * progressPerSegment;

    progressTween.value = globalProgress;
    gsap.to(progressTween, {
      value: targetProgress,
      duration: config.snapDuration + Math.abs(pageDelta),
      ease: 'power3.out',
      onUpdate: () => {
        updateScene(progressTween.value);
      },
    });
  }
</script>

<div
  bind:this={container}
  class="cursor-grab touch-none md:h-[90vh] sm:-mt-12 w-[120vw] h-[90vw] md:-mt-24"
  on:pointerdown={onPointerDown}
  on:pointermove={onPointerMove}
  on:pointerup={onPointerUp}
  on:pointerleave={onPointerUp}
  on:pointercancel={onPointerUp}
  on:lostpointercapture={onPointerUp}
  role="slider"
  aria-valuemin="0"
  aria-valuemax="1"
  aria-valuenow={globalProgress}
  tabindex="0"
/>

<style>
  div {
    user-select: none;
    -webkit-user-select: none;
  }
</style>
