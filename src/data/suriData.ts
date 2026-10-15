import type {
  NavLink,
  SocialLink,
  HeroData,
  LoreProfileData,
  ModelSpecsCreditsData,
  ScheduleHighlightsData,
  CharacterProfile,
  MotifItem,
  StoryChapter,
  MilestoneItem,
  GalleryItem,
  LoreFile,
  CoverItem,
  CreditGroup,
} from '../types';

export * from '../types';

// ============================================================================
// 1. NAVIGATION & SOCIAL LINKS
// ============================================================================

export const NAV_LINKS: NavLink[] = [
  { label: 'Overview', href: '#hero', badge: '01' },
  { label: 'Lore & Profile', href: '#lore', badge: '02' },
  { label: 'Model Specs', href: '#specs', badge: '03' },
  { label: 'Broadcast & Music', href: '#schedule', badge: '04' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'YouTube',
    label: 'Official Channel',
    url: 'https://www.youtube.com/@surimukeki',
    handle: '@surimukeki',
    color: '#FF0000',
  },
  {
    platform: 'X (Twitter)',
    label: 'Broadcast Updates',
    url: 'https://x.com/SuriMukeki',
    handle: '@SuriMukeki',
    color: '#1DA1F2',
  },
  {
    platform: 'Discord',
    label: 'Suri Solo Leveling',
    url: 'https://discord.gg/3ZMKCZzFBG',
    handle: 'Sureiya Community',
    color: '#5865F2',
  },
  {
    platform: 'Carrd',
    label: 'Official Info Hub',
    url: 'https://surimukeki.carrd.co/',
    handle: 'surimukeki.carrd.co',
    color: '#3AA8E8',
  },
  {
    platform: 'Facebook',
    label: 'Community Page',
    url: 'https://www.facebook.com/NotABadSlime.Hehe/',
    handle: 'NotABadSlime.Hehe',
    color: '#1877F2',
  },
  {
    platform: 'Marshmallow',
    label: 'Fan Q&A Letters',
    url: 'https://marshmallow-qa.com/surimukeki',
    handle: 'surimukeki',
    color: '#F472B6',
  },
];

// ============================================================================
// 2. HERO SECTION DATA (#hero)
// ============================================================================

export const HERO_CONTENT: HeroData = {
  badge: {
    status: 'SYSTEM ACTIVE // DIMENSION: CYBER-COURIER',
    message: 'Delivering good luck & warm smiles across the digital expanse',
  },
  title: 'SURI MUKEKI',
  japaneseTitle: '無敵・スリ // THE CELESTIAL CYBER-COURIER',
  tagline:
    'A reincarnated water-slime turned interdimensional messenger. Delivering heartfelt letters, electrifying stage energy, and cozy midnight broadcasts to lonely souls everywhere.',
  ctas: {
    primary: {
      label: 'Watch on YouTube',
      url: 'https://www.youtube.com/@surimukeki',
      variant: 'primary',
    },
    secondary: {
      label: 'Join Discord',
      url: 'https://discord.gg/3ZMKCZzFBG',
      variant: 'secondary',
    },
    tertiary: {
      label: 'Follow on X',
      url: 'https://x.com/SuriMukeki',
      variant: 'glass',
    },
  },
  stats: [
    {
      value: '51,400+',
      label: 'Sureiya Community',
      detail: 'Dedicated fans & subscribers across the globe',
    },
    {
      value: 'Model 3.0',
      label: 'Active Staging Avatar',
      detail: 'Illustrated by T_blence & rigged by Sophiel',
    },
    {
      value: '155 cm / 40 kg',
      label: 'Slime Form Matrix',
      detail: 'Humanoid water slime with lightning duality',
    },
  ],
  trustBar: {
    label: 'Proudly independent VTuber connecting communities across Vietnam and worldwide',
    tags: [
      '#Sureiya / #Slayer',
      'Independent VTuber',
      'SEAblings',
      '3D ASMR',
      'Live2D Model 3.0',
    ],
  },
  communityTags: ['#Sureiya', '#SuriArt', '#Suristream', 'Independent VTuber'],
  characterImage: '/images/characters/suri_cutout_transparent.png',
};

export const HERO_DATA = HERO_CONTENT;

// ============================================================================
// 3. LORE & PROFILE SECTION DATA (#lore)
// ============================================================================

