<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { gsap } from 'gsap';

  let container: HTMLDivElement;
  let currentPage = 0;
  let isFlipping = false;
  const numPages = 6;
  const pages: THREE.Group[] = [];
  const decorationMeshes: THREE.Mesh[] = []; // Store decoration meshes

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

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

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
    ];

    const sideMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < numPages; i++) {
      const pivot = new THREE.Group();
      const pageGeometry = new THREE.BoxGeometry(pageWidth, pageHeight, pageDepth);
      const frontTexture = textures[i].clone();
      frontTexture.repeat.set(0.5, 1);
      frontTexture.offset.set(0.5, 0);

      const backTexture = textures[(i + 1) % numPages].clone();
      backTexture.repeat.set(0.5, 1);
      backTexture.offset.set(0.0, 0);

      frontTexture.needsUpdate = true;
      backTexture.needsUpdate = true;

      const frontMaterial = new THREE.MeshBasicMaterial({ map: frontTexture, side: THREE.DoubleSide });
      const backMaterial = new THREE.MeshBasicMaterial({ map: backTexture, side: THREE.DoubleSide });

      const materials = [sideMaterial, sideMaterial, sideMaterial, sideMaterial, frontMaterial, backMaterial];

      const pageMesh = new THREE.Mesh(pageGeometry, materials);
      pageMesh.position.x = pageWidth / 2;

      pivot.add(pageMesh);

      if (i > 0 && i < numPages - 1) {
        const clippingPlanes = [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), pageWidth / 2),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), pageWidth / 2), 
          new THREE.Plane(new THREE.Vector3(0, -1, 0), pageHeight / 2),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), pageHeight / 2), 
        ];

        const decorationGeometry = new THREE.PlaneGeometry(pageWidth * 0.3, pageHeight * 0.3);
        const decorationMaterial = new THREE.MeshBasicMaterial({
          map: decorations[i % decorations.length],
          transparent: true,
          side: THREE.DoubleSide,
          clippingPlanes: clippingPlanes,
        });
        const decorationMesh = new THREE.Mesh(decorationGeometry, decorationMaterial);
        decorationMesh.position.set(pageWidth / 2, 0, pageMesh.position.z + 0.015);
        pivot.add(decorationMesh);
        decorationMeshes[i] = decorationMesh;

        decorationMaterial.clippingPlanes = clippingPlanes.map(plane => {
          const localPlane = plane.clone();
          localPlane.constant += pageWidth / 2;
          return localPlane;
        });
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
      if (currentPage > 0 && currentPage < numPages - 1 && decorationMeshes[currentPage]) {
        const parallaxFactor = 0.03;
        decorationMeshes[currentPage].position.x += clamped * pageWidth * parallaxFactor;
      }
    } else if (clamped > 0 && currentPage > 0) {
      pages[currentPage - 1].rotation.y = baseRotation(currentPage - 1) - (1 - clamped) * Math.PI;
      if (currentPage - 1 > 0 && currentPage - 1 < numPages - 1 && decorationMeshes[currentPage - 1]) {
        const parallaxFactor = 0.03;
        decorationMeshes[currentPage - 1].position.x -= (1 - clamped) * pageWidth * parallaxFactor;
      }
    }
  }

  function onPointerUp() {
    if (!isDragging || isFlipping) return;
    isDragging = false;

    const threshold = Math.PI / 2;

    if (deltaX < 0 && currentPage < numPages) {
      const page = pages[currentPage];
      const angle = page.rotation.y - baseRotation(currentPage);
      const decoration = decorationMeshes[currentPage];

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
        if (decoration) {
          tl.to(
            decoration.position,
            {
              x: pageWidth / 2,
              duration: 0.5,
              ease: 'power2.out',
            },
            '<'
          );
        }
      } else {
        const tl = gsap.timeline();
        tl.to(page.rotation, {
          y: baseRotation(currentPage),
          duration: 0.5,
          ease: 'power2.out',
        });
        if (decoration) {
          tl.to(
            decoration.position,
            {
              x: pageWidth / 2,
              duration: 0.5,
              ease: 'power2.out',
            },
            '<'
          );
        }
      }
    } else if (deltaX > 0 && currentPage > 0) {
      const page = pages[currentPage - 1];
      const angle = page.rotation.y - baseRotation(currentPage - 1);
      const decoration = decorationMeshes[currentPage - 1];

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
        if (decoration) {
          tl.to(
            decoration.position,
            {
              x: pageWidth / 2,
              duration: 0.5,
              ease: 'power2.out',
            },
            '<'
          );
        }
      } else {
        const tl = gsap.timeline();
        tl.to(page.rotation, {
          y: -Math.PI + baseRotation(currentPage - 1),
          duration: 0.5,
          ease: 'power2.out',
        });
        if (decoration) {
          tl.to(
            decoration.position,
            {
              x: pageWidth / 2,
              duration: 0.5,
              ease: 'power2.out',
            },
            '<'
          );
        }
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
    touch-action: none; /* Prevent default scroll on touch */
  }
</style>