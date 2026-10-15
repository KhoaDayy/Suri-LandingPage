export interface CharacterProfile {
  codeName: string;
  name: string;
  displayName: string;
  japaneseName: string;
  alias: string;
  title: string;
  subtitle: string;
  quote: string;
  profile: {
    species: string;
    birthday: string;
    height: string;
    weight: string;
    zodiac: string;
    debutDate: string;
    fanName: string;
    representativeEmojis: string;
    content: string[];
    languages: string[];
    hashtags: {
      general: string;
      live: string;
      fanart: string;
      community: string;
    };
  };
  assets: {
    heroCutout: string;
    heroCutoutNoGlasses: string;
    model2: string;
    irusFull: string;
    irusSheet: string;
    debutModel: string;
    portrait: string;
  };
  officialLinks: {
    youtube: string;
    twitter: string;
    discord: string;
    carrd: string;
    marshmallow: string;
    facebook: string;
  };
}

export interface MotifItem {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  badge: string;
  image: string;
  highlight: string;
  description: string;
  element: 'water' | 'lightning' | 'sovereign';
}

export interface StoryChapter {
  chapterNumber: string;
  title: string;
  subtitle: string;
  leadQuote: string;
  provenance: 'CONFIRMED' | 'COMMUNITY_REPORTED' | 'DOCUMENTED_LORE';
  paragraphs: string[];
  footerNote: string;
  characterIllustration: string;
  accentElement: 'cyan' | 'violet' | 'rose';
}

export interface MilestoneItem {
  date: string;
  year: string;
  title: string;
  category: 'DEBUT' | 'MODEL' | 'MILESTONE' | 'LORE' | 'MUSIC';
  badge: string;
  description: string;
  sourceNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Model 3.0' | 'Irus Alter' | 'Historical' | 'Reference Sheet';
  badge: string;
  image: string;
  creator: string;
  year: string;
  description: string;
}

export interface LoreFile {
  fileId: string;
  code: string;
  title: string;
  classification: 'ARCHIVAL CASE FILE' | 'COMMUNITY TRANSCRIPTION' | 'UNRESOLVED INQUIRY';
  status: 'UNRESOLVED' | 'COMMUNITY-REPORTED' | 'CANONICAL RECORD';
  summary: string;
  content: string[];
  investigativeNote: string;
}

export interface CoverItem {
  id: string;
  title: string;
  originalArtist: string;
  releaseDate: string;
  youtubeId: string;
  description: string;
  badge: string;
}

export interface CreditGroup {
  role: string;
  label: string;
  people: { name: string; handle?: string; url?: string; note?: string }[];
}

export const SURI_DATA: CharacterProfile = {
  codeName: "SPECIMEN_001 // SURI_MUKEKI",
  name: "Suri Mukeki",
  displayName: "SURI MUKEKI",
  japaneseName: "無敵・スリ",
  alias: "The Ethereal Slime & The Lightning Sovereign",
  title: "Nàng Thủy Tinh & Sấm Sét Dị Giới",
  subtitle: "INDEPENDENT VTUBER // OFFICIAL CHARACTER SHOWCASE",
  quote: "“Dù là một con slime nhỏ bé trôi dạt giữa hai thế giới, mình vẫn muốn hát, muốn cười và lưu lại từng ký ức ấm áp nhất cùng các bạn.”",
  profile: {
    species: "Water Slime (Humanoid Form) / Lightning Slime Alter (Irus)",
    birthday: "30 / 10",
    height: "155 cm (5'1\")",
    weight: "40 kg",
    zodiac: "Thiên Yết (Scorpio)",
    debutDate: "17 / 04 / 2021",
    fanName: "Sureiya / Slayer",
    representativeEmojis: "🦋 🍮 ⚡ 🌊",
    content: ["Gaming", "Free Talk", "Singing / Covers", "3D ASMR"],
    languages: ["Tiếng Việt (Bản ngữ)", "English", "日本語 (Sơ cấp)"],
    hashtags: {
      general: "#SuriMukeki",
      live: "#Suristream",
      fanart: "#SuriArt",
      community: "#Sureiya",
    },
  },
  assets: {
    heroCutout: "/images/characters/suri_model3.webp",
    heroCutoutNoGlasses: "/images/characters/suri_model3_noglasses.webp",
    model2: "/images/characters/suri_model2.webp",
    irusFull: "/images/characters/irus_alter_full.webp",
    irusSheet: "/images/gallery/irus_reference_sheet.webp",
    debutModel: "/images/characters/suri_debut_model.webp",
    portrait: "/images/characters/suri_portrait.webp",
  },
  officialLinks: {
    youtube: "https://www.youtube.com/@surimukeki",
    twitter: "https://x.com/SuriMukeki",
    discord: "https://discord.gg/3ZMKCZzFBG",
    carrd: "https://surimukeki.carrd.co/",
    marshmallow: "https://marshmallow-qa.com/surimukeki",
    facebook: "https://www.facebook.com/NotABadSlime.Hehe/",
  },
};

