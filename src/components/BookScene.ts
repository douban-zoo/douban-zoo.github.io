import * as THREE from 'three';
import * as dat from 'lil-gui';
import { config, textures } from './config';

type DecorationPair = {
  front: THREE.Mesh;
  back: THREE.Mesh;
  parallaxFactor: number;
  offset: { x: number; y: number; z: number };
  localClipPlanes: THREE.Plane[];
};

export class BookScene {
  private container: HTMLDivElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private pages: THREE.Group[] = [];
  private decorationPairs: DecorationPair[][] = [];
  private ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 1);
  private directionalLights: THREE.DirectionalLight[] = [];
  private gui: dat.GUI;

  constructor (container: HTMLDivElement) {
    this.container = container;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 6);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: false });

    const maxPixelRatio = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? 3 : 2;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.localClippingEnabled = true;

    this.container.appendChild(this.renderer.domElement);

    this.setUpLight();

    this.gui = new dat.GUI({ autoPlace: true });
    this.setupLightControls();
  }

  private setUpLight() {
    this.scene.add(this.ambientLight);

    const leftLight = new THREE.DirectionalLight(0xffffff, 1.5);
    leftLight.position.set(-5, 5, 5);
    this.scene.add(leftLight);
    this.directionalLights = [leftLight];

    const rightLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rightLight.position.set(5, 5, 5);
    this.scene.add(rightLight);
    this.directionalLights.push(rightLight);
  }

  private setupLightControls() {
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
      folder.add(light.position, 'x', -10, 10, 0.1);
      folder.add(light.position, 'y', -10, 10, 0.1);
      folder.add(light.position, 'z', -10, 10, 0.1);
    });

  }

  public async init() {
    const textureLoader = new THREE.TextureLoader();
    const loadPromises = textures.pages.map((url) => new Promise((resolve) => textureLoader.load(url, resolve)));
    await Promise.all(loadPromises);

    for (let i = 0;i < config.numPages;i++) {
      const page = this._createPage(i, textureLoader);
      this.scene.add(page);
      this.pages.push(page);
    }
    this.update(0);
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  public update(progress: number) {
    if (!this.pages.length) return;
    const progressPerSegment = 1 / config.numPages;
    const pageRotations: number[] = [];
    const curPage = Math.floor(progress / progressPerSegment);

    for (let i = 0;i < config.numPages;i++) {
      const page = this.pages[i];
      const segmentStartProgress = i * progressPerSegment;
      const flipProgress = Math.max(0, Math.min(1, (progress - segmentStartProgress) / progressPerSegment));
      const flipRotation = -flipProgress * Math.PI;

      page.rotation.y = i * config.rotationStep + flipRotation;
      pageRotations.push(flipRotation);

      const pageStartProgress = (i - 2) * progressPerSegment;
      const pageEndProgress = (i + 2) * progressPerSegment;
      page.visible = progress > pageStartProgress && progress < pageEndProgress;
      page.renderOrder = Math.abs(curPage - i);

      const decs = this.decorationPairs[i];
      if (!decs || decs.length === 0) continue;

      const spreadStartProgress = (i - 0.75) * progressPerSegment;
      const spreadEndProgress = (i + 0.75) * progressPerSegment;
      const isVisible = progress > spreadStartProgress && progress < spreadEndProgress;

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
      });
    }
  }

  public handleResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  public dispose() {
    this.renderer.dispose();
    if (this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
    this.gui.destroy();
  }

  private _createPage(i: number, textureLoader: THREE.TextureLoader): THREE.Group {
    const pivot = new THREE.Group();
    const geometry = this._createRoundedBoxGeometry(config.pageWidth, config.pageHeight, config.pageDepth, 0.12, 64);

    const frontTexture = textureLoader.load(textures.pages[i]);
    frontTexture.repeat.set(0.5, 1);
    frontTexture.offset.set(0.5, 0);
    frontTexture.colorSpace = THREE.SRGBColorSpace;

    const backTexture = textureLoader.load(textures.pages[(i + 1) % config.numPages]);
    backTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.repeat.set(0.5, 1);

    // const normalTexture = textureLoader.load(textures.normalMap);

    // const materialConfig = {
    //   roughness: 0.3,
    //   metalness: 0.2,
    //   normalMap: normalTexture,
    //   normalScale: new THREE.Vector2(1, 3)
    // };

    const pageMesh = new THREE.Mesh(geometry, [
      new THREE.MeshStandardMaterial({ map: frontTexture }),
      new THREE.MeshStandardMaterial({ map: backTexture }),
      new THREE.MeshStandardMaterial({ map: frontTexture }),
      new THREE.MeshStandardMaterial({ map: backTexture }),
      new THREE.MeshStandardMaterial({ map: frontTexture }),
      new THREE.MeshStandardMaterial({ map: backTexture }),
    ]);
    pageMesh.position.x = config.pageWidth / 2;
    pivot.add(pageMesh);

    const pairs = this._createDecorations(i, textureLoader, pageMesh.position.z);
    pairs.forEach((pair) => {
      pivot.add(pair.front);
      this.pages[i - 1]?.add(pair.back);
    });
    this.decorationPairs[i] = pairs;
    pivot.rotation.y = i * config.rotationStep;
    return pivot;
  }

  private _createDecorations(i: number, textureLoader: THREE.TextureLoader, z: number): DecorationPair[] {
    const decorations = textures.decorations[i] || [];
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
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), 0),
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
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), config.pageWidth),
          new THREE.Plane(new THREE.Vector3(0, -1, 0), config.pageHeight / 2),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), config.pageHeight / 2)
        ].map(p => p.clone())
      }));
      back.position.set(config.pageWidth, decConfig.offset?.y || 0, z - (decConfig.offset?.z || 0));
      back.rotation.y = Math.PI;

      pairs.push({
        front,
        back,
        ...decConfig,
        localClipPlanes: [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)
        ]
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