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
  { label: 'Tổng quan', href: '#hero', jpLabel: '総覧' },
  { label: 'Cốt truyện & Hồ sơ', href: '#lore', jpLabel: '記録' },
  { label: 'Thông số mô hình', href: '#specs', jpLabel: '仕様' },
  { label: 'Âm nhạc & Nội dung', href: '#schedule', jpLabel: '音律' },
  { label: 'Liên hệ & Carrd', href: '#contact', jpLabel: '連絡' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'YouTube',
    label: 'Kênh chính thức',
    url: 'https://www.youtube.com/c/SuriMukekiSlimeCake',
    handle: '@surimukeki / SuriMukekiSlimeCake',
    color: '#FF0000',
  },
  {
    platform: 'Facebook',
    label: 'Trang cộng đồng chính thức',
    url: 'https://www.facebook.com/NotABadSlime.Hehe',
    handle: 'NotABadSlime.Hehe',
    color: '#1877F2',
  },
  {
    platform: 'X (Twitter)',
    label: 'Thông báo & Tin tức',
    url: 'https://twitter.com/SuriMukeki',
    handle: '@SuriMukeki',
    color: '#1DA1F2',
  },
  {
    platform: 'Discord',
    label: 'Cộng đồng Sureiya & Slayers',
    url: 'https://discord.gg/surimukeki',
    handle: 'discord.gg/surimukeki',
    color: '#5865F2',
  },
  {
    platform: 'TikTok',
    label: 'Video ngắn & Highlight',
    url: 'https://www.tiktok.com/@surivchuba?lang=vi-VN',
    handle: '@surivchuba',
    color: '#00F2FE',
  },
  {
    platform: 'Marshmallow',
    label: 'Hòm thư giao lưu ẩn danh',
    url: 'https://marshmallow-qa.com/surimukeki',
    handle: 'marshmallow-qa.com/surimukeki',
    color: '#F472B6',
  },
];

export const CONTACT_INFO = {
  email: 'surimukeki@gmail.com',
  mailto: 'mailto:surimukeki@gmail.com',
  businessNote: 'Dành cho liên hệ công việc, sự kiện, lời mời hợp tác và bản quyền thương mại.',
  title: 'Danh thiếp liên hệ & Mạng xã hội',
  subtitle: 'Official Contact & Social Carrd',
};

// ============================================================================
// 2. HERO SECTION DATA (#hero)
// ============================================================================

export const HERO_CONTENT: HeroData = {
  badge: {
    status: 'VTUBER ĐỘC LẬP // HOẠT ĐỘNG',
    message: 'Phát sóng chơi game, ca hát và trò chuyện cùng cộng đồng',
  },
  title: 'SURI MUKEKI',
  japaneseTitle: '無敵・スリ // INDEPENDENT VTUBER',
  tagline: 'VTuber độc lập tại Việt Nam, thường xuyên stream chơi game, trò chuyện, ca hát và tâm sự cùng người xem.',
  ctas: {
    primary: {
      label: 'Xem trên YouTube',
      url: 'https://www.youtube.com/@surimukeki',
      variant: 'primary',
    },
    secondary: {
      label: 'Tham gia Discord',
      url: 'https://discord.gg/surimukeki',
      variant: 'secondary',
    },
    tertiary: {
      label: 'Theo dõi trên X',
      url: 'https://x.com/SuriMukeki',
      variant: 'glass',
    },
  },
  stats: [
    {
      value: '51,400+',
      label: 'Người đăng ký',
      detail: 'Cộng đồng Sureiya trên YouTube',
    },
    {
      value: 'Model 3D',
      label: 'Mô hình hiện tại',
      detail: 'Model 3D & Chibi phát sóng chính (Model 3.0 Live2D lưu trữ)',
    },
    {
      value: '155 cm / 40 kg',
      label: 'Vóc dáng',
      detail: 'Thông số nhân vật chính thức',
    },
  ],
  trustBar: {
    label: 'Kênh phát sóng trực tiếp của Suri Mukeki',
    tags: [
      '#Sureiya / #Slayer',
      'Independent VTuber',
      'SEAblings',
      '3D ASMR',
      'Live2D & 3D',
    ],
  },
  communityTags: ['#Sureiya', '#Surillust', '#Suristream', 'Independent VTuber'],
  characterImage: '/images/suri/hero-character.webp',
};

export const HERO_DATA = HERO_CONTENT;

// ============================================================================
// 3. LORE & PROFILE SECTION DATA (#lore)
// ============================================================================

