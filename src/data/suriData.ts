export interface CharacterProfile {
  codeName: string;
  name: string;
  displayName: string;
  japaneseName: string;
  alias: string;
  title: string;
  subtitle: string;
  quote: string;
  cafeWelcome: string;
  profile: {
    species: string;
    birthday: string;
    height: string;
    weight: string;
    zodiac: string;
    debutDate: string;
    fanName: string;
    representativeEmojis: string;
    favoriteTreats: string[];
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
    logo: string;
    heroCutout: string;
    heroCutoutNoGlasses: string;
    daisyCrown: string;
    doodleChibi: string;
    costumeSheet: string;
    irusFull: string;
    irusSheet: string;
    model2: string;
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
  flavor: string;
  badge: string;
  image: string;
  highlight: string;
  description: string;
  element: 'taro' | 'berry' | 'mint' | 'pudding';
}

export interface StoryChapter {
  chapterNumber: string;
  title: string;
  subtitle: string;
  leadQuote: string;
  provenance: 'CONFIRMED' | 'COMMUNITY_REPORTED' | 'DOCUMENTED_LORE';
  paragraphs: string[];
  footerNote: string;
  illustration: string;
  accentColor: 'taro' | 'berry' | 'pudding';
}

export interface MilestoneItem {
  date: string;
  year: string;
  title: string;
  category: 'DEBUT' | 'MODEL' | 'MILESTONE' | 'LORE' | 'MUSIC';
  badge: string;
  description: string;
  sourceNote: string;
  stickerEmoji: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Official Artwork' | 'Model 3.0' | 'Irus Alter' | 'Design Sheets' | 'Chibi & Doodles';
  badge: string;
  image: string;
  creator: string;
  year: string;
  description: string;
  rotationClass?: string;
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
  sweetDrink: string;
}

export interface CreditGroup {
  role: string;
  label: string;
  people: { name: string; handle?: string; url?: string; note?: string }[];
}

export const SURI_DATA: CharacterProfile = {
  codeName: "CAFE_SPECIMEN_001 // SURI_MUKEKI",
  name: "Suri Mukeki",
  displayName: "SURI MUKEKI",
  japaneseName: "無敵・スリ",
  alias: "The Cozy Slime & Sweet Lightning Companion",
  title: "Nàng Slime Thủy Tinh & Sấm Sét Dị Giới",
  subtitle: "COZY SLIME CAFE // OFFICIAL VTUBER SHOWCASE",
  quote: "“Dù là một con slime nhỏ bé trôi dạt giữa hai thế giới, mình vẫn muốn hát, muốn cười và nướng những chiếc bánh ngọt ngào nhất cùng các bạn!”",
  cafeWelcome: "Chào mừng bạn ghé thăm tiệm trà bánh dị giới của Suri Mukeki! Nơi những giọt nước slime và tia sấm sét ngọt lành luôn sẵn sàng sưởi ấm tâm hồn bạn.",
  profile: {
    species: "Water Slime (Humanoid Form) / Lightning Slime Alter (Irus)",
    birthday: "30 / 10",
    height: "155 cm (5'1\")",
    weight: "40 kg",
    zodiac: "Thiên Yết (Scorpio)",
    debutDate: "17 / 04 / 2021",
    fanName: "Sureiya / Slayer",
    representativeEmojis: "🍮 🦋 🍵 🍰 🐱",
    favoriteTreats: ["Bánh ngọt (Cake)", "Trà sữa (Milk Tea)", "Ngủ nướng (Sleep)", "Mèo cưng (Cat)"],
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
    logo: "/images/icons/logo_suri.png",
    heroCutout: "/images/characters/suri_cutout_transparent.png",
    heroCutoutNoGlasses: "/images/characters/suri_model3_noglasses.webp",
    daisyCrown: "/images/characters/suri_daisy_crown.png",
    doodleChibi: "/images/gallery/suri_doodle_color.png",
    costumeSheet: "/images/gallery/costume_detailing_materials.png",
    irusFull: "/images/characters/irus_alter_full.webp",
    irusSheet: "/images/gallery/irus_reference_sheet.webp",
    model2: "/images/characters/suri_model2.webp",
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
    name: "Model 3.0 Sweet Sovereign",
    subtitle: "VIOLET TARO & CARAMEL ELEGANCE",
    flavor: "Hương vị Khoai Môn & Sốt Caramel Quý Phái",
    badge: "CURRENT ACTIVE MODEL",
    image: "/images/characters/suri_cutout_transparent.png",
    highlight: "Biểu tượng: Kính gọng tri thức, đầm dạ hội tím pastel và chiếc nơ bướm mềm mại",
    description: "Tạo hình Model 3.0 đỉnh cao ra mắt năm 2023 bởi họa sĩ T_blence và rigger Sophiel. Vừa giữ nét tinh nghịch của một bé slime, vừa mang thần thái đài các, ấm cúng của cô chủ tiệm cafe dễ thương.",
    element: "taro",
  },
  {
    id: "daisy",
    name: "Daisy Crown & Spring Meadow",
    subtitle: "FLOWER CROWN & SUNNY PASTURE",
    flavor: "Hương Trà Hoa Cúc Mật Ong Ngọt Mát",
    badge: "SPECIAL SPRING ART",
    image: "/images/characters/suri_daisy_crown.png",
    highlight: "Biểu tượng: Vòng hoa cúc trắng trên mái tóc bồng bềnh và nụ cười rạng rỡ",
    description: "Khoảnh khắc bình yên của Suri giữa đồng cỏ ngập tràn hoa dại. Khi bỏ lại những âu lo thường nhật, Suri đón nhận ánh nắng ấm và đan những vòng hoa gửi tặng cộng đồng Sureiya.",
    element: "pudding",
  },
  {
    id: "irus",
    name: "Irus (Lightning Alter)",
    subtitle: "ELECTRIC BERRY & SPARK SODA",
    flavor: "Hương Soda Dâu Sủi Bọt Tia Chớp",
    badge: "CANONICAL ALTER FORM",
    image: "/images/characters/irus_alter_full.webp",
    highlight: "Biểu tượng: Năng lượng sấm sét cuồng nhiệt, phong cách thể thao neon cá tính",
    description: "Bản thể song trùng Irus ra mắt vào tháng 10 năm 2021. Trái ngược với nét dịu dàng êm mát của nước, Irus sở hữu nguồn năng lượng sấm sét sắc sảo và ý chí kiên cường của một vị vua đã vượt qua 300 năm phong ấn.",
    element: "berry",
  },
  {
    id: "doodle",
    name: "Chibi Slime Doodles",
    subtitle: "MINI JELLY PUDDING CHIBI",
    flavor: "Hương Bánh Flan Trứng Sữa Núng Nính",
    badge: "COMMUNITY CHIBI ART",
    image: "/images/gallery/suri_doodle_color.png",
    highlight: "Biểu tượng: Những biểu cảm chibi nhí nhảnh, núng nính như giọt thạch sữa",
    description: "Bộ doodle màu sắc ghi lại những khoảnh khắc đời thường vui nhộn của Suri trong các buổi livestream chơi game, ăn bánh và trò chuyện rôm rả thâu đêm suốt sáng.",
    element: "mint",
  },
];

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    chapterNumber: "TẬP I",
    title: "Chiếc Bánh Flan Đầu Tiên Nơi Nhân Thế",
    subtitle: "The Genesis of the Translucent Water Slime",
    leadQuote: "“Ta không sinh ra dưới hình hài hoàn hảo của con người, nhưng trái tim này rung động trước hương thơm ngọt ngào của trần gian.”",
    provenance: "DOCUMENTED_LORE",
    paragraphs: [
      "Trong dòng chảy bất tận giữa các chiều không gian, có một linh hồn nhỏ bé tỉnh giấc trong thân xác của loài slime hệ nước. Không có quyền năng hủy diệt, không mang ký ức kiêu hùng, con slime ấy chỉ mang một niềm hiếu kỳ ngây thơ về thế giới con người.",
      "Vô tình bắt gặp hình bóng của một thiếu nữ nơi nhân gian, con slime nhận ra rằng nếu giữ nguyên thể lỏng trong suốt, nó sẽ mãi mãi chỉ là một lữ khách cô độc chẳng thể chuyện trò hay nếm thử vị ngọt của những chiếc bánh thơm. Nó quyết định biến chuyển hình dạng, mượn lấy diện mạo đáng yêu để cất lên tiếng nói đầu tiên.",
      "Và từ đó, cái tên Suri Mukeki bắt đầu vang lên như một lời chào ngập ngừng nhưng ngập tràn ấm áp gửi tới thế gian.",
    ],
    footerNote: "Trích xuất hồ sơ khởi nguyên // Debut ngày 17.04.2021",
    illustration: "/images/characters/suri_cutout_transparent.png",
    accentColor: "taro",
  },
  {
    chapterNumber: "TẬP II",
    title: "Tia Chớp Irus & Vị Soda Dị Giới",
    subtitle: "The Twin Spark of Thunder and Water",
    leadQuote: "“Nếu nước là vị trà thanh mát dịu êm, thì sấm sét chính là ngụm soda sủi bọt thắp sáng đêm đen.”",
    provenance: "DOCUMENTED_LORE",
    paragraphs: [
      "Số mệnh không chỉ dừng lại ở sự tĩnh lặng của nước. Khi chuyển sinh, linh hồn ấy đã tách thành hai nửa nguyên tố: một Suri dịu dàng hệ nước, và một Irus uy dũng mang nguyên tố sấm sét.",
      "Theo truyền thuyết được ghi lại trong các buổi stream, Irus từng là một vị quân vương trị vì vương quốc thịnh vượng, bị kẻ thù ganh ghét phong ấn suốt 300 năm. Khi phong ấn tan vỡ và dung hợp cùng slime điện, Irus thức giấc đi tìm lại bản ngã.",
      "Cuộc hội ngộ giữa Suri và Irus không hề có đổ máu hay thù hận. Thay vì triệt hạ lẫn nhau, hai bản thể mỉm cười nắm lấy tay nhau — cùng đứng chung một khung hình, bảo vệ lẫn nhau và cùng nhau tiếp tục hành trình mở rộng tiệm trà bánh yêu thương.",
    ],
    footerNote: "Hồ sơ dị thể Irus // Ra mắt model ngày 12.10.2021",
    illustration: "/images/characters/irus_alter_full.webp",
    accentColor: "berry",
  },
  {
    chapterNumber: "TẬP III",
    title: "Tiếng Hát Bên Tách Trà Cùng Sureiya",
    subtitle: "The Sovereign Stage of Model 3.0",
    leadQuote: "“Đèn bật sáng, tách trà đã ấm. Đây không chỉ là câu chuyện của riêng Suri, mà là mái nhà của tất cả chúng ta.”",
    provenance: "CONFIRMED",
    paragraphs: [
      "Trải qua những năm tháng bền bỉ bên micro, từ những buổi tâm tình khuya muộn, những ván game gay cấn đến những bản cover ngọt ngào, Suri Mukeki đã xây dựng nên một vương quốc thật sự — vương quốc của những 'Sureiya' (Slayers).",
      "Tháng 1 năm 2023, diện mạo Model 3.0 lộng lẫy chính thức trình làng dưới nét vẽ tuyệt mỹ của T_blence và chuyển động linh hoạt của Sophiel. Vẫn là bé slime mê bánh ngọt ngày nào, nhưng nay đã khoác lên mình tà áo dạ hội trang nhã, cặp kính tri thức và ánh mắt chan chứa yêu thương.",
      "Giờ đây, mỗi buổi phát sóng là một buổi họp mặt ấm cúng, nơi mọi muộn phiền được gác lại bên ngoài cánh cửa tiệm cafe Suri.",
    ],
    footerNote: "Cột mốc chuyển mình // Model 3.0 ra mắt ngày 21.01.2023",
    illustration: "/images/characters/suri_art_25.png",
    accentColor: "pudding",
  },
];

