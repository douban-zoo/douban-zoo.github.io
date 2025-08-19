
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
  'xuguanghan'
]

export const wikis = [
  '',
  `绝育帅气男狗，情绪稳定，心态良好，比起同类更喜欢人类，比起人类更喜欢食物类
在路上听到有人说自己可爱会迅速凑过去坐下等摸摸
吃过的东西包括：士力架，好丽友，玉米芯，玉米肠，鸡枞菌，生腊肉（两块），六婆辣椒面，护手霜（？），该名单持续增长中
喜欢有靠背的角落，喜欢安全感，讨厌水，讨厌下雨，讨厌柴犬（？）
偶尔会被柴犬无差别辱骂，但最好的朋友是一只小黑柴`,
  `角色：囧囧
阵营：混乱可爱（Chaotic Adorable）
职业：中华田园猫 Lv.6
属性：魅力 CHA：+2（不怕陌生人，除非个子太高）
敏捷 DEX：+3（迅速一溜烟躲进床底）
力量 STR：+1（梆梆响的猫猫拳）
感知 WIS：-1（读不懂空气，情绪感知弱）
智力 INT：+2（能掌握新的智力玩具和按钮）
体质 CON：+1（皮实小土猫）
技能：贴贴：熄灯后必跳上妈妈胸口咕噜噜，流口水概率35%。
守望：看见零食或游戏即将开始时，直接进入呼噜待机状态。
妈妈雷达：妈妈离开60秒后自动触发寻人模式。
玩偶模拟：高处跳下时，落地瞬间自动发出“哼唧”声。
智力判定：识别指令“亲亲”，但有50%概率假装执行以便逃脱。`,
  `几乎全勤打工的ESFJ产品狗
喜欢和每个与她对视的人类玩耍，对马杀鸡手法优异的人类格外青睐
喜欢吃公司（自由采摘的）植物和（下午茶专供的）水果
喜欢玩巡回和拔河，玩游戏全力以赴并且喜欢自己给自己打气
对自己的食物有超强的管理，每天晚上十点必须吃晚饭，吃完晚饭以后必须吃酸奶，吃完酸奶以后必须擦脸并吃一个奖励小零食`,
  `ESFJ小猫（仅限在家里）
  每天定时起床巡屋、定时索要除了主粮以外的冻干和罐头以及定时求摸头（不可低于10分钟）
  如果没有在准时看到食物，一般会登上置物架自取，从而展现出了惊人的咬合力，可空口叼起大概1kg的肉干。
不喜欢的乐队：Imagine Dragons（听到会展示出飞机耳，假装自己听不见，和听到大雨声表现一致）
上过两天班，因为不喜欢出门而成为高等游“猫”。`
  ,
  `许光汉
  618大促小狗
  曾用名阿北
  喜欢甜食和鸡肉
  生父不详所以腿比一般柴要长长长长
  下楼一圈就开嗨和主人一个体力
  被嘲笑独蛋大使但其实是半隐睾啦！
  目前已绝育成为忠实的姐妹团成员`
]

export function getPageId(index: number) {
  return pageIds[index] || 'unknown';
}

export const assets = {
  fonts:{
    simsun: asset('fonts/SimSun_Regular.json'),
    solitreo: asset('fonts/Solitreo_Regular.json'),
  },
  media: [
    {},
    {
      audio: asset('audios/meidi.mp3'),
      video: asset('videos/meidi-eat.webm'),
      photo: 17,
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
    {
      video: asset('videos/xgh.webm'),
      photo: 20,
    },
  ],
  icons: {
    video: asset('icons/video.png'),
    audio: asset('icons/audio.png'),
    photo: asset('icons/folder.png'),
  },
  textures: {
    'rainbow': asset('imgs/textures/rainbow.png'),
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
    asset('imgs/bg/xgh.png'),
  ],
  decorations: [
    [
      { texture: asset('imgs/dec/cover1.png'), parallaxFactor: 0.2, offset: { x: 1.04, y: -0.09, z: 0.016 }, scale: 1.29 },
      { texture: asset('imgs/dec/cover2.png'), parallaxFactor: 0.1, offset: { x: 1.15, y: -0.08, z: 0.015 }, scale: 1.28 },
    ],
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
    [
      { texture: asset('imgs/dec/xgh1.png'), parallaxFactor: 0.3, offset: { x: 2.85, y: -0.16, z: 0.014 }, scale: 1.52 },
      { texture: asset('imgs/dec/xgh2.png'), parallaxFactor: 0.15, offset: { x: 1.29, y: -0.07, z: 0.016 }, scale: 1.25 },
    ],
  ],
};

export const palette = {
  bg: [
    '#52AC6A',
    '#F4CEE8',
    '#88C1EF',
    '#1CB8C7',
    '#D86D1A',
    '#F468AF',
  ]
}