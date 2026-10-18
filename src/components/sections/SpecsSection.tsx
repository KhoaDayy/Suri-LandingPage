import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
} from 'lucide-react';
import { BlurText } from '../ui/BlurText';
import { ScrollReveal } from '../ui/ScrollReveal';
import { TiltCard } from '../effects/TiltCard';
import { FloatingSlimeBubbles } from '../effects/FloatingSlimeBubbles';
import { ImageLightboxModal } from '../ui/ImageLightboxModal';
import { SPECS_DATA } from '../../data/suriData';

type ModelViewKey = 'model3d' | 'chibi' | 'model3' | 'model2' | 'model1';

interface ModelCreator {
  role: string;
  name: string;
}

interface ModelOption {
  id: ModelViewKey;
  label: string;
  shortLabel: string;
  badge: string;
  status: string;
  statusTag: 'ACTIVE_PRIMARY' | 'ACTIVE' | 'MILESTONE' | 'LEGACY' | 'GENESIS';
  year: string;
  debutDate: string;
  image: string;
  modelType: string;
  creators: ModelCreator[];
  description: string;
  usage: string;
  platformNote: string;
  isCurrentActive: boolean;
  scaleClass?: string;
}

const MODEL_OPTIONS: Record<ModelViewKey, ModelOption> = {
    model3d: {
      id: 'model3d',
      label: 'Model 3D',
      shortLabel: 'Model 3D',
      badge: 'Mô hình 3D',
      status: 'Phiên bản 3D',
      statusTag: 'ACTIVE_PRIMARY',
      year: '2026',
      debutDate: '05/09/2026',
      image: '/images/characters/suri_3d_model.webp',
      modelType: '3D Cel-shaded Character Model',
      creators: [
        { role: 'Thiết kế mô hình 3D (3D Modeler)', name: 'Hasukatsu' },
      ],
      description:
        'Mô hình nhân vật 3D cel-shading của Suri Mukeki ra mắt ngày 05/09/2026, thiết kế phục vụ các buổi phát sóng 3D.',
      usage:
        'Livestream 3D, ca hát và bắt chuyển động tracking qua Warudo và giao thức VMC.',
      platformNote: 'Mô hình nhân vật 3D • Warudo • Giao thức VMC',
      isCurrentActive: true,
      scaleClass: 'scale-100 origin-center',
    },
    chibi: {
      id: 'chibi',
      label: 'Model Chibi Suwi',
      shortLabel: 'Chibi Suwi',
      badge: 'Mô hình Chibi',
      status: 'Phiên bản Chibi',
      statusTag: 'ACTIVE',
      year: '2024',
      debutDate: '2024',
      image: '/images/suri/model-fullbody.webp',
      modelType: 'Chibi Model (Sứ giả đưa thư Suwi & WingWing)',
      creators: [
        { role: 'Thiết kế nhân vật (Design Artist)', name: 'Hare_ta06 (@Hare_ta06)' },
        { role: 'Họa sĩ mô hình (Model Artist)', name: 'Nina Meow Meow' },
        { role: 'Thiết kế thú cưng (Pet Design)', name: 'kuo0 (@kuo0)' },
        { role: 'Kỹ thuật chuyển động (Rigger)', name: 'Suwaa Hakirin' },
      ],
      description:
        'Tạo hình chibi sứ giả đưa thư Suwi với mũ cánh thiên thần, đôi tai elf và chú tinh linh đồng hành WingWing mang niềm vui và hy vọng kết nối mọi người.',
      usage:
        'Video ngắn (Shorts), tranh minh họa và hoạt ảnh ngắn.',
      platformNote: 'Sứ giả đưa thư • Tinh linh WingWing • YouTube Shorts',
      isCurrentActive: true,
      scaleClass: 'scale-[1.08] origin-center',
    },
    model3: {
      id: 'model3',
      label: 'Model 3.0 Live2D',
      shortLabel: 'Model 3.0',
      badge: 'Live2D 3.0',
      status: 'Phiên bản Live2D 3.0',
      statusTag: 'MILESTONE',
      year: '2023',
      debutDate: '21/01/2023',
      image: '/images/characters/suri_model3.webp',
      modelType: 'Live2D Cubism Model (Hoàng gia Gothic)',
      creators: [
        { role: 'Minh họa chính (Papa)', name: 'T_blence (Turbulence)' },
        { role: 'Rigging chuyển động Live2D (Mama)', name: 'Sophiel (@Sophielpaka)' },
      ],
      description:
        'Mô hình Live2D đỉnh cao kỷ nguyên 2023 với trang phục dạ hội tím hoàng gia quý phái, chuyển động biểu cảm đa tầng và đồng bộ ARKit khẩu hình mượt mà.',
      usage:
        'Live2D qua các đại nhạc hội và các buổi phát sóng đặc biệt.',
      platformNote: 'Live2D Cubism • Đầm tím dạ hội • ARKit Blendshapes',
      isCurrentActive: false,
      scaleClass: 'scale-100 origin-center',
    },
    model2: {
      id: 'model2',
      label: 'Model 2.0 Live2D',
      shortLabel: 'Model 2.0',
      badge: 'Live2D 2.0',
      status: 'Phiên bản Live2D 2.0',
      statusTag: 'LEGACY',
      year: '2022',
      debutDate: '25/05/2022',
      image: '/images/characters/suri_model2.webp',
      modelType: 'Live2D Model Dạ Tiệc Lãng Mạn',
      creators: [
        { role: 'Họa sĩ tạo hình & minh họa', name: 'Turbulence (T_blence)' },
      ],
      description:
        'Phiên bản dạ tiệc lãng mạn tông tím hồng đánh dấu sự hợp tác đầu tiên với họa sĩ Turbulence (T_blence), với mái tóc dài uốn lượn và phong thái dịu dàng.',
      usage:
        'Giai đoạn chuyển mình phong cách của Suri Mukeki trong năm 2022.',
      platformNote: 'Model 2.0 Reveal • Dạ tiệc tím hồng',
      isCurrentActive: false,
      scaleClass: 'scale-100 origin-center',
    },
    model1: {
      id: 'model1',
      label: 'Model 1.0 (Debut Model)',
      shortLabel: 'Model 1.0',
      badge: 'Debut 2021',
      status: 'Phiên bản Debut 2021',
      statusTag: 'GENESIS',
      year: '2021',
      debutDate: '17/04/2021',
      image: '/images/characters/suri_debut_model.webp',
      modelType: 'Live2D Genesis Debut Model',
      creators: [
        { role: 'Họa sĩ minh họa', name: 'kcomorebi (@kcomorebi)' },
        { role: 'Kỹ thuật chuyển động (Rigger)', name: 'Trương Thành Tân (Truong Thanh Tan)' },
        { role: 'Thiết kế khởi nguyên', name: 'Hare_ta06' },
      ],
      description:
        'Mô hình Live2D nguyên bản đầu tiên của Suri Mukeki ra mắt ngày 17/04/2021, đưa hình ảnh nàng slime nước ngọt ngào chào sân cộng đồng VTuber Việt Nam.',
      usage:
        'Kỷ nguyên khởi nguồn kết nối cộng đồng Slayer.',
      platformNote: 'Genesis Debut • kcomorebi & Truong Thanh Tan',
      isCurrentActive: false,
      scaleClass: 'scale-100 origin-center',
    },
};