export const TIMELINE_DATA: MilestoneItem[] = [
  {
    date: "12 / 04 / 2021",
    year: "2021",
    title: "Món Quà Khởi Điểm: Cover 'Only Love'",
    category: "MUSIC",
    badge: "PRE-DEBUT RELEASE",
    description: "Giai điệu đầu tiên cất lên trên kênh, gửi gắm tấm lòng chân thành và mộc mạc của Suri đến những người nghe đầu tiên.",
    sourceNote: "Kênh YouTube chính thức @surimukeki",
    stickerEmoji: "🎵",
  },
  {
    date: "17 / 04 / 2021",
    year: "2021",
    title: "Khai Trương Tiệm Trà: Official Debut",
    category: "DEBUT",
    badge: "GENESIS BROADCAST",
    description: "Buổi livestream ra mắt chính thức với tiêu đề 'Reincarnation of a slime named Suri', đánh dấu sự xuất hiện của Suri Mukeki.",
    sourceNote: "Debut stream: Reincarnation of a slime named Suri",
    stickerEmoji: "🍮",
  },
  {
    date: "23 / 09 / 2021",
    year: "2021",
    title: "Hé Lộ Lore Bí Ẩn: Suri & Irus",
    category: "LORE",
    badge: "MYTHOLOGY EXPANSION",
    description: "Lần đầu tiên hé lộ về bản thể thứ hai mang nguyên tố điện Irus cùng nguồn gốc truyền thuyết cổ xưa trong buổi Free Talk.",
    sourceNote: "Free talk: Hé lộ lore mới của Suri/Irus",
    stickerEmoji: "⚡",
  },
  {
    date: "12 / 10 / 2021",
    year: "2021",
    title: "Debut Model Irus: Sấm Sét Trên Tay Micro",
    category: "MODEL",
    badge: "ALTER PERSONA DEBUT",
    description: "Giới thiệu model Live2D độc lập của Irus với phong cách cá tính, ánh mắt sắc sảo và năng lượng bùng nổ.",
    sourceNote: "Stream: 【DEBUT NEW MODEL】Irus on the mic",
    stickerEmoji: "🎤",
  },
  {
    date: "25 / 05 / 2022",
    year: "2022",
    title: "Ra Mắt Model 2.0 (Turbulence)",
    category: "MODEL",
    badge: "VISUAL UPGRADE 2.0",
    description: "Bước nâng cấp lớn về tạo hình với thiết kế của họa sĩ Turbulence, mang đến vẻ đáng yêu và biểu cảm sinh động hơn.",
    sourceNote: "Kênh YouTube & Twitter thông báo chính thức",
    stickerEmoji: "🎀",
  },
  {
    date: "07 / 07 / 2022",
    year: "2022",
    title: "Kích Hoạt Hội Viên: Slime Cafe Club",
    category: "MILESTONE",
    badge: "COMMUNITY MILESTONE",
    description: "Mở tính năng YouTube Membership với 3 cấp độ thân thương: Slime Nông Dân, Slime Sang Chảnh và Slime King.",
    sourceNote: "Hệ thống Membership YouTube chính thức",
    stickerEmoji: "👑",
  },
  {
    date: "02 / 08 / 2022",
    year: "2022",
    title: "Chạm Mốc 10,000 Khách Quý (10K Subs)",
    category: "MILESTONE",
    badge: "10K SUBSCRIBERS",
    description: "Cột mốc 5 chữ số đầu tiên đánh dấu sự công nhận rộng rãi của cộng đồng dành cho nỗ lực của Suri.",
    sourceNote: "Ghi nhận dữ liệu HoloList & YouTube",
    stickerEmoji: "🎉",
  },
  {
    date: "21 / 01 / 2023",
    year: "2023",
    title: "Đại Tiệc Ra Mắt Model 3.0 (T_blence & Sophiel)",
    category: "MODEL",
    badge: "MASTERWORK 3.0 DEBUT",
    description: "Tạo hình Model 3.0 lộng lẫy chính thức ra mắt, tạo nên bước ngoặt đỉnh cao về chất lượng đồ họa và nhận diện thương hiệu.",
    sourceNote: "Live2D rig bởi @Sophielpaka, Art bởi @T_blence",
    stickerEmoji: "✨",
  },
  {
    date: "30 / 07 / 2023",
    year: "2023",
    title: "Gia Đình 30,000 Sureiya",
    category: "MILESTONE",
    badge: "30K SUBSCRIBERS",
    description: "Khẳng định vị thế là một trong những VTuber độc lập được yêu mến hàng đầu tại cộng đồng VTuber Việt Nam.",
    sourceNote: "Ghi nhận chính thức trên kênh YouTube",
    stickerEmoji: "💖",
  },
  {
    date: "Hiện tại",
    year: "2024-2026",
    title: "Hơn 51,400+ Thành Viên Tiệm Cafe",
    category: "MILESTONE",
    badge: "ONGOING JOURNEY",
    description: "Hành trình vẫn tiếp tục nở rộ với các buổi stream ca hát, ASMR 3D, sự kiện cộng đồng và nụ cười không bao giờ tắt.",
    sourceNote: "Cộng đồng Sureiya / Slayer toàn cầu",
    stickerEmoji: "🌟",
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "suri_art_25",
    title: "Chân Dung Dạ Hội Quý Phái (Art #25)",
    category: "Official Artwork",
    badge: "MASTER KEY VISUAL",
    image: "/images/characters/suri_art_25.png",
    creator: "Official Original Illustration",
    year: "2026",
    description: "Bức tranh hoàn mỹ khắc họa Suri trong trang phục dạ hội tím biếc, đôi mắt long lanh và nụ cười hiền hậu làm say đắm lòng người.",
    rotationClass: "-rotate-1",
  },
  {
    id: "daisy_crown",
    title: "Vòng Hoa Cúc Trắng (Daisy Crown)",
    category: "Official Artwork",
    badge: "SWEET NATURE",
    image: "/images/characters/suri_daisy_crown.png",
    creator: "Official Original Illustration",
    year: "2025",
    description: "Tạo hình ngập tràn sức sống mùa xuân với chiếc vương miện đan bằng hoa cúc dại trắng muốt trên đồng cỏ.",
    rotationClass: "rotate-1",
  },
  {
    id: "doodle_chibi",
    title: "Tập Hợp Chibi Đời Thường (Doodle Color)",
    category: "Chibi & Doodles",
    badge: "KAWAII COLLECTION",
    image: "/images/gallery/suri_doodle_color.png",
    creator: "Official Chibi Art",
    year: "2024",
    description: "Những nét vẽ chibi ngộ nghĩnh ghi lại từng biểu cảm đáng yêu: ăn bánh, ngủ nướng, ngạc nhiên và cười tít mắt.",
    rotationClass: "-rotate-2",
  },
  {
    id: "costume_sheet",
    title: "Bản Vẽ Chi Tiết Phụ Kiện & Y Phục",
    category: "Design Sheets",
    badge: "COSTUME DETAILS",
    image: "/images/gallery/costume_detailing_materials.png",
    creator: "Official Design Materials",
    year: "2024",
    description: "Bản vẽ thiết kế kỹ thuật phân tích kết cấu nơ áo, viền ren, gọng kính và chất liệu vải của trang phục Model 3.0.",
    rotationClass: "rotate-1",
  },
  {
    id: "demo_showcase",
    title: "Bản Phác Thảo Demo Showcase",
    category: "Design Sheets",
    badge: "DEMO SPEC",
    image: "/images/gallery/suri_demo_showcase.png",
    creator: "Official Demo Render",
    year: "2025",
    description: "Góc nhìn phối cảnh trình diễn toàn diện các góc cạnh của nhân vật trên phông nền thiết kế.",
    rotationClass: "-rotate-1",
  },
  {
    id: "art_28",
    title: "Giọt Nắng Dịu Dàng (Art #28)",
    category: "Official Artwork",
    badge: "FULL ILLUSTRATION",
    image: "/images/gallery/suri_art_28.png",
    creator: "Official Original Illustration",
    year: "2026",
    description: "Bức họa đại cảnh ngập tràn ánh sáng với những gam màu pastel thanh khiết, gợi lên cảm giác yên ả của một buổi trà chiều.",
    rotationClass: "rotate-2",
  },
  {
    id: "art_24",
    title: "Khoảnh Khắc Tỏa Sáng (Art #24)",
    category: "Official Artwork",
    badge: "VIBRANT ART",
    image: "/images/gallery/suri_art_24.png",
    creator: "Official Original Illustration",
    year: "2026",
    description: "Tác phẩm thể hiện nét sống động, tươi tắn và năng động của Suri trong những buổi hòa nhạc cùng fan.",
    rotationClass: "-rotate-1",
  },
  {
    id: "art_19",
    title: "Khúc Hát Đêm Trăng (Art #19)",
    category: "Official Artwork",
    badge: "NIGHT VISUAL",
    image: "/images/gallery/suri_art_12.png",
    creator: "Official Original Illustration",
    year: "2025",
    description: "Bầu không khí huyền ảo khi màn đêm buông xuống, ánh trăng rọi chiếu lên làn tóc tím biếc bồng bềnh.",
    rotationClass: "rotate-1",
  },
  {
    id: "irus_full",
    title: "Irus Toàn Thân (Sấm Sét Alter)",
    category: "Irus Alter",
    badge: "ALTER PERSONA",
    image: "/images/characters/irus_alter_full.webp",
    creator: "Official Production",
    year: "2021",
    description: "Tạo hình toàn thân của bản thể sấm sét Irus: y phục thể thao viền neon cá tính, mái tóc nhuộm highlight vàng điện quang.",
    rotationClass: "-rotate-1",
  },
  {
    id: "irus_sheet",
    title: "Bản Vẽ Kỹ Thuật Irus Turnaround",
    category: "Design Sheets",
    badge: "IRUS SPEC SHEET",
    image: "/images/gallery/irus_reference_sheet.webp",
    creator: "Official Production Sheet",
    year: "2021",
    description: "Bản thiết kế kỹ thuật xoay 360 độ phân tích chi tiết kết cấu và tỉ lệ của Irus.",
    rotationClass: "rotate-1",
  },
];