export const LORE_PROFILE_CONTENT: LoreProfileData = {
  sectionTag: 'Biên niên sử & Thế giới quan',
  headline: 'Hồ sơ thế giới quan & Biên niên sử Lore: Suri Mukeki',
  leadParagraph:
    'Hành trình hơn 5 năm của nàng Slime dị giới mượn hình hài thiếu nữ, từ tiền kiếp vị vua Irus bị phản bội, những ngày bươn chải dưới hình thái Suwi, cho đến sân khấu quán cafe 3D ấm áp cùng cộng đồng Slayers.',
  dossierCards: [
    {
      code: 'CHƯƠNG I // 2021 - 2023',
      title: 'Khởi nguyên dị giới & Sự phân tách của hai bản thể',
      category: 'Chương I (2021 – 2023)',
      summary: 'Tiền kiếp vị vua Irus bị phong ấn 300 năm, biến cố chuyển sinh chủng tộc Slime và khế ước cộng sinh.',
      body: [
        'Trước khi mang tên Suri, thực thể nguyên bản từng là Irus, vị quân vương trị vì một vương quốc phồn thịnh ở dị giới với nguồn ma lực nguyên tố khổng lồ. Tuy nhiên, sức mạnh vượt ngoài tầm kiểm soát đã gieo rắc sự lo sợ và đố kỵ vào tâm trí những kẻ cận kề. Một đại pháp sư từng được tin tưởng đã phản bội, giáng xuống Phong Ấn Cổ Đại 300 năm tước đoạt toàn bộ vương quyền lẫn ma lực, đẩy nhà vua vào giấc ngủ dài.',
        'Khi dòng chảy ma lực biến động qua hàng thế kỷ, linh hồn nguyên bản không bị hủy diệt mà tái sinh dưới hình hài chủng tộc Slime dị giới, phân tách thành hai bản ngã: Suri (Slime hệ Nước thuần khiết, yêu tự do, tính cách ngọt ngào, mê trà sữa, bánh ngọt và mang mẩu giấy "Chúc mừng sinh nhật Suri" ký tên "W" vào ngày sinh nhật 30/10) và Irus (Slime hệ Điện mang ký ức vương giả sắc sảo, tên là đảo ngữ S-U-R-I ↔ I-R-U-S phản chiếu qua gương).',
        'Sau đúng 300 năm, Irus thức tỉnh trong tình trạng cạn kiệt ma lực. Từng ngộ nhận Suri chiếm đoạt sức mạnh và toan tiêu diệt, nhưng khi đối mặt, sự cộng hưởng linh hồn giúp cả hai nhận ra sự thật. Suri và Irus lập khế ước hòa bình cùng chung sống, dùng livestream làm cầu nối đến thế giới loài người và thu thập năng lượng từ cộng đồng Slayers.',
      ],
      accent: 'cyan',
    },
    {
      code: 'CHƯƠNG II // 2023 - 2025',
      title: 'Diện mạo mới của vị vua & Giai điệu nửa đêm',
      category: 'Chương II (2023 – 2025)',
      summary: 'Sự trỗi dậy của khí chất vương giả Live2D và thương hiệu đêm nhạc, ASMR dịu êm dưới chiếc ô.',
      body: [
        'Thế giới quan của Suri được bồi đắp qua các cột mốc nâng cấp Live2D ấn tượng. Sự kiện ra mắt model mang chủ đề "Một diện mạo mới của vị vua năm xưa" khắc họa rõ nét hơn vẻ đẹp sắc sảo, quyền lực từ quá khứ của bản thể nhà vua.',
        'Đến ngày 15/06/2024, buổi debut model "Suri giai điệu nửa đêm đã đến!!!" gắn liền hình tượng cô với những đêm nhạc trữ tình, những buổi tâm sự (Free Talk) và 3D ASMR dịu êm lúc nửa đêm. Giọng hát nhẹ nhàng và tiếng mưa rơi dưới chiếc ô ☂️ trở thành thương hiệu quen thuộc xoa dịu tâm hồn người nghe.',
      ],
      accent: 'amber',
    },
    {
      code: 'CHƯƠNG III // ĐẦU 2026',
      title: 'Sự xuất hiện của "Suwi", Phù thủy Tarot & Kiếp bươn chải',
      category: 'Chương III (Đầu 2026)',
      summary: 'Mở khóa hình thái Suwi độc lập, những ngày chạy shipper bươn chải và bàn tiệc Tarot huyền bí.',
      body: [
        'Khởi đầu từ hình tượng linh vật mascot nhỏ nhắn, vào tháng 01/2026, model Suwi chính thức được mở khóa và xuất hiện như một hình thái độc lập trên sóng stream, mang đến làn gió đời thường gần gũi.',
        'Vì áp lực tài chính để chuẩn bị cho ước mơ mở quán cafe lớn, Suwi đôi khi phải đội mũ bảo hiểm đi làm shipper giao hàng khắp nơi. Dù trải qua nhiều pha bươn chải và những buổi sinh tồn hỗn loạn cùng bạn bè, kim chỉ nam của Suwi luôn đề cao sức mạnh tình bạn gắn kết cùng cộng đồng.',
        'Song song đó, Suri còn đánh thức khía cạnh phép thuật huyền bí dưới vai trò một Phù thủy Tarot (Witch). Định kỳ hàng tháng, cô mở không gian chiêm tinh riêng cho hội viên (Membership), dùng bộ bài Tarot lắng nghe tâm tư và giải đáp vận mệnh cho từng Slayer.',
      ],
      accent: 'violet',
    },
    {
      code: 'CHƯƠNG IV // 09/2026 - NAY',
      title: 'Kỷ nguyên 3D: "Hãy đến quán cafe của tớ!!"',
      category: 'Chương IV (09/2026 – Nay)',
      summary: 'Ra mắt mô hình nhân vật 3D sau hơn 5 năm đồng hành, bước vào không gian livestream 3 chiều.',
      body: [
        'Sau hơn 5 năm hoạt động bền bỉ (kỷ niệm 5 năm ngày 17/04/2026), Suri Mukeki đánh dấu bước phát triển mới vào mùa thu năm 2026.',
        'Tối ngày 05/09/2026 (sau buổi thử nghiệm kỹ thuật ngày 03/09/2026), Suri Mukeki chính thức phát sóng buổi ra mắt mô hình 3D mang chủ đề "Hãy đến quán cafe của tớ!!".',
        'Mô hình 3D nhân vật giúp Suri biểu diễn ca hát, tương tác cử chỉ trực tiếp và mở rộng hoạt động giao lưu cùng cộng đồng người xem.',
      ],
      accent: 'emerald',
    },
  ],
  profileAttributes: [
    { label: 'Tên chính thức', value: 'Suri Mukeki (Mukeki Suri / 無敵スリ)' },
    { label: 'Các bản ngã & Hình thái', value: 'Irus (Suri Alter - Vị vua năm xưa), Suwi (Hình thái thu nhỏ)' },
    { label: 'Chủng tộc gốc', value: 'Slime Dị Giới (Isekai Slime / water slime)' },
    { label: 'Nguyên tố đại diện', value: '💧 Hệ Nước (Suri) & ⚡ Hệ Điện (Irus)' },
    { label: 'Ngày ra mắt (Debut)', value: '17/04/2021 (17 tháng 04 năm 2021)' },
    { label: 'Sinh nhật', value: '30/10 (30 tháng 10 - Mẩu giấy "NOTE-W")' },
    { label: 'Chiều cao & Cân nặng', value: '155 cm / 40 kg' },
    { label: 'Đơn vị hoạt động', value: 'VTuber Độc Lập (Indie VTuber)' },
    { label: 'Biểu tượng (Oshi Mark)', value: '☂️ (Chiếc ô) / 🍰 (Bánh ngọt)' },
    { label: 'Tên cộng đồng (Fandom)', value: 'Sureiya / Slayers' },
    { label: 'Thiết kế nhân vật (Mama)', value: 'Turbulence (T_blence)' },
    { label: 'Sở thích', value: 'Ngủ nướng, bánh ngọt, trà sữa, mèo, bánh flan caramel (pudding), matcha latte, BIGBANG' },
    { label: 'Nỗi sợ', value: 'Sấm sét (Thunder), ma quỷ (Ghost), gián và nhện' },
    { label: 'Tựa game thường chơi', value: 'Where Winds Meet, League of Legends, Valorant' },
  ],
  personalityTags: [
    'VTuber Độc Lập',
    'Slime Dị Giới',
    '💧 Slime hệ Nước (Suri)',
    '⚡ Slime hệ Điện (Irus)',
    'Suwi shipper bươn chải',
    'Cô chủ Quán Cafe 3D',
    'Phù thủy Tarot',
    'Tinh linh WingWing',
    'Sureiya / Slayers',
    'Mama Turbulence (T_blence)',
    'Matcha latte & Bánh flan',
    '3D ASMR & Ca hát',
  ],
  trivia: [
    {
      title: 'Sở thích & Bánh ngọt',
      fact: 'Thích ngủ, mê bánh ngọt, trà sữa, mèo; đặc biệt yêu thích matcha latte, bánh flan caramel (pudding) và ban nhạc BIGBANG (G-Dragon).',
      icon: '🍮',
    },
    {
      title: 'Nỗi sợ trái ngược',
      fact: 'Dù chia sẻ mối liên kết linh hồn cùng Irus hệ Điện, Suri ngoài đời rất sợ sấm sét (Thunder), sợ ma quỷ (Ghost), gián và nhện.',
      icon: '⚡',
    },
    {
      title: 'Biểu tượng & Fandom',
      fact: 'Oshi mark là ☂️ (chiếc ô che mưa) và 🍰 (bánh ngọt). Fandom mang tên Sureiya / Slayers, những người đồng hành bảo vệ cô nàng Slime.',
      icon: '☂️',
    },
    {
      title: 'Suwi bươn chải & Tình bạn',
      fact: 'Trong hình thái Suwi nhỏ bé, cô từng đội mũ bảo hiểm chạy shipper giao hàng tích lũy mở quán cafe, luôn đề cao sức mạnh tình bạn.',
      icon: '🛵',
    },
    {
      title: 'Phù thủy nhỏ & Bàn tiệc Tarot',
      fact: 'Định kỳ hàng tháng, Suri mở không gian chiêm tinh riêng cho hội viên (Membership), dùng bộ bài Tarot lắng nghe tâm tư của các Slayer.',
      icon: '🔮',
    },
    {
      title: 'Tinh linh đồng hành WingWing',
      fact: 'WingWing là chú tinh linh nhỏ kết tinh từ tình cảm và sự che chở của Suwi đối với đàn slime nhỏ.',
      icon: '🪶',
    },
  ],
  quote:
    '"Từ mảnh linh hồn phân tách nơi dị giới, những ngày bươn chải dưới hình hài Suwi, cho đến khi chính thức mở cánh cửa tiệm cafe 3D ấm ánh đèn đêm: hành trình hơn 5 năm của một chú Slime hệ Nước cùng cộng đồng Slayers."',
  irusAsset: '/images/characters/irus_alter_full.webp',
  suriAsset: '/images/suri/profile-portrait.webp',
  wingwingAsset: '/images/suri/wingwing.png',
};

// Aliases for compatibility
LORE_PROFILE_CONTENT.dossiers = LORE_PROFILE_CONTENT.dossierCards;
LORE_PROFILE_CONTENT.attributes = LORE_PROFILE_CONTENT.profileAttributes;

export const LORE_DATA = LORE_PROFILE_CONTENT;

// ----------------------------------------------------------------------------
// Canonical Persona & Chapters Data Contracts for LoreSection
// ----------------------------------------------------------------------------

export interface LoreSpecItem {
  label: string;
  value: string;
  valueClass?: string;
}

export interface LoreTriviaItem {
  title: string;
  text: string;
  iconImage?: string;
}

export interface LoreDetailItem {
  label: string;
  value: string;
  valueClass?: string;
  colSpan2?: boolean;
}

export interface LorePersonaConfig {
  id: 'suri' | 'irus';
  tabId: string;
  tabLabelId: string;
  portraitSrc: string;
  portraitAlt: string;
  elementType: 'water' | 'electric';
  elementBadgeLabel: string;
  elementBadgeClass: string;
  frameGradient: string;
  glowColor: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  bio: string;
  nicknames: string;
  specs: LoreSpecItem[];
  trivia: LoreTriviaItem[];
  details: LoreDetailItem[];
}

export interface LoreChapterItem {
  id: string;
  chapterNumber: string;
  period: string;
  title: string;
  image: string;
  imageAlt: string;
  quote?: {
    text: string;
    source: string;
  };
  paragraphs: {
    heading: string;
    text: string;
  }[];
}

