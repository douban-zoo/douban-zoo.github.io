import * as THREE from 'three';
import { config, assets, palette } from '../config';
import gsap from 'gsap';
import { IconManager } from './IconManager';
import { VideoOverlayManager } from './VideoOverlayManager';
import { isDev } from "../utils/env";
import { currentPage } from '../store';
import { FontLoader } from 'three/examples/jsm/Addons.js';
import { TextGeometry } from 'three/examples/jsm/Addons.js';
import { PageBuilder, type DecorationPair } from './PageBuilder';

THREE.Cache.enabled = true;


export class BookScene {
  private container: HTMLDivElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private book: THREE.Group = new THREE.Group();
  private pages: THREE.Group[] = [];
  private decorationPairs: DecorationPair[][] = [];
  private ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 1.8);
  private directionalLights: THREE.DirectionalLight[] = [];
  private homeGroup: THREE.Group | null = null;

  private videoOverlayManager: VideoOverlayManager;
  private iconManager: IconManager;
  private loadingManager: THREE.LoadingManager;

  private renderable: boolean = false;
  private readonly perSegment = 1 / config.numPages;

  private lastBgUpdate = 0;

  private isMobile: boolean;
  private maxPixelRatio: number = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? 3 : 2;
  private normalCameraZ: number = 6;
  private closedCameraZ: number = 4;

  private initialCameraOffset = isDev() ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(4, -4, 0);
  private initialCameraUp = isDev() ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(-2, 3, 3);

  public openingAnimationStatus: 'none' | 'playing' | 'played' = isDev() ? 'played' : 'none';
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private mouse: THREE.Vector2 = new THREE.Vector2();
  private isFluttering: boolean = false;

  constructor (container: HTMLDivElement) {
    this.container = container;
    this.isMobile = container.clientWidth < 448;

    this.scene = new THREE.Scene();
    this.scene.add(this.book);

    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.maxPixelRatio));

    this.loadingManager = new THREE.LoadingManager();
    this.videoOverlayManager = new VideoOverlayManager(() => { }, () => { });

    this.iconManager = new IconManager(
      this.scene,
      this.camera,
      this.container,
      this.renderer,
      this.videoOverlayManager
    );

    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.localClippingEnabled = true;

    this.renderer.setClearColor(palette.bg[0]);
    this.container.appendChild(this.renderer.domElement);

    this.setUpLight();
    // this.setupLightControls();
    this.setupLoadingManager();
    this.setUpPositionAndRotation();
    this.setupHoverInteraction();

    window.addEventListener('resize', () => this.handleResize());

    // helper
    // const axesHelper = new THREE.AxesHelper(5);
    // this.scene.add(axesHelper);

  }

  private setupLoadingManager() {
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingBar = document.getElementById('loading-bar');

    if (!loadingOverlay || !loadingBar) {
      console.error('Loading screen elements not found in the DOM.');
      return;
    }

    this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const progressRatio = itemsLoaded / itemsTotal;
      (loadingBar as HTMLElement).style.transform = `scaleX(${ progressRatio })`;
    };

    this.loadingManager.onLoad = () => {
      setTimeout(() => {
        this.renderable = true;
      }, 200);

      gsap.to(loadingOverlay, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          loadingOverlay.style.visibility = 'hidden';
        }
      });
    };
  }

  private setUpLight() {
    this.scene.add(this.ambientLight);

    const rLight = new THREE.DirectionalLight(0xffffff, 0.6);
    rLight.position.set(0, 0, 8);
    this.scene.add(rLight);
    this.directionalLights.push(rLight);
  }

  private setupLightControls() {
    if (!isDev()) return;

    import('lil-gui').then((dat) => {
      const gui = new dat.GUI({ autoPlace: true });
      const lightFolder = gui.addFolder('Lighting');

      const ambientFolder = lightFolder.addFolder('Ambient Light');
      ambientFolder.addColor({ color: '#ffffff' }, 'color').onChange((value) => {
        this.ambientLight.color.set(value);
      });
      ambientFolder.add(this.ambientLight, 'intensity', 0, 4, 0.01);

      const directionalFolder = lightFolder.addFolder('Directional Lights');
      this.directionalLights.forEach((light, index) => {
        const folder = directionalFolder.addFolder(`Light ${ index + 1 }`);
        folder.addColor({ color: '#ffffff' }, 'color').onChange((value) => {
          light.color.set(value);
        });
        folder.add(light, 'intensity', 0, 4, 0.01);
        folder.add(light.position, 'x', -10, 50, 0.1);
        folder.add(light.position, 'y', -10, 50, 0.1);
        folder.add(light.position, 'z', -10, 50, 0.1);
      });
    });
  }

  private setupHoverInteraction() {
    this.renderer.domElement.addEventListener('mousemove', this._onMouseMove.bind(this), false);
  }

  private _onMouseMove(event: MouseEvent) {
    if (this.openingAnimationStatus !== 'none' || this.isFluttering || this.isMobile) {
      return;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const cover = this.pages[0];
    const intersects = this.raycaster.intersectObject(cover, true);

    if (intersects.length > 0) {
      this._playFlutterAnimation();
    }
  }

  private _playFlutterAnimation() {
    if (this.isFluttering) return;
    this.isFluttering = true;

    const cover = this.pages[0];
    const originY = cover.rotation.y;

    gsap.timeline({
      onComplete: () => {
        this.isFluttering = false;
        cover.rotation.y = originY;
      }
    })
      .to(cover.rotation, {
        keyframes: [
          { y: originY - 0.25, duration: 0.1, ease: "power2.out" },
          { y: originY - 0.1, duration: 0.1, ease: "power2.out" },
          { y: originY - 0.2, duration: 0.1, ease: "power2.out" },
          { y: originY - 0.05, duration: 0.15, ease: "power2.out" },
          { y: originY, duration: 0.3, ease: "power1.out" }
        ]
      });
  }


  private setUpPositionAndRotation() {
    this.camera.position.add(this.initialCameraOffset);
    this.camera.up.copy(this.initialCameraUp);

    this.handleResize();

    this.camera.lookAt(
      isDev() ? new THREE.Vector3(0, 0, 0) :
        this.isMobile ? new THREE.Vector3(1.2, 0, 0) : new THREE.Vector3(-1, 2, -3.5));
  }

  public async init() {
    const textureLoader = new THREE.TextureLoader(this.loadingManager);
    const fontLoader = new FontLoader(this.loadingManager);
    const pageBuilder = new PageBuilder(textureLoader);

    this._createHomeMesh(fontLoader);

    for (let i = 0;i < config.numPages;i++) {
      const { page, decorations } = pageBuilder.createPage(i);
      this.book.add(page);
      this.pages.push(page);
      this.decorationPairs[i] = decorations;

      decorations.forEach((pair) => {
        page.add(pair.front);
        this.pages[i - 1]?.add(pair.back);
      });
    }

    this.iconManager.init(textureLoader);
    this.update(0);
  }

  public render() {
    if (!this.renderable) return;
    this.renderer.render(this.scene, this.camera);
  }

  public playOpeningAnimation() {
    if (this.openingAnimationStatus !== 'none') return;

    this.openingAnimationStatus = 'playing';

    const targetCameraY = this.getCameraTargetY();
    const targetPosition = {
      x: config.pageWidth / 2,
      y: targetCameraY,
      z: this.isMobile ? this.closedCameraZ : this.normalCameraZ,
    };
    const targetLookAt = new THREE.Vector3(config.pageWidth / 2, targetCameraY, 0);
    const targetUp = new THREE.Vector3(0, 1, 0);

    const currentLookAt = this.camera.getWorldDirection(new THREE.Vector3()).clone().add(this.camera.position);
    const currentUp = this.camera.up.clone();

    const tl = gsap.timeline({

      onComplete: () => {
        this.openingAnimationStatus = 'played';
      },
      onUpdate: () => {
        this.camera.lookAt(currentLookAt);
        this.camera.up.copy(currentUp);
      },
      defaults: {
        duration: 2.5,
        ease: 'power3.inOut',
      },
    });

    const startTime = 0;

    tl.to(this.camera.position, { ...targetPosition }, startTime);
    tl.to(currentLookAt, { ...targetLookAt }, startTime);
    tl.to(currentUp, { ...targetUp }, startTime);
    this.homeGroup?.children.forEach((child) => {
      child.children.forEach((c) => {
        if (!(c instanceof THREE.Mesh)) {
          return;
        }
        if (c.name === "douban" || c.name === "zoo") {
          tl.to(c.rotation, { x: -Math.PI / 2 }, startTime)
        }
      });
    });
  }

  get openingAnimationPlayed() {
    return this.openingAnimationStatus === 'played';
  }

  public update(progress: number) {
    if (!this.pages.length) return;

    if (!this.openingAnimationPlayed && progress > 0) {
      return;
    }

    this.updateBgColor(progress);

    const perSegment = this.perSegment;
    const pageRotations: number[] = [];
    const pProgress = progress / perSegment;

    // if is first page
    if (progress > 0 && progress < perSegment) {
      this.camera.position.x = THREE.MathUtils.lerp(config.pageWidth / 2, 0, pProgress);
      if (this.isMobile) {
        this.camera.position.z = THREE.MathUtils.lerp(this.closedCameraZ, this.normalCameraZ, pProgress);
      }

      this.homeGroup?.children.forEach((child) => {
        child.children.forEach((c) => {
          if (!(c instanceof THREE.Mesh)) {
            return
          }

          c.material.opacity = 1 - pProgress * 2;
          if (c.material.opacity <= 0.01) {
            c.visible = false;
          }
        });
      });
    }

    currentPage.set(Math.round(pProgress));

    for (let i = 0;i < config.numPages;i++) {
      const page = this.pages[i];

      const segmentStartProgress = i * perSegment;
      const flipProgress = Math.max(0, Math.min(1, pProgress - (segmentStartProgress) / perSegment));
      const flipRotation = -flipProgress * Math.PI;

      pageRotations.push(flipRotation);

      page.rotation.y = flipRotation;
      page.position.z = i < pProgress ? (i - pProgress + 1) * config.pageDepth * flipProgress : (pProgress - i) * config.pageDepth * (1 - flipProgress);

      const pageStartProgress = (i - 2) * perSegment;
      const pageEndProgress = (i + 2) * perSegment;

      if (progress > 0 && progress < pageStartProgress || progress > pageEndProgress) {
        page.visible = false;
        continue;
      }
      page.visible = true;

      const decs = this.decorationPairs[i];
      if (!decs || decs.length === 0) continue;

      const spreadStartProgress = (i - 0.8) * perSegment;
      const spreadEndProgress = (i + 0.8) * perSegment;
      const isVisible = progress > spreadStartProgress && progress < spreadEndProgress;

      const leftR = pageRotations[i - 1] || 0;
      const influenceL = leftR + Math.PI;

      const rightR = pageRotations[i];
      const influenceR = rightR;
      const totalInfluence = influenceL + influenceR - Math.PI;

      decs.forEach((pair) => {
        pair.front.visible = isVisible;
        pair.back.visible = isVisible;
        if (!isVisible) return;

        const parallaxShift = totalInfluence * config.pageWidth * pair.parallaxFactor;
        pair.front.position.x = pair.offset.x + parallaxShift;
        pair.back.position.x = -pair.offset.x - parallaxShift;
      });
    }
  }

  private getCameraTargetY(): number {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    const widthPercentage = 0.95;
    const visibleWidth = config.pageWidth * 2 / widthPercentage;
    const visibleHeight = visibleWidth / this.camera.aspect;

    return height < width
      ? 0
      : -0.23 * (visibleHeight - config.pageHeight);
  }

  private updateBgColor(progress: number) {
    const now = performance.now();
    if (now - this.lastBgUpdate < 16) return;

    this.lastBgUpdate = now;

    const numColors = palette.bg.length;
    const sProgress = progress * numColors;
    const low = Math.floor(sProgress) % numColors;
    const high = (low + 1) % numColors;
    const lerpFactor = sProgress - Math.floor(sProgress);

    const colorLow = new THREE.Color(palette.bg[low]);
    const colorHigh = new THREE.Color(palette.bg[high]);

    const color = colorLow.clone().lerp(colorHigh, lerpFactor);

    this.renderer.setClearColor(color);
    this.setColorVariable(color);
  }

  private setColorVariable(color: THREE.Color) {
    const hsl = { h: 0, s: 0, l: 0 };
    color.getHSL(hsl);

    let textColor: THREE.Color = color;
    if (hsl.l > 0.5) {
      textColor = new THREE.Color().setHSL(hsl.h, hsl.s - 0.1, 0.6 * hsl.l);
    }

    document.documentElement.style.setProperty('--bgColor', color.getStyle());
    document.documentElement.style.setProperty('--textColor', textColor.getStyle());
  }

  public handleResize() {

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    const widthPercentage = 0.95;

    const visibleWidth = config.pageWidth * 2 / widthPercentage;
    const fovInRadians = this.camera.fov * (Math.PI / 180);

    const visibleHeight = visibleWidth / this.camera.aspect;
    let cameraZ = visibleHeight / (2 * Math.tan(fovInRadians / 2));

    const minCameraDistance = 6;
    this.normalCameraZ = Math.max(cameraZ, minCameraDistance);

    if (this.isMobile) {
      this.closedCameraZ = this.normalCameraZ * 0.75
      this.camera.position.z = this.closedCameraZ;
    } else {
      this.camera.position.z = this.normalCameraZ;
    }

    if (this.openingAnimationPlayed) {
      this.camera.position.y = this.getCameraTargetY();
    }
    this.camera.updateProjectionMatrix();

    this.iconManager.onResize();
  }

  public dispose() {
    this.pages.length = 0;
    this.decorationPairs.length = 0;

    this.iconManager.dispose();
    this.renderer.dispose();

    if (this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }

    (this.scene as any) = null;
    (this.camera as any) = null;
  }

  private _createHomeMesh(fontLoader: FontLoader) {
    fontLoader.load(assets.fonts.solitreo, (font) => {
      this.homeGroup = new THREE.Group();

      const zooBoxGeo = new THREE.BoxGeometry(1.3, 0.4, 0.4);
      const zooBoxMat = new THREE.MeshStandardMaterial({
        color: 0xF9E36C,
        roughness: 0.1,
        transparent: true,
        opacity: 1,
      });
      const zooBox = new THREE.Mesh(zooBoxGeo, zooBoxMat);
      const zooGroup = new THREE.Group();
      zooGroup.add(zooBox);

      const zooTextGeo = new TextGeometry('Zoo', {
        font: font,
        size: 0.6,
        depth: 0.05,
        curveSegments: 12,
      });
      zooTextGeo.center();
      const zooTextMat = new THREE.MeshStandardMaterial({
        color: 0xFD9F69,
        roughness: 0.2,
        transparent: true,
      });
      const zooText = new THREE.Mesh(zooTextGeo, zooTextMat);
      zooText.name = "zoo";
      zooText.position.z += 0.1;
      zooGroup.add(zooText);

      if (this.isMobile) {
        zooGroup.position.set(config.pageWidth, 0.2, config.pageHeight * 0.8);
        zooGroup.rotation.y = -Math.PI / 2;
      } else {
        zooGroup.position.set(config.pageWidth * 0.5, 0, 0);
        zooGroup.rotation.y = -Math.PI / 12;
      }
      this.homeGroup.add(zooGroup);

      const doubanBoxGeo = new THREE.BoxGeometry(2.3, 0.4, 0.4);
      const doubanBoxMat = new THREE.MeshStandardMaterial({
        color: 0xFFBF5E,
        roughness: 0.2,
        transparent: true,
        opacity: 1,
      });
      const doubanBox = new THREE.Mesh(doubanBoxGeo, doubanBoxMat);
      const doubanGroup = new THREE.Group();
      doubanGroup.add(doubanBox);

      const doubanTextGeo = new TextGeometry('Douban', {
        font: font,
        size: 0.5,
        depth: 0.05,
        curveSegments: 12,
      });
      doubanTextGeo.center();
      const doubanTextMat = new THREE.MeshStandardMaterial({
        color: 0xEfFFAE,
        roughness: 0.1,
        transparent: true,
      });
      const doubanText = new THREE.Mesh(doubanTextGeo, doubanTextMat);
      doubanText.name = "douban";

      doubanText.position.z += 0.1;
      doubanText.position.x -= 0.1;
      doubanGroup.add(doubanText);

      if (this.isMobile) {
        doubanGroup.position.set(config.pageWidth / 2, 0, 0);
        doubanGroup.rotation.x = -Math.PI / 16;
      } else {
        doubanGroup.position.set(-config.pageWidth / 3, 0, 0);
        doubanGroup.rotation.y = Math.PI / 16;
      }
      this.homeGroup.add(doubanGroup);

      this.homeGroup.position.x = -config.pageWidth * 0.3;
      this.homeGroup.scale.set(0.8, 0.8, 0.8);
      this.homeGroup.rotation.set(Math.PI / 2, Math.PI / 2, 0);

      this.book.add(this.homeGroup);

      const dropHeight = 10;
      const textTargetY = (boxGeo: THREE.BoxGeometry) => boxGeo.parameters.height / 2 + 0.4;

      // Initial positions
      zooBox.position.y = dropHeight;
      doubanBox.position.y = dropHeight;
      zooText.position.y = dropHeight + textTargetY(zooBoxGeo);
      doubanText.position.y = dropHeight + textTargetY(doubanBoxGeo);

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'bounce.out' }
      });

      tl.to(zooBox.position, { y: 0 }, 0);
      tl.to(doubanBox.position, { y: 0 }, 0.3);

      tl.to(zooText.position, { y: textTargetY(zooBoxGeo) }, 1.2);
      tl.to(doubanText.position, { y: textTargetY(doubanBoxGeo) }, 1.4);
    });
  }
}