export const LORE_PROFILE_CONTENT: LoreProfileData = {
  sectionTag: '// CLASSIFIED DOSSIER & ORIGIN RECORD',
  headline: 'The Slime, The Letter, & The Electric Alter',
  leadParagraph:
    'Awakening between worlds without mortal memories, an unassuming water slime gained consciousness. Yearning to share laughter and the sweetness of pastries with humanity, she adopted the form of a gentle girl, setting off on a boundless journey across cyberspace as a celestial mail courier.',
  dossierCards: [
    {
      code: 'REC-001 // GENESIS',
      title: 'Reincarnation & The Sealed Note',
      category: 'CANONICAL ORIGIN',
      summary: 'The unexpected transformation from simple water slime to humanoid courier.',
      body: [
        'In April 2021, a harmless water slime reawakened in a realm adjacent to humanity. Discovering the mortal shell of a girl who had departed the world, the slime took her form to experience human life.',
        "In her uniform pocket lay a single folded note inscribed: 'Chúc mừng sinh nhật Suri' and signed with a solitary letter: 'W'. To honor this mysterious gift, she adopted the name Suri and debuted as a Virtual YouTuber.",
      ],
      accent: 'cyan',
    },
    {
      code: 'REC-002 // DUALITY',
      title: 'Irus: The Lightning Sovereign',
      category: 'ELEMENTAL ALTER EGO',
      summary: 'The twin spark of thunder and ancient sovereign memories.',
      body: [
        'Reincarnation fractured her essence into two complementary poles: Suri, the gentle and soothing water slime, and Irus, a fierce lightning slime carrying the soul of an ancient ruler sealed away for 300 years.',
        'Rather than conflict, the two personas harmonized: Suri provides warm comfort and acoustic melodies, while Irus unleashes high-octane power vocals and competitive gaming prowess.',
      ],
      accent: 'violet',
    },
    {
      code: 'REC-003 // MISSION',
      title: 'The Cyber-Courier Protocol',
      category: 'ACTIVE MOTIF',
      summary: 'Delivering warmth and lost letters across virtual coordinates.',
      body: [
        'Equipped with her tailored postal cap, gold-buttoned uniform with four-leaf clover embroidery, and a vintage leather satchel, Suri delivers emotional letters and sweet surprises accompanied by her winged fox mascot.',
        'Her courier bicycle cuts through digital barriers, bringing encouragement to late-night viewers across the world.',
      ],
      accent: 'amber',
    },
  ],
  profileAttributes: [
    { label: 'Full Name', value: 'Suri Mukeki (無敵・スリ / Mukeki Suri)' },
    { label: 'Species', value: 'Water Slime (Humanoid) / Lightning Alter (Irus)' },
    { label: 'Debut Date', value: 'April 17, 2021' },
    { label: 'Birthday', value: 'October 30 (Scorpio)' },
    { label: 'Height & Weight', value: "155 cm (5'1\") / 40 kg" },
    { label: 'Languages', value: 'Vietnamese (Native), English, Japanese' },
    { label: 'Fanbase Name', value: 'Sureiya / Slayer (スレイヤー)' },
    { label: 'Representative Emojis', value: '🍮 🦋 ⚡ ✉️ 🌸' },
  ],
  personalityTags: [
    'Water Slime Core',
    'Celestial Courier',
    'Lightning Alter',
    'Chaotic Cozy',
    'Night-Owl Singer',
    'Sweet-Tooth Addict',
    'Binaural Healer',
  ],
  trivia: [
    {
      title: 'Sweet Tooth Viscosity',
      fact: 'Can consume unlimited quantities of egg pudding and caramel flan without changing her liquid density.',
      icon: '🍮',
    },
    {
      title: 'Ironic Phobia',
      fact: 'Despite sharing a soul with the lightning monarch Irus, Suri is terrified of real thunderstorms, cockroaches, and spiders.',
      icon: '⚡',
    },
    {
      title: 'Slime Hairpin Micro-Core',
      fact: 'The aquatic blue slime clip in her hair is a living reservoir of pure spring water that glows softly in the dark.',
      icon: '💧',
    },
    {
      title: 'Courier Bike Specs',
      fact: 'Her red postal bike is equipped with high-torque anti-gravity stabilizers for gliding up digital neon hills.',
      icon: '🚲',
    },
  ],
  quote:
    '“Dù là một con slime nhỏ bé trôi dạt giữa hai thế giới, mình vẫn muốn hát, muốn cười và nướng những chiếc bánh ngọt ngào nhất cùng các bạn!”',
  irusAsset: '/images/characters/irus_alter_full.webp',
  suriAsset: '/images/characters/suwi_courier_portrait.png',
};

// Aliases for compatibility
LORE_PROFILE_CONTENT.dossiers = LORE_PROFILE_CONTENT.dossierCards;
LORE_PROFILE_CONTENT.attributes = LORE_PROFILE_CONTENT.profileAttributes;

export const LORE_DATA = LORE_PROFILE_CONTENT;

// ============================================================================
// 4. 3D MODEL SPECS & ARTISAN CREDITS DATA (#specs)
// ============================================================================

export const MODEL_SPECS_CREDITS_CONTENT: ModelSpecsCreditsData = {
  sectionTag: '// TECHNICAL TELEMETRY & ARTISAN CREDITS',
  headline: 'Model 3.0 Architecture & Staging Rig',
  description:
    'Engineered for fluid tracking performance and emotive stage broadcasts. Features high-density physics chains, custom toon lighting, and dual expression toggles.',
  specs: [
    {
      category: 'GEOMETRY',
      value: '68,400',
      label: 'Polygon Density (112,800 Triangles)',
      detail: 'Clean quad-dominant topology optimized for real-time deformation and facial tracking.',
    },
    {
      category: 'EXPRESSIONS',
      value: '142',
      label: 'Facial Visemes & ARKit Blendshapes',
      detail: 'Full iOS ARKit eye tracking, lip-sync phonemes, cheek puffs, teary eyes, and star pupils.',
    },
    {
      category: 'PHYSICS',
      value: '38 Chains',
      label: 'Dynamic SpringBone & Inertia Nodes',
      detail: 'Secondary motion for twin braids, hair ribbons, courier satchel straps, and inner slime droplet.',
    },
    {
      category: 'MATERIALS',
      value: '12 Slots',
      label: 'Custom Toon & Rimlight Shaders',
      detail: 'PBR metallic buttons, silk-matte cloth textures, refractive eye crystals, and emissive slime accents.',
    },
  ],
  features: [
    {
      title: 'Intellectual Glasses Toggle',
      description: 'Seamlessly switch between her signature round intellectual frames and her sparkling, open-eyed expression.',
    },
    {
      title: 'Heterochromia Eye Crystals',
      description: 'Custom diamond-pupil amber gold iris on the right, and four-point star-pupil aquatic cyan iris on the left.',
    },
    {
      title: 'Four-Leaf Clover Uniform Embroidery',
      description: 'Detailed embroidery accents on lapels and courier satchel symbolizing good luck and angel wings.',
    },
    {
      title: 'Multi-Platform Staging Compatibility',
      description: 'Integrated with VMC Protocol for Warudo 3D concerts, VRChat PC staging, and Live2D Cubism runtime.',
    },
  ],
  credits: [
    {
      role: 'CHARACTER DESIGN & LEAD ILLUSTRATOR (PAPA)',
      title: 'Master Visuals & Model 3.0 Art',
      artist: 'T_blence (Turbulence)',
      handle: '@T_blence',
      url: 'https://twitter.com/T_blence',
      notes: 'Creator of Model 3.0 and Model 2.0 key visuals, established the modern Suri aesthetic.',
    },
    {
      role: 'LIVE2D RIGGING & KINEMATICS (MAMA)',
      title: 'Model 3.0 Motion & Expression Engineering',
      artist: 'Sophiel',
      handle: '@Sophielpaka',
      url: 'https://twitter.com/Sophielpaka',
      notes: 'Engineered 140+ facial blendshapes, natural breathing cycles, and multi-axis physics.',
    },
    {
      role: 'COURIER COSTUME & CONCEPT DESIGN',
      title: 'Letter Courier & Clover Uniform Design',
      artist: 'Hare_ta06',
      handle: '@Hare_ta06',
      notes: "Author of the official 'Costume Detailing Materials' turnaround sheet and courier motifs.",
    },
    {
      role: 'ORIGINAL FOUNDATIONAL ARTISTS',
      title: 'Model 1.0 Genesis & Rigging',
      artist: 'kcomorebi (Art) & Truong Thanh Tan (Rig)',
      handle: '@kcomorebi',
      notes: 'Designed and rigged the original debut model launched on April 17, 2021.',
    },
  ],
  glassesToggle: {
    withGlasses: '/images/characters/suri_cutout_transparent.png',
    noGlasses: '/images/characters/suri_model3_noglasses.webp',
    label: 'Model 3.0 Expression Toggle',
  },
  costumeSheet: {
    image: '/images/gallery/costume_detailing_materials.png',
    title: 'Official Costume Detailing Materials',
    description: 'Turnaround sheets and materials engineering notes by @Hare_ta06',
  },
};