export const MOTIFS_DATA: MotifItem[] = [
  {
    id: "sovereign",
    name: "Suri Mukeki Model 3.0",
    subtitle: "SOVEREIGN FORM // THE VIOLET REBIRTH",
    type: "CANONICAL MAIN FORM",
    badge: "CURRENT ACTIVE MODEL",
    image: "/images/characters/suri_model3.webp",
    highlight: "Biểu tượng: Sự trưởng thành thanh lịch, kính gọng tri thức & y phục dạ hội đen tím",
    description: "Phiên bản thiết kế đỉnh cao ra mắt năm 2023 bởi họa sĩ T_blence và rigger Sophiel. Tạo hình toát lên vẻ quyến rũ, điềm đạm với mái tóc dài uốn lượn, phụ kiện tinh xảo và thần thái tự tin của một VTuber kỳ cựu.",
    element: "sovereign",
  },
  {
    id: "irus",
    name: "Irus (Suri Alter)",
    subtitle: "THE LIGHTNING MONARCH // THUNDER SLIME",
    type: "ALTERNATE SOUL IDENTITY",
    badge: "CANONICAL ALTER FORM",
    image: "/images/characters/irus_alter_full.webp",
    highlight: "Biểu tượng: Bản thể sấm sét, vương quyền cổ xưa & ngọn lửa chiến binh kiên định",
    description: "Bản thể song trùng mang tên Irus ra mắt vào tháng 10 năm 2021. Trái ngược với nét dịu êm của nước, Irus sở hữu nguồn năng lượng sấm sét cuồng nhiệt và sắc sảo, đại diện cho ý chí quật cường của một vị vua đã vượt qua 300 năm phong ấn.",
    element: "lightning",
  },
  {
    id: "water_slime",
    name: "Water Slime Essence",
    subtitle: "ORIGIN MATRIX // THE TRANSLUCENT HEART",
    type: "ROOT MYTHOLOGY",
    badge: "DEBUT CORE IDENTITY",
    image: "/images/characters/suri_portrait.webp",
    highlight: "Biểu tượng: Giọt nước thanh khiết, sự mềm mại dễ thích nghi & tình cảm ấm áp",
    description: "Bản chất nguyên thủy là một sinh vật slime hệ nước chuyển sinh sang thế giới loài người. Không mang vũ khí hủy diệt, Suri chọn giọng hát trong trẻo và nụ cười hiền hòa để chữa lành những tâm hồn đơn độc nơi cõi mạng.",
    element: "water",
  },
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    chapterNumber: "CHƯƠNG I",
    title: "Khởi Sinh & Dáng Hình Nhân Thế",
    subtitle: "The Awakening of the Translucent Slime",
    leadQuote: "“Ta không sinh ra dưới hình hài hoàn hảo của con người, nhưng trái tim này rung động trước từng hơi thở của trần gian.”",
    provenance: "DOCUMENTED_LORE",
    paragraphs: [
      "Trong dòng chảy bất tận giữa các chiều không gian, có một linh hồn nhỏ bé tỉnh giấc trong thân xác của loài slime hệ nước. Không có quyền năng chấn động trời đất, không mang theo ký ức huy hoàng, chỉ có một nỗi hiếu kỳ thuần khiết về thế giới xung quanh.",
      "Vô tình bắt gặp hình bóng của một thiếu nữ nơi nhân gian, con slime ấy nhận ra rằng nếu giữ nguyên thể lỏng trong suốt, nó sẽ mãi mãi chỉ là một lữ khách cô độc không thể trò chuyện cùng ai. Nó quyết định biến chuyển hình dạng, mượn lấy diện mạo của con người để cất lên tiếng nói đầu tiên.",
      "Và từ đó, cái tên Suri Mukeki bắt đầu vang lên như một lời chào ngập ngừng nhưng chân thành gửi tới thế gian.",
    ],
    footerNote: "Trích xuất hồ sơ khởi nguyên // Debut ngày 17.04.2021",
    characterIllustration: "/images/characters/suri_debut_model.webp",
    accentElement: "cyan",
  },
  {
    chapterNumber: "CHƯƠNG II",
    title: "Bản Thể Song Trùng — Sấm Sét Irus",
    subtitle: "The Lightning Monarch & The Broken Seal",
    leadQuote: "“Nếu nước là sự chở che dịu mát, thì sấm sét chính là nhát kiếm rẽ tan màn đêm giông bão.”",
    provenance: "DOCUMENTED_LORE",
    paragraphs: [
      "Thế nhưng, sự phân tách của số mệnh không dừng lại ở làn nước êm đềm. Khi chuyển sinh, linh hồn ấy đã vô tình tách làm hai cực đối nghịch: một Suri dịu dàng hệ nước, và một Irus uy dũng mang nguyên tố sấm sét.",
      "Theo truyền thuyết được lưu truyền qua các phiên live, Irus từng là một vị quân vương trị vì vương quốc thịnh vượng, bị kẻ thù ganh ghét phong ấn suốt 300 năm dài dằng dặc. Khi phong ấn rạn nứt và hòa quyện cùng slime điện, Irus tỉnh dậy để tìm kiếm bản ngã thất lạc.",
      "Cuộc hội ngộ định mệnh giữa Suri và Irus không dẫn đến sự hủy diệt như dự ngôn của các giáo phái bí ẩn. Thay vì giao tranh để đoạt lấy quyền năng duy nhất, hai bản thể chọn đứng cạnh nhau như đôi cánh của cùng một linh hồn — cùng lắng nghe, cùng bảo vệ và cùng đồng hành.",
    ],
    footerNote: "Hồ sơ dị thể Irus // Ra mắt model ngày 12.10.2021",
    characterIllustration: "/images/characters/irus_alter_full.webp",
    accentElement: "violet",
  },
  {
    chapterNumber: "CHƯƠNG III",
    title: "Tiếng Hát Kết Nối & Vương Quốc Sureiya",
    subtitle: "The Sovereign Stage of Model 3.0",
    leadQuote: "“Ánh đèn sân khấu bật sáng, mọi cô đơn khép lại. Đây không chỉ là câu chuyện của riêng Suri, mà là mái nhà của tất cả chúng ta.”",
    provenance: "CONFIRMED",
    paragraphs: [
      "Trải qua những năm tháng bền bỉ bên micro, từ những buổi tâm tình đêm muộn, những ván game kịch tính đến những bản cover chất chứa nỗi niềm, Suri Mukeki đã xây dựng nên một vương quốc thật sự — vương quốc của những 'Sureiya' (Slayers).",
      "Tháng 1 năm 2023 đánh dấu cột mốc chuyển mình rực rỡ với diện mạo Model 3.0. Dưới nét cọ tinh tế của T_blence và kỹ thuật chuyển động mềm mại của Sophiel, Suri khoác lên mình tà áo dạ hội trang nhã, điểm xuyết cặp kính gọng tri thức và ánh nhìn ấm áp.",
      "Không còn là con slime hoang mang giữa ngã rẽ hai thế giới, Suri Mukeki giờ đây đứng vững vàng trên sân khấu của chính mình, mang âm thanh và nụ cười thắp sáng từng góc khuất trong trái tim người theo dõi.",
    ],
    footerNote: "Cột mốc vươn mình // Model 3.0 ra mắt ngày 21.01.2023",
    characterIllustration: "/images/characters/suri_model3.webp",
    accentElement: "rose",
  },
];