export const LORE_PERSONAS: Record<'suri' | 'irus', LorePersonaConfig> = {
  suri: {
    id: 'suri',
    tabId: 'persona-panel-suri',
    tabLabelId: 'persona-tab-suri',
    portraitSrc: '/images/suri/profile-portrait.webp',
    portraitAlt: 'Suri Mukeki Portrait',
    elementType: 'water',
    elementBadgeLabel: '💧 Hệ Nước (Water Slime)',
    elementBadgeClass: 'border-[#75B8E6]/40 text-[#315D9C] dark:text-[#79ACE0]',
    frameGradient:
      'from-[#EAF3FB] to-[#FAFAF7] dark:from-[#181F2A] dark:to-[#141517] border-[#75B8E6]/40 dark:border-[#79ACE0]/30',
    glowColor: 'bg-[#315D9C]',
    categoryTag: 'Bản ngã nguyên bản',
    title: 'Suri Mukeki (無敵スリ)',
    subtitle: 'Nàng Slime Nước • Sứ GiẢ Suwi • Cô Chủ Quán Cafe 3D',
    bio: 'Nàng Slime mượn hình hài thiếu nữ với đôi tai elf, tính cách ngọt ngào, tinh nghịch và luôn đem lại tiếng cười cho người xem.',
    nicknames: 'Biệt danh: Suwi, Sudi, Sugi, Sủi.',
    specs: [
      { label: 'Ngày ra mắt', value: '17/04/2021' },
      { label: 'Vóc dáng', value: '155 cm / 40 kg' },
      { label: 'Chủng tộc', value: 'Slime Dị Giới' },
      { label: 'Sinh nhật', value: '30/10 (NOTE-W)' },
      { label: 'Nguyên tố', value: '💧 Hệ Nước', valueClass: 'text-[#315D9C] dark:text-[#79ACE0]' },
      { label: 'Biểu tượng (Oshi)', value: '☂️ / 🍰' },
      { label: 'Fandom', value: 'Sureiya / Slayers', valueClass: 'text-[#315D9C] dark:text-[#79ACE0]' },
      { label: 'Hoạt động', value: 'VTuber Độc Lập' },
    ],
    trivia: [
      {
        title: 'Sở thích',
        text: 'Mê bánh flan caramel (pudding), matcha latte, trà sữa, mèo và những giai điệu lofi lúc đêm khuya.',
      },
      {
        title: 'Đồng hành WingWing',
        text: 'Tinh linh nhỏ kề vai sát cánh cùng Suwi từ những ngày chạy shipper cho đến tiệm cafe 3D.',
        iconImage: '/images/suri/wingwing.png',
      },
      {
        title: 'Nỗi sợ',
        text: 'Dù chia sẻ mối liên kết linh hồn với Irus hệ Điện, Suri ngoài đời rất sợ sấm sét (Thunder), ma quỷ (Ghost) và côn trùng.',
      },
    ],
    details: [
      { label: 'Thiết kế nhân vật (Mama)', value: 'Turbulence (T_blence)' },
      { label: 'Bản thể / Hình thái liên quan', value: 'Irus (Alter vương giả) • Suwi (Thu nhỏ)' },
      { label: 'Tựa game thường phát sóng', value: 'Where Winds Meet, League of Legends, Valorant', colSpan2: true },
    ],
  },
  irus: {
    id: 'irus',
    tabId: 'persona-panel-irus',
    tabLabelId: 'persona-tab-irus',
    portraitSrc: '/images/characters/irus_alter_full.webp',
    portraitAlt: 'Irus Alter Persona',
    elementType: 'electric',
    elementBadgeLabel: '⚡ Hệ Điện (Electric Slime)',
    elementBadgeClass: 'border-[#7660A7]/40 text-[#7660A7] dark:text-[#A593D1]',
    frameGradient:
      'from-[#F5F0FF] to-[#FAFAF7] dark:from-[#211A2E] dark:to-[#141517] border-[#7660A7]/40 dark:border-[#7660A7]/30',
    glowColor: 'bg-[#7660A7]',
    categoryTag: 'Bản thể vương giả',
    title: 'Irus (Alter King / Vị Vua Năm Xưa)',
    subtitle: 'Slime Sấm Sét • Quân Vương Tiền Kiếp • Phong Ấn 300 Năm',
    bio: 'Bản thể tiền kiếp của Suri: một quân vương mang phong thái điềm tĩnh, quyền lực, nắm giữ sức mạnh sấm sét dị giới trước khi bị đại pháp sư phản bội và phong ấn 300 năm.',
    nicknames: 'Nguồn gốc tên gọi: Đảo ngữ phản chiếu qua gương (S-U-R-I ↔ I-R-U-S).',
    specs: [
      { label: 'Niên đại', value: '300 năm trước' },
      { label: 'Vóc dáng', value: '155 cm (Hình thái chuyển sinh)' },
      { label: 'Chủng tộc', value: 'Vương tộc / Slime Điện' },
      { label: 'Khế ước', value: 'Cộng sinh cùng Suri' },
      { label: 'Nguyên tố', value: '⚡ Sấm Sét Hoàng Gia', valueClass: 'text-[#7660A7] dark:text-[#A593D1]' },
      { label: 'Bản chất', value: 'Chiến binh & Vương giả' },
      { label: 'Fandom', value: 'Slayers Bảo Hộ', valueClass: 'text-[#7660A7] dark:text-[#A593D1]' },
      { label: 'Trạng thái', value: 'Thức tỉnh & Đồng hành' },
    ],
    trivia: [
      {
        title: 'Đặc tính ma lực',
        text: 'Sở hữu ma lực sấm sét sắc bén, tương phản hoàn toàn với tính Thủy của Suri.',
      },
      {
        title: 'Mối quan hệ cùng Suri',
        text: 'Chia sẻ một nửa linh hồn nguyên bản. Ban đầu nghi ngờ Suri cướp đoạt sức mạnh, nhưng sau khi thấu hiểu đã lập khế ước hòa bình cùng phát triển.',
      },
      {
        title: 'Mục tiêu tái sinh',
        text: 'Thu thập năng lượng tích cực từ cộng đồng Slayers qua sóng livestream để dần khôi phục sức mạnh và đánh bại thế lực phản bội.',
      },
    ],
    details: [
      { label: 'Thời gian phong ấn', value: '300 năm cổ đại', valueClass: 'text-[#C9A95C] dark:text-[#D4B86A]' },
      { label: 'Tương quan bản thể', value: 'Đảo ngữ S-U-R-I ↔ I-R-U-S', valueClass: 'text-[#7660A7] dark:text-[#A593D1]' },
      { label: 'Thế mạnh phát sóng', value: 'High-octane Vocal & FPS Gameplay' },
      { label: 'Khế ước đồng hành', value: 'Thu thập năng lượng từ Slayers để đánh bại thế lực phản bội' },
    ],
  },
};

export const LORE_CHAPTERS: LoreChapterItem[] = [
  {
    id: 'chapter-1',
    chapterNumber: 'Chương I',
    period: '2021 – 2023',
    title: 'Khởi nguyên dị giới & Sự phân tách hai bản thể',
    image: '/images/suri/lore-origin-city.webp',
    imageAlt: 'Khởi nguyên dị giới & Sự phân tách hai bản thể',
    quote: {
      text: 'Chúc mừng sinh nhật Suri, hãy giữ vững nụ cười và đôi cánh tự do này nhé.',
      source: 'NOTE-W • MẨU GIẤY GẤP TRONG TÚI ÁO (SINH NHẬT 30/10)',
    },
    paragraphs: [
      {
        heading: 'Tiền kiếp vị vua bị phản bội',
        text: 'Trước khi mang tên Suri, bản thể nguyên bản từng là Irus, vị quân vương trị vì một vương quốc dị giới với nguồn ma lực khổng lồ. Do lo sợ sức mạnh này, một đại pháp sư từng được tin tưởng đã phản bội, giáng xuống Phong Ấn Cổ Đại 300 năm tước đoạt toàn bộ ma lực và đẩy nhà vua vào giấc ngủ dài.',
      },
      {
        heading: 'Biến cố chuyển sinh thành Slime',
        text: 'Qua hàng thế kỷ, ma lực biến động khiến linh hồn tái sinh thành chủng tộc Slime dị giới (water slime), phân tách thành hai bản ngã: Suri (Slime hệ Nước yêu tự do, mang mẩu giấy chúc mừng sinh nhật ngày 30/10 ký tên "W") và Irus (Slime hệ Điện với ký ức vương giả, tên gọi đảo ngữ S-U-R-I ↔ I-R-U-S).',
      },
      {
        heading: 'Khế ước cộng sinh',
        text: 'Thức tỉnh sau 300 năm trong trạng thái cạn kiệt năng lượng, Irus từng lầm tưởng Suri chiếm đoạt sức mạnh. Khi đối mặt, sự liên kết linh hồn giúp cả hai nhận ra chân tướng và lập khế ước cộng sinh, dùng livestream kết nối loài người để tích lũy năng lượng từ cộng đồng Slayers.',
      },
    ],
  },
  {
    id: 'chapter-2',
    chapterNumber: 'Chương II',
    period: '2023 – 2025',
    title: 'Diện mạo mới của vị vua & Giai điệu nửa đêm',
    image: '/images/suri/lore-feature.webp',
    imageAlt: 'Diện mạo mới của vị vua & Giai điệu nửa đêm',
    paragraphs: [
      {
        heading: 'Diện mạo vương giả',
        text: 'Các phiên bản Live2D dần tái hiện rõ nét hơn phong thái của vị vua năm xưa, với nét vẽ sắc sảo, thần thái đĩnh đạc và phục trang mang hơi thở hoàng gia.',
      },
      {
        heading: 'Giai điệu nửa đêm dưới chiếc ô',
        text: 'Buổi ra mắt model ngày 15/06/2024 mang chủ đề "Suri giai điệu nửa đêm đã đến!!!" định hình phong cách âm nhạc trữ tình, những buổi tâm sự nhẹ nhàng và 3D ASMR dưới tiếng mưa rơi cùng chiếc ô ☂️ quen thuộc.',
      },
    ],
  },
  {
    id: 'chapter-3',
    chapterNumber: 'Chương III',
    period: 'Đầu 2026',
    title: 'Hình thái Suwi, Phù thủy Tarot & Kiếp bươn chải',
    image: '/images/suri/lore-courier-journey.webp',
    imageAlt: 'Hình thái Suwi, Phù thủy Tarot & Kiếp bươn chải',
    paragraphs: [
      {
        heading: 'Hình thái Suwi (Tháng 01/2026)',
        text: 'Từ hình tượng mascot nhỏ nhắn, Suwi ra mắt mô hình độc lập trên sóng stream với phong cách vui nhộn và gần gũi.',
      },
      {
        heading: 'Suwi shipper bươn chải',
        text: 'Để dành dụm mở quán cafe, Suwi có những buổi stream đội mũ bảo hiểm đi làm shipper giao hàng, chơi game sinh tồn hài hước cùng bạn bè và luôn nhận được sự đồng hành từ các Slayers.',
      },
      {
        heading: 'Không gian Tarot huyền bí',
        text: 'Bên cạnh đó, Suri còn mở các buổi xem bài Tarot định kỳ cho hội viên để lắng nghe và chia sẻ tâm sự.',
      },
    ],
  },
  {
    id: 'chapter-4',
    chapterNumber: 'Chương IV',
    period: '09/2026 – Nay',
    title: 'Kỷ nguyên 3D: "Hãy đến quán cafe của tớ!!"',
    image: '/images/suri/lore-letter.webp',
    imageAlt: 'Kỷ nguyên 3D: "Hãy đến quán cafe của tớ!!"',
    paragraphs: [
      {
        heading: 'Cột mốc 5 năm bền bỉ',
        text: 'Đánh dấu chặng đường 5 năm hoạt động (17/04/2021 – 17/04/2026), Suri chính thức bước sang kỷ nguyên mới.',
      },
      {
        heading: 'Ra mắt mô hình 3D (05/09/2026)',
        text: 'Buổi ra mắt mô hình 3D chủ đề "Hãy đến quán cafe của tớ!!" mở ra không gian biểu diễn ba chiều ấm cúng.',
      },
      {
        heading: 'Trải nghiệm biểu diễn trực tiếp',
        text: 'Mô hình 3D mới giúp Suri ca hát, bắt chuyển động cơ thể trực tiếp và tương tác sống động hơn cùng cộng đồng người xem.',
      },
    ],
  },
];

