/**
 * Comprehensive TypeScript Interfaces for Suri Mukeki VTuber Showcase
 * Defines strict types for Navigation, Hero, Lore & Dossiers, 3D Model Telemetry,
 * Artisan Credits, Broadcast Schedule, Music Covers, and Legacy Archive Systems.
 */

// ============================================================================
// 1. NAVIGATION & SOCIAL INTERFACES
// ============================================================================

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  jpLabel?: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
  icon?: string;
  color?: string;
}

// ============================================================================
// 2. HERO SECTION INTERFACES
// ============================================================================

export interface HeroBadge {
  status: string;
  message: string;
}

export interface HeroCta {
  label: string;
  url: string;
  variant?: 'primary' | 'secondary' | 'glass';
  icon?: string;
}

export interface HeroStat {
  value: string;
  label: string;
  detail: string;
}

export interface HeroTrustBar {
  label: string;
  tags: string[];
}

export interface HeroData {
  badge: HeroBadge;
  title: string;
  japaneseTitle: string;
  tagline: string;
  ctas: {
    primary: HeroCta;
    secondary: HeroCta;
    tertiary: HeroCta;
    [key: string]: HeroCta;
  };
  stats: HeroStat[];
  trustBar: HeroTrustBar;
  communityTags?: string[];
  characterImage?: string;
}

// ============================================================================
// 3. LORE & PROFILE SECTION INTERFACES
// ============================================================================

export interface DossierCard {
  code: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
  accent: 'cyan' | 'violet' | 'amber' | string;
}

export interface ProfileAttribute {
  label: string;
  value: string;
}

export interface TriviaItem {
  title: string;
  fact: string;
  icon: string;
}

export interface LoreProfileData {
  sectionTag: string;
  headline: string;
  leadParagraph: string;
  dossierCards: DossierCard[];
  dossiers?: DossierCard[];
  profileAttributes: ProfileAttribute[];
  attributes?: ProfileAttribute[];
  personalityTags: string[];
  trivia: TriviaItem[];
  quote?: string;
  irusAsset?: string;
  suriAsset?: string;
  wingwingAsset?: string;
}

// ============================================================================
// 4. 3D MODEL SPECS & ARTISAN CREDITS INTERFACES
// ============================================================================

export interface ModelTelemetrySpec {
  category: string;
  value: string;
  label: string;
  detail: string;
}

export interface ModelFeature {
  title: string;
  description: string;
}

export interface ArtisanCredit {
  role: string;
  title: string;
  artist: string;
  handle: string;
  url?: string;
  notes: string;
}

export interface ModelSpecsCreditsData {
  sectionTag: string;
  headline: string;
  description: string;
  specs: ModelTelemetrySpec[];
  telemetry?: ModelTelemetrySpec[];
  features: ModelFeature[];
  credits: ArtisanCredit[];
  glassesToggle?: {
    withGlasses: string;
    noGlasses: string;
    label: string;
  };
  costumeSheet?: {
    image: string;
    title: string;
    description: string;
  };
  expressionSheet?: {
    image: string;
    title: string;
    description: string;
  };
}

// ============================================================================
// 5. SCHEDULE & STREAM HIGHLIGHTS INTERFACES
// ============================================================================

export interface StreamRoutineItem {
  day: string;
  time: string;
  title: string;
  category: string;
  badge: string;
  description: string;
}

export interface MusicCoverShowcase {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  badge: string;
  sweetDrink: string;
  description: string;
  releaseDate?: string;
  originalArtist?: string;
  category?: string;
}

export interface ScheduleHighlightsData {
  sectionTag: string;
  headline: string;
  timezone: string;
  generalNotice?: string;
  typicalHour?: string;
  schedule: StreamRoutineItem[];
  routine?: StreamRoutineItem[];
  covers: MusicCoverShowcase[];
  playlistUrl?: string;
}

// ============================================================================
// 6. LEGACY & EXTENDED ARCHIVE COMPATIBILITY INTERFACES
// ============================================================================

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
    carrd?: string;
    marshmallow: string;
    facebook: string;
    tiktok?: string;
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

export interface CreditPerson {
  name: string;
  handle?: string;
  url?: string;
  note?: string;
}

export interface CreditGroup {
  role: string;
  label: string;
  people: CreditPerson[];
}