export const TIMELINE_DATA: MilestoneItem[] = [
  {
    date: "12 / 04 / 2021",
    year: "2021",
    title: "Bản Cover Khởi Điểm: 'Only Love'",
    category: "MUSIC",
    badge: "PRE-DEBUT RELEASE",
    description: "Món quà âm nhạc đầu tiên gửi gắm giọng ca trong trẻo của Suri đến cộng đồng người nghe trước thềm debut chính thức.",
    sourceNote: "Kênh YouTube chính thức @surimukeki",
  },
  {
    date: "17 / 04 / 2021",
    year: "2021",
    title: "Official Debut: Reincarnation of a Slime",
    category: "DEBUT",
    badge: "GENESIS BROADCAST",
    description: "Buổi livestream ra mắt đầu tiên đánh dấu sự xuất hiện chính thức của Suri Mukeki trong thế giới Virtual YouTuber Việt Nam.",
    sourceNote: "Stream debut: Reincarnation of a slime named Suri",
  },
  {
    date: "23 / 09 / 2021",
    year: "2021",
    title: "Hé Lộ Lore Bí Ẩn: Suri & Irus",
    category: "LORE",
    badge: "MYTHOLOGY EXPANSION",
    description: "Lần đầu tiên hé lộ về bản thể thứ hai mang nguyên tố điện Irus cùng nguồn gốc truyền thuyết cổ xưa trong buổi Free Talk.",
    sourceNote: "Free talk: Hé lộ lore mới của Suri/Irus",
  },
  {
    date: "12 / 10 / 2021",
    year: "2021",
    title: "Debut Model Irus: Sấm Sét Trên Tay Micro",
    category: "MODEL",
    badge: "ALTER PERSONA DEBUT",
    description: "Chính thức giới thiệu model Live2D độc lập của Irus với phong cách cá tính, ánh mắt sắc sảo và năng lượng bùng nổ.",
    sourceNote: "Stream: 【DEBUT NEW MODEL】Irus on the mic",
  },
  {
    date: "25 / 05 / 2022",
    year: "2022",
    title: "Ra Mắt Model 2.0 (Turbulence)",
    category: "MODEL",
    badge: "VISUAL UPGRADE 2.0",
    description: "Bước nâng cấp lớn về tạo hình với thiết kế của họa sĩ Turbulence, mang đến độ chi tiết cao và biểu cảm linh hoạt hơn.",
    sourceNote: "Kênh YouTube & Twitter thông báo chính thức",
  },
  {
    date: "07 / 07 / 2022",
    year: "2022",
    title: "Kích Hoạt Hội Viên: Slime Dynasty",
    category: "MILESTONE",
    badge: "COMMUNITY MILESTONE",
    description: "Mở tính năng YouTube Membership với 3 cấp độ thân thương: Slime Nông Dân, Slime Sang Chảnh và Slime King.",
    sourceNote: "Hệ thống Membership YouTube chính thức",
  },
  {
    date: "02 / 08 / 2022",
    year: "2022",
    title: "Chạm Mốc 10,000 Người Đăng Ký",
    category: "MILESTONE",
    badge: "10K SUBSCRIBERS",
    description: "Cột mốc 5 chữ số đầu tiên đánh dấu sự công nhận rộng rãi của cộng đồng dành cho hành trình không mệt mỏi của Suri.",
    sourceNote: "Ghi nhận dữ liệu HoloList & YouTube",
  },
  {
    date: "21 / 01 / 2023",
    year: "2023",
    title: "Đại Tiệc Ra Mắt Model 3.0 (T_blence & Sophiel)",
    category: "MODEL",
    badge: "MASTERWORK 3.0 DEBUT",
    description: "Tạo hình Model 3.0 lộng lẫy chính thức ra mắt, tạo nên bước ngoặt đỉnh cao về chất lượng đồ họa và nhận diện thương hiệu.",
    sourceNote: "Live2D rig bởi @Sophielpaka, Art bởi @T_blence",
  },
  {
    date: "30 / 07 / 2023",
    year: "2023",
    title: "Chạm Mốc 30,000 Người Đăng Ký",
    category: "MILESTONE",
    badge: "30K SUBSCRIBERS",
    description: "Khẳng định vị thế là một trong những VTuber độc lập được yêu mến hàng đầu tại cộng đồng VTuber Việt Nam.",
    sourceNote: "Ghi nhận chính thức trên kênh YouTube",
  },
  {
    date: "Hiện tại",
    year: "2024-2026",
    title: "Hơn 51,400+ Sureiya Đồng Hành",
    category: "MILESTONE",
    badge: "ONGOING JOURNEY",
    description: "Hành trình vẫn tiếp tục nở rộ với các buổi stream ca hát, ASMR 3D, sự kiện cộng đồng và thế giới quan không ngừng rộng mở.",
    sourceNote: "Cộng đồng Sureiya / Slayer toàn cầu",
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "model3_main",
    title: "Model 3.0 Sovereign (Kính Gọng Tri Thức)",
    category: "Model 3.0",
    badge: "MASTER KEY VISUAL",
    image: "/images/characters/suri_model3.webp",
    creator: "T_blence (Minh họa) • Sophiel (Live2D)",
    year: "2023",
    description: "Thiết kế hiện đại của Suri Mukeki với cặp kính thanh nhã, mái tóc tím biếc phân lớp và y phục dạ hội cách điệu hoàng gia.",
  },
  {
    id: "model3_noglasses",
    title: "Model 3.0 Sovereign (Không Đeo Kính)",
    category: "Model 3.0",
    badge: "ALTERNATIVE EXPRESSION",
    image: "/images/characters/suri_model3_noglasses.webp",
    creator: "T_blence (Minh họa) • Sophiel (Live2D)",
    year: "2023",
    description: "Góc nhìn trọn vẹn đôi mắt tím long lanh và đường nét gương mặt dịu dàng khi gỡ bỏ cặp kính, mang đến cảm giác gần gũi.",
  },
  {
    id: "irus_full",
    title: "Irus Full Body Standing Pose",
    category: "Irus Alter",
    badge: "ALTER PERSONA",
    image: "/images/characters/irus_alter_full.webp",
    creator: "Official Production",
    year: "2021",
    description: "Tạo hình toàn thân của bản thể sấm sét Irus: y phục thể thao viền neon cá tính, mái tóc nhuộm highlight vàng điện quang rực rỡ.",
  },
  {
    id: "irus_sheet",
    title: "Irus Model & Turnaround Reference Sheet",
    category: "Reference Sheet",
    badge: "DESIGN SPEC SHEET",
    image: "/images/gallery/irus_reference_sheet.webp",
    creator: "Official Production Sheet",
    year: "2021",
    description: "Bản vẽ thiết kế kỹ thuật phân tích các góc xoay, họa tiết trang phục, dải ruy băng và chi tiết kết cấu của Irus.",
  },
  {
    id: "model2_full",
    title: "Model 2.0 Evolution",
    category: "Historical",
    badge: "GENERATION 2.0",
    image: "/images/characters/suri_model2.webp",
    creator: "Turbulence (Minh họa)",
    year: "2022",
    description: "Mẫu hình 2.0 đánh dấu bước chuyển mình phong cách của Suri với áo len dệt kim, nơ cổ bướm và thần thái tinh nghịch.",
  },
  {
    id: "model1_debut",
    title: "Debut Original Model 1.0",
    category: "Historical",
    badge: "DEBUT ORIGINAL",
    image: "/images/characters/suri_debut_model.webp",
    creator: "kcomorebi (Art) • Truong Thanh Tan (Rig)",
    year: "2021",
    description: "Nguyên bản thiết kế đưa Suri Mukeki chạm ngõ thế giới ảo vào ngày 17.04.2021. Điểm khởi đầu đáng trân trọng của một hành trình.",
  },
];

