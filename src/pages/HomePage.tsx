import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language, BlogPost } from '../types/content';
import { CONTENT_TH } from '../content/th';
import { CONTENT_EN } from '../content/en';
import { BLOG_POSTS_DATA } from '../content/posts';
import { SeoHead } from '../components/common/SeoHead';
import { PostQuickPreviewModal } from '../components/common/PostQuickPreviewModal';
import { IfrsAllianceSeal } from '../components/common/IfrsAllianceSeal';
import { Logo } from '../components/brand/Logo';
import { CarbonSavedImpactCounter } from '../components/home/CarbonSavedImpactCounter';
import {
  ArrowRight,
  Award,
  Calendar,
  FileCheck2,
  Calculator,
  Radar,
  GraduationCap,
  FileSpreadsheet,
  BadgeCheck,
  Check,
  Leaf,
  BarChart3,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Building2,
  TrendingDown,
  Layers,
} from 'lucide-react';

export const HomePage: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedPreviewPost, setSelectedPreviewPost] = useState<BlogPost | null>(null);

  const content = lang === 'th' ? CONTENT_TH : CONTENT_EN;
  const t = content.home;
  const cta = content.ctaBand;

  // Real enterprise client partners across Thai capital markets & industry
  const enterpriseClients = [
    { code: 'SCGP', name: 'SCG Packaging', sector: 'SET50 · Packaging' },
    { code: 'GC', name: 'PTT Global Chemical', sector: 'SET50 · Petrochemical' },
    { code: 'CPALL', name: 'CP ALL Retail', sector: 'SET50 · Retail & FMCG' },
    { code: 'TU', name: 'Thai Union Group', sector: 'SET50 · Food Processing' },
    { code: 'CPN', name: 'Central Pattana', sector: 'SET50 · Real Estate' },
    { code: 'BCP', name: 'Bangchak Corp', sector: 'SET100 · Clean Energy' },
    { code: 'IVL', name: 'Indorama Ventures', sector: 'SET50 · Global Chemical' },
    { code: 'EA', name: 'Energy Absolute', sector: 'SET100 · Green Mobility' },
    { code: 'MPG', name: 'Mitr Phol Group', sector: 'Agri-Business Leader' },
    { code: 'MINT', name: 'Minor International', sector: 'SET50 · Hospitality' },
  ];
  const marqueeClients = [...enterpriseClients, ...enterpriseClients];

  return (
    <div className="w-full bg-[#F3F0DF] text-[#0E0E0C] overflow-x-hidden selection:bg-[#0B7A3E] selection:text-[#F3F0DF] relative">
      <SeoHead
        lang={lang}
        title={lang === 'th' ? 'หน้าหลัก | ความยั่งยืนที่เติบโตไปกับธุรกิจ' : 'Green that grows | LO-CARB'}
        description={
          lang === 'th'
            ? 'LO-CARB ที่ปรึกษาและผู้พัฒนาเทคโนโลยีด้านสภาพภูมิอากาศชั้นนำของไทย สมาชิกแรกของ IFRS Sustainability Alliance ในประเทศไทย'
            : "Thailand's premier climate-tech and sustainability consultancy. The first official IFRS Sustainability Alliance partner in Thailand."
        }
        pathname={`/${lang}`}
      />

      {/* Pure, clean ambient atmosphere — no cluttered grid patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0EA552]/6 blur-[140px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-[800px] left-0 w-[400px] h-[400px] bg-[#0B7A3E]/5 blur-[120px] rounded-full pointer-events-none -z-0" />

      {/* ========================================================================= */}
      {/* 1. HERO — Clean, Modern, Elegant Curves, Architectural Stage               */}
      {/* ========================================================================= */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden" id="top">
        <div className="max-w-[1248px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column (7 cols): Editorial Typography & Confident Action */}
            <div className="md:col-span-7 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 border border-[#0E0E0C]/10 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#0B7A3E] font-termina mb-7 shadow-2xs backdrop-blur-sm animate-rise">
                <span className="w-5 h-5 rounded-full bg-[#0EA552] flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span>
                  {lang === 'th'
                    ? 'สมาชิก IFRS SUSTAINABILITY ALLIANCE รายแรกในไทย'
                    : "THAILAND'S 1ST IFRS SUSTAINABILITY ALLIANCE MEMBER"}
                </span>
              </div>

              {/* H1: Green that grows. with authentic brand curve */}
              {lang === 'en' ? (
                <div className="mb-7 animate-rise" style={{ animationDelay: '0.08s' }}>
                  <h1 className="text-[clamp(44px,5.4vw,80px)] leading-[1.0] tracking-[-0.01em] uppercase font-bold font-termina text-[#0E0E0C] [text-wrap:balance]">
                    Green that<br />
                    <span className="font-stix italic lowercase font-bold text-[#0B7A3E] relative inline-block pr-1">
                      grows
                      <svg
                        className="absolute -left-[2%] -bottom-[0.12em] w-[104%] h-[0.34em] overflow-visible pointer-events-none"
                        viewBox="0 0 400 40"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          className="animate-draw"
                          d="M6 28C90 8 210 6 394 22"
                          fill="none"
                          stroke="#0EA552"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[#0EA552]">.</span>
                  </h1>
                </div>
              ) : (
                <div className="mb-7 animate-rise" style={{ animationDelay: '0.08s' }}>
                  <h1 className="text-[clamp(36px,4.5vw,64px)] leading-[1.2] font-bold font-anakotmai text-[#0E0E0C] [text-wrap:balance]">
                    {t.hero.headlinePrefix}{' '}
                    <span className="text-[#0B7A3E] font-black relative inline-block">
                      {t.hero.headlineEmphasis}
                      <svg
                        className="absolute -left-[2%] -bottom-[0.12em] w-[104%] h-[0.34em] overflow-visible pointer-events-none"
                        viewBox="0 0 400 40"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          className="animate-draw"
                          d="M6 28C90 8 210 6 394 22"
                          fill="none"
                          stroke="#0EA552"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h1>
                </div>
              )}

              {/* Subheadline */}
              <p
                className="text-[17px] sm:text-[18px] leading-[1.65] text-[#4A4A42] max-w-[52ch] mb-9 font-light [text-wrap:pretty] animate-rise"
                style={{ animationDelay: '0.16s' }}
              >
                {lang === 'th'
                  ? 'ที่ปรึกษาและผู้พัฒนาเทคโนโลยีด้านสภาพภูมิอากาศชั้นนำของไทย ช่วยให้บริษัทจดทะเบียน pre-IPO และ SME ปฏิบัติตามมาตรฐาน IFRS S1 & S2 และลดคาร์บอนด้วยข้อมูลที่ผ่านการทวนสอบ'
                  : 'A Thai climate-tech and sustainability consultancy helping listed, pre-IPO and SME companies meet IFRS S1 & S2 and cut carbon, with data they can trust.'}
              </p>

              {/* Action Buttons: Primary Pill + Quiet secondary link */}
              <div
                className="flex items-center flex-wrap gap-5 mb-10 animate-rise"
                style={{ animationDelay: '0.28s' }}
              >
                <Link
                  to={`/${lang}/contact`}
                  className="btn-slide btn-slide-p rounded-full px-8 py-4 text-sm font-bold font-termina tracking-wide inline-flex items-center gap-3 shadow-md group"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2.4}
                  />
                </Link>

                <a
                  href="#solutions"
                  className="font-termina font-bold text-xs tracking-wider text-[#0B7A3E] hover:text-[#0E0E0C] transition-colors inline-flex items-center gap-2 group min-h-[44px]"
                >
                  <span>{lang === 'th' ? 'ดูโซลูชันของเรา' : 'See our solutions'}</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.4}
                  />
                </a>
              </div>

              {/* 3 Checkpoint Bullets with clean metrics */}
              <div
                className="flex items-center flex-wrap gap-x-6 gap-y-2.5 text-[13px] text-[#4A4A42] font-medium pt-5 border-t border-[#0E0E0C]/10 animate-rise"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0B7A3E]" strokeWidth={2.5} />
                  <span>{lang === 'th' ? '120+ องค์กรพันธมิตร' : '120+ Enterprise Partners'}</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0B7A3E]" strokeWidth={2.5} />
                  <span>{lang === 'th' ? '1.8M+ tCO₂e ตรวจวัดจริง' : '1.8M+ tCO₂e Measured'}</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0B7A3E]" strokeWidth={2.5} />
                  <span>{lang === 'th' ? 'พันธมิตร IFRS รายแรกในไทย' : "Thailand's 1st IFRS Member"}</span>
                </span>
              </div>
            </div>

            {/* Right Column (5 cols): Sculptural Architectural Curved Glass Capsule */}
            <div className="md:col-span-5 flex justify-center md:justify-end animate-rise" style={{ animationDelay: '0.16s' }}>
              <div className="relative w-full max-w-[360px] sm:max-w-[380px]">
                {/* Soft ambient green backlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA552]/20 to-[#0B7A3E]/30 blur-2xl rounded-[160px] -z-0" />

                {/* Main Curved Stadium Capsule */}
                <div className="relative z-10 w-full rounded-[160px] sm:rounded-[180px] bg-gradient-to-b from-[#0B7A3E] via-[#086332] to-[#043319] p-7 sm:p-9 text-[#F3F0DF] shadow-2xl border border-white/20 overflow-hidden flex flex-col justify-between min-h-[510px] sm:min-h-[550px]">
                  {/* Subtle inner organic curve highlight */}
                  <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[180px]" />

                  {/* Top Status */}
                  <div className="relative z-10 flex items-center justify-between pt-2">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 border border-white/15 text-[10px] font-termina font-bold text-[#A7F3D0] uppercase tracking-wider backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                      LIVE TELEMETRY
                    </span>
                    <span className="text-[11px] font-mono text-white/60">ISSB · S1/S2</span>
                  </div>

                  {/* Center Emblem: Elegant Rotating Ring & Live Carbon Impact */}
                  <div className="relative z-10 my-auto flex flex-col items-center text-center py-6">
                    <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                      {/* Animated outer ring */}
                      <div className="absolute inset-0 rounded-full border border-white/20" />
                      <div className="absolute inset-2 rounded-full border border-dashed border-[#4ADE80]/50 animate-spin-slow" />
                      
                      {/* Center Brand Orb */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#063319] to-[#0EA552] border border-white/30 flex flex-col items-center justify-center shadow-lg backdrop-blur-md">
                        <Leaf className="w-8 h-8 text-white drop-shadow-sm" strokeWidth={1.8} />
                        <span className="font-termina font-black text-[12px] text-white tracking-tight mt-0.5">
                          LO-CARB
                        </span>
                      </div>
                    </div>

                    <span className="font-termina font-bold text-xs uppercase tracking-[0.16em] text-[#CFE9D8]/90">
                      CARBON DIET METRICS
                    </span>
                    <div className="font-termina font-black text-2xl sm:text-3xl text-white tracking-tight mt-1">
                      1,842,500 <span className="text-sm font-bold text-[#4ADE80]">tCO₂e</span>
                    </div>
                    <span className="text-xs text-[#CFE9D8]/75 mt-1 font-light">
                      {lang === 'th' ? 'ตรวจวัดและลดได้จริง' : 'Assured & Abated'}
                    </span>
                  </div>

                  {/* Bottom Stats Row inside Capsule */}
                  <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-[#CFE9D8] font-medium">
                    <span>120+ Clients</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                    <span>8+ Years</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                    <span>100% Pass</span>
                  </div>
                </div>

                {/* Rotating Circular Brand Badge in the corner */}
                <div className="absolute -left-6 -bottom-4 z-20 w-28 h-28 rounded-full bg-[#F3F0DF] border border-[#0E0E0C]/15 shadow-lg flex items-center justify-center">
                  <svg
                    className="animate-spin-slow w-full h-full pointer-events-none select-none"
                    viewBox="0 0 132 132"
                  >
                    <defs>
                      <path
                        id="circHeroSeal"
                        d="M66 66m-48 0a48 48 0 1 1 96 0a48 48 0 1 1-96 0"
                        fill="none"
                      />
                    </defs>
                    <text
                      fontFamily="Termina, sans-serif"
                      fontWeight="700"
                      fontSize="9.5"
                      letterSpacing="2.2"
                      fill="#0E0E0C"
                    >
                      <textPath href="#circHeroSeal">
                        WE PUT THE WORLD ON A CARBON DIET •{' '}
                      </textPath>
                    </text>
                  </svg>
                  <Leaf className="w-6 h-6 text-[#0B7A3E] absolute inset-0 m-auto" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1.5 CARBON SAVED IMPACT COUNTER — Clean Animated Number Counting Effect   */}
      {/* ========================================================================= */}
      <CarbonSavedImpactCounter lang={lang} />

      {/* ========================================================================= */}
      {/* 2. OUR STORY IN BRIEF (ABOUT US) — Minimalist, Clean Stadium Curve        */}
      {/* ========================================================================= */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="max-w-[1248px] mx-auto bg-[#0B7A3E] text-[#F3F0DF] py-16 sm:py-20 px-8 sm:px-14 rounded-[36px] sm:rounded-[48px] shadow-xl text-center relative overflow-hidden">
          {/* Subtle curved ambient light */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#0EA552]/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-[880px] mx-auto relative z-10">
            {/* Clean Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#F3F0DF] text-xs font-termina font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <Logo variant="on-green" height={16} />
              <span className="w-px h-3.5 bg-white/25" />
              <span>{lang === 'th' ? 'เกี่ยวกับเรา' : 'ABOUT US'}</span>
            </div>

            {/* Headline */}
            <h2
              className={`text-[clamp(30px,3.6vw,48px)] leading-[1.12] uppercase text-white max-w-[22ch] mx-auto [text-wrap:balance] mb-6 ${
                lang === 'th' ? 'font-anakotmai font-bold' : 'font-termina font-bold'
              }`}
            >
              {t.storyBrief.title}
            </h2>

            {/* Narrative text */}
            <p className="text-[16px] sm:text-[18px] leading-[1.7] text-white/90 max-w-[58ch] mx-auto mb-10 font-light [text-wrap:pretty]">
              {t.storyBrief.description}
            </p>

            {/* 3 Clean Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-[840px] mx-auto mb-10">
              {t.storyBrief.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-6 rounded-[24px] bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 transition-all shadow-xs"
                >
                  <span className="font-termina font-black text-3xl sm:text-4xl text-white tracking-tight mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {stat.label}
                  </span>
                  <span className="text-xs text-white/70 mt-0.5">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                to={`/${lang}/about/story`}
                className="btn-slide btn-slide-l rounded-full px-8 py-3.5 text-sm font-bold font-termina tracking-wide inline-flex items-center justify-center gap-2.5 shadow-md group"
              >
                <span>{t.storyBrief.cta}</span>
                <ArrowRight
                  className="w-4 h-4 text-[#0B7A3E] transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR CLIENTS & VERIFIED CREDENTIALS — Smooth Infinite Marquee          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 relative" id="clients">
        <div className="max-w-[1248px] mx-auto px-6 text-left mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-termina font-bold text-[11px] uppercase tracking-[0.14em] text-[#0B7A3E] mb-2.5">
                {lang === 'th' ? 'ลูกค้าและองค์กรพันธมิตร' : 'OUR CLIENTS'}
              </p>
              <h2
                className={`text-[clamp(28px,2.7vw,42px)] leading-[1.1] uppercase text-[#0E0E0C] max-w-[18ch] [text-wrap:balance] ${
                  lang === 'th' ? 'font-anakotmai font-bold' : 'font-termina font-bold'
                }`}
              >
                {t.trustedBy.title}
              </h2>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#4A4A42] max-w-[42ch] [text-wrap:pretty]">
              {lang === 'th'
                ? 'บริษัทจดทะเบียนในตลาดหลักทรัพย์ (SET50 / SET100), องค์กรเตรียมเข้าตลาด (Pre-IPO) และกลุ่มธุรกิจอุตสาหกรรมชั้นนำ'
                : 'SET50 / SET100 listed conglomerates, pre-IPO enterprises, and industrial champions across ASEAN.'}
            </p>
          </div>
        </div>

        {/* Smooth Infinite Client Marquee */}
        <div className="overflow-hidden mask-marquee py-3" aria-label="Client marquee">
          <div className="marquee-track-clients">
            {marqueeClients.map((client, idx) => (
              <div
                key={idx}
                className="w-[220px] h-[108px] rounded-[22px] bg-white border border-[#0E0E0C]/8 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:border-[#0EA552] hover:shadow-md cursor-default shrink-0 group p-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-[10px] bg-[#EAE5CE] flex items-center justify-center font-termina font-bold text-[11px] text-[#0B7A3E] group-hover:bg-[#0EA552] group-hover:text-white transition-colors">
                    {client.code}
                  </div>
                  <span className="font-termina font-bold text-[12.5px] text-[#0E0E0C] group-hover:text-[#0B7A3E] transition-colors leading-tight">
                    {client.name}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-[#4A4A42]/80 uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F3F0DF]">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Alliances & Certificates Row */}
        <div className="max-w-[1248px] mx-auto px-6 mt-10 text-left">
          <div className="flex items-center flex-wrap gap-3.5">
            {/* Main IFRS Alliance Badge with Active Green Glow Ring */}
            <div className="inline-flex items-center gap-3.5 px-5 py-3 rounded-full bg-white border-[2px] border-[#0B7A3E] shadow-sm hover:shadow-md transition-all">
              <span className="w-9 h-9 rounded-full bg-[#0B7A3E] text-white flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <b className="block font-bold text-[13.5px] leading-tight text-[#0E0E0C]">
                    IFRS Sustainability Alliance
                  </b>
                  <span className="text-[9px] font-bold font-termina uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0B7A3E] text-white">
                    1ST IN TH
                  </span>
                </div>
                <small className="block font-medium text-[11.5px] text-[#4A4A42] mt-0.5">
                  IFRS Foundation / ISSB · Official 1st in Thailand
                </small>
              </div>
            </div>

            {/* Certificate 2: TGO Verifier */}
            <div className="inline-flex items-center gap-3.5 px-5 py-3 rounded-full bg-white border border-[#0E0E0C]/10 shadow-2xs hover:border-[#0B7A3E]/40 transition-colors">
              <span className="w-9 h-9 rounded-full bg-[#EAE5CE] text-[#0B7A3E] flex items-center justify-center shrink-0">
                <FileCheck2 className="w-4 h-4" />
              </span>
              <div>
                <b className="block font-bold text-[13.5px] leading-tight text-[#0E0E0C]">
                  {lang === 'th' ? 'ที่ปรึกษาขึ้นทะเบียน อบก. (TGO)' : 'TGO Registered Verifier'}
                </b>
                <small className="block font-medium text-[11.5px] text-[#4A4A42]">
                  Thailand GHG Management Org · CFO/CFP
                </small>
              </div>
            </div>

            {/* Certificate 3: ISO 14064 */}
            <div className="inline-flex items-center gap-3.5 px-5 py-3 rounded-full bg-white border border-[#0E0E0C]/10 shadow-2xs hover:border-[#0B7A3E]/40 transition-colors">
              <span className="w-9 h-9 rounded-full bg-[#EAE5CE] text-[#0B7A3E] flex items-center justify-center shrink-0">
                <BadgeCheck className="w-4 h-4" />
              </span>
              <div>
                <b className="block font-bold text-[13.5px] leading-tight text-[#0E0E0C]">
                  ISO 14064-1 & ISO 14064-3
                </b>
                <small className="block font-medium text-[11.5px] text-[#4A4A42]">
                  Lead Verifier · GHG Protocol Assurance
                </small>
              </div>
            </div>

            <Link
              to={`/${lang}/about/story`}
              className="font-termina font-bold text-xs tracking-wider text-[#0B7A3E] hover:text-[#0E0E0C] ml-2 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>{lang === 'th' ? 'ดูใบรับรองทั้งหมด →' : 'All certificates →'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT WE DO (OUR SOLUTIONS) — Apple/Linear Modern Bento Grid           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 relative" id="solutions">
        <div className="max-w-[1248px] mx-auto px-6 text-left">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-termina font-bold text-[11px] uppercase tracking-[0.14em] text-[#0B7A3E] mb-2.5">
                {lang === 'th' ? 'สิ่งที่เราทำ' : 'WHAT WE DO'}
              </p>
              <h2
                className={`text-[clamp(28px,2.7vw,42px)] leading-[1.1] uppercase text-[#0E0E0C] max-w-[18ch] [text-wrap:balance] ${
                  lang === 'th' ? 'font-anakotmai font-bold' : 'font-termina font-bold'
                }`}
              >
                {t.solutionsSection.title}
              </h2>
            </div>
            <Link
              to={`/${lang}/solutions/ifrs`}
              className="font-termina font-bold text-xs tracking-wider text-[#0B7A3E] hover:text-[#0E0E0C] inline-flex items-center gap-2 group transition-colors"
            >
              <span>{t.solutionsSection.viewAll}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </Link>
          </div>

          {/* Master Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 01: Featured IFRS Standards (Spans 2 cols, 2 rows) */}
            <Link
              to={`/${lang}/solutions/ifrs`}
              className="lg:col-span-2 lg:row-span-2 bg-[#0B7A3E] text-[#F3F0DF] p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] flex flex-col justify-between group no-underline shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle ambient light */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ADE80]/15 blur-3xl rounded-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="w-12 h-12 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0B7A3E] transition-colors">
                    <FileCheck2 className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#CFE9D8]">
                    01
                  </span>
                </div>

                <span className="block font-termina font-bold text-[11px] tracking-widest text-[#A7F3D0] uppercase mb-3">
                  {lang === 'th' ? 'สมาชิก IFRS ALLIANCE รายแรกในไทย' : "THAILAND'S 1ST IFRS ALLIANCE MEMBER"}
                </span>

                <h3 className="font-termina font-bold text-[28px] sm:text-[32px] uppercase leading-[1.12] max-w-[14ch] text-white mb-4">
                  IFRS Standards S1 & S2
                </h3>

                <p className="text-[16px] sm:text-[17px] text-white/90 leading-[1.65] max-w-[42ch] mb-8 font-light">
                  {lang === 'th'
                    ? 'บริการตรวจประเมิน Gap ครบวงจร ตั้งแต่วิเคราะห์ช่องว่างความเสี่ยงสภาพภูมิอากาศสู่ผลกระทบทางการเงิน จนถึงรายงานฉบับแรกตามมาตรฐาน IFRS'
                    : 'One end-to-end service, from gap analysis and climate risk assessment to financial impact and your first IFRS-aligned report.'}
                </p>
              </div>

              <div className="pt-6 border-t border-white/20 flex items-center justify-between font-termina font-bold text-xs tracking-wider text-white relative z-10">
                <span>{lang === 'th' ? 'ปรึกษาผู้เชี่ยวชาญ IFRS' : 'Talk to an IFRS specialist'}</span>
                <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </div>
            </Link>

            {/* Card 02: CarbonCal + Carbon Camp */}
            <Link
              to={`/${lang}/solutions/carboncal`}
              className="rounded-[32px] bg-white border border-[#0E0E0C]/8 p-8 flex flex-col justify-between group no-underline min-h-[290px] shadow-xs hover:shadow-xl hover:border-[#0B7A3E]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-11 h-11 rounded-full bg-[#0B7A3E]/10 border border-[#0B7A3E]/20 flex items-center justify-center text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-white transition-all">
                    <Calculator className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#4A4A42]">
                    02
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[17px] leading-snug text-[#0E0E0C] mb-2.5 group-hover:text-[#0B7A3E] transition-colors">
                  CarbonCal + Carbon Camp
                </h3>

                <p className="text-[14px] text-[#4A4A42] leading-[1.6] line-clamp-3 mb-6 font-light">
                  {lang === 'th'
                    ? 'แพลตฟอร์มบัญชีคาร์บอนอัตโนมัติ พร้อมคอร์สฝึกอบรมเชิงปฏิบัติการให้ทีมงานองค์กรทำได้จริง'
                    : 'A carbon accounting platform, plus hands-on training so your team can run it.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E0E0C]/8 flex items-center justify-between font-termina font-bold text-[11.5px] tracking-wider text-[#0B7A3E]">
                <span>{lang === 'th' ? 'สำรวจฟีเจอร์' : 'Learn more'}</span>
                <span className="w-9 h-9 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:border-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                </span>
              </div>
            </Link>

            {/* Card 03: ISSB Executive Training */}
            <Link
              to={`/${lang}/solutions/issb-training`}
              className="rounded-[32px] bg-white border border-[#0E0E0C]/8 p-8 flex flex-col justify-between group no-underline min-h-[290px] shadow-xs hover:shadow-xl hover:border-[#0B7A3E]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-11 h-11 rounded-full bg-[#0B7A3E]/10 border border-[#0B7A3E]/20 flex items-center justify-center text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-white transition-all">
                    <GraduationCap className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#4A4A42]">
                    03
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[17px] leading-snug text-[#0E0E0C] mb-2.5 group-hover:text-[#0B7A3E] transition-colors">
                  ISSB Executive Training
                </h3>

                <p className="text-[14px] text-[#4A4A42] leading-[1.6] line-clamp-3 mb-6 font-light">
                  {lang === 'th'
                    ? 'หลักสูตรเวิร์กช็อปพัฒนาศักยภาพผู้บริหารระดับสูงและคณะกรรมการให้พร้อมรับเกณฑ์ ISSB'
                    : "Workshops that build your board's and team's ISSB capability."}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E0E0C]/8 flex items-center justify-between font-termina font-bold text-[11.5px] tracking-wider text-[#0B7A3E]">
                <span>{lang === 'th' ? 'สำรวจฟีเจอร์' : 'Learn more'}</span>
                <span className="w-9 h-9 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:border-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                </span>
              </div>
            </Link>

            {/* Card 04: Carbon Scout (Scope 3) */}
            <Link
              to={`/${lang}/solutions/carbon-scout`}
              className="rounded-[32px] bg-white border border-[#0E0E0C]/8 p-8 flex flex-col justify-between group no-underline min-h-[290px] shadow-xs hover:shadow-xl hover:border-[#0B7A3E]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-11 h-11 rounded-full bg-[#0B7A3E]/10 border border-[#0B7A3E]/20 flex items-center justify-center text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-white transition-all">
                    <Radar className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#4A4A42]">
                    04
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[17px] leading-snug text-[#0E0E0C] mb-2.5 group-hover:text-[#0B7A3E] transition-colors">
                  Carbon Scout (Scope 3)
                </h3>

                <p className="text-[14px] text-[#4A4A42] leading-[1.6] line-clamp-3 mb-6 font-light">
                  {lang === 'th'
                    ? 'ระบบรวบรวมข้อมูลคาร์บอน Scope 3 จากซัพพลายเออร์โดยตรง ลดภาระการไล่ทวงสเปรดชีต'
                    : 'Collect Scope 3 data from your suppliers, without the spreadsheet chase.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E0E0C]/8 flex items-center justify-between font-termina font-bold text-[11.5px] tracking-wider text-[#0B7A3E]">
                <span>{lang === 'th' ? 'สำรวจฟีเจอร์' : 'Learn more'}</span>
                <span className="w-9 h-9 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:border-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                </span>
              </div>
            </Link>

            {/* Card 05: Reporting & ESG Consulting */}
            <Link
              to={`/${lang}/solutions/reporting-consulting`}
              className="rounded-[32px] bg-white border border-[#0E0E0C]/8 p-8 flex flex-col justify-between group no-underline min-h-[290px] shadow-xs hover:shadow-xl hover:border-[#0B7A3E]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-11 h-11 rounded-full bg-[#0B7A3E]/10 border border-[#0B7A3E]/20 flex items-center justify-center text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-white transition-all">
                    <FileSpreadsheet className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#4A4A42]">
                    05
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[17px] leading-snug text-[#0E0E0C] mb-2.5 group-hover:text-[#0B7A3E] transition-colors">
                  Reporting & ESG Consulting
                </h3>

                <p className="text-[14px] text-[#4A4A42] leading-[1.6] line-clamp-3 mb-6 font-light">
                  {lang === 'th'
                    ? 'ที่ปรึกษาจัดทำรายงานความยั่งยืน ตั้งแต่การประเมินประเด็นสำคัญ (Materiality) จนถึงการเปิดเผยข้อมูล'
                    : 'Sustainability reports and advice, from materiality to final disclosure.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E0E0C]/8 flex items-center justify-between font-termina font-bold text-[11.5px] tracking-wider text-[#0B7A3E]">
                <span>{lang === 'th' ? 'สำรวจฟีเจอร์' : 'Learn more'}</span>
                <span className="w-9 h-9 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center group-hover:bg-[#0B7A3E] group-hover:text-white group-hover:border-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. IFRS SUSTAINABILITY ALLIANCE SPOTLIGHT — Institutional Accreditation   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 relative" id="ifrs-spotlight">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-[36px] sm:rounded-[48px] bg-white border border-[#0E0E0C]/10 grid grid-cols-1 md:grid-cols-12 overflow-hidden relative shadow-[0_12px_40px_-16px_rgba(14,14,12,0.12)]">
            {/* Left Column (5 cols): Elegant Accreditation Pedestal */}
            <div className="md:col-span-5 relative min-h-[420px] sm:min-h-[480px] flex flex-col items-center justify-center bg-gradient-to-br from-[#EAE5CE] via-[#E2DCBD] to-[#D5CEA8] p-8 text-center border-b md:border-b-0 md:border-r border-[#0E0E0C]/10">
              <div className="relative z-10 flex flex-col items-center my-auto">
                {/* 1st Emblem */}
                <div className="relative font-termina font-black text-[120px] sm:text-[140px] leading-none text-[#0B7A3E] tracking-tight select-none">
                  1<span className="font-stix italic text-[0.45em] align-top relative top-[0.1em] ml-1">st</span>
                </div>

                <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E0E0C]/10 border border-[#0E0E0C]/15 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-[#0B7A3E]" />
                  <span className="font-termina font-bold text-[10px] tracking-[0.14em] uppercase text-[#0E0E0C]">
                    OFFICIAL PARTNER · FIRST IN THAILAND
                  </span>
                </div>
              </div>

              <div className="relative z-10 text-[11px] font-medium text-[#4A4A42] tracking-wider uppercase mt-4">
                IFRS S1 & S2 · ISSB FOUNDATION · SEC ALIGNED
              </div>
            </div>

            {/* Right Column (7 cols): Accreditation Details & 3 Pillars */}
            <div className="md:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between text-left relative">
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-termina font-bold uppercase tracking-wider text-[#0B7A3E] mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#0EA552] animate-pulse" />
                      <span>IFRS SUSTAINABILITY ALLIANCE</span>
                      <span className="text-[#0B7A3E]/40">·</span>
                      <span className="text-[#0EA552]">OFFICIAL 1ST PARTNER</span>
                    </div>

                    {lang === 'en' ? (
                      <h2 className="font-termina font-bold text-[clamp(26px,2.8vw,38px)] leading-[1.1] uppercase text-[#0E0E0C] max-w-[16ch] [text-wrap:balance]">
                        Thailand's{' '}
                        <span className="font-stix italic font-bold text-[#0B7A3E] lowercase">
                          first
                        </span>{' '}
                        member.
                      </h2>
                    ) : (
                      <h2 className="font-anakotmai font-bold text-[clamp(24px,2.8vw,36px)] leading-[1.25] text-[#0E0E0C] max-w-[18ch] [text-wrap:balance]">
                        สมาชิก <span className="font-stix italic text-[#0B7A3E]">IFRS Sustainability Alliance</span> รายแรกในไทย
                      </h2>
                    )}
                  </div>

                  <div className="shrink-0 hidden sm:block">
                    <IfrsAllianceSeal size={118} />
                  </div>
                </div>

                <p className="text-[16px] sm:text-[17px] text-[#4A4A42] leading-[1.65] max-w-[54ch] mb-8 font-light [text-wrap:pretty]">
                  {lang === 'th'
                    ? 'LO-CARB เป็นสมาชิก IFRS Sustainability Alliance รายแรกในประเทศไทย มอบสิทธิ์ให้ลูกค้าองค์กรเข้าถึงทรัพยากรโดยตรงจากผู้ร่างเกณฑ์ IFRS S1 & S2 ในขณะที่สำนักงาน ก.ล.ต. และตลาดหลักทรัพย์แห่งประเทศไทยกำลังผลักดันการเปิดเผยข้อมูลตามเกณฑ์ ISSB'
                    : "LO-CARB is Thailand's first official member of the IFRS Sustainability Alliance. That gives our clients direct access to technical resources behind IFRS S1 and S2 as the SEC and SET transition listed companies to mandatory ISSB-based disclosures."}
                </p>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                  <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF8EE] border border-[#0E0E0C]/8">
                    <div className="w-7 h-7 rounded-lg bg-[#0B7A3E]/10 flex items-center justify-center text-[#0B7A3E] font-termina font-bold text-[11px] mb-2.5">
                      S1
                    </div>
                    <b className="block font-termina font-bold text-[13px] text-[#0E0E0C] leading-snug mb-1">
                      {lang === 'th' ? 'ข้อกำหนดทั่วไป' : 'General Reqs'}
                    </b>
                    <span className="block text-[11.5px] text-[#4A4A42] leading-[1.4] font-light">
                      {lang === 'th'
                        ? 'ธรรมาภิบาล กลยุทธ์ และการผสานความเสี่ยงสู่การบริหารองค์กร'
                        : 'Governance, strategy, and risk management integration.'}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF8EE] border border-[#0E0E0C]/8">
                    <div className="w-7 h-7 rounded-lg bg-[#0B7A3E]/10 flex items-center justify-center text-[#0B7A3E] font-termina font-bold text-[11px] mb-2.5">
                      S2
                    </div>
                    <b className="block font-termina font-bold text-[13px] text-[#0E0E0C] leading-snug mb-1">
                      {lang === 'th' ? 'ความเสี่ยงสภาพภูมิอากาศ' : 'Climate Risk'}
                    </b>
                    <span className="block text-[11.5px] text-[#4A4A42] leading-[1.4] font-light">
                      {lang === 'th'
                        ? 'แบบจำลอง Scenario ผลกระทบการเงิน และก๊าซเรือนกระจก Scope 1–3'
                        : 'Scenario analysis, financial cash-flow impact, and Scope 1–3.'}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-[20px] bg-[#FAF8EE] border border-[#0E0E0C]/8">
                    <div className="w-7 h-7 rounded-lg bg-[#0B7A3E]/10 flex items-center justify-center text-[#0B7A3E] mb-2.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <b className="block font-termina font-bold text-[13px] text-[#0E0E0C] leading-snug mb-1">
                      {lang === 'th' ? 'ก.ล.ต. & ตลาดหลักทรัพย์' : 'SET & SEC Aligned'}
                    </b>
                    <span className="block text-[11.5px] text-[#4A4A42] leading-[1.4] font-light">
                      {lang === 'th'
                        ? 'เชื่อมโยงจาก 56-1 One Report สู่ความเชื่อมั่นในตลาดทุนสากล'
                        : 'Seamless roadmap from 56-1 One Report to global capital trust.'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center flex-wrap gap-4 pt-4 border-t border-[#0E0E0C]/10">
                <Link
                  to={`/${lang}/solutions/ifrs`}
                  className="btn-slide btn-slide-p rounded-full px-7 py-3 text-xs font-bold font-termina tracking-wide inline-flex items-center gap-2 shadow-sm group"
                >
                  <span>Explore IFRS services</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.4} />
                </Link>

                <Link
                  to={`/${lang}/about/story`}
                  className="font-termina font-bold text-xs tracking-wider text-[#0B7A3E] hover:text-[#0E0E0C] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>See the certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#0B7A3E]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FROM THE BLOG — Editorial Insights & Case Studies                     */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 relative" id="blog">
        <div className="max-w-[1248px] mx-auto px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-termina font-bold text-[11px] uppercase tracking-[0.14em] text-[#0B7A3E] mb-2.5">
                {lang === 'th' ? 'บทความและกรณีศึกษา' : 'INSIGHTS & CLIENT STORIES'}
              </p>
              <h2
                className={`text-[clamp(28px,2.7vw,42px)] leading-[1.1] uppercase text-[#0E0E0C] max-w-[18ch] [text-wrap:balance] ${
                  lang === 'th' ? 'font-anakotmai font-bold' : 'font-termina font-bold'
                }`}
              >
                {t.blogSection.title}
              </h2>
            </div>
            <Link
              to={`/${lang}/blog`}
              className="font-termina font-bold text-xs tracking-wider text-[#0B7A3E] hover:text-[#0E0E0C] inline-flex items-center gap-2 group transition-colors"
            >
              <span>{lang === 'th' ? 'ดูบทความทั้งหมด' : 'View all posts'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {BLOG_POSTS_DATA.slice(0, 3).map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setSelectedPreviewPost(post)}
                className="w-full text-left bg-transparent border-0 p-0 cursor-pointer group"
              >
                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-[#E6E2CC] shadow-xs group-hover:shadow-md transition-all duration-300">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <span className="absolute left-3.5 top-3.5 px-3 py-1 rounded-full bg-white font-termina font-bold text-[10px] tracking-wider uppercase text-[#0B7A3E] shadow-2xs">
                    {post.category === 'portfolio'
                      ? lang === 'th'
                        ? 'กรณีศึกษา'
                        : 'PORTFOLIO'
                      : lang === 'th'
                      ? 'คลังความรู้'
                      : 'KNOWLEDGE BASE'}
                  </span>

                  <span className="absolute right-3.5 bottom-3.5 px-3.5 py-1.5 rounded-full bg-[#0E0E0C] text-[#F3F0DF] font-medium text-xs opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                    {lang === 'th' ? 'อ่านสรุปเบื้องต้น' : 'Quick preview'}
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[16px] sm:text-[17px] leading-[1.35] text-[#0E0E0C] my-3.5 [text-wrap:balance] group-hover:text-[#0B7A3E] transition-colors line-clamp-2">
                  {post.title[lang]}
                </h3>

                <div className="font-medium text-[13px] text-[#4A4A42] flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#0B7A3E]" />
                  <span>
                    {post.date} · {post.readTime[lang]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. LET'S TALK — Stadium Curved Section with Interactive Topics & CTA      */}
      {/* ========================================================================= */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="max-w-[1248px] mx-auto rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#0B7A3E] via-[#086332] to-[#043319] text-[#F3F0DF] text-center p-10 sm:p-16 md:p-20 relative overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle ambient light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4ADE80]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
            <p className="font-termina font-bold text-[11px] uppercase tracking-[0.16em] text-[#A7F3D0] mb-4">
              LET'S TALK
            </p>

            {/* H2 */}
            {lang === 'en' ? (
              <h2 className="font-termina font-bold text-[clamp(32px,3.6vw,56px)] leading-[1.08] uppercase text-white max-w-[20ch] mx-auto [text-wrap:balance] mb-5">
                Ready to go{' '}
                <span className="font-stix italic lowercase font-bold text-[#A7F3D0]">
                  on a
                </span>{' '}
                carbon diet?
              </h2>
            ) : (
              <h2 className="font-anakotmai font-bold text-[clamp(30px,3.8vw,52px)] leading-[1.25] text-white max-w-[22ch] mx-auto [text-wrap:balance] mb-5">
                พร้อมเริ่มต้น <span className="font-stix italic text-[#A7F3D0]">ปรับสมดุล</span> คาร์บอนหรือยัง?
              </h2>
            )}

            <p className="text-[17px] sm:text-[18px] text-white/90 leading-[1.65] max-w-[50ch] mx-auto mb-8 font-light [text-wrap:pretty]">
              {lang === 'th'
                ? 'บอกเราว่าองค์กรของคุณอยู่ขั้นตอนใดในการจัดทำรายงาน IFRS S1/S2 หรือระบบบัญชีคาร์บอน ทีมผู้เชี่ยวชาญ LO-CARB พร้อมให้คำปรึกษาและตอบกลับภายใน 1 วันทำการ'
                : "Tell us where you are on IFRS S1/S2 readiness or automated carbon accounting. We'll reply within one business day."}
            </p>

            {/* Quick Consultation Topic Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2.5 mb-10 max-w-2xl">
              {[
                lang === 'th' ? 'ประเมินความพร้อม IFRS S1 & S2' : 'IFRS S1 & S2 Gap Analysis',
                lang === 'th' ? 'สาธิตแพลตฟอร์ม CarbonCal' : 'CarbonCal Demo',
                lang === 'th' ? 'เก็บข้อมูล Scope 3 ซัพพลายเออร์' : 'Scope 3 Telemetry',
                lang === 'th' ? 'หลักสูตรอบรม Carbon Camp' : 'Carbon Camp Workshop',
              ].map((topic, i) => (
                <Link
                  key={i}
                  to={`/${lang}/contact`}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-termina font-bold text-white hover:bg-white hover:text-[#0B7A3E] transition-all backdrop-blur-sm"
                >
                  {topic}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center flex-wrap gap-5">
              <Link
                to={`/${lang}/contact`}
                className="btn-slide btn-slide-l rounded-full px-9 py-4 text-sm font-bold font-termina tracking-wide inline-flex items-center gap-2.5 shadow-md group"
              >
                <span>{cta.primaryBtn}</span>
                <ArrowRight
                  className="w-4 h-4 text-[#0B7A3E] transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </Link>

              <Link
                to={`/${lang}/blog`}
                className="font-termina font-bold text-xs tracking-wider text-white hover:text-white transition-colors py-3.5 px-6 rounded-full border border-white/25 hover:border-white inline-flex items-center gap-1.5"
              >
                <span>{lang === 'th' ? 'สำรวจคลังความรู้' : 'Explore our blog'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Modal */}
      <PostQuickPreviewModal
        post={selectedPreviewPost}
        lang={lang}
        onClose={() => setSelectedPreviewPost(null)}
      />
    </div>
  );
};
