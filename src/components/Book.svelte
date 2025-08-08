<script lang="ts">
  import {onMount} from 'svelte';
  import * as THREE from 'three';
  import {gsap} from 'gsap';

  let container: HTMLDivElement;
  let currentPage = 0;
  let isFlipping = false;
  const numPages = 6;
  const pages: THREE.Group[] = [];
  const decorationPairs: {front: THREE.Mesh; back: THREE.Mesh}[] = [];

  const pageWidth = 2;
  const pageHeight = 3;
  const pageDepth = 0.02;

  let startX = 0;
  let deltaX = 0;
  let isDragging = false;

  const baseRotation = (i: number) => i * 0.02;

  onMount(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    renderer.localClippingEnabled = true;

    const textureLoader = new THREE.TextureLoader();
    const textures = [
      textureLoader.load('/imgs/meidi1.png'),
      textureLoader.load('/imgs/meidi2.png'),
      textureLoader.load('/imgs/meidi3.png'),
      textureLoader.load('/imgs/meidi4.png'),
      textureLoader.load('/imgs/meidi5.png'),
      textureLoader.load('/imgs/meidi6.png'),
    ];

    const decorations = [
      textureLoader.load('/imgs/zoo.png'),
      textureLoader.load('/imgs/flower.png'),
      textureLoader.load('/imgs/dec1.png'),
      textureLoader.load('/imgs/dec2.png'),
    ];

    const sideMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});

    for (let i = 0; i < numPages; i++) {
      const pivot = new THREE.Group();
      const pageGeometry = new THREE.BoxGeometry(pageWidth, pageHeight, pageDepth);
      const frontTexture = textures[i].clone();
      frontTexture.repeat.set(0.5, 1);
      frontTexture.offset.set(0.5, 0);

      const backTexture = textures[(i + 1) % numPages].clone();
      backTexture.repeat.set(0.5, 1);
      backTexture.offset.set(0.0, 0);

      const frontMaterial = new THREE.MeshBasicMaterial({map: frontTexture, side: THREE.DoubleSide});
      const backMaterial = new THREE.MeshBasicMaterial({map: backTexture, side: THREE.DoubleSide});
      const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, backMaterial];

      const pageMesh = new THREE.Mesh(pageGeometry, materials);
      pageMesh.position.x = pageWidth / 2;
      pivot.add(pageMesh);

      if (i > 0 && i < numPages - 1) {
        const decorationGeometry = new THREE.PlaneGeometry(pageWidth * 0.3, pageHeight * 0.3);
        const texture = decorations[i % decorations.length];

        const clipPlanes = [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), pageWidth),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
          new THREE.Plane(new THREE.Vector3(0, -1, 0), pageHeight / 2),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), pageHeight / 2),
        ];

        const backClipPlanes = [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), pageWidth),
          new THREE.Plane(new THREE.Vector3(0, -1, 0), pageHeight / 2),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), pageHeight / 2),
        ];

        const frontMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          clippingPlanes: clipPlanes,
        });

        const frontMesh = new THREE.Mesh(decorationGeometry, frontMaterial);
        frontMesh.position.set(pageWidth / 2, 0, pageMesh.position.z + 0.015);
        pivot.add(frontMesh);

        const backMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          clippingPlanes: backClipPlanes,
        });
        const backMesh = new THREE.Mesh(decorationGeometry.clone(), backMaterial);
        backMesh.position.set(-pageWidth / 2, 0, pageMesh.position.z - 0.015);
        backMesh.rotation.y = Math.PI;
        pages[i - 1]?.add(backMesh);

        decorationPairs[i] = {front: frontMesh, back: backMesh};

        renderer.localClippingEnabled = true;
      }

      pivot.rotation.y = baseRotation(i);
      scene.add(pivot);
      pages.push(pivot);
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      container.removeChild(renderer.domElement);
    };
  });

  function onPointerDown(event: PointerEvent) {
    if (isFlipping || currentPage >= numPages) return;
    isDragging = true;
    startX = event.clientX;
    deltaX = 0;
  }

  function onPointerMove(event: PointerEvent) {
    if (!isDragging) return;
    deltaX = event.clientX - startX;

    const normalized = deltaX * 0.001;
    const clamped = Math.max(-1, Math.min(1, normalized));

    if (clamped < 0 && currentPage < numPages) {
      pages[currentPage].rotation.y = baseRotation(currentPage) + clamped * Math.PI;

      const pair = decorationPairs[currentPage];
      if (pair) {
        const parallaxFactor = 1;
        const offset = clamped * pageWidth * parallaxFactor;
        pair.front.position.x = pageWidth / 2 + offset;
        pair.back.position.x = -pageWidth / 2 - offset;
      }
    } else if (clamped > 0 && currentPage > 0) {
      pages[currentPage - 1].rotation.y = baseRotation(currentPage - 1) + (clamped - 1) * Math.PI;

      const pair = decorationPairs[currentPage - 1];
      if (pair) {
        const parallaxFactor = 1;
        const offset = (clamped - 1) * pageWidth * parallaxFactor;
        pair.front.position.x = pageWidth / 2 + offset;
        pair.back.position.x = -pageWidth / 2 - offset;
      }
    }
  }

  function onPointerUp() {
    if (!isDragging || isFlipping) return;
    isDragging = false;

    const threshold = Math.PI / 2;

    function updatePair(pair: {front: THREE.Mesh; back: THREE.Mesh}) {
      if (!pair) return;
      const tl = gsap.timeline();
      tl.to(
        pair.front.position,
        {
          x: pageWidth / 2,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<',
      );
      tl.to(
        pair.back.position,
        {
          x: -pageWidth / 2,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<',
      );
    }

    if (deltaX < 0 && currentPage < numPages) {
      const page = pages[currentPage];
      const angle = page.rotation.y - baseRotation(currentPage);
      const pair = decorationPairs[currentPage];

      if (angle < -threshold) {
        isFlipping = true;
        const tl = gsap.timeline({
          onComplete: () => {
            currentPage++;
            isFlipping = false;
          },
        });
        tl.to(page.rotation, {
          y: -Math.PI + baseRotation(currentPage),
          duration: 0.5,
          ease: 'power2.out',
        });

        updatePair(pair);
      } else {
        const tl = gsap.timeline();
        tl.to(page.rotation, {
          y: baseRotation(currentPage),
          duration: 0.5,
          ease: 'power2.out',
        });
        updatePair(pair);
      }
    } else if (deltaX > 0 && currentPage > 0) {
      const page = pages[currentPage - 1];
      const angle = page.rotation.y - baseRotation(currentPage - 1);
      const pair = decorationPairs[currentPage - 1];

      if (angle > -threshold) {
        isFlipping = true;
        const tl = gsap.timeline({
          onComplete: () => {
            currentPage--;
            isFlipping = false;
          },
        });
        tl.to(page.rotation, {
          y: baseRotation(currentPage - 1),
          duration: 0.5,
          ease: 'power2.out',
        });
        updatePair(pair);
      } else {
        const tl = gsap.timeline();
        tl.to(page.rotation, {
          y: -Math.PI + baseRotation(currentPage - 1),
          duration: 0.5,
          ease: 'power2.out',
        });
        updatePair(pair);
      }
    }
  }
</script>

<div
  bind:this={container}
  class="w-full h-full"
  on:pointerdown={onPointerDown}
  on:pointermove={onPointerMove}
  on:pointerup={onPointerUp}
/>

<style>
  .w-full {
    width: 100%;
    height: 100vh;
    touch-action: none;
  }
</style>
