import * as THREE from 'three';
import { config, assets } from '../config';

export type DecorationPair = {
  front: THREE.Mesh;
  back: THREE.Mesh;
  parallaxFactor: number;
  offset: { x: number; y: number; z: number };
};

export class PageBuilder {
  private textureLoader: THREE.TextureLoader;

  constructor (textureLoader: THREE.TextureLoader) {
    this.textureLoader = textureLoader;
  }

  public createPage(i: number): { page: THREE.Group; decorations: DecorationPair[] } {
    const pivot = new THREE.Group();

    const geometry = this._createRoundedBoxGeometry(
      config.pageWidth,
      config.pageHeight,
      config.pageDepth,
      0.12,
      64
    );

    const frontTexture = this.textureLoader.load(assets.pages[i]);
    frontTexture.repeat.set(0.5, 1);
    frontTexture.offset.set(0.5, 0);
    frontTexture.colorSpace = THREE.SRGBColorSpace;

    const backTexture = this.textureLoader.load(assets.pages[(i + 1) % config.numPages]);
    backTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.repeat.set(0.5, 1);

    const coverNormal = this.textureLoader.load(assets.normalMap.cover);
    const paperNormal = this.textureLoader.load(assets.normalMap.paper);

    const fNormalTexture = i === 0 ? coverNormal : paperNormal.clone();
    fNormalTexture.repeat.set(0.5, 1);
    fNormalTexture.offset.set(0.5, 0);

    const bNormalTexture = i === config.numPages - 1 ? coverNormal : paperNormal.clone();
    bNormalTexture.repeat.set(0.5, 1);

    const fMaterialConfig = {
      roughness: 0.4,
      metalness: 0,
      normalMap: fNormalTexture,
      normalScale: new THREE.Vector2(1, 3),
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
      new THREE.MeshStandardMaterial({ ...bMaterialConfig, map: backTexture }),
    ]);
    pageMesh.position.x = config.pageWidth / 2;
    pivot.add(pageMesh);

    const decorations = this._createDecorations(i, pageMesh.position.z);

    pivot.position.z = (config.numPages - i) * config.pageDepth;
    return { page: pivot, decorations };
  }

  private _createDecorations(i: number, z: number): DecorationPair[] {
    const decorations = assets.decorations[i] || [];
    const pairs: DecorationPair[] = [];
    const placeholderGeom = new THREE.PlaneGeometry(1, 1);

    decorations.forEach((decConfig) => {
      const scale = decConfig.scale ?? 1;

      const texture = this.textureLoader.load(decConfig.texture, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        const aspect = tex.image.width / tex.image.height;

        const targetHeight = config.pageHeight * 0.75 * scale;
        const targetWidth = targetHeight * aspect;

        front.geometry = new THREE.PlaneGeometry(targetWidth, targetHeight);
        back.geometry = new THREE.PlaneGeometry(targetWidth, targetHeight);
      });

      const front = new THREE.Mesh(placeholderGeom.clone(), new THREE.MeshStandardMaterial({
        map: texture, alphaTest: 0.01, transparent: true,
        clippingPlanes: [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), config.pageWidth - 0.015),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), 0.01),
          new THREE.Plane(new THREE.Vector3(0, -1, 0), config.pageHeight / 2),
          new THREE.Plane(new THREE.Vector3(0, 1, 0), config.pageHeight / 2)
        ].map(p => p.clone())

      }));
      front.position.set(-config.pageWidth, decConfig.offset?.y || 0, z + (decConfig.offset?.z || 0));

      const back = new THREE.Mesh(placeholderGeom.clone(), new THREE.MeshStandardMaterial({
        map: texture, alphaTest: 0.01, transparent: true,
        clippingPlanes: [
          new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0.01),
          new THREE.Plane(new THREE.Vector3(1, 0, 0), config.pageWidth - 0.015),
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
      });
    });

    return pairs;
  }

  private _createRoundedBoxGeometry(
    width: number,
    height: number,
    depth: number,
    radius: number,
    segments: number
  ): THREE.BoxGeometry {
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