// Aliases for compatibility
MODEL_SPECS_CREDITS_CONTENT.telemetry = MODEL_SPECS_CREDITS_CONTENT.specs;

export const SPECS_DATA = MODEL_SPECS_CREDITS_CONTENT;

// ============================================================================
// 5. SCHEDULE & STREAM HIGHLIGHTS DATA (#schedule)
// ============================================================================

export const SCHEDULE_HIGHLIGHTS_CONTENT: ScheduleHighlightsData = {
  sectionTag: '// BROADCAST MATRIX & MEDIA ARCHIVE',
  headline: 'Weekly Stream Routine & Cover Highlights',
  timezone: 'ICT (UTC+7) // Broadcast Hub',
  schedule: [
    {
      day: 'Tuesday',
      time: '20:00 ICT',
      title: 'Cyber-Courier Gaming Night',
      category: 'COMPETITIVE GAMING',
      badge: 'LIVE FPS / RPG',
      description: 'Apex Legends, Valorant, or indie story games with high-energy chatter and viewer squads.',
    },
    {
      day: 'Thursday',
      time: '20:30 ICT',
      title: 'Marshmallow Mail & Cozy Free Talk',
      category: 'COMMUNITY INTERACTION',
      badge: 'FAN LETTERS',
      description: 'Unboxing Marshmallow questions, reading heart-to-heart fan mail, and casual late-night reflections.',
    },
    {
      day: 'Friday',
      time: '21:00 ICT',
      title: 'Midnight J-Pop & Vocal Lounge',
      category: 'LIVE SINGING',
      badge: 'SIGNATURE VOCALS',
      description: 'Soulful acoustic covers, J-Pop anthems, and spontaneous karaoke requests until midnight.',
    },
    {
      day: 'Saturday',
      time: '21:30 ICT',
      title: '3D Binaural ASMR & Slime Therapy',
      category: 'IMMERSIVE AUDIO',
      badge: '3D BINAURAL',
      description: 'KU100 binaural microphone relaxation, water droplet soundscapes, and calming whisper therapy.',
    },
    {
      day: 'Sunday',
      time: '19:30 ICT',
      title: 'Weekly Debrief & Community Showcase',
      category: 'WEEKLY WRAP-UP',
      badge: 'FANART & NEWS',
      description: 'Reviewing weekly #SuriArt fan submissions, scheduling the week ahead, and chill party games.',
    },
  ],
  covers: [
    {
      id: 'king',
      title: 'KING',
      artist: 'Kanaria',
      youtubeId: 'a8S1xhjh2e4',
      badge: 'SIGNATURE VOCAL',
      sweetDrink: 'Royal Sparkling Peach Tea 👑',
      description: "A commanding and sharp vocal performance showcasing Suri's authoritative range and royal energy.",
      releaseDate: '20 / 11 / 2021',
      originalArtist: 'Kanaria',
    },
    {
      id: 'yoru-ni-kakeru',
      title: 'Yoru ni Kakeru (夜に駆ける)',
      artist: 'YOASOBI',
      youtubeId: 'cN9evcBtnjo',
      badge: 'FAN FAVORITE',
      sweetDrink: 'Midnight Moonlight Berry Smoothie 🍓',
      description: 'High-speed J-Pop hit delivered with emotive breath control and sparkling youthful cadence.',
      releaseDate: '09 / 04 / 2022',
      originalArtist: 'YOASOBI',
    },
    {
      id: 'nang-tho',
      title: 'Nàng Thơ',
      artist: 'Hoàng Dũng',
      youtubeId: 'hOCt6VYIYUk',
      badge: 'ACOUSTIC BALLAD',
      sweetDrink: 'Warm Honey Chamomile Brew 🌼',
      description: 'A deeply tender Vietnamese ballad sung with gentle, acoustic warmth that soothes the heart.',
      releaseDate: '10 / 06 / 2021',
      originalArtist: 'Hoàng Dũng',
    },
    {
      id: 'renai-circulation',
      title: 'Renai Circulation (恋愛サーキュレーション)',
      artist: 'Hanazawa Kana',
      youtubeId: 'tytmMA1YKwU',
      badge: 'KAWAII CLASSIC',
      sweetDrink: 'Brown Sugar Boba Flan Milk 🍮',
      description: 'An irresistible kawaii classic packed with playful rhythms and endearing charm.',
      releaseDate: '24 / 05 / 2021',
      originalArtist: 'Hanazawa Kana',
    },
    {
      id: 'only-love',
      title: 'Only Love',
      artist: 'Trademark',
      youtubeId: 'is6t-GzkyMk',
      badge: 'DEBUT COVER',
      sweetDrink: 'First Warm Vanilla Latte ☕',
      description: "Suri's historical pre-debut cover from April 12, 2021 — her very first gift to the world.",
      releaseDate: '12 / 04 / 2021',
      originalArtist: 'Trademark',
    },
    {
      id: 'bocca-della-verita',
      title: 'Bocca della Verità (ボッカデラベリタ)',
      artist: 'Hiiragi Kirai',
      youtubeId: 'bw9Y9Ht-kVA',
      badge: 'DARK SPARK',
      sweetDrink: 'Electric Blueberry Lightning Soda ⚡',
      description: 'A fierce showcase of her Irus alter persona, channeling chaotic electric energy and rapid vocals.',
      releaseDate: '09 / 04 / 2022',
      originalArtist: 'Hiiragi Kirai',
    },
  ],
};

