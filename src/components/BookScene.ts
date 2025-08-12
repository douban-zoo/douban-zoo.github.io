import * as THREE from 'three';
import * as dat from 'lil-gui';
import { config, assets, palette } from './config';
import gsap from 'gsap';
import { playAudio } from '../utils/audios';
import { VideoOverlayManager } from '../utils/video';

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
  private gui: dat.GUI;

  private videoIcon?: THREE.Mesh;
  private audioIcon?: THREE.Mesh;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private isPaused = false;
  private videoOverlayManager: VideoOverlayManager;


  private readonly perSegment = 1 / config.numPages;

  private currentPage = 0;
  private lastBgUpdate = 0;

  private isMobile: boolean;
  private maxPixelRatio: number = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? 3 : 2;
  private normalCameraZ: number = 6;
  private closedCameraZ: number = 4;

  constructor (container: HTMLDivElement) {
    this.container = container;
    this.isMobile = container.clientWidth < 448;

    this.scene = new THREE.Scene();
    this.scene.add(this.book);

    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    // this.camera.position.set(0, 0, 6);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.maxPixelRatio));


    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.localClippingEnabled = true;

    this.renderer.setClearColor(palette.bg[0]);
    this.container.appendChild(this.renderer.domElement);

    this.setUpLight();
    // this.setupLightControls();

    window.addEventListener('resize', () => this.handleResize());
    this.handleResize();

    this.renderer.domElement.addEventListener('click', this._onIconClick.bind(this), false);
    this.videoOverlayManager = new VideoOverlayManager(
      () => this.pause(),
      () => this.resume()
    );

  }

  public pause() {
    this.isPaused = true;
  }

  public resume() {
    this.isPaused = false;
  }

  private setUpLight() {
    this.scene.add(this.ambientLight);

    const lLight = new THREE.DirectionalLight(0xffffff, 0.5);
    lLight.position.set(-5, 0, 8);
    this.scene.add(lLight);
    this.directionalLights.push(lLight);

    const rLight = new THREE.DirectionalLight(0xffffff, 0.5);
    rLight.position.set(5, 0, 8);
    this.scene.add(rLight);
    this.directionalLights.push(rLight);
  }

  private setupLightControls() {
    this.gui = new dat.GUI({ autoPlace: true });
    const lightFolder = this.gui.addFolder('Lighting');

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

    this._createMediaIcons(textureLoader);
    this.update(0);
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public update(progress: number) {
    if (!this.pages.length) return;
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

    this.currentPage = Math.round(pProgress);

    for (let i = 0;i < config.numPages;i++) {
      const page = this.pages[i];
      const segmentStartProgress = i * perSegment;
      const flipProgress = Math.max(0, Math.min(1, pProgress - (segmentStartProgress) / perSegment));
      const flipRotation = -flipProgress * Math.PI;

      page.rotation.y = i * config.rotationStep + flipRotation;
      pageRotations.push(flipRotation);

      const pageStartProgress = (i - 2) * perSegment;
      const pageEndProgress = (i + 2) * perSegment;
      page.visible = progress > pageStartProgress && progress < pageEndProgress;

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

    this.updateIcons();

  }
  private updateBgColor(progress: number) {
    const now = performance.now();
    if (now - this.lastBgUpdate < 16) return;

    this.lastBgUpdate = now;

    const numColors = palette.bg.length;
    const sProgress = progress * numColors;
    const low = Math.floor(sProgress) % numColors;
    const hight = (low + 1) % numColors;
    const lerpFactor = sProgress - Math.floor(sProgress);

    const colorLow = new THREE.Color(palette.bg[low]);
    const colorHigh = new THREE.Color(palette.bg[hight]);

    const color = colorLow.clone().lerp(colorHigh, lerpFactor);

    this.renderer.setClearColor(color);
    document.documentElement.style.setProperty('--bgColor', color.getStyle());
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

    this.camera.position.y = height < width ? 0 : -0.25 * (visibleHeight - config.pageHeight);

    this.camera.updateProjectionMatrix();
  }

  public dispose() {
    this.pages.length = 0;
    this.decorationPairs.length = 0;

    this.renderer.dispose();

    if (this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }

    this.gui.destroy();

    (this.scene as any) = null;
    (this.camera as any) = null;
  }

  private _createPage(i: number, textureLoader: THREE.TextureLoader): THREE.Group {
    const pivot = new THREE.Group();
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
      roughness: 0.35,
      metalness: 0.05,
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
      new THREE.MeshStandardMaterial({ map: frontTexture }),
      new THREE.MeshStandardMaterial({ map: backTexture }),
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
          new THREE.Plane(new THREE.Vector3(1, 0, 0), -0.025),
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
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), -0.025),
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

  private _createMediaIcons(textureLoader: THREE.TextureLoader) {
    const iconSize = 0.3;
    const iconGeometry = new THREE.PlaneGeometry(iconSize, iconSize);

    const videoTexture = textureLoader.load(assets.icons.video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;
    const videoMaterial = new THREE.MeshBasicMaterial({
      map: videoTexture,
      transparent: true,
      opacity: 0,
    });

    this.videoIcon = new THREE.Mesh(iconGeometry, videoMaterial);
    this.videoIcon.position.set(-config.pageWidth - 0.3, 0.7, 0);
    this.scene.add(this.videoIcon);

    const audioTexture = textureLoader.load(assets.icons.audio);
    audioTexture.colorSpace = THREE.SRGBColorSpace;
    const audioMaterial = new THREE.MeshBasicMaterial({
      map: audioTexture,
      transparent: true,
      opacity: 0,
    });

    this.audioIcon = new THREE.Mesh(iconGeometry.clone(), audioMaterial);
    this.audioIcon.position.set(-config.pageWidth - 0.3, 0.3, 0);
    this.scene.add(this.audioIcon);
  }

  private updateIcons() {
    if (!this.videoIcon || !this.audioIcon) return;

    const mediaToShow = config.mediaPages[this.currentPage] || [];

    gsap.to(this.videoIcon.material, {
      duration: 0.05,
      delay: 0.05,
      opacity: mediaToShow.includes('video') ? 1 : 0,
      ease: 'power2.inOut',
    });
    gsap.to(this.audioIcon.material, {
      duration: 0.05,
      delay: 0.05,
      opacity: mediaToShow.includes('audio') ? 1 : 0,
      ease: 'power2.inOut',
    });

  }

  private _onIconClick(event: MouseEvent) {
    this.mouse.x = (event.clientX / this.container.clientWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / this.container.clientHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const icons = [this.videoIcon, this.audioIcon].filter(icon => icon?.visible) as THREE.Mesh[];
    if (icons.length === 0) return;

    const intersects = this.raycaster.intersectObjects(icons);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;

      if (clickedObject === this.videoIcon) {
        this.videoOverlayManager.show(assets.videos[this.currentPage.toString()] || '');
      } else if (clickedObject === this.audioIcon) {
        playAudio(assets.audios[this.currentPage.toString()] || '',);
      }
    }
  }
}