export const LORE_ARCHIVES: LoreFile[] = [
  {
    fileId: "FILE-001",
    code: "ARC-NOTE-W",
    title: "Mảnh Giấy Bí Ẩn Ký Tên 'W'",
    classification: "COMMUNITY TRANSCRIPTION",
    status: "UNRESOLVED",
    summary: "Manh mối về một bức thư chúc mừng sinh nhật gửi cho 'Suri' từ một thực thể không rõ danh tính mang mật danh W.",
    content: [
      "Theo lời kể trong các buổi stream đầu tiên của Suri, khi con slime hệ nước lần đầu thức tỉnh và phát hiện hình hài thiếu nữ, trong túi áo cô gái có để lại một mẩu giấy nhỏ gấp ngay ngắn.",
      "Mẩu giấy vỏn vẹn dòng chữ: 'Chúc mừng sinh nhật Suri.' và được ký tên bằng một chữ cái duy nhất: 'W'.",
      "Suri từng bày tỏ mong muốn tìm hiểu nguồn gốc của thiếu nữ này cũng như danh tính của 'W' — một người bạn thuở nhỏ, một người giám hộ, hay kẻ nắm giữ chìa khóa cho sự chuyển sinh?",
    ],
    investigativeNote: "Hồ sơ chưa có kết luận chính thức từ creator. Tạm thời lưu trữ dưới dạng câu hỏi ngỏ trong lịch sử nhân vật.",
  },
  {
    fileId: "FILE-002",
    code: "ARC-DUALITY-ELEM",
    title: "Phân Tách Lưỡng Nguyên: Thủy & Lôi",
    classification: "ARCHIVAL CASE FILE",
    status: "COMMUNITY-REPORTED",
    summary: "Nghiên cứu về cơ chế phân tách thành hai thực thể độc lập Suri (Hệ Nước) và Irus (Hệ Điện).",
    content: [
      "Quá trình luân hồi không diễn ra theo quỹ đạo đơn nhất mà tự tách thành hai cực đối xứng: Suri đại diện cho tính Thủy (nhu, trong sáng, âm nhạc, sự vỗ về) và Irus đại diện cho tính Lôi (cương, quyết liệt, ánh sáng, tốc độ).",
      "Dù mang tính cách và năng lượng trái ngược, cả hai đều chia sẻ cùng một gốc rễ tâm hồn. Việc Irus không triệt hạ Suri khi gặp mặt chứng minh mối liên kết vô hình giữa hai bản thể mạnh mẽ hơn bất kỳ quy tắc ma thuật nào.",
    ],
    investigativeNote: "Được xác nhận qua tiêu đề stream 'Hé lộ lore mới của Suri/Irus' (23.09.2021).",
  },
  {
    fileId: "FILE-003",
    code: "ARC-SEAL-300YR",
    title: "Phong Ấn 300 Năm & Vị Quân Vương Cổ Xưa",
    classification: "ARCHIVAL CASE FILE",
    status: "COMMUNITY-REPORTED",
    summary: "Dữ liệu huyền thoại về tiền kiếp của Irus trước khi thức tỉnh trong cơ thể slime điện.",
    content: [
      "Huyền sử ghi nhận Irus từng là người cai trị một vương quốc hưng thịnh ở dị giới cổ đại. Lo sợ trước quyền năng vượt trội của cô, các thế lực phù thủy ganh ghét đã bày mưu tiêu diệt vương quốc và dùng cấm thuật giam cầm cô suốt ba thế kỷ.",
      "Sau 300 năm, sự xuất hiện ngẫu nhiên của một sinh vật slime điện đã vô tình phá vỡ kết giới phong ấn, dung hợp linh hồn quân vương vào thân xác mới.",
    ],
    investigativeNote: "Chi tiết thuộc huyền tích được tóm tắt từ stream lore. Chưa có mốc lịch Gregory tương ứng.",
  },
];

