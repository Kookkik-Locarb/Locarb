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
  Target,
} from 'lucide-react';

export const HomePage: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedPreviewPost, setSelectedPreviewPost] = useState<BlogPost | null>(null);

  const content = lang === 'th' ? CONTENT_TH : CONTENT_EN;
  const t = content.home;
  const cta = content.ctaBand;

  // 8 Clients doubled for the seamless infinite marquee (16 items total)
  const clientLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const baseClients = clientLetters.map((letter, idx) => ({
    code: `${letter}${idx + 1}`,
    name: `[Client name ${idx + 1}]`,
  }));
  const marqueeClients = [...baseClients, ...baseClients];

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

      {/* Background Architectural Construction-Grid Pattern (from brand logo geometry) */}
      <svg
        className="absolute inset-0 w-full h-[980px] pointer-events-none -z-0"
        aria-hidden="true"
        style={{
          maskImage: 'linear-gradient(180deg, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)',
        }}
      >
        <defs>
          <pattern id="lcgrid" width="96" height="96" patternUnits="userSpaceOnUse">
            <rect x="0.5" y="0.5" width="95" height="95" fill="none" stroke="#0E0E0C" strokeOpacity="0.06" />
            <circle cx="48" cy="48" r="47.5" fill="none" stroke="#0E0E0C" strokeOpacity="0.06" />
            <path
              d="M0 0L96 96M96 0L0 96M48 0V96M0 48H96"
              stroke="#0E0E0C"
              strokeOpacity="0.04"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lcgrid)" />
      </svg>

      {/* ========================================================================= */}
      {/* 1. HERO — Pill, Self-drawing Underline, Signature Arch, Floating Chips    */}
      {/* ========================================================================= */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden" id="top">
        <div className="max-w-[1248px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column (7 cols ~ 58%): Editorial Typography & Direct Action */}
            <div className="md:col-span-7 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FBFAF3] border border-[#0E0E0C]/10 text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#0B7A3E] font-termina mb-7 shadow-xs animate-rise">
                <span className="w-5 h-5 rounded-full bg-[#0EA552] flex items-center justify-center text-white shrink-0 shadow-2xs">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span>
                  {lang === 'th'
                    ? 'สมาชิก IFRS SUSTAINABILITY ALLIANCE รายแรกในไทย'
                    : "THAILAND'S 1ST IFRS SUSTAINABILITY ALLIANCE MEMBER"}
                </span>
              </div>

              {/* H1: Green that grows. with self-drawing hand-drawn underline */}
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

              {/* Subheadline (Max 52ch) */}
              <p
                className="text-[17px] sm:text-[18px] leading-[1.65] text-[#4A4A42] max-w-[52ch] mb-9 font-light [text-wrap:pretty] animate-rise"
                style={{ animationDelay: '0.16s' }}
              >
                {lang === 'th'
                  ? 'ที่ปรึกษาและผู้พัฒนาเทคโนโลยีด้านสภาพภูมิอากาศชั้นนำของไทย ช่วยให้บริษัทจดทะเบียน pre-IPO และ SME ปฏิบัติตามมาตรฐาน IFRS S1 & S2 และลดคาร์บอนด้วยข้อมูลที่ผ่านการทวนสอบ'
                  : 'A Thai climate-tech and sustainability consultancy helping listed, pre-IPO and SME companies meet IFRS S1 & S2 and cut carbon, with data they can trust.'}
              </p>

              {/* Action Buttons: Primary Pill [Talk to us] + Quiet link [See our solutions] */}
              <div
                className="flex items-center flex-wrap gap-5 mb-10 animate-rise"
                style={{ animationDelay: '0.28s' }}
              >
                <Link
                  to={`/${lang}/contact`}
                  className="btn-slide btn-slide-p rounded-full px-7 py-3.5 text-sm font-bold font-termina tracking-wide inline-flex items-center gap-2.5 shadow-sm group"
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

              {/* 3 Checkpoint Bullets */}
              <div
                className="flex items-center flex-wrap gap-x-6 gap-y-2.5 text-[13px] text-[#4A4A42] font-medium pt-5 border-t border-[#0E0E0C]/10 animate-rise"
                style={{ animationDelay: '0.4s' }}
              >
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0B7A3E]" strokeWidth={2.5} />
                  <span>{lang === 'th' ? 'ที่ปรึกษา IFRS S1 & S2' : 'IFRS S1 & S2 advisory'}</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0B7A3E]" strokeWidth={2.5} />
                  <span>{lang === 'th' ? 'แพลตฟอร์มบัญชีคาร์บอน' : 'Carbon accounting platform'}</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0B7A3E]" strokeWidth={2.5} />
                  <span>{lang === 'th' ? 'ข้อมูลซัพพลายเออร์ Scope 3' : 'Scope 3 supplier data'}</span>
                </span>
              </div>
            </div>

            {/* Right Column (5 cols ~ 42%): The Capsule Arch Geometry with Living Seedling & Badges */}
            <div className="md:col-span-5 flex justify-center md:justify-end animate-rise" style={{ animationDelay: '0.16s' }}>
              <div className="relative w-full max-w-[360px] h-[520px] sm:h-[560px]">
                {/* Offset Green Outline Arch */}
                <div className="absolute right-0 top-10 w-[280px] sm:w-[300px] h-[460px] sm:h-[500px] rounded-[150px] border-2 border-[#0EA552] pointer-events-none -z-0" />

                {/* Overlapping Thin Ring */}
                <div className="absolute left-4 top-14 w-28 h-28 rounded-full border-2 border-[#0E0E0C] opacity-80 pointer-events-none -z-0" />

                {/* Main Green Capsule Arch */}
                <div className="absolute right-9 top-0 w-[280px] sm:w-[300px] h-[460px] sm:h-[500px] rounded-t-[150px] rounded-b-[40px] bg-[#0EA552] overflow-hidden shadow-xl z-10 flex flex-col justify-end">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 300 500"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    {/* Architectural Build Grid */}
                    <g stroke="#F3F0DF" strokeOpacity="0.16" fill="none">
                      <circle cx="150" cy="150" r="110" />
                      <circle cx="150" cy="150" r="70" />
                      <path d="M40 40L260 260M260 40L40 260M150 20V480M20 150H280" />
                    </g>
                    {/* Rolling Dark Green Ground */}
                    <path
                      d="M-10 380C60 340 110 360 160 330S260 300 320 280V520H-10Z"
                      fill="#0B7A3E"
                    />
                    <path
                      d="M-10 410C60 380 120 400 170 372S260 350 320 335"
                      fill="none"
                      stroke="#F3F0DF"
                      strokeOpacity="0.35"
                      strokeWidth="2"
                      strokeDasharray="4 8"
                    />
                    {/* Mound Soil */}
                    <ellipse cx="150" cy="392" rx="78" ry="18" fill="#086332" />
                    {/* Living Seedling Sprout */}
                    <path
                      d="M150 388C150 330 146 280 150 200"
                      fill="none"
                      stroke="#F3F0DF"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M150 300C120 300 92 282 84 248C116 244 144 262 150 300Z"
                      fill="#F3F0DF"
                    />
                    <path
                      d="M150 262C182 262 210 240 216 204C182 202 156 224 150 262Z"
                      fill="#F3F0DF"
                    />
                    <path
                      d="M150 214C134 206 124 188 126 166C146 170 156 188 150 214Z"
                      fill="#F3F0DF"
                      fillOpacity="0.85"
                    />
                    <path
                      d="M150 200C160 186 176 178 194 180C188 196 172 204 150 200Z"
                      fill="#F3F0DF"
                      fillOpacity="0.7"
                    />
                  </svg>
                </div>

                {/* Floating Chip 1: IFRS S1 & S2 ready */}
                <div className="absolute left-0 top-[250px] z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FBFAF3] border border-[#0E0E0C]/10 shadow-[0_14px_30px_-16px_rgba(14,14,12,0.35)] font-medium text-[13px] text-[#0E0E0C] whitespace-nowrap animate-float-slow">
                  <span className="w-7 h-7 rounded-full bg-[#0B7A3E] text-[#F3F0DF] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>IFRS S1 & S2 ready</span>
                </div>

                {/* Floating Chip 2: [x] tCO₂e measured */}
                <div className="absolute right-0 bottom-[80px] z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FBFAF3] border border-[#0E0E0C]/10 shadow-[0_14px_30px_-16px_rgba(14,14,12,0.35)] font-medium text-[13px] text-[#0E0E0C] whitespace-nowrap animate-float-offset">
                  <span className="w-7 h-7 rounded-full bg-[#0E0E0C] text-[#F3F0DF] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-3.5 h-3.5" />
                  </span>
                  <span>[x] tCO₂e measured</span>
                </div>

                {/* Rotating Circular Text Badge */}
                <div className="absolute left-6 -bottom-2 z-25 w-32 h-32 rounded-full bg-[#F3F0DF] border border-[#0E0E0C]/10 flex items-center justify-center shadow-sm">
                  <svg
                    className="animate-spin-slow w-full h-full pointer-events-none select-none"
                    viewBox="0 0 132 132"
                  >
                    <defs>
                      <path
                        id="circHeroBadge"
                        d="M66 66m-48 0a48 48 0 1 1 96 0a48 48 0 1 1-96 0"
                        fill="none"
                      />
                    </defs>
                    <text
                      fontFamily="Termina, sans-serif"
                      fontWeight="700"
                      fontSize="9.4"
                      letterSpacing="2.1"
                      fill="#0E0E0C"
                    >
                      <textPath href="#circHeroBadge">
                        WE PUT THE WORLD ON A CARBON DIET •{' '}
                      </textPath>
                    </text>
                  </svg>
                  <Leaf className="w-8 h-8 text-[#0B7A3E] absolute inset-0 m-auto" strokeWidth={1.8} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR STORY IN BRIEF (KEY CLICK -> About Us)                             */}
      {/* ========================================================================= */}
      <section id="about" className="bg-[#0B7A3E] text-[#F3F0DF] py-20 sm:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          {/* Eyebrow Pill with Off-White Brand Logo */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F3F0DF]/10 border border-[#F3F0DF]/20 text-[#F3F0DF] text-xs font-termina font-bold tracking-widest uppercase shadow-sm backdrop-blur-sm">
              <Logo variant="on-green" height={18} />
              <span className="w-px h-3.5 bg-[#F3F0DF]/25" />
              <span>{lang === 'th' ? 'เกี่ยวกับเรา' : 'ABOUT US'}</span>
            </div>
          </div>

          {/* Centered Headline */}
          <h2
            className={`text-[clamp(32px,3.8vw,52px)] leading-[1.08] uppercase text-[#F3F0DF] max-w-[20ch] mx-auto [text-wrap:balance] mb-6 ${
              lang === 'th' ? 'font-anakotmai font-bold' : 'font-termina font-bold'
            }`}
          >
            {t.storyBrief.title}
          </h2>

          {/* Centered 2-3 Line Narrative */}
          <p className="text-[17px] sm:text-[19px] leading-[1.68] text-[#F3F0DF]/90 max-w-[62ch] mx-auto mb-12 font-light [text-wrap:pretty]">
            {t.storyBrief.description}
          </p>

          {/* Brand-compliant Pill-Shaped Key Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-[980px] mx-auto mb-12">
            {/* Stat 1: Clients */}
            <div className="flex items-center justify-center sm:justify-start gap-4 px-7 py-4 rounded-full bg-[#F3F0DF]/10 border border-[#F3F0DF]/20 backdrop-blur-sm hover:bg-[#F3F0DF]/15 transition-colors">
              <span className="font-termina font-bold text-[36px] sm:text-[40px] text-[#F3F0DF] tracking-tight leading-none">
                [x]
              </span>
              <div className="text-left border-l border-[#F3F0DF]/20 pl-4">
                <span className="block text-[13px] font-semibold text-[#F3F0DF] leading-tight">
                  {lang === 'th' ? 'องค์กรพันธมิตร' : 'Clients served'}
                </span>
                <span className="block text-[11px] text-[#CFE9D8]/75 leading-tight mt-0.5">
                  {lang === 'th' ? 'พันธมิตรธุรกิจ' : 'Enterprise partners'}
                </span>
              </div>
            </div>

            {/* Stat 2: Years */}
            <div className="flex items-center justify-center sm:justify-start gap-4 px-7 py-4 rounded-full bg-[#F3F0DF]/10 border border-[#F3F0DF]/20 backdrop-blur-sm hover:bg-[#F3F0DF]/15 transition-colors">
              <span className="font-termina font-bold text-[36px] sm:text-[40px] text-[#F3F0DF] tracking-tight leading-none">
                [x]
              </span>
              <div className="text-left border-l border-[#F3F0DF]/20 pl-4">
                <span className="block text-[13px] font-semibold text-[#F3F0DF] leading-tight">
                  {lang === 'th' ? 'ปีแห่งความเชี่ยวชาญ' : 'Years of practice'}
                </span>
                <span className="block text-[11px] text-[#CFE9D8]/75 leading-tight mt-0.5">
                  {lang === 'th' ? 'ที่ปรึกษาความยั่งยืน' : 'Advisory track record'}
                </span>
              </div>
            </div>

            {/* Stat 3: tCO₂e */}
            <div className="flex items-center justify-center sm:justify-start gap-4 px-7 py-4 rounded-full bg-[#F3F0DF]/10 border border-[#F3F0DF]/20 backdrop-blur-sm hover:bg-[#F3F0DF]/15 transition-colors">
              <span className="font-termina font-bold text-[36px] sm:text-[40px] text-[#F3F0DF] tracking-tight leading-none">
                [x]
              </span>
              <div className="text-left border-l border-[#F3F0DF]/20 pl-4">
                <span className="block text-[13px] font-semibold text-[#F3F0DF] leading-tight">
                  {lang === 'th' ? 'tCO₂e ตรวจวัด' : 'tCO₂e measured'}
                </span>
                <span className="block text-[11px] text-[#CFE9D8]/75 leading-tight mt-0.5">
                  {lang === 'th' ? 'ตรวจวัดและวางแผน' : 'Measured & assured'}
                </span>
              </div>
            </div>
          </div>

          {/* Centered Prominent Key Click CTA Button */}
          <div className="flex justify-center">
            <Link
              to={`/${lang}/about/story`}
              className="btn-slide btn-slide-l rounded-full px-9 py-4 text-sm font-bold font-termina tracking-wide inline-flex items-center justify-center gap-3 shadow-[0_12px_28px_-8px_rgba(0,0,0,0.35)] group"
            >
              <span>{t.storyBrief.cta}</span>
              <ArrowRight
                className="w-4 h-4 text-[#0B7A3E] transition-transform duration-200 group-hover:translate-x-1.5"
                strokeWidth={2.4}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRUSTED BY — Infinite Marquee Animation & Verified Certificates       */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative" id="clients">
        <div className="max-w-[1248px] mx-auto px-6 text-left mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-termina font-bold text-[11px] uppercase tracking-[0.12em] text-[#0B7A3E] mb-3">
                {lang === 'th' ? 'ลูกค้าและองค์กรพันธมิตร' : 'OUR CLIENTS'}
              </p>
              <h2
                className={`text-[clamp(28px,2.7vw,42px)] leading-[1.08] uppercase text-[#0E0E0C] max-w-[18ch] [text-wrap:balance] ${
                  lang === 'th' ? 'font-anakotmai font-bold' : 'font-termina font-bold'
                }`}
              >
                {t.trustedBy.title}
              </h2>
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#4A4A42] max-w-[42ch] [text-wrap:pretty]">
              {lang === 'th'
                ? 'บริษัทจดทะเบียนในตลาดหลักทรัพย์, องค์กรเตรียมเข้าตลาด (Pre-IPO) และกลุ่มธุรกิจ SME ทั่วประเทศ'
                : 'Listed companies, pre-IPO firms and SMEs across Thailand. [Industries to confirm]'}
            </p>
          </div>
        </div>

        {/* Smooth Infinite Client Marquee with Gradient Mask */}
        <div className="overflow-hidden mask-marquee py-4" aria-label="Client marquee">
          <div className="marquee-track-clients">
            {marqueeClients.map((client, idx) => (
              <div
                key={idx}
                className="w-[208px] h-[112px] rounded-[20px] bg-[#FBFAF3] border border-[#0E0E0C]/10 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:border-[#0EA552] hover:shadow-sm grayscale hover:grayscale-0 cursor-default shrink-0 group"
              >
                <div className="w-10 h-10 rounded-[12px] bg-[#E6E2CC] flex items-center justify-center font-termina font-bold text-[12px] text-[#0B7A3E] group-hover:bg-[#0EA552] group-hover:text-white transition-colors">
                  {client.code}
                </div>
                <span className="font-medium text-[13px] text-[#4A4A42] group-hover:text-[#0E0E0C] transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Alliances & Certificates Row */}
        <div className="max-w-[1248px] mx-auto px-6 mt-12 text-left">
          <div className="flex items-center flex-wrap gap-3.5">
            {/* Main IFRS Alliance Badge with Active Green Glow Ring */}
            <div className="inline-flex items-center gap-3.5 px-5 py-3 rounded-full bg-[#FBFAF3] border-[2px] border-[#0B7A3E] shadow-[0_0_0_6px_rgba(14,165,82,0.12),0_8px_20px_-6px_rgba(11,122,62,0.2)] hover:shadow-[0_0_0_8px_rgba(14,165,82,0.18)] transition-all">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B7A3E] to-[#065027] text-[#F3F0DF] flex items-center justify-center shrink-0 shadow-xs">
                <Award className="w-5 h-5 text-[#F3F0DF]" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <b className="block font-bold text-[14px] leading-tight text-[#0E0E0C]">
                    IFRS Sustainability Alliance
                  </b>
                  <span className="text-[9px] font-bold font-termina uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0B7A3E] text-white">
                    1ST IN TH
                  </span>
                </div>
                <small className="block font-medium text-[12px] text-[#4A4A42] mt-0.5">
                  Thailand's first official member · [Year]
                </small>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="inline-flex items-center gap-3.5 px-5 py-3 rounded-full bg-[#FBFAF3] border border-[#0E0E0C]/10">
              <span className="w-10 h-10 rounded-full bg-[#E6E2CC] text-[#4A4A42] flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </span>
              <div>
                <b className="block font-bold text-[14px] leading-tight text-[#0E0E0C]">
                  [Certificate name]
                </b>
                <small className="block font-medium text-[12px] text-[#4A4A42]">
                  [Issuer] · [Year]
                </small>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="inline-flex items-center gap-3.5 px-5 py-3 rounded-full bg-[#FBFAF3] border border-[#0E0E0C]/10">
              <span className="w-10 h-10 rounded-full bg-[#E6E2CC] text-[#4A4A42] flex items-center justify-center shrink-0">
                <BadgeCheck className="w-5 h-5" />
              </span>
              <div>
                <b className="block font-bold text-[14px] leading-tight text-[#0E0E0C]">
                  [Certificate name]
                </b>
                <small className="block font-medium text-[12px] text-[#4A4A42]">
                  [Issuer] · [Year]
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
      {/* 4. OUR SOLUTIONS — Bento Grid with Rising Organic Dome Hover Effect       */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative" id="solutions">
        <div className="max-w-[1248px] mx-auto px-6 text-left">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-termina font-bold text-[11px] uppercase tracking-[0.12em] text-[#0B7A3E] mb-3">
                {lang === 'th' ? 'สิ่งที่เราทำ' : 'WHAT WE DO'}
              </p>
              <h2
                className={`text-[clamp(28px,2.7vw,42px)] leading-[1.08] uppercase text-[#0E0E0C] max-w-[18ch] [text-wrap:balance] ${
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

          {/* Master 4-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 01: Featured IFRS Standards (Spans 2 cols, 2 rows) */}
            <Link
              to={`/${lang}/solutions/ifrs`}
              className="sol-card sol-card-feat lg:col-span-2 lg:row-span-2 bg-[#0B7A3E] text-[#F3F0DF] p-9 sm:p-11 rounded-[28px] flex flex-col justify-between group no-underline"
            >
              {/* Massive Outline Watermark: S1 S2 */}
              <div
                className="absolute -right-2 -bottom-8 font-termina font-bold text-[140px] sm:text-[170px] leading-[0.9] text-outline-offwhite opacity-22 pointer-events-none select-none text-right z-0"
                aria-hidden="true"
              >
                S1<br />S2
              </div>

              {/* Subtle Grid SVG Background */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern id="bentoGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect x="0.5" y="0.5" width="79" height="79" fill="none" stroke="#F3F0DF" strokeOpacity="0.07" />
                    <circle cx="40" cy="40" r="39.5" fill="none" stroke="#F3F0DF" strokeOpacity="0.07" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#bentoGrid)" />
              </svg>

              <div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="w-12 h-12 rounded-full border border-[#F3F0DF]/40 flex items-center justify-center text-[#F3F0DF] group-hover:bg-[#F3F0DF] group-hover:text-[#0B7A3E] transition-colors">
                    <FileCheck2 className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#CFE9D8]">
                    01
                  </span>
                </div>

                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#F3F0DF]/15 border border-[#F3F0DF]/30 font-termina font-bold text-[10px] tracking-wider text-[#F3F0DF] uppercase mb-4">
                  {lang === 'th' ? 'สมาชิก IFRS ALLIANCE รายแรกในไทย' : "Thailand's 1st IFRS Alliance member"}
                </span>

                <h3 className="font-termina font-bold text-[28px] sm:text-[32px] uppercase leading-[1.12] max-w-[14ch] text-[#F3F0DF] mb-4">
                  IFRS Standards S1 & S2
                </h3>

                <p className="text-[16px] sm:text-[17px] text-[#E4EFE6] leading-[1.65] max-w-[42ch] mb-8 font-light">
                  {lang === 'th'
                    ? 'บริการตรวจประเมิน Gap ครบวงจร ตั้งแต่วิเคราะห์ช่องว่างความเสี่ยงสภาพภูมิอากาศสู่ผลกระทบทางการเงิน จนถึงรายงานฉบับแรกตามมาตรฐาน IFRS'
                    : 'One end-to-end service, from gap analysis and climate risk assessment to financial impact and your first IFRS-aligned report.'}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F3F0DF]/20 flex items-center justify-between font-termina font-bold text-xs tracking-wider text-[#F3F0DF] relative z-10">
                <span>{lang === 'th' ? 'ปรึกษาผู้เชี่ยวชาญ IFRS' : 'Talk to an IFRS specialist'}</span>
                <span className="w-10 h-10 rounded-full border border-[#F3F0DF]/40 flex items-center justify-center group-hover:bg-[#F3F0DF] group-hover:text-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </div>
            </Link>

            {/* Card 02: CarbonCal + Carbon Camp */}
            <Link
              to={`/${lang}/solutions/carboncal`}
              className="sol-card rounded-[28px] bg-[#FBFAF3] border border-[#0E0E0C]/10 p-7 flex flex-col justify-between group no-underline min-h-[290px]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-[#F3F0DF] group-hover:border-[#0B7A3E] transition-colors">
                    <Calculator className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#4A4A42]">
                    02
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[17px] leading-snug text-[#0E0E0C] mb-2.5 group-hover:text-[#0B7A3E] transition-colors">
                  CarbonCal + Carbon Camp
                </h3>

                <p className="text-[14px] text-[#4A4A42] leading-[1.55] line-clamp-3 mb-6">
                  {lang === 'th'
                    ? 'แพลตฟอร์มบัญชีคาร์บอนอัตโนมัติ พร้อมคอร์สฝึกอบรมเชิงปฏิบัติการให้ทีมงานองค์กรทำได้จริง'
                    : 'A carbon accounting platform, plus hands-on training so your team can run it.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E0E0C]/10 flex items-center justify-between font-termina font-bold text-[11.5px] tracking-wider text-[#0B7A3E]">
                <span>Learn more</span>
                <span className="w-10 h-10 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center group-hover:bg-[#0B7A3E] group-hover:text-[#F3F0DF] group-hover:border-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </div>
            </Link>

            {/* Card 03: ISSB training */}
            <Link
              to={`/${lang}/solutions/issb-training`}
              className="sol-card rounded-[28px] bg-[#FBFAF3] border border-[#0E0E0C]/10 p-7 flex flex-col justify-between group no-underline min-h-[290px]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-[#F3F0DF] group-hover:border-[#0B7A3E] transition-colors">
                    <GraduationCap className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#4A4A42]">
                    03
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[17px] leading-snug text-[#0E0E0C] mb-2.5 group-hover:text-[#0B7A3E] transition-colors">
                  ISSB training
                </h3>

                <p className="text-[14px] text-[#4A4A42] leading-[1.55] line-clamp-3 mb-6">
                  {lang === 'th'
                    ? 'หลักสูตรเวิร์กช็อปพัฒนาศักยภาพผู้บริหารระดับสูงและคณะกรรมการให้พร้อมรับเกณฑ์ ISSB'
                    : "Workshops that build your board's and team's ISSB capability."}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E0E0C]/10 flex items-center justify-between font-termina font-bold text-[11.5px] tracking-wider text-[#0B7A3E]">
                <span>Learn more</span>
                <span className="w-10 h-10 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center group-hover:bg-[#0B7A3E] group-hover:text-[#F3F0DF] group-hover:border-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </div>
            </Link>

            {/* Card 04: Carbon Scout */}
            <Link
              to={`/${lang}/solutions/carbon-scout`}
              className="sol-card rounded-[28px] bg-[#FBFAF3] border border-[#0E0E0C]/10 p-7 flex flex-col justify-between group no-underline min-h-[290px]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-[#F3F0DF] group-hover:border-[#0B7A3E] transition-colors">
                    <Radar className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#4A4A42]">
                    04
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[17px] leading-snug text-[#0E0E0C] mb-2.5 group-hover:text-[#0B7A3E] transition-colors">
                  Carbon Scout
                </h3>

                <p className="text-[14px] text-[#4A4A42] leading-[1.55] line-clamp-3 mb-6">
                  {lang === 'th'
                    ? 'ระบบรวบรวมข้อมูลคาร์บอน Scope 3 จากซัพพลายเออร์โดยตรง ลดภาระการไล่ทวงสเปรดชีต'
                    : 'Collect Scope 3 data from your suppliers, without the spreadsheet chase.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E0E0C]/10 flex items-center justify-between font-termina font-bold text-[11.5px] tracking-wider text-[#0B7A3E]">
                <span>Learn more</span>
                <span className="w-10 h-10 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center group-hover:bg-[#0B7A3E] group-hover:text-[#F3F0DF] group-hover:border-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </div>
            </Link>

            {/* Card 05: Reporting & consulting */}
            <Link
              to={`/${lang}/solutions/reporting-consulting`}
              className="sol-card rounded-[28px] bg-[#FBFAF3] border border-[#0E0E0C]/10 p-7 flex flex-col justify-between group no-underline min-h-[290px]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-12 h-12 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center text-[#0B7A3E] group-hover:bg-[#0B7A3E] group-hover:text-[#F3F0DF] group-hover:border-[#0B7A3E] transition-colors">
                    <FileSpreadsheet className="w-5 h-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-stix italic font-bold text-[18px] text-[#4A4A42]">
                    05
                  </span>
                </div>

                <h3 className="font-termina font-bold text-[17px] leading-snug text-[#0E0E0C] mb-2.5 group-hover:text-[#0B7A3E] transition-colors">
                  Reporting & consulting
                </h3>

                <p className="text-[14px] text-[#4A4A42] leading-[1.55] line-clamp-3 mb-6">
                  {lang === 'th'
                    ? 'ที่ปรึกษาจัดทำรายงานความยั่งยืน ตั้งแต่การประเมินประเด็นสำคัญ (Materiality) จนถึงการเปิดเผยข้อมูล'
                    : 'Sustainability reports and advice, from materiality to final disclosure.'}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E0E0C]/10 flex items-center justify-between font-termina font-bold text-[11.5px] tracking-wider text-[#0B7A3E]">
                <span>Learn more</span>
                <span className="w-10 h-10 rounded-full border border-[#0E0E0C]/10 flex items-center justify-center group-hover:bg-[#0B7A3E] group-hover:text-[#F3F0DF] group-hover:border-[#0B7A3E] group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. IFRS SPOTLIGHT — Luxury Accreditation Pavilion & IfrsAllianceSeal      */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative" id="ifrs-spotlight">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="rounded-[44px] bg-[#FBFAF3] border border-[#0E0E0C]/10 grid grid-cols-1 md:grid-cols-12 overflow-hidden relative shadow-[0_12px_40px_-16px_rgba(14,14,12,0.12)]">
            {/* Left Column (5 cols): Majestic Architectural Pedestal & Living 1st Emblem */}
            <div className="md:col-span-5 relative min-h-[440px] sm:min-h-[500px] flex flex-col items-center justify-center bg-gradient-to-br from-[#EAE5CE] via-[#E2DCBD] to-[#D5CEA8] overflow-hidden p-8 text-center border-b md:border-b-0 md:border-r border-[#0E0E0C]/10">
              {/* Precision Topographic Isobars & Concentric Orbital Rings */}
              <svg
                aria-hidden="true"
                viewBox="0 0 500 500"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              >
                <circle cx="250" cy="250" r="220" fill="none" stroke="#0B7A3E" strokeWidth="1" strokeDasharray="3 6" />
                <circle cx="250" cy="250" r="170" fill="none" stroke="#0E0E0C" strokeWidth="1" strokeOpacity="0.2" />
                <circle cx="250" cy="250" r="110" fill="none" stroke="#0B7A3E" strokeWidth="1.2" strokeOpacity="0.3" />
                <path
                  d="M0 380 C120 320, 260 420, 500 340"
                  fill="none"
                  stroke="#0B7A3E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 430 C160 380, 320 460, 500 400"
                  fill="none"
                  stroke="#0E0E0C"
                  strokeWidth="1.5"
                  strokeOpacity="0.2"
                />
              </svg>

              {/* Majestic Sculptural 1st Emblem with Living Leaf Sprout */}
              <div className="relative z-10 flex flex-col items-center my-auto">
                <div className="relative font-termina font-bold text-[130px] sm:text-[160px] leading-none tracking-tight select-none">
                  {/* Organic Sprouting Leaf on Top of 1 */}
                  <div className="absolute -top-7 -left-5 z-20 text-[#0EA552] drop-shadow-sm">
                    <svg viewBox="0 0 48 48" className="w-14 h-14">
                      <path
                        d="M14 38 C 7 20, 32 6, 44 14 C 44 32, 26 46, 14 38 Z"
                        fill="#0EA552"
                      />
                      <path
                        d="M14 38 Q 29 22 44 14"
                        stroke="#F3F0DF"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Main Numerals in Rich Forest Gradient */}
                  <span className="bg-gradient-to-b from-[#0B7A3E] via-[#0E8B47] to-[#08542B] bg-clip-text text-transparent">
                    1
                  </span>
                  <span className="font-stix italic text-[0.45em] align-top relative top-[0.12em] ml-1 bg-gradient-to-b from-[#0B7A3E] to-[#08542B] bg-clip-text text-transparent">
                    st
                  </span>

                  {/* Ghost Drop Outline Shadow Layer for 3D Depth */}
                  <span
                    className="absolute left-[8px] top-[8px] text-transparent text-outline-black opacity-20 select-none -z-10 pointer-events-none"
                    aria-hidden="true"
                  >
                    1
                    <span className="font-stix italic text-[0.45em] align-top relative top-[0.12em] ml-1">
                      st
                    </span>
                  </span>
                </div>

                {/* Subtitle Plaque below 1st */}
                <div className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E0E0C]/10 border border-[#0E0E0C]/15 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-[#0B7A3E]" />
                  <span className="font-termina font-bold text-[10px] tracking-[0.12em] uppercase text-[#0E0E0C]">
                    OFFICIAL PARTNER · FIRST IN THAILAND
                  </span>
                </div>
              </div>

              {/* Bottom Standard Track */}
              <div className="relative z-10 text-[11px] font-medium text-[#4A4A42] tracking-wider uppercase mt-4">
                IFRS S1 & S2 · ISSB FOUNDATION · SEC ALIGNED
              </div>
            </div>

            {/* Right Column (7 cols): Editorial, Rotating Luxury Seal, and Value Pillars */}
            <div className="md:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between text-left relative">
              <div>
                {/* Header Row: Official Accreditation Pill + Luxury Rotating Seal */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    {/* Prestigious Eyebrow Chip */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0B7A3E]/10 border border-[#0B7A3E]/20 text-[#0B7A3E] mb-3 backdrop-blur-sm shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-[#0EA552] animate-pulse" />
                      <span className="font-termina font-bold text-[11px] uppercase tracking-[0.12em]">
                        IFRS SUSTAINABILITY ALLIANCE
                      </span>
                      <span className="text-[10px] text-[#0B7A3E]/70 border-l border-[#0B7A3E]/25 pl-2 font-semibold">
                        OFFICIAL PARTNER
                      </span>
                    </div>

                    {/* Headline */}
                    {lang === 'en' ? (
                      <h2
                        id="heading-ifrs"
                        className="font-termina font-bold text-[clamp(28px,3vw,42px)] leading-[1.08] uppercase text-[#0E0E0C] max-w-[16ch] [text-wrap:balance]"
                      >
                        Thailand's{' '}
                        <span className="font-stix italic font-bold text-[#0B7A3E] lowercase">
                          first
                        </span>{' '}
                        member.
                      </h2>
                    ) : (
                      <h2
                        id="heading-ifrs"
                        className="font-anakotmai font-bold text-[clamp(26px,3vw,40px)] leading-[1.2] text-[#0E0E0C] max-w-[18ch] [text-wrap:balance]"
                      >
                        สมาชิก <span className="font-stix italic text-[#0B7A3E]">IFRS Sustainability Alliance</span> รายแรกในไทย
                      </h2>
                    )}
                  </div>

                  {/* High-Resolution Luxury Rotating Seal */}
                  <div className="shrink-0 hidden sm:block">
                    <IfrsAllianceSeal size={128} />
                  </div>
                </div>

                {/* Body Text (Real SEO text) */}
                <p className="text-[16px] sm:text-[17px] text-[#4A4A42] leading-[1.65] max-w-[54ch] mb-8 font-light [text-wrap:pretty]">
                  LO-CARB is Thailand's first member of the IFRS Sustainability Alliance. That gives our clients direct access to the people and resources behind IFRS S1 and S2, as the SEC and SET move listed companies toward ISSB-based disclosure.
                </p>

                {/* 3 Value Pillars in Refined Glass Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-9">
                  <div className="p-4 rounded-[18px] bg-[#FAF8EE] border border-[#0E0E0C]/8 text-left">
                    <div className="w-7 h-7 rounded-lg bg-[#0B7A3E]/10 flex items-center justify-center text-[#0B7A3E] font-bold text-[12px] mb-2.5">
                      S1
                    </div>
                    <b className="block font-termina font-bold text-[13px] text-[#0E0E0C] leading-snug mb-1">
                      General Reqs
                    </b>
                    <span className="block text-[12px] text-[#4A4A42] leading-[1.45]">
                      Governance, strategy, and risk governance integration.
                    </span>
                  </div>

                  <div className="p-4 rounded-[18px] bg-[#FAF8EE] border border-[#0E0E0C]/8 text-left">
                    <div className="w-7 h-7 rounded-lg bg-[#0B7A3E]/10 flex items-center justify-center text-[#0B7A3E] font-bold text-[12px] mb-2.5">
                      S2
                    </div>
                    <b className="block font-termina font-bold text-[13px] text-[#0E0E0C] leading-snug mb-1">
                      Climate Risk
                    </b>
                    <span className="block text-[12px] text-[#4A4A42] leading-[1.45]">
                      Scenario analysis, financial impact, and Scope 1–3 emissions.
                    </span>
                  </div>

                  <div className="p-4 rounded-[18px] bg-[#FAF8EE] border border-[#0E0E0C]/8 text-left">
                    <div className="w-7 h-7 rounded-lg bg-[#0B7A3E]/10 flex items-center justify-center text-[#0B7A3E] font-bold text-[12px] mb-2.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <b className="block font-termina font-bold text-[13px] text-[#0E0E0C] leading-snug mb-1">
                      SET & SEC
                    </b>
                    <span className="block text-[12px] text-[#4A4A42] leading-[1.45]">
                      Seamless roadmap from 56-1 One Report to global capital trust.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center flex-wrap gap-4 pt-4 border-t border-[#0E0E0C]/10">
                <Link
                  to={`/${lang}/solutions/ifrs`}
                  className="btn-slide btn-slide-p rounded-full px-7 py-3.5 text-sm font-bold font-termina tracking-wide inline-flex items-center gap-2.5 shadow-sm group"
                >
                  <span>Explore IFRS services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.4} />
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
      {/* 6. FROM THE BLOG — Editorial Stagger, Artworks, Hover Peek Badge          */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 relative" id="blog">
        <div className="max-w-[1248px] mx-auto px-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-termina font-bold text-[11px] uppercase tracking-[0.12em] text-[#0B7A3E] mb-3">
                {lang === 'th' ? 'บทความและกรณีศึกษา' : 'INSIGHTS & CLIENT STORIES'}
              </p>
              <h2
                className={`text-[clamp(28px,2.7vw,42px)] leading-[1.08] uppercase text-[#0E0E0C] max-w-[18ch] [text-wrap:balance] ${
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
            {/* Post 1: Portfolio (Green background with capsule + circle) */}
            <button
              type="button"
              onClick={() => setSelectedPreviewPost(BLOG_POSTS_DATA[0])}
              className="w-full text-left bg-transparent border-0 p-0 cursor-pointer group"
            >
              <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-[#E6E2CC]">
                <svg
                  className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                  viewBox="0 0 400 250"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <rect width="400" height="250" fill="#0B7A3E" />
                  <g fill="none" stroke="#F3F0DF" strokeOpacity="0.18">
                    <circle cx="300" cy="80" r="120" />
                    <circle cx="300" cy="80" r="70" />
                  </g>
                  <rect x="60" y="60" width="56" height="150" rx="28" fill="#0EA552" />
                  <circle cx="170" cy="182" r="28" fill="#F3F0DF" />
                </svg>

                <span className="absolute left-3.5 top-3.5 px-3 py-1 rounded-full bg-[#FBFAF3] font-termina font-bold text-[10px] tracking-wider uppercase text-[#0B7A3E] shadow-2xs">
                  PORTFOLIO
                </span>

                <span className="absolute right-3.5 bottom-3.5 px-3.5 py-2 rounded-full bg-[#0E0E0C] text-[#F3F0DF] font-medium text-xs opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Quick preview
                </span>
              </div>

              <h3 className="font-termina font-bold text-[17px] leading-[1.35] text-[#0E0E0C] my-4 [text-wrap:balance] group-hover:text-[#0B7A3E] transition-colors">
                [Client name]: IFRS S1 & S2 readiness in [x] weeks
              </h3>

              <div className="font-medium text-[13px] text-[#4A4A42] flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#0B7A3E]" />
                <span>[Date] · [x] min read</span>
              </div>
            </button>

            {/* Post 2: Knowledge Base with Editorial Stagger (md:mt-10) */}
            <button
              type="button"
              onClick={() => setSelectedPreviewPost(BLOG_POSTS_DATA[1])}
              className="w-full text-left bg-transparent border-0 p-0 cursor-pointer group md:mt-10"
            >
              <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-[#E6E2CC]">
                <svg
                  className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                  viewBox="0 0 400 250"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <rect width="400" height="250" fill="#E6E2CC" />
                  <path d="M0 190C80 160 140 200 220 160S340 110 400 120V250H0Z" fill="#0EA552" />
                  <path
                    d="M0 210C90 180 150 220 230 180S350 140 400 150"
                    fill="none"
                    stroke="#0E0E0C"
                    strokeWidth="2"
                    strokeDasharray="4 8"
                  />
                  <circle cx="300" cy="70" r="34" fill="none" stroke="#0B7A3E" strokeWidth="3" />
                </svg>

                <span className="absolute left-3.5 top-3.5 px-3 py-1 rounded-full bg-[#FBFAF3] font-termina font-bold text-[10px] tracking-wider uppercase text-[#0B7A3E] shadow-2xs">
                  KNOWLEDGE BASE
                </span>

                <span className="absolute right-3.5 bottom-3.5 px-3.5 py-2 rounded-full bg-[#0E0E0C] text-[#F3F0DF] font-medium text-xs opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Quick preview
                </span>
              </div>

              <h3 className="font-termina font-bold text-[17px] leading-[1.35] text-[#0E0E0C] my-4 [text-wrap:balance] group-hover:text-[#0B7A3E] transition-colors">
                What IFRS S2 means for SET-listed companies
              </h3>

              <div className="font-medium text-[13px] text-[#4A4A42] flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#0B7A3E]" />
                <span>[Date] · [x] min read</span>
              </div>
            </button>

            {/* Post 3: Portfolio (Dark obsidian with glowing neon green shapes) */}
            <button
              type="button"
              onClick={() => setSelectedPreviewPost(BLOG_POSTS_DATA[2])}
              className="w-full text-left bg-transparent border-0 p-0 cursor-pointer group"
            >
              <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-[#0E0E0C]">
                <svg
                  className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                  viewBox="0 0 400 250"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <rect width="400" height="250" fill="#0E0E0C" />
                  <g stroke="#F3F0DF" strokeOpacity="0.14" fill="none">
                    <path d="M0 0L250 250M250 0L0 250" />
                    <rect x="0.5" y="0.5" width="249" height="249" />
                  </g>
                  <path d="M260 60v130M300 60v130" stroke="#0EA552" strokeWidth="18" strokeLinecap="round" />
                  <circle cx="120" cy="125" r="44" fill="none" stroke="#0EA552" strokeWidth="14" />
                </svg>

                <span className="absolute left-3.5 top-3.5 px-3 py-1 rounded-full bg-[#FBFAF3] font-termina font-bold text-[10px] tracking-wider uppercase text-[#0B7A3E] shadow-2xs">
                  PORTFOLIO
                </span>

                <span className="absolute right-3.5 bottom-3.5 px-3.5 py-2 rounded-full bg-[#0E0E0C] text-[#F3F0DF] font-medium text-xs opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Quick preview
                </span>
              </div>

              <h3 className="font-termina font-bold text-[17px] leading-[1.35] text-[#0E0E0C] my-4 [text-wrap:balance] group-hover:text-[#0B7A3E] transition-colors">
                [Client name]: measuring Scope 1–3 with CarbonCal
              </h3>

              <div className="font-medium text-[13px] text-[#4A4A42] flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#0B7A3E]" />
                <span>[Date] · [x] min read</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CTA BAND — "Let's talk", Animated Background Marquee, Button Slide     */}
      {/* ========================================================================= */}
      <section id="contact" className="relative">
        {/* Sweeping S-Curve Arch Top Transition */}
        <svg
          className="w-full h-16 sm:h-24 block pointer-events-none"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 90C360 10 1080 10 1440 90Z" fill="#0B7A3E" />
        </svg>

        <div className="bg-[#0B7A3E] text-[#F3F0DF] text-center relative overflow-hidden py-16 sm:py-20 md:py-24">
          {/* Animated Background Infinite Marquee: CARBON DIET */}
          <div
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            <div className="marquee-track-cta">
              <span className="font-termina font-bold text-[110px] sm:text-[140px] leading-none whitespace-nowrap text-outline-offwhite opacity-14">
                CARBON DIET • CARBON DIET • CARBON DIET •
              </span>
              <span className="font-termina font-bold text-[110px] sm:text-[140px] leading-none whitespace-nowrap text-outline-offwhite opacity-14">
                CARBON DIET • CARBON DIET • CARBON DIET •
              </span>
            </div>
          </div>

          <div className="max-w-[1248px] mx-auto px-6 relative z-10 flex flex-col items-center">
            <p className="font-termina font-bold text-[11px] uppercase tracking-[0.12em] text-[#CFE9D8] mb-4">
              LET'S TALK
            </p>

            {/* H2: Ready to go on a carbon diet? */}
            {lang === 'en' ? (
              <h2 className="font-termina font-bold text-[clamp(32px,3.6vw,56px)] leading-[1.08] uppercase text-[#F3F0DF] max-w-[20ch] mx-auto [text-wrap:balance] mb-5">
                Ready to go{' '}
                <span className="font-stix italic lowercase font-bold">
                  on a
                </span>{' '}
                carbon diet?
              </h2>
            ) : (
              <h2 className="font-anakotmai font-bold text-[clamp(30px,3.8vw,52px)] leading-[1.25] text-[#F3F0DF] max-w-[22ch] mx-auto [text-wrap:balance] mb-5">
                พร้อมเริ่มต้น <span className="font-stix italic">ปรับสมดุล</span> คาร์บอนหรือยัง?
              </h2>
            )}

            <p className="text-[17px] sm:text-[18px] text-[#E4EFE6] leading-[1.65] max-w-[46ch] mx-auto mb-9 font-light [text-wrap:pretty]">
              Tell us where you are on IFRS or carbon accounting. We'll reply within one business day.
            </p>

            {/* Action Buttons: Button Slide Fill Effect */}
            <div className="flex items-center justify-center flex-wrap gap-5">
              <Link
                to={`/${lang}/contact`}
                className="btn-slide btn-slide-l rounded-full px-8 py-4 text-sm font-bold font-termina tracking-wide inline-flex items-center gap-2.5 shadow-md group"
              >
                <span>{cta.primaryBtn}</span>
                <ArrowRight
                  className="w-4 h-4 text-[#0B7A3E] transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.4}
                />
              </Link>

              <Link
                to={`/${lang}/blog`}
                className="font-termina font-bold text-xs tracking-wider text-[#F3F0DF] hover:text-white transition-colors py-3 px-2 inline-flex items-center gap-1.5"
              >
                <span>Explore our blog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Preview Modal (Closes on X, Esc, and backdrop click; focus trapped) */}
      <PostQuickPreviewModal
        post={selectedPreviewPost}
        lang={lang}
        onClose={() => setSelectedPreviewPost(null)}
      />
    </div>
  );
};