export const SpecsSection: React.FC = () => {
  // Default to Model 3D as it is the primary model currently used on stream!
  const [selectedModel, setSelectedModel] = useState<ModelViewKey>('model3d');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const credits = SPECS_DATA.credits || [];
  const modelOptions = MODEL_OPTIONS;
  const activeModel = modelOptions[selectedModel];

  return (
    <section
      id="specs"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F8F7F2] dark:bg-[#141517] text-[#292D3A] dark:text-[#ECEBE6] overflow-hidden transition-colors duration-300"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-celestial-wave opacity-25 dark:opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-water-ripple opacity-10 dark:opacity-5 pointer-events-none" />
      <FloatingSlimeBubbles count={8} variant="aquatic" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* =====================================================================
            HEADER CHÍNH: CÁC MÔ HÌNH HIỆN CÓ & ĐỘI NGŨ THỰC HIỆN
           ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#292D3A]/10 dark:border-white/[0.08]"
        >
          <div>
            <BlurText
              text="Các mô hình hiện có & Đội ngũ thực hiện"
              as="h2"
              align="left"
              duration={0.48}
              delay={0.05}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#292D3A] dark:text-[#ECEBE6]"
            />

            <p className="mt-2 text-sm sm:text-base font-sans text-[#292D3A]/75 dark:text-[#A1A6B3] max-w-2xl leading-relaxed">
              Tổng hợp các thế hệ mô hình nhân vật của Suri Mukeki cùng đội ngũ nghệ sĩ và kỹ thuật viên sáng tạo qua từng thời kỳ.
            </p>
          </div>
        </motion.div>

        {/* =====================================================================
            TẦNG 1: SÂN KHẤU TƯƠNG TÁC // CHỌN MÔ HÌNH & XEM NGƯỜI THỰC HIỆN
           ===================================================================== */}
        <ScrollReveal duration={0.5} className="w-full">
          <div className="rounded-3xl border border-[#292D3A]/12 dark:border-white/[0.08] bg-white/90 dark:bg-[#1B1D21] backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            
            {/* Top Bar: Model Selector Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#292D3A]/10 dark:border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-semibold tracking-wide text-[#292D3A] dark:text-[#ECEBE6]">
                  Chọn mô hình:
                </span>
              </div>

              {/* Selector Tabs for all 5 models */}
              <div
                role="tablist"
                aria-label="Chọn mô hình nhân vật"
                className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#F8F7F2] dark:bg-[#141517] border border-[#292D3A]/12 dark:border-white/[0.08] self-start sm:self-auto"
              >
                {(Object.keys(modelOptions) as ModelViewKey[]).map((key) => {
                  const opt = modelOptions[key];
                  const isActive = selectedModel === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedModel(key)}
                      className={`px-3.5 py-1.5 rounded-xl font-sans text-xs font-semibold transition-all duration-180 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315D9C] dark:focus-visible:ring-[#79ACE0] ${
                        isActive
                          ? 'bg-[#315D9C] text-white shadow-sm dark:bg-[#2A5288]'
                          : 'text-[#292D3A]/70 dark:text-[#A1A6B3] hover:text-[#315D9C] dark:hover:text-[#79ACE0] hover:bg-white/60 dark:hover:bg-white/[0.05]'
                      }`}
                    >
                      <span>{opt.shortLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stage Layout: Character Visual & Model Information */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6">
              
              {/* Character Visual Column */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 relative min-h-[440px] sm:min-h-[500px]">
                
                {/* Background Rotating Ring Aura */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-[#C9A95C]/20 border-dashed animate-[spin_120s_linear_infinite]" />
                  <div className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full border border-[#75B8E6]/25" />
                  <div className="absolute w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] rounded-full bg-gradient-to-tr from-[#75B8E6]/10 to-[#C9A95C]/10 blur-2xl" />
                </div>

                {/* Main Character Image with AnimatePresence */}
                <div className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] h-[460px] sm:h-[520px] flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModel.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <motion.img
                        src={activeModel.image}
                        alt={`Mô hình Suri Mukeki ${activeModel.label}`}
                        className={`w-full h-full object-contain drop-shadow-[0_16px_32px_rgba(49,93,156,0.18)] select-none pointer-events-none transition-transform duration-300 ${activeModel.scaleClass || 'scale-100'}`}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* Model Details & Creators Column */}
              <div className="lg:col-span-7 space-y-6 order-2">
                
                {/* Main Identity & Description */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs text-[#C9A95C] dark:text-[#D4B86A] font-medium">
                      Ra mắt: {activeModel.debutDate}
                    </span>
                    <span className="text-xs font-mono text-[#292D3A]/50 dark:text-[#A1A6B3]/60">{activeModel.year}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
                      {activeModel.label}
                    </h3>
                    <p className="mt-1 font-sans text-xs sm:text-sm text-[#315D9C] dark:text-[#79ACE0] font-medium">
                      {activeModel.modelType}
                    </p>
                  </div>

                  <p className="font-sans text-sm text-[#292D3A]/80 dark:text-[#A1A6B3] leading-relaxed pt-1">
                    {activeModel.description}
                  </p>
                </div>

                {/* Creators: Clean editorial presentation */}
                <div className="pt-4 border-t border-[#292D3A]/10 dark:border-white/[0.08] space-y-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#292D3A]/60 dark:text-[#7A808E] block">
                    Đội ngũ thực hiện
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModel.creators.map((c, i) => (
                      <div key={i} className="flex flex-col text-xs py-1">
                        <span className="font-sans text-[11px] text-[#292D3A]/60 dark:text-[#7A808E]">
                          {c.role}
                        </span>
                        <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#292D3A] dark:text-[#ECEBE6] mt-0.5">
                          {c.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Note: Warm editorial note */}
                <div className="pt-3 border-t border-[#292D3A]/10 dark:border-white/[0.08] text-xs font-sans text-[#C9A95C] dark:text-[#D4B86A] font-medium">
                  {activeModel.platformNote}
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* =====================================================================
            TẦNG 2: BẢN VẼ THIẾT KẾ & TÀI LIỆU THAM CHIẾU (2 CỘT + LIGHTBOX)
           ===================================================================== */}
        <div className="space-y-6">
          <div className="pb-3 border-b border-[#292D3A]/10 dark:border-white/[0.08]">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
              Bản vẽ thiết kế & Biểu cảm nhân vật
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Sheet 1: Bản vẽ trang phục */}
            <ScrollReveal delay={0.1} duration={0.45} className="h-full">
              <TiltCard className="rounded-3xl h-full">
                <div className="card-shimmer rounded-3xl border border-[#292D3A]/12 dark:border-white/[0.08] bg-white dark:bg-[#1B1D21] overflow-hidden shadow-sm flex flex-col justify-between h-full group hover:border-[#315D9C] dark:hover:border-[#79ACE0]/50 hover:shadow-md transition-all duration-200">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src="/images/suri/model-costume-sheet.webp"
                      alt="Bản vẽ chi tiết trang phục & chất liệu do Hare_ta06 thực hiện"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.025] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Lightbox Zoom Trigger */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: '/images/suri/model-costume-sheet.webp',
                          title: 'Bản vẽ chi tiết trang phục & chất liệu nhân vật',
                          desc: 'Bản vẽ thiết kế chi tiết phụ kiện, chất liệu vải và họa tiết cỏ bốn lá do Design Artist @Hare_ta06 thực hiện.',
                        })
                      }
                      aria-label="Phóng to bản vẽ trang phục"
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#22252B] text-[#292D3A] dark:text-[#ECEBE6] font-sans text-xs font-semibold shadow-md hover:bg-[#315D9C] dark:hover:bg-[#2A5288] hover:text-white transition-all duration-180 cursor-pointer"
                    >
                      <Maximize2 size={13} />
                      <span>Xem kích thước gốc</span>
                    </button>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-xl font-semibold text-[#292D3A] dark:text-[#ECEBE6] group-hover:text-[#315D9C] dark:group-hover:text-[#79ACE0] transition-colors duration-180">
                        Chi tiết trang phục & Hoa văn chất liệu
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#292D3A]/75 dark:text-[#A1A6B3] leading-relaxed mt-2">
                        Bản vẽ thiết kế tỉ mỉ từng chi tiết phụ kiện, dải nơ ren, túi đưa thư và họa tiết cỏ bốn lá may mắn do nghệ sĩ @Hare_ta06 thực hiện.
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

            {/* Sheet 2: Bản vẽ biểu cảm */}
            <ScrollReveal delay={0.2} duration={0.45} className="h-full">
              <TiltCard className="rounded-3xl h-full">
                <div className="card-shimmer rounded-3xl border border-[#292D3A]/12 dark:border-white/[0.08] bg-white dark:bg-[#1B1D21] overflow-hidden shadow-sm flex flex-col justify-between h-full group hover:border-[#7660A7] dark:hover:border-[#A593D1]/50 hover:shadow-md transition-all duration-200">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src="/images/suri/model-expression-sheet.webp"
                      alt="Bản vẽ biểu cảm & chi tiết nhân vật Chibi"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.025] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Lightbox Zoom Trigger */}
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          src: '/images/suri/model-expression-sheet.webp',
                          title: 'Bản vẽ biểu cảm & chi tiết nhân vật Chibi Demo',
                          desc: 'Tài liệu tham chiếu biểu cảm nhân vật, góc nhìn khi đội mũ và tháo mũ, cùng tạo hình chú tinh linh WingWing.',
                        })
                      }
                      aria-label="Phóng to bản vẽ biểu cảm"
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#22252B] text-[#292D3A] dark:text-[#ECEBE6] font-sans text-xs font-semibold shadow-md hover:bg-[#7660A7] dark:hover:bg-[#584482] hover:text-white transition-all duration-180 cursor-pointer"
                    >
                      <Maximize2 size={13} />
                      <span>Xem kích thước gốc</span>
                    </button>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-xl font-semibold text-[#292D3A] dark:text-[#ECEBE6] group-hover:text-[#7660A7] dark:group-hover:text-[#A593D1] transition-colors duration-180">
                        Biểu cảm nhân vật & Tinh linh WingWing
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#292D3A]/75 dark:text-[#A1A6B3] leading-relaxed mt-2">
                        Hệ thống góc nhìn tham chiếu chính thức của tạo hình Chibi Suwi và chú tinh linh WingWing, bao gồm các sắc thái vui tươi, ngạc nhiên và các chi tiết phụ kiện.
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>

          </div>
        </div>

        {/* =====================================================================
            TẦNG 3: BẢNG VINH DANH NGHỆ NHÂN SÁNG TẠO (ARTISAN CREDITS)
           ===================================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1B1D21] border border-[#292D3A]/12 dark:border-white/[0.08] shadow-sm space-y-6">
          <div className="pb-4 border-b border-[#292D3A]/10 dark:border-white/[0.08]">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
              Bảng vinh danh tác giả & người kiến tạo
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {credits.map((cr, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.04} duration={0.35} className="h-full">
                <TiltCard className="rounded-2xl h-full" maxTilt={6}>
                  <div className="card-shimmer p-4 rounded-2xl bg-[#FAFAF7] dark:bg-[#22252B] border border-[#292D3A]/10 dark:border-white/[0.08] hover:border-[#315D9C]/50 dark:hover:border-[#79ACE0]/40 hover:shadow-sm transition-all duration-180 h-full flex flex-col justify-between">
                    <div>
                      <div className="pb-1.5 mb-1.5 border-b border-[#292D3A]/8 dark:border-white/[0.08]">
                        <span className="font-sans text-[10px] text-[#315D9C] dark:text-[#79ACE0] font-semibold uppercase tracking-wider">
                          {cr.role}
                        </span>
                      </div>
                      <h4 className="font-sans text-sm font-semibold text-[#292D3A] dark:text-[#ECEBE6]">
                        {cr.artist}
                      </h4>
                    </div>
                    <span className="font-sans text-xs text-[#292D3A]/65 dark:text-[#A1A6B3] mt-2 block leading-relaxed">
                      {cr.notes || cr.title}
                    </span>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Preview Modal */}
      <ImageLightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

    </section>
  );
};

export default SpecsSection;