// Aliases for compatibility
SCHEDULE_HIGHLIGHTS_CONTENT.routine = SCHEDULE_HIGHLIGHTS_CONTENT.schedule;

export const SCHEDULE_DATA = SCHEDULE_HIGHLIGHTS_CONTENT;

// ============================================================================
// 6. LEGACY SURI_DATA & ARCHIVE EXPORTS (Strictly Validated & Cleaned)
// ============================================================================

export const SURI_DATA: CharacterProfile = {
  codeName: 'CAFE_SPECIMEN_001 // SURI_MUKEKI',
  name: 'Suri Mukeki',
  displayName: 'SURI MUKEKI',
  japaneseName: '無敵・スリ',
  alias: 'The Celestial Courier & Reincarnated Water Slime',
  title: 'Nàng Slime Thủy Tinh & Sứ Giả Thiên Thần Dị Giới',
  subtitle: 'CYBER-COURIER SHOWCASE // OFFICIAL VTUBER DOSSIER',
  quote:
    '“Dù là một con slime nhỏ bé trôi dạt giữa hai thế giới, mình vẫn muốn hát, muốn cười và nướng những chiếc bánh ngọt ngào nhất cùng các bạn!”',
  cafeWelcome:
    'Chào mừng bạn ghé thăm tiệm trà bánh dị giới của Suri Mukeki! Nơi những giọt nước slime và tia sấm sét ngọt lành luôn sẵn sàng sưởi ấm tâm hồn bạn.',
  profile: {
    species: 'Water Slime (Humanoid Form) / Lightning Slime Alter (Irus)',
    birthday: '30 / 10',
    height: "155 cm (5'1\")",
    weight: '40 kg',
    zodiac: 'Thiên Yết (Scorpio)',
    debutDate: '17 / 04 / 2021',
    fanName: 'Sureiya / Slayer',
    representativeEmojis: '🍮 🦋 ⚡ ✉️ 🌸',
    favoriteTreats: ['Bánh ngọt (Cake)', 'Trà sữa (Milk Tea)', 'Ngủ nướng (Sleep)', 'Bánh Flan (Caramel Flan)'],
    content: ['Gaming', 'Free Talk / Marshmallow', 'Singing / Covers', '3D ASMR'],
    languages: ['Tiếng Việt (Bản ngữ)', 'English', '日本語 (Sơ cấp)'],
    hashtags: {
      general: '#SuriMukeki',
      live: '#Suristream',
      fanart: '#SuriArt',
      community: '#Sureiya',
    },
  },
  assets: {
    logo: '/images/icons/logo_suri.png',
    heroCutout: '/images/characters/suri_cutout_transparent.png',
    heroCutoutNoGlasses: '/images/characters/suri_model3_noglasses.webp',
    daisyCrown: '/images/characters/suri_daisy_crown.png',
    doodleChibi: '/images/gallery/suri_doodle_color.png',
    costumeSheet: '/images/gallery/costume_detailing_materials.png',
    irusFull: '/images/characters/irus_alter_full.webp',
    irusSheet: '/images/gallery/irus_reference_sheet.webp',
    model2: '/images/characters/suri_model2.webp',
    debutModel: '/images/characters/suri_debut_model.webp',
    portrait: '/images/characters/suri_portrait.webp',
  },
  officialLinks: {
    youtube: 'https://www.youtube.com/@surimukeki',
    twitter: 'https://x.com/SuriMukeki',
    discord: 'https://discord.gg/3ZMKCZzFBG',
    carrd: 'https://surimukeki.carrd.co/',
    marshmallow: 'https://marshmallow-qa.com/surimukeki',
    facebook: 'https://www.facebook.com/NotABadSlime.Hehe/',
  },
};

