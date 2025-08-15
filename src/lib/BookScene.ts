import * as THREE from 'three';
import { config, assets, palette } from '../config';
import gsap from 'gsap';
import { IconManager } from './IconManager';
import { VideoOverlayManager } from './VideoOverlayManager';
import { isDev } from "../utils/env";
import { currentPage } from '../store';

type DecorationPair = {
  front: THREE.Mesh;
  back: THREE.Mesh;
  parallaxFactor: number;
  offset: { x: number; y: number; z: number };
};

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

  private videoOverlayManager: VideoOverlayManager;
  private iconManager: IconManager;

  private readonly perSegment = 1 / config.numPages;

  private lastBgUpdate = 0;

  private isMobile: boolean;
  private maxPixelRatio: number = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? 3 : 2;
  private normalCameraZ: number = 6;
  private closedCameraZ: number = 4;

  private initialCameraOffset = isDev() ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(4, -4, -2);
  private initialCameraUp = isDev() ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(-2, 4, 3);
  // FIXME: mobile dev 视角有问题

  public openingAnimationStatus: 'none' | 'playing' | 'played' = isDev() ? 'played' : 'none';

  constructor (container: HTMLDivElement) {
    this.container = container;
    this.isMobile = container.clientWidth < 448;

    this.scene = new THREE.Scene();
    this.scene.add(this.book);

    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ antialias: !this.isMobile, alpha: true, logarithmicDepthBuffer: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.maxPixelRatio));


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

    this.handleResize();  //FIXME: 现在这个 handleResize 不可以放在后面执行
    window.addEventListener('resize', () => this.handleResize());

    this.camera.position.add(this.initialCameraOffset);
    this.camera.up.copy(this.initialCameraUp);

    this.camera.lookAt(
      isDev() ? new THREE.Vector3(0, 0, 0) :
        this.isMobile ? new THREE.Vector3(1.2, 0, 0) : new THREE.Vector3(0, 2, -2));

    // helper
    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);

  }

  private setUpLight() {
    this.scene.add(this.ambientLight);


    // const lLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // lLight.position.set(-5, 0, 8);
    // this.scene.add(lLight);
    // this.directionalLights.push(lLight);

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


  public async init() {
    const textureLoader = new THREE.TextureLoader();
    const loadPromises = assets.pages.map((url) => new Promise((resolve) => textureLoader.load(url, resolve)));
    await Promise.all(loadPromises);

    for (let i = 0;i < config.numPages;i++) {
      const page = this._createPage(i, textureLoader);
      this.book.add(page);
      this.pages.push(page);
    }

    this.iconManager.init(textureLoader);
    this.update(0);
  }

  public render() {
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
  }


  get openingAnimationPlayed() {
    return this.openingAnimationStatus === 'played';
  }

  public update(progress: number) {
    if (!this.pages.length) return;

    if (!this.openingAnimationPlayed) {
      return;
    }

    this.updateBgColor(progress);

    const perSegment = this.perSegment;
    const pageRotations: number[] = [];
    const pProgress = progress / perSegment;

    if (progress < perSegment) {
      this.camera.position.x = THREE.MathUtils.lerp(config.pageWidth / 2, 0, pProgress);

      if (this.isMobile) {
        this.camera.position.z = THREE.MathUtils.lerp(this.closedCameraZ, this.normalCameraZ, pProgress);
      }
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

      if (progress < pageStartProgress || progress > pageEndProgress) {
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
      : -0.25 * (visibleHeight - config.pageHeight);
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

  private _createPage(i: number, textureLoader: THREE.TextureLoader): THREE.Group {
    const pivot = new THREE.Group();

    // TODO: replace bg texture for better rounded corner
    const geometry = this._createRoundedBoxGeometry(config.pageWidth, config.pageHeight, config.pageDepth, 0.12, 64);

    const frontTexture = textureLoader.load(assets.pages[i]);
    frontTexture.repeat.set(0.5, 1);
    frontTexture.offset.set(0.5, 0);
    frontTexture.colorSpace = THREE.SRGBColorSpace;

    const backTexture = textureLoader.load(assets.pages[(i + 1) % config.numPages]);
    backTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.repeat.set(0.5, 1);

    const coverNormal = textureLoader.load(assets.normalMap.cover);
    const paperNormal = textureLoader.load(assets.normalMap.paper);

    const fNormalTexture = i === 0 ? coverNormal : paperNormal.clone();
    fNormalTexture.repeat.set(0.5, 1);
    fNormalTexture.offset.set(0.5, 0);

    const bNormalTexture = i === config.numPages - 1 ? coverNormal : paperNormal.clone();
    bNormalTexture.repeat.set(0.5, 1);

    const fMaterialConfig = {
      roughness: 0.4,
      metalness: 0,
      normalMap: fNormalTexture,
      normalScale: new THREE.Vector2(1, 3)
    };
    const bMaterialConfig = {
      ...fMaterialConfig,
      normalMap: bNormalTexture,
    };

    const pageMesh = new THREE.Mesh(geometry, [
      new THREE.MeshStandardMaterial({ map: frontTexture }),
      new THREE.MeshStandardMaterial({ map: backTexture }),
      new THREE.MeshStandardMaterial({ map: backTexture }),
      new THREE.MeshStandardMaterial({ map: frontTexture }),
      new THREE.MeshStandardMaterial({ ...fMaterialConfig, map: frontTexture }),
      new THREE.MeshStandardMaterial({ ...bMaterialConfig, map: backTexture })
    ]);
    pageMesh.position.x = config.pageWidth / 2;
    pivot.add(pageMesh);

    const pairs = this._createDecorations(i, textureLoader, pageMesh.position.z);
    pairs.forEach((pair) => {
      pivot.add(pair.front);
      this.pages[i - 1]?.add(pair.back);
    });
    this.decorationPairs[i] = pairs;

    pivot.position.z = (config.numPages - i) * config.pageDepth;

    return pivot;
  }
  private _createDecorations(i: number, textureLoader: THREE.TextureLoader, z: number): DecorationPair[] {
    const decorations = assets.decorations[i] || [];
    const pairs: DecorationPair[] = [];
    const placeholderGeom = new THREE.PlaneGeometry(1, 1);

    decorations.forEach((decConfig) => {
      const scale = decConfig.scale ?? 1;

      const texture = textureLoader.load(decConfig.texture, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        const aspect = tex.image.width / tex.image.height;

        const targetHeight = config.pageHeight * 0.75 * scale;
        const targetWidth = targetHeight * aspect;

        front.geometry.dispose();
        front.geometry = new THREE.PlaneGeometry(targetWidth, targetHeight);
        back.geometry.dispose();
        back.geometry = new THREE.PlaneGeometry(targetWidth, targetHeight);
      });

      const front = new THREE.Mesh(placeholderGeom.clone(), new THREE.MeshStandardMaterial({
        map: texture,
        alphaTest: 0.01,
        transparent: true,
        clippingPlanes: [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth - 0.015),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), 0.01),
          new THREE.Plane(new THREE.Vector3(0, -1, 0), config.pageHeight / 2),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), config.pageHeight / 2)
        ].map(p => p.clone())
      }));
      front.position.set(-config.pageWidth, decConfig.offset?.y || 0, z + (decConfig.offset?.z || 0));

      const back = new THREE.Mesh(placeholderGeom.clone(), new THREE.MeshStandardMaterial({
        map: texture,
        alphaTest: 0.01,
        transparent: true,
        clippingPlanes: [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0.01),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), config.pageWidth - 0.015),
          new THREE.Plane(new THREE.Vector3(0, -1, 0), config.pageHeight / 2),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), config.pageHeight / 2)
        ].map(p => p.clone())
      }));

      this.book.add(front);
      this.book.add(back);

      back.position.set(config.pageWidth, decConfig.offset?.y || 0, z - (decConfig.offset?.z || 0));
      back.rotation.y = Math.PI;

      pairs.push({
        front,
        back,
        ...decConfig
      });
    });
    return pairs;
  }
  private _createRoundedBoxGeometry(width: number, height: number, depth: number, radius: number, segments: number): THREE.BoxGeometry {
    const geometry = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);
    const position = geometry.attributes.position;
    const vertex = new THREE.Vector3();

    const innerWidth = width / 2 - radius;
    const innerHeight = height / 2 - radius;

    for (let i = 0;i < position.count;i++) {
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
}