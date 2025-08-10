<script lang="ts">
  import {onMount} from 'svelte';
  import * as THREE from 'three';
  import {gsap} from 'gsap';

  let container: HTMLDivElement;
  let globalProgress = 0;
  let progressTween = {value: 0};
  let isDragging = false;
  let startX = 0;
  let deltaX = 0;
  let startProgress = 0;

  const config = {
    numPages: 6,
    pageWidth: 2.4,
    pageHeight: 3,
    pageDepth: 0.02,
    rotationStep: 0.01,
    dragSensitivity: 0.2,
    snapDuration: 0.8,
  };

  const textures = {
    pages: [
      '/imgs/bg-cover.png',
      '/imgs/bg-meidi.png',
      '/imgs/bg-jongjong.png',
      '/imgs/bg-meidi.png',
      '/imgs/bg-jongjong.png',
      '/imgs/bg-meidi.png',
    ],
    decorations: [
      [],
      [
        {texture: '/imgs/dec-meidi1.png', parallaxFactor: 0.35, offset: {x: 3.2, y: -0.2, z: 0.016}},
        {texture: '/imgs/dec-meidi2.png', parallaxFactor: 0.25, offset: {x: 1.4, y: -0.35, z: 0.015}},
      ],
      [
        {texture: '/imgs/dec-meidi1.png', parallaxFactor: 0.35, offset: {x: 3.2, y: -0.2, z: 0.016}},
        {texture: '/imgs/dec-meidi2.png', parallaxFactor: 0.25, offset: {x: 1.4, y: -0.35, z: 0.015}},
      ],
      [
        // {texture: '/imgs/dec2.png', parallaxFactor: -0.2, offset: {x: -2, y: 0.2, z: 0.02}}
      ],
      [
        // {texture: '/imgs/dec1.png', parallaxFactor: -0.3, offset: {x: -1.2, y: -0.1, z: 0.02}},
        // {texture: '/imgs/dec2.png', parallaxFactor: 0.2, offset: {x: 1.6, y: 0.1, z: 0.015}},
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
      const texture = textureLoader.load(decConfig.texture, (tex: THREE.Texture) => {
        tex.colorSpace = THREE.SRGBColorSpace;

        const aspect = tex.image.width / tex.image.height;
        const targetHeight = config.pageHeight * 0.75;
        const targetWidth = targetHeight * aspect;

        front.geometry.dispose();
        front.geometry = new THREE.PlaneGeometry(targetWidth, targetHeight);

        back.geometry.dispose();
        back.geometry = new THREE.PlaneGeometry(targetWidth, targetHeight);
      });

      const localClipPlanes = [
        new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth),
        new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
      ];

      const localBackClipPlanes = [
        new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0),
        new THREE.Plane(new THREE.Vector3(1, 0, 0), config.pageWidth),
      ];

      const placeholderGeom = new THREE.PlaneGeometry(1, 1);
      const front = new THREE.Mesh(
        placeholderGeom,
        new THREE.MeshBasicMaterial({
          map: texture,
          alphaTest: 0.1,
          depthWrite: true,
          transparent: true,
          clippingPlanes: localClipPlanes.map((plane) => plane.clone()),
        }),
      );
      front.position.set(-config.pageWidth, decConfig.offset.y || 0, z + decConfig.offset.z);

      const back = new THREE.Mesh(
        placeholderGeom.clone(),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          alphaTest: 0.1,
          depthWrite: true,
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

  function createRoundedBoxGeometry(
    width: number,
    height: number,
    depth: number,
    radius: number,
    segments: number,
  ): THREE.BoxGeometry {
    const geometry = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);

    const position = geometry.attributes.position;
    const vertex = new THREE.Vector3();

    const innerWidth = width / 2 - radius;
    const innerHeight = height / 2 - radius;

    for (let i = 0; i < position.count; i++) {
      vertex.fromBufferAttribute(position, i);

      if (vertex.x > innerWidth && Math.abs(vertex.y) > innerHeight) {
        const cornerCenter = new THREE.Vector3(innerWidth, Math.sign(vertex.y) * innerHeight, vertex.z);

        const offset = new THREE.Vector3().subVectors(vertex, cornerCenter);

        if (offset.length() > radius) {
          offset.setLength(radius);
          const newPos = cornerCenter.add(offset);
          position.setXYZ(i, newPos.x, newPos.y, newPos.z);
        }
      }
    }

    geometry.computeVertexNormals();
    return geometry;
  }

  function createPage(i: number, textureLoader: THREE.TextureLoader): THREE.Group {
    const pivot = new THREE.Group();

    const pageRadius = 0.1;

    const geometry = createRoundedBoxGeometry(config.pageWidth, config.pageHeight, config.pageDepth, pageRadius, 64);

    const frontTexture = textureLoader.load(textures.pages[i]);
    frontTexture.repeat.set(0.5, 1);
    frontTexture.offset.set(0.5, 0);
    frontTexture.colorSpace = THREE.SRGBColorSpace;

    const backTexture = textureLoader.load(textures.pages[(i + 1) % config.numPages]);
    backTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.repeat.set(0.5, 1);

    const sideFrontMat = new THREE.MeshBasicMaterial({
      map: frontTexture,
      transparent: true,
    });

    const sideBackMat = new THREE.MeshBasicMaterial({
      map: backTexture,
      transparent: true,
    });

    const uvAttr = geometry.attributes.uv;
    const posAttr = geometry.attributes.position;
    const zDepth = config.pageDepth / 2;

    for (let f = 0; f < uvAttr.count; f++) {
      // const x = posAttr.getX(f);
      const z = posAttr.getZ(f);

      if (z === zDepth) {
        uvAttr.setX(f, 1.0);
      } else if (z === -zDepth) {
        uvAttr.setX(f, 0.0);
      }
    }

    uvAttr.needsUpdate = true;
    const materials = [
      sideFrontMat,
      sideBackMat,
      sideFrontMat,
      sideBackMat,
      new THREE.MeshBasicMaterial({map: frontTexture, transparent: true}),
      new THREE.MeshBasicMaterial({map: backTexture, transparent: true}),
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

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true, logarithmicDepthBuffer: false});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.localClippingEnabled = true;

    container.appendChild(renderer.domElement);
    const textureLoader = new THREE.TextureLoader();
    const loadPromises = textures.pages.map((url) => new Promise((resolve) => textureLoader.load(url, resolve)));
    Promise.all(loadPromises)
      .then(() => {
        for (let i = 0; i < config.numPages; i++) {
          const page = createPage(i, textureLoader);
          scene.add(page);
          pages.push(page);
        }
      })
      .finally(() => {
        updatePages(globalProgress);
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

      const pageStartProgress = (i - 2) * progressPerSegment;
      const pageEndProgress = (i + 2) * progressPerSegment;
      const pageIsVisible = progress > pageStartProgress && progress < pageEndProgress;

      const spreadStartProgress = (i - 0.75) * progressPerSegment;
      const spreadEndProgress = (i + 0.75) * progressPerSegment;
      const isVisible = progress > spreadStartProgress && progress < spreadEndProgress;

      page.visible = pageIsVisible;

      const decs = decorationPairs[i];
      if (!decs || decs.length === 0) continue;

      const leftRotation = pageRotations[i - 1] || 0;
      const influenceFromLeft = leftRotation + Math.PI;
      const rightRotation = pageRotations[i];
      const influenceFromRight = rightRotation;
      const totalInfluence = influenceFromLeft + influenceFromRight - Math.PI;

      decs.forEach((pair) => {
        pair.front.visible = isVisible;
        pair.back.visible = isVisible;
        if (!isVisible) return;

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

    deltaX = currentX - startX;
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
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    container.style.cursor = 'grab';

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
      duration: config.snapDuration + Math.abs(pageDelta) * 0.5,
      ease: 'power2.out',
      onUpdate: () => {
        globalProgress = progressTween.value;
        updatePages(globalProgress);
      },
    });
  }
</script>

<!-- ??? refactor the size setting -->
<div
  bind:this={container}
  class=" cursor-grab touch-none md:h-[90vh] sm:-mt-12 w-[120vw] h-[90vw] md:-mt-24"
  on:pointerdown={onPointerDown}
  on:pointermove={onPointerMove}
  on:pointerup={onPointerUp}
  on:pointerleave={onPointerUp}
  on:pointercancel={onPointerUp}
  on:lostpointercapture={onPointerUp}
/>

<style>
</style>