export const MOTIFS_DATA: MotifItem[] = [
  {
    id: 'sovereign',
    name: 'Model 3.0 Sweet Sovereign',
    subtitle: 'VIOLET TARO & CARAMEL ELEGANCE',
    flavor: 'Hương vị Khoai Môn & Sốt Caramel Quý Phái',
    badge: 'CURRENT ACTIVE MODEL',
    image: '/images/characters/suri_cutout_transparent.png',
    highlight: 'Biểu tượng: Kính gọng tri thức, đầm dạ hội tím pastel và chiếc nơ bướm mềm mại',
    description:
      'Tạo hình Model 3.0 đỉnh cao ra mắt năm 2023 bởi họa sĩ T_blence và rigger Sophiel. Vừa giữ nét tinh nghịch của một bé slime, vừa mang thần thái đài các, ấm cúng của cô chủ tiệm cafe dễ thương.',
    element: 'taro',
  },
  {
    id: 'daisy',
    name: 'Daisy Crown & Spring Meadow',
    subtitle: 'FLOWER CROWN & SUNNY PASTURE',
    flavor: 'Hương Trà Hoa Cúc Mật Ong Ngọt Mát',
    badge: 'SPECIAL SPRING ART',
    image: '/images/characters/suri_daisy_crown.png',
    highlight: 'Biểu tượng: Vòng hoa cúc trắng trên mái tóc bồng bềnh và nụ cười rạng rỡ',
    description:
      'Khoảnh khắc bình yên của Suri giữa đồng cỏ ngập tràn hoa dại. Khi bỏ lại những âu lo thường nhật, Suri đón nhận ánh nắng ấm và đan những vòng hoa gửi tặng cộng đồng Sureiya.',
    element: 'pudding',
  },
  {
    id: 'irus',
    name: 'Irus (Lightning Alter)',
    subtitle: 'ELECTRIC BERRY & SPARK SODA',
    flavor: 'Hương Soda Dâu Sủi Bọt Tia Chớp',
    badge: 'CANONICAL ALTER FORM',
    image: '/images/characters/irus_alter_full.webp',
    highlight: 'Biểu tượng: Năng lượng sấm sét cuồng nhiệt, phong cách thể thao neon cá tính',
    description:
      'Bản thể song trùng Irus ra mắt vào tháng 10 năm 2021. Trái ngược với nét dịu dàng êm mát của nước, Irus sở hữu nguồn năng lượng sấm sét sắc sảo và ý chí kiên cường của một vị vua đã vượt qua 300 năm phong ấn.',
    element: 'berry',
  },
  {
    id: 'doodle',
    name: 'Chibi Slime Doodles',
    subtitle: 'MINI JELLY PUDDING CHIBI',
    flavor: 'Hương Bánh Flan Trứng Sữa Núng Nính',
    badge: 'COMMUNITY CHIBI ART',
    image: '/images/gallery/suri_doodle_color.png',
    highlight: 'Biểu tượng: Những biểu cảm chibi nhí nhảnh, núng nính như giọt thạch sữa',
    description:
      'Bộ doodle màu sắc ghi lại những khoảnh khắc đời thường vui nhộn của Suri trong các buổi livestream chơi game, ăn bánh và trò chuyện rôm rả thâu đêm suốt sáng.',
    element: 'mint',
  },
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    chapterNumber: 'TẬP I',
    title: 'Chiếc Bánh Flan Đầu Tiên Nơi Nhân Thế',
    subtitle: 'The Genesis of the Translucent Water Slime',
    leadQuote: '“Ta không sinh ra dưới hình hài hoàn hảo của con người, nhưng trái tim này rung động trước hương thơm ngọt ngào của trần gian.”',
    provenance: 'DOCUMENTED_LORE',
    paragraphs: [
      'Trong dòng chảy bất tận giữa các chiều không gian, có một linh hồn nhỏ bé tỉnh giấc trong thân xác của loài slime hệ nước. Không có quyền năng hủy diệt, không mang ký ức kiêu hùng, con slime ấy chỉ mang một niềm hiếu kỳ ngây thơ về thế giới con người.',
      'Vô tình bắt gặp hình bóng của một thiếu nữ nơi nhân gian, con slime nhận ra rằng nếu giữ nguyên thể lỏng trong suốt, nó sẽ mãi mãi chỉ là một lữ khách cô độc chẳng thể chuyện trò hay nếm thử vị ngọt của những chiếc bánh thơm. Nó quyết định biến chuyển hình dạng, mượn lấy diện mạo đáng yêu để cất lên tiếng nói đầu tiên.',
      'Và từ đó, cái tên Suri Mukeki bắt đầu vang lên như một lời chào ngập ngừng nhưng ngập tràn ấm áp gửi tới thế gian.',
    ],
    footerNote: 'Trích xuất hồ sơ khởi nguyên // Debut ngày 17.04.2021',
    illustration: '/images/characters/suri_cutout_transparent.png',
    accentColor: 'taro',
  },
  {
    chapterNumber: 'TẬP II',
    title: 'Tia Chớp Irus & Vị Soda Dị Giới',
    subtitle: 'The Twin Spark of Thunder and Water',
    leadQuote: '“Nếu nước là vị trà thanh mát dịu êm, thì sấm sét chính là ngụm soda sủi bọt thắp sáng đêm đen.”',
    provenance: 'DOCUMENTED_LORE',
    paragraphs: [
      'Số mệnh không chỉ dừng lại ở sự tĩnh lặng của nước. Khi chuyển sinh, linh hồn ấy đã tách thành hai nửa nguyên tố: một Suri dịu dàng hệ nước, và một Irus uy dũng mang nguyên tố sấm sét.',
      'Hai cá tính, hai phong cách, nhưng cùng chia sẻ tình cảm dành cho cộng đồng Slayer. Những buổi stream song ca hay màn biến hóa bất ngờ giữa Suri và Irus luôn là gia vị kích thích mọi giác quan.',
    ],
    footerNote: 'Hồ sơ bản thể song trùng // Ra mắt 12.10.2021',
    illustration: '/images/characters/irus_alter_full.webp',
    accentColor: 'berry',
  },
  {
    chapterNumber: 'TẬP III',
    title: 'Model 3.0 & Vương Quốc Bánh Ngọt Trưởng Thành',
    subtitle: 'The Sovereign Evolution of 2023',
    leadQuote: '“Từng chiếc nơ, từng viền ren không chỉ là y phục mới, mà là minh chứng cho tình yêu của Slayer đã nuôi lớn linh hồn này.”',
    provenance: 'DOCUMENTED_LORE',
    paragraphs: [
      'Năm 2023 đánh dấu bước ngoặt trưởng thành vượt bậc với Model 3.0 do papa T_blence và mama Sophiel tạo tác. Không còn là cô bé slime bỡ ngỡ ngày nào, Suri khoác lên mình bộ cánh tím hoàng gia tinh tế, đeo gọng kính tri thức và nụ cười tự tin rạng rỡ.',
      'Model 3.0 với khả năng biểu cảm phong phú, chuyển động mượt mà đến từng sợi tóc đã cùng Suri chinh phục những sân khấu âm nhạc lớn hơn, những cột mốc đăng ký mới và mở rộng vòng tay chào đón thêm nhiều khách quý đến với tiệm cafe dị giới.',
    ],
    footerNote: 'Biên niên sử tiến hóa // Model 3.0 ra mắt 21.01.2023',
    illustration: '/images/characters/suri_model3.webp',
    accentColor: 'pudding',
  },
];

