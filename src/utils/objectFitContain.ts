import * as THREE from 'three';

export type ObjectFitMode = 'scale' | 'uv';

interface ObjectFitContainOptions {
  mode?: ObjectFitMode;
}

/**
 * 模拟 CSS object-fit: contain
 */
export function applyObjectFitContain(
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>,
  texture: THREE.Texture,
  containerWidth: number,
  containerHeight: number,
  options: ObjectFitContainOptions = { mode: 'scale' }
) {
  console.log(texture);
  const imageWidth = texture.image.width;
  const imageHeight = texture.image.height;

  const containerRatio = containerWidth / containerHeight;
  const imageRatio = imageWidth / imageHeight;

  if (options.mode === 'scale') {
    let scaleX: number, scaleY: number;
    if (imageRatio > containerRatio) {
      scaleX = 1;
      scaleY = containerRatio / imageRatio;
    } else {
      scaleX = imageRatio / containerRatio;
      scaleY = 1;
    }
    mesh.scale.set(scaleX, scaleY, 1);
  } else if (options.mode === 'uv') {
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;

    if (imageRatio > containerRatio) {
      const newRepeatY = containerRatio / imageRatio;
      texture.repeat.set(1, newRepeatY);
      texture.offset.set(0, (1 - newRepeatY) / 2);
    } else {
      const newRepeatX = imageRatio / containerRatio;
      texture.repeat.set(newRepeatX, 1);
      texture.offset.set((1 - newRepeatX) / 2, 0);
    }
  }
}