export const MUSIC_COVERS: CoverItem[] = [
  {
    id: "king",
    title: "KING",
    originalArtist: "Kanaria",
    releaseDate: "20 / 11 / 2021",
    youtubeId: "a8S1xhjh2e4",
    description: "Bản cover bùng nổ năng lượng thể hiện chất giọng sắc sảo, tự tin và đầy uy quyền của Suri.",
    badge: "SIGNATURE VOCAL",
  },
  {
    id: "yoru-ni-kakeru",
    title: "Yoru ni Kakeru (夜に駆ける)",
    originalArtist: "YOASOBI",
    releaseDate: "09 / 04 / 2022",
    youtubeId: "cN9evcBtnjo",
    description: "Giai điệu J-Pop tốc độ cao được Suri xử lý mượt mà, cảm xúc và ngập tràn năng lượng tươi trẻ.",
    badge: "FAN FAVORITE",
  },
  {
    id: "nang-tho",
    title: "Nàng Thơ",
    originalArtist: "Hoàng Dũng",
    releaseDate: "10 / 06 / 2021",
    youtubeId: "hOCt6VYIYUk",
    description: "Khúc tình ca lãng mạn Việt Nam cất lên bằng chất giọng ngọt ngào, sâu lắng và dịu êm như làn nước mùa thu.",
    badge: "ACOUSTIC BALLAD",
  },
  {
    id: "renai-circulation",
    title: "Renai Circulation (恋愛サーキュレーション)",
    originalArtist: "Hanazawa Kana",
    releaseDate: "24 / 05 / 2021",
    youtubeId: "tytmMA1YKwU",
    description: "Khoảnh khắc đáng yêu 'đốn tim' người nghe với phong cách trình bày nhí nhảnh, dễ thương chuẩn chất anime.",
    badge: "KAWAII CLASSIC",
  },
  {
    id: "only-love",
    title: "Only Love",
    originalArtist: "Trademark",
    releaseDate: "12 / 04 / 2021",
    youtubeId: "is6t-GzkyMk",
    description: "Bản cover đầu tiên trong lịch sử kênh, nơi Suri gửi lời chào mộc mạc và chân thành nhất đến với thế giới.",
    badge: "DEBUT COVER",
  },
  {
    id: "bocca-della-verita",
    title: "Bocca della Verità (ボッカデラベリタ)",
    originalArtist: "Hiiragi Kirai",
    releaseDate: "09 / 04 / 2022",
    youtubeId: "bw9Y9Ht-kVA",
    description: "Màn thử sức táo bạo với thể loại nhạc Vocaloid ma mị, dồn dập và đậm phong cách gothic cuồng nhiệt.",
    badge: "DARK GOTHIC",
  },
];