// ============================================================================
// 4. 3D MODEL SPECS & ARTISAN CREDITS DATA (#specs)
// ============================================================================

export const MODEL_SPECS_CREDITS_CONTENT: ModelSpecsCreditsData = {
  sectionTag: '// CÁC MÔ HÌNH & NGHỆ SĨ SÁNG TẠO',
  headline: 'Các mô hình hiện có & Đội ngũ thực hiện',
  description:
    'Tổng hợp tất cả các mô hình nhân vật của Suri Mukeki, làm rõ những mô hình đang dùng chủ yếu trên livestream (Model 3D và Chibi Suwi) cùng các thế hệ mô hình trước đây và nghệ sĩ thực hiện từng bản.',
  specs: [
    {
      category: 'LƯỚI ĐA GIÁC',
      value: '68,400',
      label: 'Polygon (112,800 Tam giác)',
      detail: 'Lưới quad tối ưu hóa cho biến dạng khuôn mặt và chuyển động 60fps mượt mà.',
    },
    {
      category: 'BIỂU CẢM',
      value: '142',
      label: 'Biểu cảm & ARKit Blendshapes',
      detail: 'Đồng bộ biểu cảm mắt iOS ARKit, khẩu hình và các sắc thái anime tự nhiên.',
    },
    {
      category: 'VẬT LÝ',
      value: '38 Chuỗi',
      label: 'Xương vật lý SpringBone',
      detail: 'Chuyển động thứ cấp mềm mại cho tóc bím, dải ruy băng và quai túi đưa thư.',
    },
    {
      category: 'VẬT LIỆU',
      value: '12 Khối',
      label: 'Vật liệu Toon Shader',
      detail: 'Tạo bóng cel-shading kết hợp hiệu ứng viền sáng và tán sắc nước mềm mại.',
    },
  ],
  features: [
    {
      title: 'Hệ thống biểu cảm phong phú',
      description: 'Hơn 140 sắc thái cảm xúc anime linh hoạt, từ nụ cười ngọt ngào đến hóm hỉnh.',
    },
    {
      title: 'Mắt dị sắc hai màu',
      description: 'Đồng tử hổ phách ánh kim bên phải và đồng tử xanh ngọc bốn cánh bên trái.',
    },
    {
      title: 'Họa tiết cỏ bốn lá',
      description: 'Đường thêu tinh xảo trên ve áo và túi đưa thư tượng trưng cho may mắn.',
    },
    {
      title: 'Tương thích đa nền tảng',
      description: 'Hỗ trợ giao thức VMC cho sân khấu Warudo 3D, VRChat PC và Live2D Cubism.',
    },
  ],
  credits: [
    {
      role: 'Thiết kế nhân vật (Design Artist)',
      title: 'Tạo hình Elf đưa thư Suwi',
      artist: 'Hare_ta06',
      handle: '@Hare_ta06',
      notes: 'Tác giả thiết kế tạo hình Suwi theo bài ghim chính thức.',
    },
    {
      role: 'Họa sĩ mô hình (Model Artist)',
      title: 'Vẽ model nhân vật Suwi',
      artist: 'Nina Meow Meow',
      handle: 'Nina Meow Meow',
      notes: 'Họa sĩ thực hiện model theo bài ghim chính thức.',
    },
    {
      role: 'Thiết kế thú cưng (Pet Design Artist)',
      title: 'Tạo hình tinh linh WingWing',
      artist: 'kuo0',
      handle: '@kuo0',
      notes: 'Họa sĩ thiết kế linh thú đồng hành WingWing theo bài ghim chính thức.',
    },
    {
      role: 'Kỹ thuật chuyển động (Rigger Artist)',
      title: 'Rigging chuyển động Suwi',
      artist: 'Suwaa Hakirin',
      handle: 'Suwaa Hakirin',
      notes: 'Nghệ sĩ rigging tạo hình Suwi theo bài ghim chính thức.',
    },
    {
      role: 'Thiết kế mô hình 3D (3D Modeler)',
      title: 'Mô hình 3D nhân vật (Debut 05/09/2026)',
      artist: 'Hasukatsu',
      handle: 'Hasukatsu',
      notes: 'Thiết kế và dựng mô hình nhân vật 3D cho Suri Mukeki, ra mắt ngày 05/09/2026.',
    },
    {
      role: 'Thiết kế nhân vật & Minh họa chính (Papa)',
      title: 'Minh họa Live2D Model 3.0 & Model 2.0',
      artist: 'T_blence (Turbulence)',
      handle: '@T_blence',
      url: 'https://twitter.com/T_blence',
      notes: 'Họa sĩ tạo hình phiên bản Live2D 2.0 (2022) và Live2D 3.0 (2023).',
    },
    {
      role: 'Rigging chuyển động Live2D (Mama)',
      title: 'Kỹ thuật chuyển động & Biểu cảm Live2D 3.0',
      artist: 'Sophiel',
      handle: '@Sophielpaka',
      url: 'https://twitter.com/Sophielpaka',
      notes: 'Thiết kế hơn 140 biểu cảm ARKit và vật lý chuyển động đa trục cho Model 3.0.',
    },
    {
      role: 'Họa sĩ khởi nguyên Model 1.0',
      title: 'Tạo hình & Rigging Model 1.0',
      artist: 'kcomorebi & Truong Thanh Tan',
      handle: '@kcomorebi',
      notes: 'Minh họa (kcomorebi) và rigging (Truong Thanh Tan) phiên bản debut ra mắt ngày 17/04/2021.',
    },
  ],
  glassesToggle: {
    withGlasses: '/images/suri/model-fullbody.webp',
    noGlasses: '/images/characters/suri_model3_noglasses.webp',
    label: 'Chuyển đổi biểu cảm Model 3.0',
  },
  costumeSheet: {
    image: '/images/suri/model-costume-sheet.webp',
    title: 'Bản vẽ chi tiết trang phục & chất liệu',
    description: 'Bản vẽ thiết kế phục trang bởi Design Artist @Hare_ta06 (Costume Detailing Materials)',
  },
  expressionSheet: {
    image: '/images/suri/model-expression-sheet.webp',
    title: 'Bản vẽ biểu cảm & chi tiết nhân vật',
    description: 'Tài liệu tham chiếu biểu cảm nhân vật Demo Spec',
  },
};

// Aliases for compatibility
MODEL_SPECS_CREDITS_CONTENT.telemetry = MODEL_SPECS_CREDITS_CONTENT.specs;

export const SPECS_DATA = MODEL_SPECS_CREDITS_CONTENT;

// ============================================================================
// 5. SCHEDULE & STREAM HIGHLIGHTS DATA (#schedule)
// ============================================================================

