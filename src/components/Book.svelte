<script lang="ts">
  import {onMount} from 'svelte';
  import * as THREE from 'three';
  import {gsap} from 'gsap';

  let container: HTMLDivElement;
  let globalProgress = 0;
  let progressTween = {value: 0};
  let isDragging = false;
  let startX = 0;
  let startProgress = 0;

  const config = {
    numPages: 6,
    pageWidth: 2,
    pageHeight: 3,
    pageDepth: 0.03,
    rotationStep: 0.01,
    dragSensitivity: 0.2,
    snapDuration: 0.8,
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
        {texture: '/imgs/zoo.png', parallaxFactor: 0.3, offset: {x: 2, y: 0.1, z: 0.02}},
        {texture: '/imgs/flower.png', parallaxFactor: -0.5, offset: {x: -1.2, y: -0.1, z: 0.02}},
      ],
      [{texture: '/imgs/dec1.png', parallaxFactor: 0.4, offset: {x: 2.6, y: 0, z: 0.02}}],
      [
        {texture: '/imgs/dec2.png', parallaxFactor: -0.5, offset: {x: -2, y: 0.2, z: 0.02}},
        {texture: '/imgs/zoo.png', parallaxFactor: 0.4, offset: {x: 3.0, y: -0.4, z: 0.03}},
        {texture: '/imgs/flower.png', parallaxFactor: 0.4, offset: {x: 2.4, y: 0, z: 0.02}},
      ],
      [
        {texture: '/imgs/dec1.png', parallaxFactor: 0.3, offset: {x: 1.2, y: 0.1, z: 0.02}},
        {texture: '/imgs/zoo.png', parallaxFactor: 0.4, offset: {x: 3.0, y: -0.4, z: 0.03}},
      ],
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
    localClipPlanes: THREE.Plane[];
  }[][] = [];

  function createDecorations(i: number, textureLoader: THREE.TextureLoader, z: number) {
    const decorations = textures.decorations[i] || [];
    const pairs: {
      front: THREE.Mesh;
      back: THREE.Mesh;
      parallaxFactor: number;
      offset: {x: number; y: number; z: number};
      localClipPlanes: THREE.Plane[];
    }[] = [];

    decorations.forEach((decConfig) => {
      const decoWidth = config.pageWidth * 0.3;
      const decoHeight = config.pageHeight * 0.3;

      const geometry = new THREE.PlaneGeometry(decoWidth, decoHeight);
      const texture = textureLoader.load(decConfig.texture);

      const localClipPlanes = [
        new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth),
        new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
      ];

      const localBackClipPlanes = [
        new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0),
        new THREE.Plane(new THREE.Vector3(1, 0, 0), config.pageWidth),
      ];

      const front = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          clippingPlanes: localClipPlanes.map((plane) => plane.clone()),
        }),
      );
      front.position.set(-config.pageWidth, decConfig.offset.y || 0, z + decConfig.offset.z);

      const back = new THREE.Mesh(
        geometry.clone(),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          clippingPlanes: localBackClipPlanes.map((plane) => plane.clone()),
        }),
      );

      back.position.set(config.pageWidth, decConfig.offset.y || 0, z - decConfig.offset.z);

      back.rotation.y = Math.PI;

      pairs.push({
        front,
        back,
        parallaxFactor: decConfig.parallaxFactor,
        offset: decConfig.offset,
        localClipPlanes,
      });
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

    const pairs = createDecorations(i, textureLoader, pageMesh.position.z);
    pairs.forEach((pair) => {
      pivot.add(pair.front);
      pages[i - 1]?.add(pair.back);
    });
    decorationPairs[i] = pairs;
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
    const loadPromises = textures.pages.map((url) => new Promise((resolve) => textureLoader.load(url, resolve)));
    Promise.all(loadPromises).then(() => {
      for (let i = 0; i < config.numPages; i++) {
        const page = createPage(i, textureLoader);
        scene.add(page);
        pages.push(page);
      }
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  function handleResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  onMount(() => {
    initScene();
    animate();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer && container) {
        container.removeChild(renderer.domElement);
      }
    };
  });

  function updatePages(progress: number) {
    if (!pages.length) return;

    const progressPerSegment = 1 / config.numPages;
    const pageRotations: number[] = [];

    for (let i = 0; i < config.numPages; i++) {
      const page = pages[i];
      const segmentStartProgress = i * progressPerSegment;
      const flipProgress = Math.max(0, Math.min(1, (progress - segmentStartProgress) / progressPerSegment));
      const flipRotation = -flipProgress * Math.PI;

      page.rotation.y = i * config.rotationStep + flipRotation;
      pageRotations.push(flipRotation);
    }

    for (let i = 0; i < config.numPages; i++) {
      const decs = decorationPairs[i];
      if (!decs || decs.length === 0) continue;

      const leftRotation = pageRotations[i - 1];
      const influenceFromLeft = leftRotation + Math.PI;
      const rightRotation = pageRotations[i];
      const influenceFromRight = rightRotation;
      const totalInfluence = influenceFromLeft + influenceFromRight - Math.PI;

      decs.forEach((pair) => {
        const parallaxShift = totalInfluence * config.pageWidth * pair.parallaxFactor;
        pair.front.position.x = pair.offset.x + parallaxShift;
        pair.back.position.x = -pair.offset.x - parallaxShift;

        const pageMatrix = pages[i].matrixWorld.clone();
        const worldClipPlanes = pair.localClipPlanes.map((plane) => {
          const worldPlane = plane.clone();
          worldPlane.applyMatrix4(pageMatrix);
          return worldPlane;
        });

        pair.front.material.clippingPlanes = worldClipPlanes;
      });
    }
  }

  let lastMoveTime = 0;
  let lastMoveX = 0;
  let velocityX = 0;

  function onPointerMove(event: PointerEvent) {
    if (!isDragging) return;

    const currentX = event.clientX;
    const now = performance.now();

    const dx = event.movementX || currentX - lastMoveX;
    const dt = now - lastMoveTime;

    if (dt > 0) {
      velocityX = dx / dt;
    }

    lastMoveTime = now;
    lastMoveX = currentX;

    const deltaX = currentX - startX;
    const progressDelta = (-deltaX / container.clientWidth) * config.dragSensitivity;
    globalProgress = startProgress + progressDelta;
    globalProgress = Math.max(0, Math.min(1, globalProgress));
    updatePages(globalProgress);
  }

  function onPointerDown(event: PointerEvent) {
    gsap.killTweensOf(progressTween);
    isDragging = true;
    startX = event.clientX;
    startProgress = globalProgress;
    lastMoveX = event.clientX;
    lastMoveTime = performance.now();
    velocityX = 0;
    container.style.cursor = 'grabbing';
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    container.style.cursor = 'grab';

    const progressPerSegment = 1 / config.numPages;
    const currentSegment = globalProgress / progressPerSegment;

    const velocityToPageFactor = 0.4;
    let pageDelta = -velocityX * velocityToPageFactor;

    pageDelta = Math.max(-5, Math.min(5, pageDelta));

    let targetSegment = Math.round(currentSegment + pageDelta);

    targetSegment = Math.max(0, Math.min(config.numPages, targetSegment));

    const targetProgress = targetSegment * progressPerSegment;

    progressTween.value = globalProgress;
    gsap.to(progressTween, {
      value: targetProgress,
      duration: config.snapDuration,
      ease: 'power2.out',
      onUpdate: () => {
        globalProgress = progressTween.value;
        updatePages(globalProgress);
      },
    });
  }
</script>

<div
  bind:this={container}
  class="w-full h-full cursor-grab"
  on:pointerdown={onPointerDown}
  on:pointermove={onPointerMove}
  on:pointerup={onPointerUp}
  on:pointerleave={onPointerUp}
  on:pointercancel={onPointerUp}
  on:lostpointercapture={onPointerUp}
/>

<style>
  .w-full {
    width: 100%;
    height: 100vh;
    touch-action: none;
  }
</style>
