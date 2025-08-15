<!--  留着备用， 万一可以变得很可爱呢 -->

<script lang="ts">
  import {onMount, onDestroy} from 'svelte';
  import {currentPage} from '../store';
  import {wikis} from '../config';
  import gsap from 'gsap';
  import FishFlag from '../assets/flag.svg?raw';

  let visible = true;
  let showModal = false;
  let lines: string[] = [];
  let ticker: gsap.core.Tween;
  let textEl: HTMLDivElement;

  $: wikiText = wikis[$currentPage]?.trim() || '';
  $: lines = wikiText ? wikiText.split('\n').map((l) => l.trim()) : [];

  $: if (wikiText && textEl) {
    gsap.killTweensOf(textEl);
    scroll();
  }

  $: if (!currentPage) {
    visible = false;
    showModal = false;
  }

  async function scroll() {
    if (!textEl) return;
    gsap.killTweensOf(textEl);

    await gsap.delayedCall(0.02, () => {});

    const totalWidth = textEl.scrollWidth;
    const singleCopyWidth = totalWidth / 2;
    const viewportWidth = textEl.parentElement?.clientWidth || 0;

    if (singleCopyWidth <= viewportWidth) {
      gsap.set(textEl, {x: 0});
      return;
    }

    gsap.set(textEl, {x: 0});

    ticker = gsap.to(textEl, {
      x: -singleCopyWidth,
      duration: singleCopyWidth / 60,
      ease: 'linear',
      repeat: -1,
      force3D: true,
      roundProps: 'x',
    });
  }

  onMount(() => {
    document.addEventListener('click', handleClick);
    setTimeout(scroll, 50);

    setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.koi-flag').forEach((el, i) => {
        gsap.to(el, {
          y: gsap.utils.random(-12, 12),
          x: gsap.utils.random(-6, 6),
          duration: gsap.utils.random(0.8, 1.5),
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: i * 0.1,
        });
      });
    }, 100);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  onDestroy(() => {
    if (ticker) ticker.kill();
  });

  function handleClick(event: MouseEvent) {
    const isTextInteraction = window.getSelection()?.toString();
    if (showModal && (event.target as HTMLElement).closest('#wiki-modal') && !isTextInteraction) {
      showModal = false;
    }
  }
</script>

{#if visible && wikiText}
  <div class="fixed top-0 left-0 w-full text-[var(--textColor)] backdrop-blur-sm z-10 h-12 flex items-center">
    <div class="relative overflow-visible flex-1 h-full -ml-2 -mr-2">
      <div
        bind:this={textEl}
        class="absolute whitespace-nowrap text-sm lg:text-base will-change-transform top-0 left-12 h-full flex items-center gap-2"
      >
        {#each Array(2) as _}
          {#each lines as line}
            <div class="koi-flag relative flex items-center justify-center w-48 h-[40px] mx-2">
              {@html FishFlag}
              <span class="absolute text-xs left-4 text-center top-[14px]">{line}</span>
            </div>
          {/each}
        {/each}
      </div>
    </div>
  </div>
{/if}