export const TIMELINE_DATA: MilestoneItem[] = [
  {
    date: '12 / 04 / 2021',
    year: '2021',
    title: 'Khúc Ca Khởi Đầu "Only Love"',
    category: 'MUSIC',
    badge: 'FIRST COVER',
    description: 'Bản cover đầu tiên được phát hành, mở ra hành trình âm nhạc của nàng slime.',
    sourceNote: 'Cột mốc âm nhạc chính thức',
    stickerEmoji: '🎵',
  },
  {
    date: '17 / 04 / 2021',
    year: '2021',
    title: 'Debut Chính Thức Model 1.0',
    category: 'DEBUT',
    badge: 'GENESIS DEBUT',
    description: 'Livestream ra mắt chính thức với diện mạo slime nguyên bản do kcomorebi minh họa và Truong Thanh Tan rigging.',
    sourceNote: 'Ngày sinh nhật VTuber của Suri',
    stickerEmoji: '✨',
  },
  {
    date: '12 / 10 / 2021',
    year: '2021',
    title: 'Irus on the Mic - Bản Thể Sấm Sét',
    category: 'MODEL',
    badge: 'ALTER FORM',
    description: 'Bản thể song trùng Irus với phong cách sấm sét cá tính chính thức chào sân.',
    sourceNote: 'Tiêu đề stream debut Irus',
    stickerEmoji: '⚡',
  },
  {
    date: '25 / 05 / 2022',
    year: '2022',
    title: 'Model 2.0: Diện Mạo Mới Vị Vua Năm Xưa',
    category: 'MODEL',
    badge: 'EVOLUTION 2.0',
    description: 'Nâng cấp tạo hình Model 2.0 đánh dấu sự hợp tác với họa sĩ Turbulence.',
    sourceNote: 'Model 2.0 reveal stream',
    stickerEmoji: '👑',
  },
  {
    date: '21 / 01 / 2023',
    year: '2023',
    title: 'Model 3.0 "Suri Hàng Hiệu" Cập Bến',
    category: 'MODEL',
    badge: 'MASTER MODEL 3.0',
    description: 'Tuyệt tác tạo hình hiện tại với gọng kính tri thức, đầm tím quý phái do T_blence minh họa và Sophiel rigging.',
    sourceNote: 'Model 3.0 reveal stream',
    stickerEmoji: '💜',
  },
  {
    date: '2024 - Hiện Tại',
    year: '2024',
    title: 'Mái Nhà 51,400+ Thành Viên Slayer',
    category: 'MILESTONE',
    badge: 'COMMUNITY',
    description: 'Tiệm cafe dị giới ngày càng đông vui với hàng chục ngàn lữ khách ghé thăm mỗi tuần.',
    sourceNote: 'Cột mốc kênh YouTube',
    stickerEmoji: '🍮',
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'suri_art_25',
    title: 'Chuyến Bay Giao Thư (Art #25)',
    category: 'Official Artwork',
    badge: 'KEY ARTWORK',
    image: '/images/characters/suri_art_25.png',
    creator: 'Official Artwork #25',
    year: '2024',
    description: 'Suri bay lượn giữa bầu trời xanh thẳm, mang theo những lá thư chan chứa yêu thương cùng mascot cáo thiên thần.',
    rotationClass: '-rotate-1',
  },
  {
    id: 'suri_daisy',
    title: 'Daisy Angel & Cánh Đồng Hoa Cúc',
    category: 'Official Artwork',
    badge: 'MASTER ILLUSTRATION',
    image: '/images/characters/suri_daisy_crown.png',
    creator: 'Special Masterwork',
    year: '2023',
    description: 'Nụ cười tỏa nắng của Suri dưới vòng hoa cúc trắng tinh khôi và bồ câu trắng giữa đồng cỏ thanh bình.',
    rotationClass: 'rotate-1',
  },
  {
    id: 'model3_noglasses',
    title: 'Model 3.0 Không Gọng Kính',
    category: 'Model 3.0',
    badge: 'EXPRESSION VARIANT',
    image: '/images/characters/suri_model3_noglasses.webp',
    creator: 'T_blence & Sophiel',
    year: '2023',
    description: 'Biểu cảm ngọt ngào khi Suri tạm gác lại cặp kính tri thức, để lộ đôi mắt lấp lánh ánh sao.',
    rotationClass: '-rotate-2',
  },
  {
    id: 'model3_full',
    title: 'Model 3.0 Dáng Đứng Toàn Thân',
    category: 'Model 3.0',
    badge: 'ACTIVE MODEL',
    image: '/images/characters/suri_model3.webp',
    creator: 'T_blence & Sophiel',
    year: '2023',
    description: 'Tạo hình đỉnh cao thể hiện trọn vẹn sự thanh lịch, quý phái của đầm dạ hội tím và nơ bướm mềm mại.',
    rotationClass: 'rotate-2',
  },
  {
    id: 'doodle_chibi',
    title: 'Tập Hợp Chibi Đời Thường (Doodle Color)',
    category: 'Chibi & Doodles',
    badge: 'KAWAII COLLECTION',
    image: '/images/gallery/suri_doodle_color.png',
    creator: 'Official Chibi Art',
    year: '2024',
    description: 'Những nét vẽ chibi ngộ nghĩnh ghi lại từng biểu cảm đáng yêu: ăn bánh, ngủ nướng, ngạc nhiên và cười tít mắt.',
    rotationClass: '-rotate-2',
  },
  {
    id: 'costume_sheet',
    title: 'Bản Vẽ Chi Tiết Phụ Kiện & Y Phục',
    category: 'Design Sheets',
    badge: 'COSTUME DETAILS',
    image: '/images/gallery/costume_detailing_materials.png',
    creator: '@Hare_ta06',
    year: '2024',
    description: 'Bản vẽ thiết kế kỹ thuật phân tích kết cấu nơ áo, viền ren, gọng kính và chất liệu vải của trang phục Model 3.0.',
    rotationClass: 'rotate-1',
  },
  {
    id: 'demo_showcase',
    title: 'Bản Phác Thảo Demo Showcase',
    category: 'Design Sheets',
    badge: 'DEMO SPEC',
    image: '/images/gallery/suri_demo_showcase.png',
    creator: 'Official Demo Render',
    year: '2023',
    description: 'Góc nhìn phối cảnh trình diễn toàn diện các góc cạnh của nhân vật trên phông nền thiết kế.',
    rotationClass: '-rotate-1',
  },
  {
    id: 'comic_delivery',
    title: 'Nhật Ký Ngày Đưa Thư (4-Panel Comic)',
    category: 'Design Sheets',
    badge: 'COMIC DIARY',
    image: '/images/gallery/suri_comic_delivery.png',
    creator: 'Official Manga Story',
    year: '2023',
    description: 'Truyện tranh ngắn 4 khung hình ghi lại một ngày rong ruổi trên xe đạp đỏ giao thư khắp các ngõ hẻm làng quê.',
    rotationClass: 'rotate-1',
  },
  {
    id: 'art_28',
    title: 'Niềm Vui Trên Cánh Đồng Lúa Mì (Art #28)',
    category: 'Official Artwork',
    badge: 'FULL ILLUSTRATION',
    image: '/images/gallery/suri_art_28.png',
    creator: 'Official Original Illustration',
    year: '2024',
    description: 'Bức họa đại cảnh ngập tràn ánh sáng với những gam màu vàng óng ả, gợi lên cảm giác tự do thanh bình.',
    rotationClass: 'rotate-2',
  },
  {
    id: 'art_24',
    title: 'Cánh Thư Bên Bờ Biển Cầu Vồng (Art #24)',
    category: 'Official Artwork',
    badge: 'VIBRANT ART',
    image: '/images/gallery/suri_art_24.png',
    creator: 'Official Original Illustration',
    year: '2024',
    description: 'Tác phẩm thể hiện nét sống động, tươi tắn khi Suri thả bồ câu đưa thư từ ban công phố biển rực rỡ.',
    rotationClass: '-rotate-1',
  },
  {
    id: 'art_19_lake',
    title: 'Giấc Ngủ Trưa Nơi Hồ Nước (Art #19)',
    category: 'Official Artwork',
    badge: 'NIGHT VISUAL',
    image: '/images/gallery/suri_art_19_lake.png',
    creator: 'Official Masterwork',
    year: '2023',
    description: 'Bầu không khí huyền ảo khi Suri ngủ trưa thanh thản trên mặt hồ pha lê giữa những đóa hoa súng thanh khiết.',
    rotationClass: 'rotate-1',
  },
  {
    id: 'irus_full',
    title: 'Irus Toàn Thân (Sấm Sét Alter)',
    category: 'Irus Alter',
    badge: 'ALTER PERSONA',
    image: '/images/characters/irus_alter_full.webp',
    creator: 'Official Production',
    year: '2021',
    description: 'Tạo hình toàn thân của bản thể sấm sét Irus: vương miện lôi điện hoàng gia và ánh nhìn sắc sảo.',
    rotationClass: '-rotate-1',
  },
  {
    id: 'irus_sheet',
    title: 'Bản Vẽ Kỹ Thuật Irus Turnaround',
    category: 'Design Sheets',
    badge: 'IRUS SPEC SHEET',
    image: '/images/gallery/irus_reference_sheet.webp',
    creator: 'Official Production Sheet',
    year: '2021',
    description: 'Bản thiết kế kỹ thuật xoay 360 độ phân tích chi tiết kết cấu và tỉ lệ của Irus.',
    rotationClass: 'rotate-1',
  },
];