export const CREDITS_DATA: CreditGroup[] = [
  {
    role: "Character Design & Illustration (Papa)",
    label: "Những nét vẽ tạo hình Suri Mukeki",
    people: [
      { name: "T_blence (Turbulence)", handle: "@T_blence", url: "https://twitter.com/T_blence", note: "Model 3.0 & Model 2.0 Illustrator" },
      { name: "kcomorebi", handle: "@kcomorebi", url: "https://twitter.com/kcomorebi", note: "Model 1.0 Debut Illustrator" },
    ],
  },
  {
    role: "Live2D Rigging & Motion (Mama)",
    label: "Kỹ thuật khớp chuyển động linh hồn",
    people: [
      { name: "Sophiel", handle: "@Sophielpaka", url: "https://twitter.com/Sophielpaka", note: "Model 3.0 Live2D Rigger" },
      { name: "Truong Thanh Tan", note: "Model 1.0 Live2D Rigger" },
    ],
  },
  {
    role: "Official Creator & Voice",
    label: "Linh hồn & Giọng hát trung tâm",
    people: [
      { name: "Suri Mukeki", handle: "@surimukeki", url: "https://www.youtube.com/@surimukeki", note: "Independent VTuber" },
    ],
  },
  {
    role: "Community & Documentation",
    label: "Lưu giữ ký ức & Đồng hành",
    people: [
      { name: "Sureiya / Slayer Fanbase", note: "Cộng đồng fan tận tụy" },
      { name: "HoloList & VTuber Wiki Contributors", note: "Dữ liệu lưu trữ và hồ sơ cộng đồng" },
    ],
  },
];
