<script lang="ts">
  import {onMount} from 'svelte';
  import * as THREE from 'three';
  import {gsap} from 'gsap';

  let container: HTMLDivElement;
  let currentPage = 0;
  let isFlipping = false;
  let isDragging = false;
  let startX = 0;
  let deltaX = 0;

  const config = {
    numPages: 6,
    pageWidth: 2,
    pageHeight: 3,
    pageDepth: 0.02,
    rotationStep: 0.03,
    animationDuration: 1,
  };

  const textures = {
    pages: [
      '/imgs/meidi1.png',
      '/imgs/meidi2.png',
      '/imgs/meidi3.png',
      '/imgs/meidi4.png',
      '/imgs/meidi5.png',
      '/imgs/meidi6.png',
    ],
    decorations: [
      [],
      [
        {texture: '/imgs/zoo.png', parallaxFactor: 0.3, offset: {x: 1, y: 0.1, z: 0.015}},
        {texture: '/imgs/flower.png', parallaxFactor: -0.5, offset: {x: -0.2, y: -0.1, z: 0.02}},
      ],
      [{texture: '/imgs/dec1.png', parallaxFactor: 0.4, offset: {x: 0.1, y: 0, z: 0.015}}],
      [
        {texture: '/imgs/dec2.png', parallaxFactor: -0.2, offset: {x: -1.0, y: 0.2, z: 0.015}},
        {texture: '/imgs/zoo.png', parallaxFactor: 0.6, offset: {x: 0.9, y: -0.4, z: 0.02}},
        {texture: '/imgs/flower.png', parallaxFactor: 0.4, offset: {x: 0.3, y: 0, z: 0.025}},
      ],
      [{texture: '/imgs/dec1.png', parallaxFactor: 0.3, offset: {x: 0.2, y: 0.1, z: 0.015}}],
      [],
    ],
  };

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  const pages: THREE.Group[] = [];
  const decorationPairs: {
    front: THREE.Mesh;
    back: THREE.Mesh;
    parallaxFactor: number;
    offset: {x: number; y: number; z: number};
  }[][] = [];

  function createDecorations(i: number, textureLoader: THREE.TextureLoader, z: number) {
    const decorations = textures.decorations[i] || [];
    const pairs: {
      front: THREE.Mesh;
      back: THREE.Mesh;
      parallaxFactor: number;
      offset: {x: number; y: number; z: number};
    }[] = [];

    decorations.forEach((decConfig) => {
      const geometry = new THREE.PlaneGeometry(config.pageWidth * 0.3, config.pageHeight * 0.3);
      const texture = textureLoader.load(decConfig.texture);

      const clipPlanes = [
        new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth),
        new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
        new THREE.Plane(new THREE.Vector3(0, -1, 0), config.pageHeight / 2),
        new THREE.Plane(new THREE.Vector3(0, 1, 0), config.pageHeight / 2),
      ];

      const backClipPlanes = [
        new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0),
        new THREE.Plane(new THREE.Vector3(1, 0, 0), config.pageWidth),
        new THREE.Plane(new THREE.Vector3(0, -1, 0), config.pageHeight / 2),
        new THREE.Plane(new THREE.Vector3(0, 1, 0), config.pageHeight / 2),
      ];

      const front = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
          clippingPlanes: clipPlanes,
        }),
      );
      front.position.set(-config.pageWidth, decConfig.offset.y || 0, z + decConfig.offset.z);

      const back = new THREE.Mesh(
        geometry.clone(),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
          clippingPlanes: backClipPlanes,
        }),
      );

      back.position.set(config.pageWidth, decConfig.offset.y || 0, z - decConfig.offset.z);
      back.rotation.y = Math.PI;

      pairs.push({front, back, parallaxFactor: decConfig.parallaxFactor, offset: decConfig.offset});
    });

    return pairs;
  }

  function createPage(i: number, textureLoader: THREE.TextureLoader): THREE.Group {
    const pivot = new THREE.Group();
    const geometry = new THREE.BoxGeometry(config.pageWidth, config.pageHeight, config.pageDepth);
    const sideMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

    const frontTexture = textureLoader.load(textures.pages[i]).clone();
    frontTexture.repeat.set(0.5, 1);
    frontTexture.offset.set(0.5, 0);

    const backTexture = textureLoader.load(textures.pages[(i + 1) % config.numPages]).clone();
    backTexture.repeat.set(0.5, 1);

    const materials = [
      sideMaterial,
      sideMaterial,
      sideMaterial,
      sideMaterial,
      new THREE.MeshBasicMaterial({map: frontTexture}),
      new THREE.MeshBasicMaterial({map: backTexture}),
    ];

    const pageMesh = new THREE.Mesh(geometry, materials);
    pageMesh.position.x = config.pageWidth / 2;
    pivot.add(pageMesh);

    if (i > 0 && i < config.numPages - 1) {
      const pairs = createDecorations(i, textureLoader, pageMesh.position.z);
      pairs.forEach((pair) => {
        pivot.add(pair.front);
        pages[i - 1]?.add(pair.back);
      });
      decorationPairs[i] = pairs;
    }

    pivot.rotation.y = i * config.rotationStep;
    return pivot;
  }

  function initScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 6);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.localClippingEnabled = true;
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    for (let i = 0; i < config.numPages; i++) {
      const page = createPage(i, textureLoader);
      scene.add(page);
      pages.push(page);
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  function handleResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  onMount(() => {
    initScene();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  });

  function onPointerDown(event: PointerEvent) {
    if (isFlipping || currentPage >= config.numPages) return;
    isDragging = true;
    startX = event.clientX;
    deltaX = 0;
  }
  function onPointerMove(event: PointerEvent) {
    if (!isDragging) return;
    deltaX = event.clientX - startX;
    const normalized = deltaX * 0.001;
    const clamped = Math.max(-1, Math.min(1, normalized));

    const pageIndex = clamped < 0 ? currentPage : currentPage - 1;
    if (pageIndex < 0 || pageIndex >= config.numPages) return;

    const page = pages[pageIndex];
    const pairs = decorationPairs[pageIndex] || [];
    const rotation = (clamped < 0 ? clamped : clamped - 1) * Math.PI;

    page.rotation.y = pageIndex * config.rotationStep + rotation;

    pairs.forEach((pair) => {
      const offset = rotation * config.pageWidth * pair.parallaxFactor;
      pair.front.position.x = pair.offset.x + offset;
      pair.back.position.x = -pair.offset.x - offset;
    });

    const nextPageIndex = pageIndex + 1;
    if (nextPageIndex < config.numPages) {
      const nextPairs = decorationPairs[nextPageIndex] || [];
      const nextRotation = rotation + Math.PI;
      nextPairs.forEach((pair) => {
        const offset = nextRotation * config.pageWidth * pair.parallaxFactor;
        pair.front.position.x = pair.offset.x + offset;
        pair.back.position.x = -pair.offset.x - offset;
      });
    }
  }

  function onPointerUp() {
    if (!isDragging || isFlipping) return;
    isDragging = false;

    const pageIndex = deltaX < 0 ? currentPage : currentPage - 1;
    if (pageIndex < 0 || pageIndex >= config.numPages) return;

    const page = pages[pageIndex];
    const pairs = decorationPairs[pageIndex] || [];
    const angle = page.rotation.y - pageIndex * config.rotationStep;

    const isForwardFlip = deltaX < 0 && angle < -Math.PI / 2;
    const isBackwardFlip = deltaX > 0 && angle > -Math.PI / 2;

    const tl = gsap.timeline({
      onComplete: () => {
        if (isForwardFlip) currentPage++;
        else if (isBackwardFlip) currentPage--;
        isFlipping = false;
      },
    });

    const rStep = config.rotationStep;

    const targetRotation = isForwardFlip
      ? -Math.PI + pageIndex * rStep
      : isBackwardFlip
        ? pageIndex * rStep
        : deltaX < 0
          ? pageIndex * rStep
          : -Math.PI + pageIndex * rStep;

    tl.to(page.rotation, {
      y: targetRotation,
      duration: config.animationDuration,
      ease: 'power2.out',
    });

    pairs.forEach((pair) => {
      const offset = (targetRotation - pageIndex * rStep) * config.pageWidth * pair.parallaxFactor;
      tl.to(
        pair.front.position,
        {
          x: pair.offset.x + offset,
          duration: config.animationDuration,
          ease: 'power2.out',
        },
        '<',
      );
      tl.to(
        pair.back.position,
        {
          x: -pair.offset.x - offset,
          duration: config.animationDuration,
          ease: 'power2.out',
        },
        '<',
      );
    });

    const nextPageIndex = pageIndex + 1;
    if (nextPageIndex < config.numPages) {
      const nextPairs = decorationPairs[nextPageIndex] || [];
      const nextTargetRotation = targetRotation + Math.PI;

      nextPairs.forEach((pair) => {
        const offset = (nextTargetRotation - nextPageIndex * rStep) * config.pageWidth * pair.parallaxFactor;
        tl.to(
          pair.front.position,
          {
            x: pair.offset.x + offset,
            duration: config.animationDuration,
            ease: 'power2.out',
          },
          '<',
        );
        tl.to(
          pair.back.position,
          {
            x: -pair.offset.x - offset,
            duration: config.animationDuration,
            ease: 'power2.out',
          },
          '<',
        );
      });
    }

    isFlipping = isForwardFlip || isBackwardFlip;
  }
</script>

<div
  bind:this={container}
  class="w-full h-full cursor-grab"
  on:pointerdown={onPointerDown}
  on:pointermove={onPointerMove}
  on:pointerup={onPointerUp}
  on:pointerleave={onPointerUp}
/>

<style>
  .w-full {
    width: 100%;
    height: 100vh;
    touch-action: none;
  }
</style>