export const LORE_ARCHIVES: LoreFile[] = [
  {
    fileId: 'NOTE-001',
    code: 'CAFE-NOTE-W',
    title: "Mảnh Giấy Bí Ẩn Ký Tên 'W'",
    classification: 'COMMUNITY TRANSCRIPTION',
    status: 'UNRESOLVED',
    summary: "Manh mối về một bức thư chúc mừng sinh nhật gửi cho 'Suri' từ một thực thể không rõ danh tính mang mật danh W.",
    content: [
      'Theo lời kể trong các buổi stream đầu tiên của Suri, khi con slime hệ nước lần đầu thức tỉnh và phát hiện hình hài thiếu nữ, trong túi áo cô gái có để lại một mẩu giấy nhỏ gấp ngay ngắn.',
      "Mẩu giấy vỏn vẹn dòng chữ: 'Chúc mừng sinh nhật Suri.' và được ký tên bằng một chữ cái duy nhất: 'W'.",
      "Suri từng bày tỏ mong muốn tìm hiểu nguồn gốc của thiếu nữ này cũng như danh tính của 'W' — một người bạn thuở nhỏ, một người giám hộ, hay kẻ nắm giữ chìa khóa cho sự chuyển sinh?",
    ],
    investigativeNote: 'Hồ sơ chưa có kết luận chính thức từ creator. Tạm thời lưu trữ dưới dạng câu hỏi ngỏ trong lịch sử nhân vật.',
  },
  {
    fileId: 'NOTE-002',
    code: 'CAFE-DUALITY-ELEM',
    title: 'Phân Tách Lưỡng Nguyên: Thủy & Lôi',
    classification: 'ARCHIVAL CASE FILE',
    status: 'COMMUNITY-REPORTED',
    summary: 'Nghiên cứu về cơ chế phân tách thành hai thực thể độc lập Suri (Hệ Nước) và Irus (Hệ Điện).',
    content: [
      'Quá trình luân hồi không diễn ra theo quỹ đạo đơn nhất mà tự tách thành hai cực đối xứng: Suri đại diện cho tính Thủy (nhu, trong sáng, âm nhạc, sự vỗ về) và Irus đại diện cho tính Lôi (cương, quyết liệt, ánh sáng, tốc độ).',
      'Dù mang tính cách và năng lượng trái ngược, cả hai đều chia sẻ cùng một gốc rễ tâm hồn. Việc Irus không triệt hạ Suri khi gặp mặt chứng minh mối liên kết vô hình giữa hai bản thể mạnh mẽ hơn bất kỳ quy tắc ma thuật nào.',
    ],
    investigativeNote: "Được xác nhận qua tiêu đề stream 'Hé lộ lore mới của Suri/Irus' (23.09.2021).",
  },
  {
    fileId: 'NOTE-003',
    code: 'CAFE-SEAL-300YR',
    title: 'Phong Ấn 300 Năm & Vị Quân Vương Cổ Xưa',
    classification: 'ARCHIVAL CASE FILE',
    status: 'COMMUNITY-REPORTED',
    summary: 'Dữ liệu huyền thoại về tiền kiếp của Irus trước khi thức tỉnh trong cơ thể slime điện.',
    content: [
      'Huyền sử ghi nhận Irus từng là người cai trị một vương quốc hưng thịnh ở dị giới cổ đại. Lo sợ trước quyền năng vượt trội của cô, các thế lực phù thủy ganh ghét đã bày mưu tiêu diệt vương quốc và dùng cấm thuật giam cầm cô suốt ba thế kỷ.',
      'Sau 300 năm, sự xuất hiện ngẫu nhiên của một sinh vật slime điện đã vô tình phá vỡ kết giới phong ấn, dung hợp linh hồn quân vương vào thân xác mới.',
    ],
    investigativeNote: 'Chi tiết thuộc huyền tích được tóm tắt từ stream lore. Chưa có mốc lịch Gregory tương ứng.',
  },
];

