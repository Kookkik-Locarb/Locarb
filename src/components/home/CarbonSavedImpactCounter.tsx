import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../types/content';
import {
  TrendingDown,
  TreePine,
  Car,
  Building2,
  ShieldCheck,
  ArrowRight,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';

interface CarbonSavedImpactCounterProps {
  lang: Language;
}

// Custom hook for smooth animated number counting with ease-out cubic
const useCountUp = (target: number, duration: number = 2200, trigger: boolean = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, trigger]);

  return count;
};

export const CarbonSavedImpactCounter: React.FC<CarbonSavedImpactCounterProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState<'carbon' | 'equivalent'>('carbon');
  const [liveOffset, setLiveOffset] = useState(1842500);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Subtle real-time increment to demonstrate live telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveOffset((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Animated values
  const animatedTotal = useCountUp(liveOffset, 2400, isVisible);
  const animatedScope12 = useCountUp(684200, 2000, isVisible);
  const animatedScope3 = useCountUp(1158300, 2200, isVisible);
  const animatedClients = useCountUp(120, 1600, isVisible);
  const animatedTrees = useCountUp(83750, 2400, isVisible); // in thousands
  const animatedCars = useCountUp(400500, 2400, isVisible);

  return (
    <section ref={containerRef} className="py-12 sm:py-16 px-4 sm:px-6 relative z-10" id="impact">
      <div className="max-w-[1248px] mx-auto rounded-[36px] sm:rounded-[48px] bg-[#0E0E0C] text-[#F3F0DF] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-white/10">
        {/* Soft Ambient Radial Light - pure luxury, zero clutter */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#0EA552]/15 blur-[120px] rounded-full pointer-events-none" />

        {/* Top Header Row: Status & Toggle */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4ADE80]" />
            </span>
            <span className="font-termina font-bold text-xs uppercase tracking-[0.16em] text-[#A7F3D0]">
              {lang === 'th' ? 'ผลลัพธ์การลดคาร์บอนจริง' : 'VERIFIED CARBON ABATEMENT'}
            </span>
            <span className="hidden sm:inline-block text-white/30">|</span>
            <span className="hidden sm:inline-block text-xs text-white/60 font-mono">
              ISO 14064-3 ASSURED
            </span>
          </div>

          {/* Clean Segmented Control */}
          <div className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('carbon')}
              className={`px-4 py-1.5 rounded-full text-xs font-termina font-bold transition-all cursor-pointer ${
                viewMode === 'carbon'
                  ? 'bg-[#0B7A3E] text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {lang === 'th' ? 'ตัวชี้วัดคาร์บอน (tCO₂e)' : 'Carbon Metrics'}
            </button>
            <button
              type="button"
              onClick={() => setViewMode('equivalent')}
              className={`px-4 py-1.5 rounded-full text-xs font-termina font-bold transition-all cursor-pointer ${
                viewMode === 'equivalent'
                  ? 'bg-[#0B7A3E] text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {lang === 'th' ? 'เทียบเท่าสิ่งแวดล้อม' : 'Equivalents'}
            </button>
          </div>
        </div>

        {/* Centerpiece Hero Counting Display */}
        <div className="relative z-10 py-10 sm:py-14 text-center">
          {viewMode === 'carbon' ? (
            <>
              <p className="font-termina font-bold text-xs sm:text-sm uppercase tracking-[0.18em] text-[#CFE9D8]/80 mb-3">
                {lang === 'th'
                  ? 'ปริมาณก๊าซเรือนกระจกที่ผ่านการตรวจวัดและลดได้จริง'
                  : 'TOTAL EMISSIONS MEASURED, ASSURED & PUT ON A DIET'}
              </p>
              <div className="flex items-baseline justify-center gap-2 sm:gap-4 flex-wrap">
                <span className="font-termina font-black text-[clamp(44px,7.5vw,96px)] leading-none text-white tracking-tight drop-shadow-md">
                  {animatedTotal.toLocaleString()}
                </span>
                <span className="font-termina font-bold text-[clamp(20px,3vw,38px)] text-[#4ADE80] tracking-normal">
                  tCO₂e
                </span>
              </div>
              <p className="text-[15px] sm:text-[17px] text-white/75 max-w-[56ch] mx-auto mt-4 font-light [text-wrap:pretty]">
                {lang === 'th'
                  ? 'ขับเคลื่อนการลดคาร์บอนร่วมกับบริษัทจดทะเบียนในตลาดหลักทรัพย์และกลุ่มธุรกิจอุตสาหกรรมชั้นนำในประเทศไทย'
                  : 'Empowering listed enterprises and industrial leaders across Thailand to fulfill IFRS S2 climate transition plans.'}
              </p>
            </>
          ) : (
            <>
              <p className="font-termina font-bold text-xs sm:text-sm uppercase tracking-[0.18em] text-[#CFE9D8]/80 mb-3">
                {lang === 'th' ? 'ผลลัพธ์เชิงบวกเทียบเท่าต่อระบบนิเวศ' : 'ECOLOGICAL EQUIVALENT POSITIVE IMPACT'}
              </p>
              <div className="flex items-baseline justify-center gap-3 sm:gap-5 flex-wrap">
                <span className="font-termina font-black text-[clamp(44px,7.5vw,96px)] leading-none text-white tracking-tight">
                  {(animatedTrees * 1000).toLocaleString()}
                </span>
                <span className="font-termina font-bold text-[clamp(18px,2.8vw,34px)] text-[#4ADE80]">
                  {lang === 'th' ? 'ต้นไม้โตเต็มวัย' : 'Trees Planted'}
                </span>
              </div>
              <p className="text-[15px] sm:text-[17px] text-white/75 max-w-[56ch] mx-auto mt-4 font-light [text-wrap:pretty]">
                {lang === 'th'
                  ? `เทียบเท่าการปลูกต้นไม้ป่ากว่า ${(animatedTrees / 1000).toFixed(1)} ล้านต้น หรือเทียบเท่าการลดการใช้รถยนต์บนท้องถนน ${animatedCars.toLocaleString()} คันต่อปี`
                  : `Equivalent to planting over ${(animatedTrees / 1000).toFixed(1)}M mature trees or taking ${animatedCars.toLocaleString()} passenger vehicles off the road for an entire year.`}
              </p>
            </>
          )}
        </div>

        {/* 4 Clean Architectural Metrics Pods */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10">
          {/* Pod 1 */}
          <div className="p-6 rounded-[24px] bg-white/[0.04] border border-white/8 hover:bg-white/[0.08] hover:border-white/15 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-termina font-bold uppercase tracking-wider text-[#A7F3D0]">
                {lang === 'th' ? 'องค์กรพันธมิตร' : 'PARTNERS'}
              </span>
              <Building2 className="w-4 h-4 text-[#4ADE80]" />
            </div>
            <div className="font-termina font-black text-3xl sm:text-4xl text-white mb-1">
              {animatedClients}+
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {lang === 'th'
                ? 'SET50, SET100 และองค์กรเตรียมเข้าตลาด'
                : 'SET50, SET100 & pre-IPO market champions'}
            </p>
          </div>

          {/* Pod 2 */}
          <div className="p-6 rounded-[24px] bg-white/[0.04] border border-white/8 hover:bg-white/[0.08] hover:border-white/15 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-termina font-bold uppercase tracking-wider text-[#A7F3D0]">
                SCOPE 1 & 2
              </span>
              <TrendingDown className="w-4 h-4 text-[#4ADE80]" />
            </div>
            <div className="font-termina font-black text-3xl sm:text-4xl text-white mb-1">
              {(animatedScope12 / 1000).toFixed(0)}k <span className="text-sm font-bold text-[#4ADE80]">tCO₂e</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {lang === 'th'
                ? 'การลดการปล่อยทางตรงและพลังงานไฟฟ้า'
                : 'Direct process & purchased energy abatement'}
            </p>
          </div>

          {/* Pod 3 */}
          <div className="p-6 rounded-[24px] bg-white/[0.04] border border-white/8 hover:bg-white/[0.08] hover:border-white/15 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-termina font-bold uppercase tracking-wider text-[#A7F3D0]">
                SCOPE 3
              </span>
              <Layers className="w-4 h-4 text-[#4ADE80]" />
            </div>
            <div className="font-termina font-black text-3xl sm:text-4xl text-white mb-1">
              {(animatedScope3 / 1000).toFixed(0)}k <span className="text-sm font-bold text-[#4ADE80]">tCO₂e</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {lang === 'th'
                ? 'ตรวจวัดตลอดห่วงโซ่อุปทานผ่าน Carbon Scout'
                : 'Supply chain telemetry across upstream vendors'}
            </p>
          </div>

          {/* Pod 4 */}
          <div className="p-6 rounded-[24px] bg-white/[0.04] border border-white/8 hover:bg-white/[0.08] hover:border-white/15 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-termina font-bold uppercase tracking-wider text-[#A7F3D0]">
                COMPLIANCE
              </span>
              <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
            </div>
            <div className="font-termina font-black text-3xl sm:text-4xl text-white mb-1">
              100%
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              {lang === 'th'
                ? 'ผ่านการรับรองเกณฑ์ IFRS & TGO'
                : 'IFRS S1/S2 & TGO verification readiness'}
            </p>
          </div>
        </div>

        {/* Bottom Action Strip */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/60 font-light text-center sm:text-left">
            {lang === 'th'
              ? 'ต้องการคำนวณเป้าหมายคาร์บอนไดเอทสำหรับองค์กรของคุณ?'
              : 'Ready to calculate your organization’s carbon diet roadmap?'}
          </span>
          <Link
            to={`/${lang}/contact`}
            className="px-6 py-2.5 rounded-full bg-[#0B7A3E] text-white hover:bg-[#0EA552] text-xs font-termina font-bold tracking-wider inline-flex items-center gap-2 transition-all shadow-sm group"
          >
            <span>{lang === 'th' ? 'ขอรับการประเมินเบื้องต้น' : 'Get Carbon Assessment'}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
