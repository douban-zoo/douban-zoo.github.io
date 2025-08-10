
export const config = {
  numPages: 6,
  pageWidth: 2.4,
  pageHeight: 3,
  pageDepth: 0.02,
  rotationStep: 0.01,
  dragSensitivity: 0.15,
  snapDuration: 0.8,
};

export const textures = {
  pages: [
    '/imgs/bg-cover.png',
    '/imgs/bg-meidi.png',
    '/imgs/bg-jongjong.png',
    '/imgs/bg-meidi.png',
    '/imgs/bg-jongjong.png',
    '/imgs/bg-meidi.png',
  ],
  decorations: [
    [],
    [
      { texture: '/imgs/dec-meidi1.png', parallaxFactor: 0.35, offset: { x: 3.2, y: -0.2, z: 0.016 } },
      { texture: '/imgs/dec-meidi2.png', parallaxFactor: 0.25, offset: { x: 1.4, y: -0.35, z: 0.014 } },
    ],
    [
      { texture: '/imgs/dec-jojo1.png', parallaxFactor: 0.35, offset: { x: 2.74, y: -0.36, z: 0.014 } },
      { texture: '/imgs/dec-jojo2.png', parallaxFactor: 0.2, offset: { x: 1.5, y: -0.25, z: 0.016 } },
    ],
    [
      { texture: '/imgs/dec-meidi1.png', parallaxFactor: 0.35, offset: { x: 3.2, y: -0.2, z: 0.016 } },
      { texture: '/imgs/dec-meidi2.png', parallaxFactor: 0.25, offset: { x: 1.4, y: -0.35, z: 0.014 } },
    ],
    [
      { texture: '/imgs/dec-jojo1.png', parallaxFactor: 0.35, offset: { x: 2.74, y: -0.36, z: 0.014 } },
      { texture: '/imgs/dec-jojo2.png', parallaxFactor: 0.2, offset: { x: 1.5, y: -0.25, z: 0.016 } },
    ],
    [],
  ],
};