export const LORE_ARCHIVES: LoreFile[] = [
  {
    fileId: "NOTE-001",
    code: "CAFE-NOTE-W",
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
    fileId: "NOTE-002",
    code: "CAFE-DUALITY-ELEM",
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
    fileId: "NOTE-003",
    code: "CAFE-SEAL-300YR",
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
    sweetDrink: "Trà Đào Sủi Bọt Hoàng Gia 👑",
  },
  {
    id: "yoru-ni-kakeru",
    title: "Yoru ni Kakeru (夜に駆ける)",
    originalArtist: "YOASOBI",
    releaseDate: "09 / 04 / 2022",
    youtubeId: "cN9evcBtnjo",
    description: "Giai điệu J-Pop tốc độ cao được Suri xử lý mượt mà, cảm xúc và ngập tràn năng lượng tươi trẻ.",
    badge: "FAN FAVORITE",
    sweetDrink: "Sinh Tố Dâu Đêm Trăng 🍓",
  },
  {
    id: "nang-tho",
    title: "Nàng Thơ",
    originalArtist: "Hoàng Dũng",
    releaseDate: "10 / 06 / 2021",
    youtubeId: "hOCt6VYIYUk",
    description: "Khúc tình ca lãng mạn cất lên bằng chất giọng ngọt ngào, sâu lắng và dịu êm như làn nước mùa thu.",
    badge: "ACOUSTIC BALLAD",
    sweetDrink: "Trà Hoa Cúc Mật Ong Ấm Áp 🌼",
  },
  {
    id: "renai-circulation",
    title: "Renai Circulation (恋愛サーキュレーション)",
    originalArtist: "Hanazawa Kana",
    releaseDate: "24 / 05 / 2021",
    youtubeId: "tytmMA1YKwU",
    description: "Khoảnh khắc đáng yêu 'đốn tim' người nghe với phong cách trình bày nhí nhảnh, dễ thương chuẩn chất anime.",
    badge: "KAWAII CLASSIC",
    sweetDrink: "Sữa Tươi Trân Châu Đường Đen 🍮",
  },
  {
    id: "only-love",
    title: "Only Love",
    originalArtist: "Trademark",
    releaseDate: "12 / 04 / 2021",
    youtubeId: "is6t-GzkyMk",
    description: "Bản cover đầu tiên trong lịch sử kênh, nơi Suri gửi lời chào mộc mạc và chân thành nhất đến với thế giới.",
    badge: "DEBUT COVER",
    sweetDrink: "Tách Vanilla Nóng Đầu Tiên ☕",
  },
  {
    id: "bocca-della-verita",
    title: "Bocca della Verità (ボッカデラベリタ)",
    originalArtist: "Hiiragi Kirai",
    releaseDate: "09 / 04 / 2022",
    youtubeId: "bw9Y9Ht-kVA",
    description: "Màn thử sức táo bạo với thể loại nhạc ma mị, dồn dập và đậm cá tính cuốn hút.",
    badge: "DARK SPARK",
    sweetDrink: "Soda Việt Quất Tia Chớp ⚡",
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
    label: "Cô chủ tiệm & Giọng hát trung tâm",
    people: [
      { name: "Suri Mukeki", handle: "@surimukeki", url: "https://www.youtube.com/@surimukeki", note: "Independent VTuber" },
    ],
  },
  {
    role: "Community & Documentation",
    label: "Lưu giữ ký ức & Khách quen thân thương",
    people: [
      { name: "Sureiya / Slayer Fanbase", note: "Cộng đồng fan tận tụy" },
      { name: "HoloList & VTuber Wiki Contributors", note: "Dữ liệu lưu trữ và hồ sơ cộng đồng" },
    ],
  },
];
