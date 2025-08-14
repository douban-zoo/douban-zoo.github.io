
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
  pageWidth: 2.5,
  pageHeight: 3,
  pageDepth: 0.02,
  dragSensitivity: 0.15,
  snapDuration: 0.8
};

export const pageIds = [
  'cover',
  'meidi',
  'jongjong',
  'pupu',
  'tianchengzi',
  'meidi'
]

export function getPageId(index: number) {
  return pageIds[index] || 'unknown';
}

export const assets = {
  media: [
    {},
    {
      audio: asset('audios/meidi.mp3'),
      video: asset('videos/meidi-eat.webm'),
      photo: 16,
    },
    {
      audio: asset('audios/jojo.m4a'),
      video: asset('videos/jojo-play.webm'),
      photo: 15,
    },
    {
      audio: asset('audios/pupu.m4a'),
      video: asset('videos/pupu-daze.webm'),
      photo: 17,
    },
    {
      audio: asset('audios/tianchengzi.m4a'),
      video: asset('videos/tianchengzi-eat.webm'),
      photo: 10,
    },
    {},
  ],
  icons: {
    video: asset('icons/video.png'),
    audio: asset('icons/audio.png'),
    photo: asset('icons/folder.png'),
  },
  normalMap: {
    cover: asset('imgs/textures/cover-normal.png'),
    paper: asset('imgs/textures/paper-normal.png'),
  },
  pages: [
    asset('imgs/bg/cover.png'),
    asset('imgs/bg/meidi.png'),
    asset('imgs/bg/jongjong.png'),
    asset('imgs/bg/pupu.png'),
    asset('imgs/bg/tianchengzi.png'),
    asset('imgs/bg/meidi.png'),
  ],
  decorations: [
    [],
    [
      { texture: asset('imgs/dec/meidi1.png'), parallaxFactor: 0.2, offset: { x: 2, y: -0.1, z: 0.016 }, scale: 1.25 },
      { texture: asset('imgs/dec/meidi2.png'), parallaxFactor: 0.1, offset: { x: 0.85, y: -0.05, z: 0.015 }, scale: 1.3 },
    ],
    [
      { texture: asset('imgs/dec/jojo1.png'), parallaxFactor: 0.35, offset: { x: 2.9, y: -0.025, z: 0.014 }, scale: 1.3 },
      { texture: asset('imgs/dec/jojo2.png'), parallaxFactor: 0.2, offset: { x: 1.5, y: -0.15, z: 0.016 }, scale: 1.2 },
    ],
    [
      { texture: asset('imgs/dec/pupu1.png'), parallaxFactor: 0.28, offset: { x: 2.2, y: -0.1, z: 0.014 }, scale: 1.2 },
      { texture: asset('imgs/dec/pupu2.png'), parallaxFactor: 0.23, offset: { x: 1.5, y: 0.2, z: 0.016 }, scale: 0.92 },
    ],
    [
      { texture: asset('imgs/dec/tianchengzi1.png'), parallaxFactor: 0.3, offset: { x: 2.8, y: -0.13, z: 0.016 }, scale: 1.21 },
      { texture: asset('imgs/dec/tianchengzi2.png'), parallaxFactor: 0.2, offset: { x: 1.4, y: -0.5, z: 0.014 }, scale: 0.9 },
    ],
    [],
  ],
};

export const palette = {
  bg: [
    '#52AC6A',
    '#F4CEE8',
    '#88C1EF',
    '#1CB8C7',
    '#D86D1A',
    '#F4CEE8',
  ]
}