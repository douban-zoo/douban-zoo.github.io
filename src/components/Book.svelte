<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { gsap } from 'gsap';

  let container: HTMLDivElement;
  let material: THREE.ShaderMaterial;
  let renderer: THREE.WebGLRenderer;

  let isDragging = false;
  let targetAngle = 0;
  let tween: gsap.core.Tween | null = null;
  let lastX = 0;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2, 100, 1);
    const texture = new THREE.TextureLoader().load('/imgs/meidi1.png');

    material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uAngle: { value: 0.0 },
      },
      vertexShader: `
        uniform float uAngle;
        varying vec2 vUv;

        void main() {
          vec3 pos = position;
          vUv = uv;

          bool flipLeft = uAngle < 0.0;
          bool flipRight = uAngle >= 0.0;

          if ((flipLeft && pos.x < 0.0) || (flipRight && pos.x > 0.0)) {
            float c = cos(uAngle);
            float s = sin(uAngle);
            float x = pos.x;
            float z = pos.z;

            pos.x = c * x - s * z;
            pos.z = s * x + c * z;
          }

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        varying vec2 vUv;

        void main() {
          gl_FragColor = texture2D(uTexture, vUv);
        }
      `,
      side: THREE.DoubleSide,
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(plane);

      if (intersects.length > 0) {
        isDragging = true;
        lastX = e.clientX;
        if (tween) tween.kill();
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - lastX;
      lastX = e.clientX;

      const sensitivity = 0.0025;
      targetAngle -= deltaX * sensitivity;
      targetAngle = THREE.MathUtils.clamp(targetAngle, -Math.PI, Math.PI);

      material.uniforms.uAngle.value = targetAngle;
    };

    const handlePointerUp = () => {
  if (!isDragging) return;
  isDragging = false;

  const threshold = Math.PI / 2; // 90度阈值判断是否回0或翻到底
  let final = 0;

  if (Math.abs(targetAngle) > threshold) {
    final = targetAngle < 0 ? -Math.PI : Math.PI; // 翻到底
  } else {
    final = 0; // 回正面
  }

  tween = gsap.to(material.uniforms.uAngle, {
    value: final,
    duration: 1,
    ease: 'power2.out',
    onUpdate: () => {
      targetAngle = material.uniforms.uAngle.value;
    }
  });
};

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    // container.addEventListener('pointerleave', handlePointerUp); // 额外处理离开事件

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<style>
  .canvas-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    touch-action: none;
  }
</style>

<div bind:this={container} class="canvas-container"></div>