export const SCHEDULE_HIGHLIGHTS_CONTENT: ScheduleHighlightsData = {
  sectionTag: '// ÂM NHẠC & HOẠT ĐỘNG PHÁT SÓNG',
  headline: 'Kho nhạc & Ca khúc nổi bật',
  timezone: 'Giờ Đông Dương (UTC+7 / ICT)',
  generalNotice: 'Suri không có lịch stream cố định trong tuần, nhưng hay stream lúc 20:00 tuỳ ngày. Thông báo cụ thể sẽ được đăng tải trước trên Discord và YouTube.',
  typicalHour: '20:00 ICT (Tuỳ ngày)',
  schedule: [
    {
      day: 'Các ngày trong tuần (Thứ Hai đến Thứ Sáu, tuỳ ngày)',
      time: '20:00 ICT',
      title: 'Gaming & Trò chơi',
      category: 'Gaming / FPS',
      badge: 'LIVE FPS',
      description: 'Where Winds Meet, League of Legends, Valorant hoặc các tựa game phiêu lưu cùng người xem.',
    },
    {
      day: 'Các ngày trong tuần (Thứ Hai đến Chủ Nhật, tuỳ ngày)',
      time: '20:00 ICT',
      title: 'Tâm tình & Hòm thư Marshmallow',
      category: 'Giao lưu cộng đồng',
      badge: 'TÂM TÌNH',
      description: 'Đọc thư chia sẻ từ hòm thư Marshmallow, tâm sự đêm muộn cùng cộng đồng.',
    },
    {
      day: 'Các ngày trong tuần (Thứ Hai đến Chủ Nhật, tuỳ ngày)',
      time: '20:00 ICT',
      title: 'Đêm nhạc & Hát giao lưu',
      category: 'Hát live / Âm nhạc',
      badge: 'HÁT LIVE',
      description: 'Các bản cover acoustic, J-Pop, tình ca Việt Nam và hát theo yêu cầu.',
    },
    {
      day: 'Các ngày trong tuần (Thứ Hai đến Chủ Nhật, tuỳ ngày)',
      time: '20:00 ICT',
      title: '3D ASMR & Thư giãn',
      category: '3D ASMR / Thư giãn',
      badge: 'BINAURAL',
      description: 'Âm thanh binaural KU100 với tiếng thì thầm và giọt nước vỗ về giấc ngủ.',
    },
    {
      day: 'Cuối tuần (Thứ Bảy hoặc Chủ Nhật, tuỳ ngày)',
      time: '20:00 ICT',
      title: 'Tổng kết tuần & Giao lưu',
      category: 'Tổng kết tuần',
      badge: 'GIAO LƯU',
      description: 'Điểm lại fanart #Surillust trong tuần, xem tarot, cosplay hoặc chơi party game thư giãn.',
    },
  ],
  playlistUrl: 'https://www.youtube.com/playlist?list=PL7hTl8MTOo99iAQ0D31GQpB2bBn0ClCW9',
  covers: [
    {
      id: 'nhiet-tam-105c',
      title: 'Nhiệt Tâm 105°C Của Cậu / Super Idol (热爱105°C的你)',
      artist: 'A Si (阿肆)',
      originalArtist: 'A Si (阿肆)',
      youtubeId: 'XvUcrx1YCyM',
      badge: 'JAPANESE COVER',
      category: 'jpop',
      sweetDrink: 'Trà Đào Sủi Bọt 105°C 🍑',
      description: 'Bản cover tiếng Nhật vui tươi trào lưu Super Idol tràn đầy năng lượng ngọt ngào và tinh nghịch.',
      releaseDate: '25 / 10 / 2021',
    },
    {
      id: 'idol-yoasobi',
      title: 'Idol (アイドル) - English Cover',
      artist: 'YOASOBI',
      originalArtist: 'YOASOBI (Oshi no Ko OP)',
      youtubeId: '9HQlOiPRGW0',
      badge: 'ENGLISH VER',
      category: 'jpop',
      sweetDrink: 'Soda Dâu Đêm Sao Sáng ⭐',
      description: 'Món quà Suri dành tặng thần tượng Hoshino Ai và người hâm mộ với phong cách tiếng Anh lôi cuốn.',
      releaseDate: '31 / 07 / 2023',
    },
    {
      id: 'thoi-khong-sai-lech',
      title: 'Thời Không Sai Lệch (错位时空) - Japanese Ver',
      artist: 'Ngải Thần (艾辰)',
      originalArtist: 'Ngải Thần (艾辰)',
      youtubeId: 'Epc2Fm2QhuU',
      badge: 'BALLAD',
      category: 'jpop',
      sweetDrink: 'Trà Hoa Đậu Biếc Thời Gian ⏳',
      description: 'Khúc ca lắng đọng cảm xúc giữa những chiều không gian sai lệch qua phiên bản tiếng Nhật dịu dàng.',
      releaseDate: '07 / 08 / 2022',
    },
    {
      id: 'yoru-ni-kakeru',
      title: 'Yoru ni Kakeru (夜に駆ける)',
      artist: 'YOASOBI',
      originalArtist: 'YOASOBI',
      youtubeId: 'cN9evcBtnjo',
      badge: 'FAN FAVORITE',
      category: 'jpop',
      sweetDrink: 'Sinh Tố Dâu Đêm Trăng 🍓',
      description: 'Giai điệu J-Pop tốc độ cao được Suri xử lý mượt mà, cảm xúc và ngập tràn năng lượng tươi trẻ.',
      releaseDate: '09 / 04 / 2022',
    },
    {
      id: 'ly-dao-chi-ca',
      title: 'Ly Đảo Chi Ca (Chijima no Uta - 離島の歌)',
      artist: 'Onmyoji OST',
      originalArtist: 'Âm Dương Sư (Shiranui Theme)',
      youtubeId: 'NUroq9xFBPc',
      badge: 'GAME OST',
      category: 'game-ost',
      sweetDrink: 'Trà Hoa Anh Đào Biển Đêm 🌸',
      description: 'Khúc ca chủ đề của Bất Tri Hỏa (Shiranui) da diết, mộng mị và sâu lắng tựa sóng biển đêm.',
      releaseDate: '22 / 07 / 2022',
    },
    {
      id: 'chitty-chitty-bang-bang',
      title: 'Chitty Chitty Bang Bang (Ya Boy Kongming! OP)',
      artist: 'QUEENDOM',
      originalArtist: 'QUEENDOM (Paripi Koumei OP)',
      youtubeId: 'NM_vpJOyQQ8',
      badge: 'ANIME OP',
      category: 'jpop',
      sweetDrink: 'Mocktail Disco Tiệc Tùng 🪩',
      description: 'Nhạc mở đầu Paripi Koumei cực kỳ bắt tai, cuốn hút và khiến người nghe muốn replay không ngừng.',
      releaseDate: '26 / 05 / 2022',
    },
    {
      id: 'daisy-crown',
      title: 'Daisy Crown (Wuthering Waves)',
      artist: 'Wuthering Waves OST',
      originalArtist: 'Wuthering Waves (Kuro Games)',
      youtubeId: 'DBqyHiP25gM',
      badge: 'SIGNATURE MOTIF',
      category: 'game-ost',
      sweetDrink: 'Trà Cúc Họa Mi Sương Sớm 🌼',
      description: 'Giai điệu thần tiên trong sáng từ Wuthering Waves gắn liền với biểu tượng vương miện cúc của Suri.',
      releaseDate: '17 / 04 / 2025',
    },
    {
      id: 'goodbye-declaration',
      title: 'Goodbye Declaration (グッバイ宣言)',
      artist: 'Chinozo',
      originalArtist: 'Chinozo ft. FloweR',
      youtubeId: 'E2fy3FMbnuM',
      badge: 'BIRTHDAY SPECIAL',
      category: 'jpop',
      sweetDrink: 'Soda Chanh Bạc Hà Nổi Loạn 🍋',
      description: 'Bản cover kỷ niệm sinh nhật tháng 10 của Suri với tiết tấu nhanh, tinh nghịch và sôi động.',
      releaseDate: '29 / 10 / 2022',
    },
    {
      id: 'suzume',
      title: 'Suzume (すずめ)',
      artist: 'RADWIMPS ft. Toaka',
      originalArtist: 'RADWIMPS ft. 十明 (Suzume OST)',
      youtubeId: 'D-ejcBLGG7c',
      badge: 'HEALING',
      category: 'jpop',
      sweetDrink: 'Trà Thảo Mộc Khóa Gió 🍃',
      description: 'Nhạc phim Suzume, khúc ca chữa lành những tổn thương và tiếp thêm niềm tin yêu đời.',
      releaseDate: '17 / 04 / 2023',
    },
    {
      id: 'cupid-fifty-fifty',
      title: 'Cupid (Korean + Japanese + English Ver)',
      artist: 'FIFTY FIFTY',
      originalArtist: 'FIFTY FIFTY',
      youtubeId: 'zBl6yeBRcKw',
      badge: 'MULTI-LANGUAGE',
      category: 'game-ost',
      sweetDrink: 'Trà Sữa Dâu Thần Tình Yêu 💘',
      description: 'Giai điệu K-Pop viral ngọt ngào thể hiện tài năng đa ngôn ngữ tươi vui và đáng yêu.',
      releaseDate: '01 / 05 / 2023',
    },
    {
      id: 'ghost-city-tokyo-short',
      title: 'Ghost City Tokyo (Short Ver)',
      artist: 'Ayase / YOASOBI',
      originalArtist: 'Ayase (YOASOBI)',
      youtubeId: '9-CGv_KpWYk',
      badge: 'SHORT VER',
      category: 'jpop',
      sweetDrink: 'Espresso Sương Khói Đêm ☕',
      description: 'Trích đoạn ngắn mộc mạc của Ghost City Tokyo trước khi hoàn thiện bản cover đầy đủ.',
      releaseDate: '20 / 03 / 2023',
    },
    {
      id: 'hope-is-the-thing-with-feathers',
      title: 'Hope Is the Thing with Feathers',
      artist: 'Robin (Honkai: Star Rail)',
      originalArtist: 'HOYO-MiX / Chevy (Robin - Honkai: Star Rail)',
      youtubeId: 'bkeTTMUekFA',
      badge: 'HOYO CREATOR',
      category: 'game-ost',
      sweetDrink: 'Sinh Tố Lông Vũ Hy Vọng 🪶',
      description: 'Ca khúc hy vọng của Robin từ Honkai: Star Rail ngân vang trong trẻo và thanh cao.',
      releaseDate: '15 / 06 / 2024',
    },
    {
      id: 'nguoi-ay',
      title: 'Người Ấy',
      artist: 'Trịnh Thăng Bình',
      originalArtist: 'Trịnh Thăng Bình',
      youtubeId: '5O9GoyiFLgs',
      badge: 'V-POP KARAOKE',
      category: 'vpop',
      sweetDrink: 'Trà Quế Mùa Thu Lắng Đọng 🍂',
      description: 'Trích đoạn karaoke cảm xúc mộc mạc gửi gắm nỗi niềm hoài niệm thân thuộc đến người nghe.',
      releaseDate: '17 / 10 / 2022',
    },
    {
      id: 'mat-moc-duet',
      title: 'Mặt Mộc (Viewer Duet)',
      artist: 'Phạm Nguyên Ngọc x VAnh',
      originalArtist: 'Phạm Nguyên Ngọc x VAnh',
      youtubeId: 'agDeuTsVXUE',
      badge: 'VIEWER DUET',
      category: 'vpop',
      sweetDrink: 'Cacao Nóng Valentine 🍫',
      description: 'Món quà Valentine ấm cúng qua bản song ca ngẫu hứng bất ngờ giữa Suri và khán giả xem stream.',
      releaseDate: '17 / 02 / 2023',
    },
    {
      id: 'double-take',
      title: 'Double Take',
      artist: 'dhruv',
      originalArtist: 'dhruv',
      youtubeId: 'XjcRvlfRzlc',
      badge: 'R&B CHILL',
      category: 'game-ost',
      sweetDrink: 'Cold Brew Vani Hoàng Hôn 🌅',
      description: 'Ca khúc R&B tiếng Anh êm đềm, chill nhẹ nhàng cắt từ buổi phát sóng hát trực tiếp.',
      releaseDate: '26 / 06 / 2022',
    },
    {
      id: 'hoc-tieng-meo-keu',
      title: 'Học Tiếng Mèo Kêu (学猫叫)',
      artist: 'Tiểu Phong Phong & Tiểu Phan Phan',
      originalArtist: 'Tiểu Phong Phong & Tiểu Phan Phan',
      youtubeId: 'qqjP0v320JU',
      badge: 'KAWAII',
      category: 'game-ost',
      sweetDrink: 'Sữa Tươi Kem Trứng Chân Mèo 🐾',
      description: 'Khoảnh khắc đáng yêu đốn tim người nghe chuẩn chất cô nàng slime tinh nghịch.',
      releaseDate: '02 / 02 / 2023',
    },
    {
      id: 'i-really-want-to-stay-at-your-house',
      title: 'I Really Want to Stay at Your House',
      artist: 'Rosa Walton',
      originalArtist: 'Rosa Walton (Cyberpunk: Edgerunners OST)',
      youtubeId: 'TgX1Y-G_bDA',
      badge: 'CYBERPUNK OST',
      category: 'game-ost',
      sweetDrink: 'Neon Cocktail Ánh Trăng 🌙',
      description: 'Bản tình ca định mệnh đẫm nước mắt của Lucy và David ngập tràn xúc cảm hoài niệm.',
      releaseDate: '03 / 10 / 2023',
    },
    {
      id: 'love-is-gone',
      title: 'Love Is Gone',
      artist: 'SLANDER ft. Dylan Matthew',
      originalArtist: 'SLANDER ft. Dylan Matthew',
      youtubeId: 'yn0N1JWcpeA',
      badge: 'ACOUSTIC',
      category: 'game-ost',
      sweetDrink: 'Trà Hoa Cúc Mật Ong Giữ Ấm 🍯',
      description: 'Khúc acoustic da diết chạm đến từng ngõ ngách tâm hồn bằng sự mộc mạc và chân thành.',
      releaseDate: '24 / 03 / 2023',
    },
    {
      id: 'magnetic-illit',
      title: 'Magnetic (Short Ver)',
      artist: 'ILLIT',
      originalArtist: 'ILLIT',
      youtubeId: 'NtcpgekO2WU',
      badge: 'K-POP SHORT',
      category: 'game-ost',
      sweetDrink: 'Soda Nam Châm Việt Quất 🧲',
      description: 'Trào lưu Magnetic cực hút và năng động với tiết tấu K-Pop hiện đại tươi trẻ.',
      releaseDate: '04 / 06 / 2024',
    },
    {
      id: 'pretender-acoustic',
      title: 'Pretender (Acoustic Ver)',
      artist: 'Official HIGE DANdism',
      originalArtist: 'Official HIGE DANdism (Official髭男dism)',
      youtubeId: 'a15kXFDC6f0',
      badge: 'SIGNATURE VOCAL',
      category: 'jpop',
      sweetDrink: 'Trà Ô Long Rang Đậm Vị 🍵',
      description: 'Bản tình ca bất hủ cất lên với tiếng guitar mộc mạc và chất giọng nội lực truyền cảm.',
      releaseDate: '30 / 10 / 2023',
    },
    {
      id: 'finale-eill',
      title: 'Finale (フィナーレ。)',
      artist: 'eill',
      originalArtist: 'eill (Đường Hầm Tới Mùa Hè OST)',
      youtubeId: 'WOB7KAI5GAU',
      badge: 'MOVIE OST',
      category: 'jpop',
      sweetDrink: 'Nước Ép Táo Mùa Hè 🍏',
      description: 'Khúc hát kết phim xao xuyến trong veo từ Đường Hầm Tới Mùa Hè, Lối Thoát Của Sự Biệt Ly.',
      releaseDate: '06 / 08 / 2024',
    },
    {
      id: 'wilt-voez',
      title: 'Wilt',
      artist: 'sakuzyo (VOEZ)',
      originalArtist: 'VOEZ (Rayark Games)',
      youtubeId: 'vE8eMF8lmHQ',
      badge: 'RHYTHM GAME',
      category: 'game-ost',
      sweetDrink: 'Soda Tinh Thể Pha Lê 💎',
      description: 'Giai điệu game âm nhạc huyền ảo với những nốt ngân cao vút và nhịp phách mê hoặc.',
      releaseDate: '27 / 07 / 2025',
    },
    {
      id: 'nang-tho',
      title: 'Nàng Thơ',
      artist: 'Hoàng Dũng',
      originalArtist: 'Hoàng Dũng',
      youtubeId: 'hOCt6VYIYUk',
      badge: 'SIGNATURE BALLAD',
      category: 'vpop',
      sweetDrink: 'Trà Hoa Cúc Mật Ong Ấm Áp 🌼',
      description: 'Khúc tình ca lãng mạn cất lên bằng chất giọng ngọt ngào, sâu lắng như làn nước mùa thu.',
      releaseDate: '10 / 06 / 2021',
    },
    {
      id: 'dao-buoc-hong-kong-1999',
      title: 'Dạo Bước Hong Kong 1999 (香港漫步)',
      artist: 'Hong Kong 1999',
      originalArtist: 'Hong Kong 1999',
      youtubeId: 'AKqThDXKtTw',
      badge: 'RETRO CITY POP',
      category: 'game-ost',
      sweetDrink: 'Trà Sữa Uyên Ương Cổ Điển 🇭🇰',
      description: 'Giai điệu phong cách City Pop lãng đãng đưa người nghe lạc về Hong Kong thập niên 90.',
      releaseDate: '01 / 05 / 2026',
    },
    {
      id: 'anata-no-soba-ni',
      title: 'Anata no Soba ni (あなたの側に)',
      artist: 'Riria',
      originalArtist: 'Riria (Hôn Nhân Hạnh Phúc Của Tôi OST)',
      youtubeId: 'xOGEQhDEmBA',
      badge: 'ANIME THEME',
      category: 'jpop',
      sweetDrink: 'Trà Hoa Anh Đào Mật Ong 🌸',
      description: 'Ca khúc chủ đề anime My Happy Marriage ngập tràn sự dịu dàng và che chở yêu thương.',
      releaseDate: '19 / 09 / 2023',
    },
    {
      id: 'sway-to-my-beat-in-cosmos',
      title: 'Sway to My Beat in Cosmos',
      artist: 'Robin (Honkai: Star Rail)',
      originalArtist: 'HOYO-MiX / Chevy (Robin - Honkai: Star Rail)',
      youtubeId: '2gPBD8-FnJ0',
      badge: 'HOYO CREATOR',
      category: 'game-ost',
      sweetDrink: 'Nước Ép Thiên Hà Lấp Lánh 🌌',
      description: 'Ca khúc vũ trụ rực rỡ của Robin, mang lại niềm hân hoan và nguồn năng lượng bất tận.',
      releaseDate: '15 / 06 / 2024',
    },
    {
      id: 'teaser-ly-dao-chi-ca',
      title: 'Ly Đảo Chi Ca (Official Teaser)',
      artist: 'Onmyoji OST',
      originalArtist: 'Âm Dương Sư (Shiranui Theme)',
      youtubeId: 'SPr4eWEtatc',
      badge: 'TEASER',
      category: 'collab',
      sweetDrink: 'Nước Biển Sâu Bất Tri Hỏa 🌊',
      description: 'Đoạn giới thiệu bí ẩn hé lộ dự án âm nhạc chủ đề Bất Tri Hỏa trước thềm phát hành.',
      releaseDate: '19 / 07 / 2022',
    },
    {
      id: 'free-kpop-demon-hunters',
      title: 'FREE (Kpop Demon Hunters)',
      artist: 'Suri Mukeki & Yama Aki',
      originalArtist: 'Kpop Demon Hunters',
      youtubeId: 'ObVUZqkmh_c',
      badge: 'SPECIAL COLLAB',
      category: 'collab',
      sweetDrink: 'Soda Nho Đen Diệt Quỷ 🍇',
      description: 'Bản hợp tác bùng nổ phong cách hành động cá tính cùng khách mời Yama Aki.',
      releaseDate: '05 / 10 / 2025',
    },
    {
      id: 'nguoi-am-phu',
      title: 'Người Âm Phủ',
      artist: 'OSAD',
      originalArtist: 'OSAD',
      youtubeId: 'Mut0Wyvov7Q',
      badge: 'STREAM MOMENT',
      category: 'collab',
      sweetDrink: 'Trà Đào Thả Thính 🍑',
      description: 'Khoảnh khắc đệ tử OSủi cover thả thính cực kỳ hóm hỉnh và dễ thương trên stream.',
      releaseDate: '11 / 07 / 2021',
    },
    {
      id: 'uchiage-hanabi',
      title: 'Uchiage Hanabi (打上花火)',
      artist: 'Suri Mukeki & Sofieru',
      originalArtist: 'DAOKO x Kenshi Yonezu',
      youtubeId: 'BHE5cKNqDNk',
      badge: 'SPECIAL DUET',
      category: 'collab',
      sweetDrink: 'Cocktail Pháo Hoa Mùa Hè 🎆',
      description: 'Pháo hoa mùa hè rực sáng trong bản hòa ca tuyệt đẹp giữa Suri Mukeki và Sofieru.',
      releaseDate: '19 / 06 / 2026',
    },
    {
      id: 'ghost-city-tokyo-full',
      title: 'Ghost City Tokyo (幽霊東京) - Full Ver',
      artist: 'Ayase / YOASOBI',
      originalArtist: 'Ayase (YOASOBI)',
      youtubeId: 'fcajPrHVwSs',
      badge: 'FULL COVER',
      category: 'jpop',
      sweetDrink: 'Lam Điệp Đêm Tokyo 🏙️',
      description: 'Bản trình diễn trọn vẹn tái hiện màn đêm Tokyo cô đơn mà ngập tràn ánh sáng hy vọng.',
      releaseDate: '08 / 09 / 2025',
    },
    {
      id: 'spoiler-goodbye-declaration',
      title: 'Goodbye Declaration (Birthday Spoiler)',
      artist: 'Chinozo',
      originalArtist: 'Chinozo ft. FloweR',
      youtubeId: 'OxB0vpflV2c',
      badge: 'TEASER',
      category: 'collab',
      sweetDrink: 'Tách Trà Bí Mật Sinh Nhật 🎂',
      description: 'Clip ngắn hé lộ bí mật trước ngày sinh nhật cho cú nổ cover Goodbye Declaration.',
      releaseDate: '24 / 10 / 2022',
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
  alias: 'Independent VTuber // Suwi & Suri Mukeki',
  title: 'VTuber Việt Nam Hoạt Động Độc Lập',
  subtitle: 'OFFICIAL VTUBER DOSSIER // SURI MUKEKI',
  quote:
    '"Dù ở bất kỳ thế giới nào, mình vẫn muốn gửi trao những cánh thư ấm áp, hát và sẻ chia những khoảnh khắc vui tươi nhất cùng các bạn!"',
  cafeWelcome:
    'Chào mừng bạn ghé thăm tiệm cafe của Suri Mukeki! Nơi bạn có thể nghe nhạc thư giãn và trò chuyện sau một ngày dài.',
  profile: {
    species: 'VTuber độc lập (Tạo hình Elf đưa thư Suwi / Slime nước)',
    birthday: '30 / 10',
    height: "155 cm (5'1\")",
    weight: '40 kg',
    zodiac: 'Thiên Yết (Scorpio)',
    debutDate: '17 / 04 / 2021',
    fanName: 'Sureiya / Slayer',
    representativeEmojis: '🍮 🦋 ⚡ ✉️ 🌸',
    favoriteTreats: ['Matcha latte', 'Bánh ngọt (Cake)', 'Bánh Flan (Caramel Flan)', 'Mèo & Hoa'],
    content: ['Gaming (Where Winds Meet, LoL, Valorant)', 'Trò chuyện & Tâm sự', 'Singing / Covers', '3D ASMR', 'Cosplay & Tarot'],
    languages: ['Tiếng Việt (Bản ngữ)', 'English', '日本語 (Sơ cấp)'],
    hashtags: {
      general: '#SuriMukeki',
      live: '#Suristream',
      fanart: '#Surillust',
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
    twitter: 'https://twitter.com/SuriMukeki',
    discord: 'https://discord.gg/surimukeki',
    facebook: 'https://www.facebook.com/NotABadSlime.Hehe',
    tiktok: 'https://www.tiktok.com/@surivchuba?lang=vi-VN',
    marshmallow: 'https://marshmallow-qa.com/surimukeki',
  },
};

export const MOTIFS_DATA: MotifItem[] = [
  {
    id: 'sovereign',
    name: 'Model 3.0 Sweet Sovereign',
    subtitle: 'VIOLET TARO & CARAMEL ELEGANCE',
    flavor: 'Hương vị Khoai Môn & Sốt Caramel Quý Phái',
    badge: 'LIVE2D MASTER MODEL',
    image: '/images/characters/suri_cutout_transparent.png',
    highlight: 'Biểu tượng: Đầm dạ hội tím pastel, hoa tai lấp lánh và chiếc nơ bướm mềm mại',
    description:
      'Phiên bản tạo hình Live2D Model 3.0 ra mắt năm 2023 bởi họa sĩ T_blence và rigger Sophiel với trang phục gothic hoàng gia và đầm tím quý phái.',
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
    highlight: 'Biểu tượng: Những biểu cảm chibi nhí nhảnh, mọc tay chân tinh nghịch',
    description:
      'Bộ doodle màu sắc và tạo hình chibi đáng yêu gắn liền với video "Suri mọc tay chân rồi", ghi lại từng khoảnh khắc đời thường vui tươi của Suri.',
    element: 'mint',
  },
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    chapterNumber: 'TẬP I',
    title: 'Chiếc Bánh Flan Đầu Tiên Nơi Nhân Thế',
    subtitle: 'The Genesis of the Translucent Water Slime',
    leadQuote: '"Dù không sinh ra trong hình hài con người, mình vẫn muốn nếm thử vị ngọt của những chiếc bánh thơm và kết nối cùng mọi người."',
    provenance: 'DOCUMENTED_LORE',
    paragraphs: [
      'Suri thức tỉnh từ một bé slime nước bình dị nơi hồ nước ma thuật. Nhận ra thể lỏng trong suốt khiến mình khó trò chuyện hay nếm thử vị ngọt của những chiếc bánh trần gian, cô mượn hình bóng thiếu nữ để cất tiếng chào đầu tiên.',
      'Từ buổi stream debut ngày 17/04/2021, cái tên Suri Mukeki bắt đầu đồng hành cùng người xem qua từng câu chuyện nhỏ đời thường.',
    ],
    footerNote: 'Hồ sơ khởi nguyên // Debut ngày 17.04.2021',
    illustration: '/images/characters/suri_cutout_transparent.png',
    accentColor: 'taro',
  },
  {
    chapterNumber: 'TẬP II',
    title: 'Tia Chớp Irus & Vị Soda Dị Giới',
    subtitle: 'The Twin Spark of Thunder and Water',
    leadQuote: '"Nước êm dịu vỗ về, còn sấm sét tiếp thêm sự sôi nổi và nhiệt huyết cho mỗi đêm phát sóng."',
    provenance: 'DOCUMENTED_LORE',
    paragraphs: [
      'Trong huyền sử năm 2021, linh hồn phân tách thành hai nửa: Suri dịu dàng hệ nước và bản thể Irus mang nguyên tố sấm sét uy phong sau 300 năm phong ấn.',
      'Hai cá tính đối lập cùng chia sẻ tình cảm dành cho cộng đồng Slayer, thỉnh thoảng cùng xuất hiện trong các bài hát đôi và sự kiện đại nhạc hội.',
    ],
    footerNote: 'Hồ sơ bản thể song trùng // Ra mắt 12.10.2021',
    illustration: '/images/characters/irus_alter_full.webp',
    accentColor: 'berry',
  },
  {
    chapterNumber: 'TẬP III',
    title: 'Model 3.0 & Vương Quốc Bánh Ngọt Trưởng Thành',
    subtitle: 'The Sovereign Evolution of 2023',
    leadQuote: '"Mỗi chiếc nơ hay viền áo mới đều chứa đựng tình cảm và sự đồng hành của Sureiya suốt chặng đường qua."',
    provenance: 'DOCUMENTED_LORE',
    paragraphs: [
      'Đầu năm 2023, Suri ra mắt Model 3.0 do T_blence minh họa và Sophiel rigging. Bộ đầm tím cùng hệ thống biểu cảm phong phú giúp Suri tự tin thể hiện cảm xúc trong các buổi stream âm nhạc và giao lưu.',
      'Đây là cột mốc Live2D đáng nhớ, gắn liền với những buổi stream kỷ niệm và những ca khúc cover được yêu thích.',
    ],
    footerNote: 'Cột mốc Live2D // Model 3.0 ra mắt 21.01.2023',
    illustration: '/images/characters/suri_model3.webp',
    accentColor: 'pudding',
  },
  {
    chapterNumber: 'TẬP IV',
    title: 'Suwi & Tinh Linh Đồng Hành WingWing',
    subtitle: 'The Time-Traveling Elf Mail-Carrier & Spirit of Love',
    leadQuote: '"Cô bé elf đưa thư vượt thời gian, mang hy vọng gửi trao những điều chưa từng được nói tới đúng người cần nhận."',
    provenance: 'DOCUMENTED_LORE',
    paragraphs: [
      'Theo bài ghim chính thức của Suri Mukeki, Suwi là cô bé elf đưa thư vượt qua ranh giới thời gian. Sứ mệnh của cô là chuyển những lá thư chở đầy tâm tư đến đúng tay người nhận, dù đôi khi còn chút vụng về.',
      'Đồng hành cùng Suwi là WingWing, chú tinh linh nhỏ kết tinh từ tình cảm của những chú slime mà Suwi từng che chở.',
      'Ghi chú: Cốt truyện Suwi và huyền thoại Suri/Irus 2021 được ghi nhận song song từ các buổi phát sóng và bài viết chính thức của tác giả.',
    ],
    footerNote: 'Thiết lập chính thức bài ghim // Design: Hare_ta06 • Model: Nina Meow Meow • Pet: kuo0 • Rig: Suwaa Hakirin',
    illustration: '/images/characters/suri_art_25.png',
    accentColor: 'taro',
  },
];

export const TIMELINE_DATA: MilestoneItem[] = [
  {
    date: '12 / 04 / 2021',
    year: '2021',
    title: 'Khúc Ca Khởi Đầu "Only Love"',
    category: 'MUSIC',
    badge: 'FIRST COVER',
    description: 'Bản cover đầu tiên trên kênh, mở đầu hoạt động âm nhạc của Suri.',
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
    description: 'Bản thể song trùng Irus với phong cách sấm sét cá tính chính thức xuất hiện.',
    sourceNote: 'Tiêu đề stream debut Irus',
    stickerEmoji: '⚡',
  },
  {
    date: '25 / 05 / 2022',
    year: '2022',
    title: 'Model 2.0: Diện Mạo Mới Vị Vua Năm Xưa',
    category: 'MODEL',
    badge: 'EVOLUTION 2.0',
    description: 'Nâng cấp tạo hình Model 2.0, đánh dấu lần hợp tác đầu tiên với họa sĩ Turbulence (T_blence).',
    sourceNote: 'Model 2.0 reveal stream',
    stickerEmoji: '👑',
  },
  {
    date: '21 / 01 / 2023',
    year: '2023',
    title: 'Model 3.0 "Suri Hàng Hiệu" Cập Bến',
    category: 'MODEL',
    badge: 'MASTER MODEL 3.0',
    description: 'Mô hình Live2D tiêu biểu với đầm tím quý phái do T_blence minh họa và Sophiel rigging.',
    sourceNote: 'Model 3.0 reveal stream',
    stickerEmoji: '💜',
  },
  {
    date: '2024',
    year: '2024',
    title: 'Model Chibi: "Suri Mọc Tay Chân Rồi"',
    category: 'MODEL',
    badge: 'CHIBI MODEL',
    description: 'Tạo hình Chibi ngộ nghĩnh ra mắt trong video ngắn "Suri mọc tay chân rồi", mang lại nhiều tiếng cười cho người xem.',
    sourceNote: 'YouTube Shorts (_L-W2IQF_80)',
    stickerEmoji: '🐾',
  },
  {
    date: '2024',
    year: '2024',
    title: 'Tạo Hình Elf Đưa Thư Suwi & Tinh Linh WingWing',
    category: 'MODEL',
    badge: 'OFFICIAL PINNED',
    description: 'Thiết lập nhân vật chính thức theo bài ghim: Elf đưa thư Suwi (Design: Hare_ta06, Model: Nina Meow Meow, Rigging: Suwaa Hakirin) cùng tinh linh WingWing (Pet Design: kuo0).',
    sourceNote: 'Bài ghim Facebook chính thức',
    stickerEmoji: '✉️',
  },
  {
    date: '05 / 09 / 2026',
    year: '2026',
    title: 'Debut Model 3D: "Hãy Đến Quán Cafe Của Tớ!!"',
    category: 'MODEL',
    badge: '3D DEBUT',
    description: 'Buổi livestream ra mắt mô hình nhân vật 3D do Hasukatsu thực hiện.',
    sourceNote: 'YouTube Stream Debut (NFTrWHiWYHs)',
    stickerEmoji: '☕',
  },
  {
    date: 'Hiện Tại',
    year: '2026',
    title: 'Mái Nhà 51,400+ Thành Viên Slayer',
    category: 'MILESTONE',
    badge: 'COMMUNITY',
    description: 'Kênh YouTube đạt hơn 51,400 người theo dõi, chào đón thêm nhiều bạn mới ghé thăm mỗi tuần.',
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
    description: 'Suri bay lượn giữa bầu trời xanh thẳm, mang theo những lá thư chan chứa yêu thương cùng tinh linh đồng hành WingWing.',
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
    title: 'Model 3.0 Bản Công Bố Reveal',
    category: 'Model 3.0',
    badge: 'EXPRESSION VARIANT',
    image: '/images/characters/suri_model3_noglasses.webp',
    creator: 'T_blence & Sophiel',
    year: '2023',
    description: 'Bản vẽ giới thiệu cận cảnh gương mặt sắc nét và thần thái cuốn hút trong sự kiện ra mắt Model 3.0.',
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
    description: 'Bản vẽ thiết kế kỹ thuật phân tích kết cấu trang phục, nơ áo, viền ren và phụ kiện bởi Design Artist @Hare_ta06.',
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
      "Suri từng chia sẻ mong muốn tìm hiểu thân thế của thiếu nữ và người ký tên 'W' (có thể là một người bạn thuở nhỏ, người giám hộ, hay ai đó nắm giữ bí mật chuyển sinh).",
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
      'Quá trình chuyển sinh tự tách thành hai cực đối xứng: Suri đại diện cho tính Thủy (nhu, dịu dàng, âm nhạc) và Irus đại diện cho tính Lôi (cương, quyết đoán, ánh sáng, tốc độ).',
      'Dù mang tính cách trái ngược, cả hai đều chia sẻ cùng một tâm hồn và bảo bọc lẫn nhau trong các buổi phát sóng.',
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
      'Huyền sử ghi nhận Irus từng là người cai trị một vương quốc cổ xưa. Sau 300 năm bị phong ấn bởi cấm thuật, sự xuất hiện ngẫu nhiên của một sinh vật slime điện đã vô tình phá vỡ kết giới và dung hợp linh hồn quân vương vào thân xác mới.',
      'Bản thể Irus thức tỉnh mang theo sức mạnh sấm sét và phong thái dứt khoát trên sân khấu biểu diễn.',
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
    description: 'Bản cover nhịp điệu dồn dập, thể hiện chất giọng sắc nét và dứt khoát của Suri.',
    badge: 'SIGNATURE VOCAL',
    sweetDrink: 'Trà Đào Sủi Bọt Hoàng Gia 👑',
  },
  {
    id: 'yoru-ni-kakeru',
    title: 'Yoru ni Kakeru (夜に駆ける)',
    originalArtist: 'YOASOBI',
    releaseDate: '09 / 04 / 2022',
    youtubeId: 'cN9evcBtnjo',
    description: 'Giai điệu J-Pop quen thuộc của YOASOBI được Suri cover với nhịp điệu tươi tắn, tự nhiên.',
    badge: 'FAN FAVORITE',
    sweetDrink: 'Sinh Tố Dâu Đêm Trăng 🍓',
  },
  {
    id: 'nang-tho',
    title: 'Nàng Thơ',
    originalArtist: 'Hoàng Dũng',
    releaseDate: '10 / 06 / 2021',
    youtubeId: 'hOCt6VYIYUk',
    description: 'Ca khúc ballad quen thuộc của Hoàng Dũng được Suri thể hiện mộc mạc và sâu lắng.',
    badge: 'ACOUSTIC BALLAD',
    sweetDrink: 'Trà Hoa Cúc Mật Ong Ấm Áp 🌼',
  },
  {
    id: 'renai-circulation',
    title: 'Renai Circulation (恋愛サーキュレーション)',
    originalArtist: 'Hanazawa Kana',
    releaseDate: '24 / 05 / 2021',
    youtubeId: 'tytmMA1YKwU',
    description: 'Bản cover ngọt ngào, đáng yêu chuẩn phong cách anime.',
    badge: 'KAWAII CLASSIC',
    sweetDrink: 'Sữa Tươi Trân Châu Đường Đen 🍮',
  },
  {
    id: 'only-love',
    title: 'Only Love',
    originalArtist: 'Trademark',
    releaseDate: '12 / 04 / 2021',
    youtubeId: 'is6t-GzkyMk',
    description: 'Bản cover đầu tiên trên kênh, đánh dấu những ngày đầu Suri làm quen với người nghe.',
    badge: 'DEBUT COVER',
    sweetDrink: 'Tách Vanilla Nóng Đầu Tiên ☕',
  },
  {
    id: 'bocca-della-verita',
    title: 'Bocca della Verità (ボッカデラベリタ)',
    originalArtist: 'Hiiragi Kirai',
    releaseDate: '09 / 04 / 2022',
    youtubeId: 'bw9Y9Ht-kVA',
    description: 'Thử sức với phong cách nhạc dồn dập, ma mị và cá tính.',
    badge: 'DARK SPARK',
    sweetDrink: 'Soda Việt Quất Tia Chớp ⚡',
  },
];

export const CREDITS_DATA: CreditGroup[] = [
  {
    role: 'Official Character & Pet Design (Bài ghim chính thức)',
    label: 'Tạo hình Elf đưa thư Suwi & Tinh linh WingWing',
    people: [
      { name: 'Hare_ta06', handle: '@Hare_ta06', note: 'Design Artist (Thiết kế tạo hình Suwi)' },
      { name: 'Nina Meow Meow', handle: 'Nina Meow Meow', note: 'Model Artist (Vẽ model nhân vật Suwi)' },
      { name: 'kuo0', handle: '@kuo0', note: 'Pet Design Artist (Thiết kế tinh linh WingWing)' },
      { name: 'Suwaa Hakirin', handle: 'Suwaa Hakirin', note: 'Rigger Artist (Rigging chuyển động Suwi)' },
    ],
  },
  {
    role: '3D Modeling (Mô hình 3D)',
    label: 'Mô hình 3D nhân vật (Debut 05/09/2026)',
    people: [
      { name: 'Hasukatsu', handle: 'Hasukatsu', note: '3D Modeler (Thiết kế mô hình 3D nhân vật, ra mắt 05/09/2026)' },
    ],
  },
  {
    role: 'Character Design & Illustration (Live2D Lineage)',
    label: 'Họa sĩ tạo hình các thế hệ Live2D',
    people: [
      { name: 'T_blence (Turbulence)', handle: '@T_blence', url: 'https://twitter.com/T_blence', note: 'Model 3.0 (2023) & Model 2.0 (2022) Illustrator' },
      { name: 'kcomorebi', handle: '@kcomorebi', url: 'https://twitter.com/kcomorebi', note: 'Model 1.0 Debut (2021) Illustrator' },
    ],
  },
  {
    role: 'Live2D Rigging & Motion (Live2D Lineage)',
    label: 'Kỹ thuật rigging chuyển động các thế hệ Live2D',
    people: [
      { name: 'Sophiel', handle: '@Sophielpaka', url: 'https://twitter.com/Sophielpaka', note: 'Model 3.0 Live2D Rigger' },
      { name: 'Truong Thanh Tan', note: 'Model 1.0 Live2D Rigger' },
    ],
  },
  {
    role: 'Official Creator & Voice',
    label: 'Cô chủ tiệm & Giọng hát trung tâm',
    people: [
      { name: 'Suri Mukeki', handle: '@surimukeki', url: 'https://www.youtube.com/@surimukeki', note: 'Independent VTuber (VTuber độc lập)' },
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
