
import * as THREE from 'three';
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

  constructor (container: HTMLDivElement) {
    this.container = container;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 6);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.localClippingEnabled = true;

    this.container.appendChild(this.renderer.domElement);
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
      page.renderOrder = i;

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

        const pageMatrix = this.pages[i].matrixWorld.clone();
        // pair.front.material.clippingPlanes = pair.localClipPlanes.map((plane) => plane.clone().applyMatrix4(pageMatrix));
      });
    }
  }

  public handleResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  public dispose() {
    this.renderer.dispose();
    if (this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }

  private _createPage(i: number, textureLoader: THREE.TextureLoader): THREE.Group {
    const pivot = new THREE.Group();
    const geometry = this._createRoundedBoxGeometry(config.pageWidth, config.pageHeight, config.pageDepth, 0.1, 64);

    const frontTexture = textureLoader.load(textures.pages[i]);
    frontTexture.repeat.set(0.5, 1);
    frontTexture.offset.set(0.5, 0);
    frontTexture.colorSpace = THREE.SRGBColorSpace;

    const backTexture = textureLoader.load(textures.pages[(i + 1) % config.numPages]);
    backTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.repeat.set(0.5, 1);

    const pageMesh = new THREE.Mesh(geometry, [
      new THREE.MeshBasicMaterial({ map: frontTexture, }),
      new THREE.MeshBasicMaterial({ map: backTexture, }),
      new THREE.MeshBasicMaterial({ map: frontTexture, }),
      new THREE.MeshBasicMaterial({ map: backTexture, }),
      new THREE.MeshBasicMaterial({ map: frontTexture, transparent: true }),
      new THREE.MeshBasicMaterial({ map: backTexture, transparent: true }),
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
      const texture = textureLoader.load(decConfig.texture, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        const aspect = tex.image.width / tex.image.height;
        const targetHeight = config.pageHeight * 0.75;
        const targetWidth = targetHeight * aspect;
        front.geometry.dispose();
        front.geometry = new THREE.PlaneGeometry(targetWidth, targetHeight);
        back.geometry.dispose();
        back.geometry = new THREE.PlaneGeometry(targetWidth, targetHeight);
      });

      const front = new THREE.Mesh(placeholderGeom.clone(), new THREE.MeshBasicMaterial({
        map: texture, alphaTest: 0.01, transparent: true,
        clippingPlanes: [new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth), new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)].map(p => p.clone())
      }));
      front.position.set(-config.pageWidth, decConfig.offset.y || 0, z + decConfig.offset.z);

      const back = new THREE.Mesh(placeholderGeom.clone(), new THREE.MeshBasicMaterial({
        map: texture, alphaTest: 0.01, transparent: true,
        clippingPlanes: [new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0), new THREE.Plane(new THREE.Vector3(1, 0, 0), config.pageWidth)].map(p => p.clone())
      }));
      back.position.set(config.pageWidth, decConfig.offset.y || 0, z - decConfig.offset.z);
      back.rotation.y = Math.PI;

      pairs.push({ front, back, ...decConfig, localClipPlanes: [new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth), new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)] });
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
