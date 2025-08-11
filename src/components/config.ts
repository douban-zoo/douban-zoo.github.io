
export function getBaseUrl() {
  try {
    const lang = navigator.language || '';
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const inCN = /^zh-CN/i.test(lang) || tz.includes('Shanghai') || tz.includes('Beijing');

    return inCN
      ? 'https://gcore.jsdelivr.net/gh/douban-zoo/douban-zoo.github.io@gh-pages/'
      : import.meta.env.BASE_URL;
  } catch {
    return import.meta.env.BASE_URL;
  }
}

export const asset = (path: string) => getBaseUrl() + path.replace(/^\/+/, '');

export const config = {
  numPages: 6,
  pageWidth: 2.4,
  pageHeight: 3,
  pageDepth: 0.02,
  rotationStep: 0.01,
  dragSensitivity: 0.15,
  snapDuration: 0.8,
  mediaPages: {
    '2': ['video', 'audio'],
  } as Record<string, ('video' | 'audio')[]>
};

export const assets = {
  audios: {
    '2': asset('audios/jojo.mp3'),
  } as Record<string, string>,
  videos: {
    '2': asset('videos/jojo-play.mp4'),
  } as Record<string, string>,
  icons: {
    video: asset('icons/video.png'),
    audio: asset('icons/audio.png'),
  },
  normalMap: asset('imgs/textures/paper-normal.png'),
  pages: [
    asset('imgs/bg/cover.png'),
    asset('imgs/bg/meidi.png'),
    asset('imgs/bg/jongjong.png'),
    asset('imgs/bg/pupu.png'),
    asset('imgs/bg/jongjong.png'),
    asset('imgs/bg/meidi.png'),
  ],
  decorations: [
    [],
    [
      { texture: asset('imgs/dec/meidi1.png'), parallaxFactor: 0.35, offset: { x: 3.2, y: -0.1, z: 0.016 }, scale: 1.22 },
      { texture: asset('imgs/dec/meidi2.png'), parallaxFactor: 0.20, offset: { x: 0.9, y: -0.33, z: 0.014 } },
    ],
    [
      { texture: asset('imgs/dec/jojo1.png'), parallaxFactor: 0.35, offset: { x: 2.74, y: -0.05, z: 0.014 }, scale: 1.28 },
      { texture: asset('imgs/dec/jojo2.png'), parallaxFactor: 0.2, offset: { x: 1.5, y: -0.15, z: 0.016 }, scale: 1.2 },
    ],
    [
      { texture: asset('imgs/dec/pupu1.png'), parallaxFactor: 0.29, offset: { x: 2.2, y: -0.1, z: 0.014 }, scale: 1.2 },
      { texture: asset('imgs/dec/pupu2.png'), parallaxFactor: 0.23, offset: { x: 1.4, y: 0.2, z: 0.016 }, scale: 0.9 },
    ],
    [
      { texture: asset('imgs/dec/jojo1.png'), parallaxFactor: 0.35, offset: { x: 2.74, y: -0.36, z: 0.014 } },
      { texture: asset('imgs/dec/jojo2.png'), parallaxFactor: 0.2, offset: { x: 1.5, y: -0.25, z: 0.016 } },
    ],
    [],
  ],
};

export const palette = {
  bg: [
    '#52AC6A',
    '#F4CEE8',
    '#A2D5FF',
    '#1CB8C7',
    '#A2D5FF',
    '#F4CEE8',
  ]
}