export const MUSIC_COVERS: CoverItem[] = [
  {
    id: 'king',
    title: 'KING',
    originalArtist: 'Kanaria',
    releaseDate: '20 / 11 / 2021',
    youtubeId: 'a8S1xhjh2e4',
    description: 'Bản cover bùng nổ năng lượng thể hiện chất giọng sắc sảo, tự tin và đầy uy quyền của Suri.',
    badge: 'SIGNATURE VOCAL',
    sweetDrink: 'Trà Đào Sủi Bọt Hoàng Gia 👑',
  },
  {
    id: 'yoru-ni-kakeru',
    title: 'Yoru ni Kakeru (夜に駆ける)',
    originalArtist: 'YOASOBI',
    releaseDate: '09 / 04 / 2022',
    youtubeId: 'cN9evcBtnjo',
    description: 'Giai điệu J-Pop tốc độ cao được Suri xử lý mượt mà, cảm xúc và ngập tràn năng lượng tươi trẻ.',
    badge: 'FAN FAVORITE',
    sweetDrink: 'Sinh Tố Dâu Đêm Trăng 🍓',
  },
  {
    id: 'nang-tho',
    title: 'Nàng Thơ',
    originalArtist: 'Hoàng Dũng',
    releaseDate: '10 / 06 / 2021',
    youtubeId: 'hOCt6VYIYUk',
    description: 'Khúc tình ca lãng mạn cất lên bằng chất giọng ngọt ngào, sâu lắng và dịu êm như làn nước mùa thu.',
    badge: 'ACOUSTIC BALLAD',
    sweetDrink: 'Trà Hoa Cúc Mật Ong Ấm Áp 🌼',
  },
  {
    id: 'renai-circulation',
    title: 'Renai Circulation (恋愛サーキュレーション)',
    originalArtist: 'Hanazawa Kana',
    releaseDate: '24 / 05 / 2021',
    youtubeId: 'tytmMA1YKwU',
    description: "Khoảnh khắc đáng yêu 'đốn tim' người nghe với phong cách trình bày nhí nhảnh, dễ thương chuẩn chất anime.",
    badge: 'KAWAII CLASSIC',
    sweetDrink: 'Sữa Tươi Trân Châu Đường Đen 🍮',
  },
  {
    id: 'only-love',
    title: 'Only Love',
    originalArtist: 'Trademark',
    releaseDate: '12 / 04 / 2021',
    youtubeId: 'is6t-GzkyMk',
    description: 'Bản cover đầu tiên trong lịch sử kênh, nơi Suri gửi lời chào mộc mạc và chân thành nhất đến với thế giới.',
    badge: 'DEBUT COVER',
    sweetDrink: 'Tách Vanilla Nóng Đầu Tiên ☕',
  },
  {
    id: 'bocca-della-verita',
    title: 'Bocca della Verità (ボッカデラベリタ)',
    originalArtist: 'Hiiragi Kirai',
    releaseDate: '09 / 04 / 2022',
    youtubeId: 'bw9Y9Ht-kVA',
    description: 'Màn thử sức táo bạo với thể loại nhạc ma mị, dồn dập và đậm cá tính cuốn hút.',
    badge: 'DARK SPARK',
    sweetDrink: 'Soda Việt Quất Tia Chớp ⚡',
  },
];

export const CREDITS_DATA: CreditGroup[] = [
  {
    role: 'Character Design & Illustration (Papa)',
    label: 'Những nét vẽ tạo hình Suri Mukeki',
    people: [
      { name: 'T_blence (Turbulence)', handle: '@T_blence', url: 'https://twitter.com/T_blence', note: 'Model 3.0 & Model 2.0 Illustrator' },
      { name: 'kcomorebi', handle: '@kcomorebi', url: 'https://twitter.com/kcomorebi', note: 'Model 1.0 Debut Illustrator' },
    ],
  },
  {
    role: 'Live2D Rigging & Motion (Mama)',
    label: 'Kỹ thuật khớp chuyển động linh hồn',
    people: [
      { name: 'Sophiel', handle: '@Sophielpaka', url: 'https://twitter.com/Sophielpaka', note: 'Model 3.0 Live2D Rigger' },
      { name: 'Truong Thanh Tan', note: 'Model 1.0 Live2D Rigger' },
    ],
  },
  {
    role: 'Official Creator & Voice',
    label: 'Cô chủ tiệm & Giọng hát trung tâm',
    people: [
      { name: 'Suri Mukeki', handle: '@surimukeki', url: 'https://www.youtube.com/@surimukeki', note: 'Independent VTuber' },
    ],
  },
  {
    role: 'Community & Documentation',
    label: 'Lưu giữ ký ức & Khách quen thân thương',
    people: [
      { name: 'Sureiya / Slayer Fanbase', note: 'Cộng đồng fan tận tụy' },
      { name: 'HoloList & VTuber Wiki Contributors', note: 'Dữ liệu lưu trữ và hồ sơ cộng đồng' },
    ],
  },
];
