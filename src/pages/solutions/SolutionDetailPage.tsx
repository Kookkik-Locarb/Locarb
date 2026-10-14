import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language, SolutionId } from '../../types/content';
import { SOLUTIONS_DATA } from '../../content/solutions';
import { BLOG_POSTS_DATA } from '../../content/posts';
import { SeoHead } from '../../components/common/SeoHead';
import { BrandHeadline } from '../../components/brand/BrandHeadline';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { CtaBand } from '../../components/common/CtaBand';
import { CarbonDietSimulator } from '../../components/home/CarbonDietSimulator';
import {
  CheckCircle2,
  Award,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Layers,
  Calendar,
  Clock,
  Send,
  Building,
  GraduationCap,
} from 'lucide-react';

export const SolutionDetailPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form states for inline lead form in SERVICE layout
  const [inlineFormSubmitted, setInlineFormSubmitted] = useState(false);
  const [inlineName, setInlineName] = useState('');
  const [inlineEmail, setInlineEmail] = useState('');
  const [inlineCompany, setInlineCompany] = useState('');
  const [inlinePhone, setInlinePhone] = useState('');

  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug) || SOLUTIONS_DATA[0];
  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.solutionTag === solution.id);

  // Schema.org JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@type': solution.type === 'service' ? 'Service' : 'SoftwareApplication',
    name: solution.title[lang],
    description: solution.shortDescription[lang],
    provider: {
      '@type': 'Organization',
      name: 'LO-CARB',
      url: 'https://locarb.green',
    },
  };

  const handleInlineFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineName || !inlineEmail || !inlineCompany || !inlinePhone) return;

    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'generate_lead',
        topic: 'solutions',
        solution: solution.id,
        company: inlineCompany,
        timestamp: new Date().toISOString(),
      });
    }
    setInlineFormSubmitted(true);
  };

  return (
    <div className="pt-32 pb-0 bg-[#F3F0DF]">
      <SeoHead
        lang={lang}
        title={`${solution.title[lang]} | LO-CARB`}
        description={solution.tagline[lang]}
        pathname={`/${lang}/solutions/${solution.slug}`}
        schema={schema}
      />

      {/* ========================================================================= */}
      {/* SERVICE LAYOUT (IFRS Standards, ISSB training, Sustainability Reporting)  */}
      {/* ========================================================================= */}
      {solution.type === 'service' && (
        <div>
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{solution.badge?.[lang] || 'Service Solution'}</span>
              </div>
              <BrandHeadline lang={lang} size="h1" as="h1" className="mb-4">
                {solution.title[lang]}
              </BrandHeadline>
              <p className="text-lg sm:text-2xl text-[#0EA552] font-semibold mb-6">
                {solution.outcomeLine[lang]}
              </p>
              <p className="text-sm sm:text-base text-black/70 mb-8 leading-relaxed font-normal">
                {solution.tagline[lang]}
              </p>

              <Button
                to={`/${lang}/contact?topic=solutions&solution=${solution.id}`}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                {lang === 'th' ? 'คุยกับผู้เชี่ยวชาญ IFRS (Talk to an IFRS specialist)' : 'Talk to an IFRS specialist'}
              </Button>
            </div>
          </div>

          {/* "What is IFRS S1/S2" in plain words */}
          {solution.whatIs && (
            <section className="py-16 bg-white border-y border-black/8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 font-anakotmai">
                    {solution.whatIs[lang].title}
                  </h2>
                  <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-8">
                    {solution.whatIs[lang].explanation}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#F3F0DF] border border-black/8">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-1">
                        {lang === 'th' ? 'ใครบ้างที่ต้องรายงาน?' : 'Who must report?'}
                      </div>
                      <div className="text-sm font-semibold text-black">
                        {solution.whatIs[lang].whoMustReport}
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#F3F0DF] border border-black/8">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-1">
                        {lang === 'th' ? 'กรอบเวลาการบังคับใช้' : 'Statutory timeline'}
                      </div>
                      <div className="text-sm font-semibold text-black">
                        {solution.whatIs[lang].deadline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Bold Banner "Thailand's first IFRS Sustainability Alliance" */}
          <section className="py-12 bg-[#0EA552] text-[#F3F0DF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-white shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-termina">
                    THAILAND'S FIRST IFRS SUSTAINABILITY ALLIANCE
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90">
                    {lang === 'th'
                      ? 'มาตรฐานระดับสากลที่มีผลบังคับใช้จริงในตลาดทุนโลกและ ก.ล.ต.'
                      : 'Global disclosure architecture verified by accredited sustainability practitioners.'}
                  </p>
                </div>
              </div>
              <Button
                to={`/${lang}/about/certificates`}
                variant="offwhite"
                size="sm"
                className="shrink-0"
              >
                {lang === 'th' ? 'ดูใบรับรอง' : 'View Credentials'}
              </Button>
            </div>
          </section>

          {/* 6-step one-stop service */}
          {solution.steps && (
            <section className="py-20 bg-[#F3F0DF]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0EA552] block mb-2">
                    6-STEP END-TO-END METHODOLOGY
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-black font-anakotmai">
                    {lang === 'th' ? 'กระบวนการให้บริการครบวงจร 6 ขั้นตอน' : '6-Step Comprehensive Roadmap'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solution.steps[lang].map((st) => (
                    <Card key={st.step} variant="white" className="p-6 relative group">
                      <div className="w-10 h-10 rounded-2xl bg-[#0EA552]/10 text-[#0EA552] font-black text-sm flex items-center justify-center mb-4 group-hover:bg-[#0EA552] group-hover:text-white transition-colors">
                        0{st.step}
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-black mb-2">
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                        {st.desc}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Portfolio story card with result number */}
          <section className="py-16 bg-white border-y border-black/8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#F3F0DF] border border-black/10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-xl space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0EA552]">
                    {lang === 'th' ? 'กรณีศึกษาตัวอย่าง' : 'Featured Client Result'}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-bold text-black font-anakotmai">
                    {lang === 'th'
                      ? 'ผู้นำค้าปลีก SET50 เตรียมพร้อม IFRS S2 ได้ครบ 96% ใน 3 เดือน'
                      : 'Leading SET50 Group Achieved 96% IFRS S2 Compliance in 3 Months'}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                    {lang === 'th'
                      ? 'ตรวจประเมิน Gap ครอบคลุม 1,200 สาขา พร้อมแบบจำลองความเสี่ยงภัยแล้งต่องบการเงิน ผ่านการรับรอง Big 4'
                      : 'Complete financial impact stress testing and Scope 3 data collection verified without audit findings.'}
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-black/8 text-center shrink-0 w-full sm:w-64">
                  <div className="text-4xl sm:text-5xl font-black text-[#0EA552] mb-1 font-termina">
                    96%
                  </div>
                  <div className="text-xs font-bold text-black/60">
                    {lang === 'th' ? 'IFRS S2 Readiness Score' : 'IFRS S2 Readiness Score'}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Related blog posts */}
          <section className="py-20 bg-[#F3F0DF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-8 font-anakotmai">
                {lang === 'th' ? 'บทความและกรณีศึกษาที่เกี่ยวข้อง' : 'Related Insights & Work'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((post) => (
                  <Card key={post.id} variant="white" padding="none" interactive>
                    <Link to={`/${lang}/blog/${post.category}/${post.slug}`} className="block">
                      <div className="h-44 w-full overflow-hidden bg-black/10">
                        <img
                          src={post.image}
                          alt={post.title[lang]}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0EA552] block mb-2">
                          {post.category}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-black mb-2 line-clamp-2">
                          {post.title[lang]}
                        </h4>
                        <div className="text-xs text-black/50">{post.date}</div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Inline lead form with this solution pre-selected */}
          <section className="py-20 bg-white border-t border-black/8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0EA552] block mb-2">
                  DIRECT CONSULTATION INQUIRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-black">
                  {lang === 'th'
                    ? `ปรึกษาผู้เชี่ยวชาญด้าน ${solution.title[lang]}`
                    : `Inquire about ${solution.title[lang]}`}
                </h3>
              </div>

              <Card variant="offwhite" className="p-6 sm:p-8">
                {inlineFormSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-[#0EA552] mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-black mb-2">
                      {lang === 'th' ? 'ได้รับข้อมูลของท่านเรียบร้อยแล้ว!' : 'Inquiry Received!'}
                    </h4>
                    <p className="text-sm text-black/70 max-w-md mx-auto">
                      {lang === 'th'
                        ? 'ที่ปรึกษาผู้รับผิดชอบโซลูชันนี้จะติดต่อกลับภายใน 24 ชม.'
                        : 'Our dedicated specialist will reach out within 24 hours.'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInlineFormSubmit} className="space-y-4">
                    <div className="p-3 rounded-xl bg-white text-xs font-semibold text-[#0EA552] border border-[#0EA552]/20">
                      {lang === 'th' ? 'โซลูชันที่เลือก:' : 'Selected Solution:'} {solution.title[lang]}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder={lang === 'th' ? 'ชื่อ-นามสกุล*' : 'Full Name*'}
                        value={inlineName}
                        onChange={(e) => setInlineName(e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm"
                      />
                      <input
                        type="email"
                        required
                        placeholder={lang === 'th' ? 'อีเมลองค์กร*' : 'Corporate Email*'}
                        value={inlineEmail}
                        onChange={(e) => setInlineEmail(e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder={lang === 'th' ? 'ชื่อบริษัท / องค์กร*' : 'Company Name*'}
                        value={inlineCompany}
                        onChange={(e) => setInlineCompany(e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm"
                      />
                      <input
                        type="tel"
                        required
                        placeholder={lang === 'th' ? 'เบอร์โทรศัพท์*' : 'Phone Number*'}
                        value={inlinePhone}
                        onChange={(e) => setInlinePhone(e.target.value)}
                        className="px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="md" fullWidth>
                      {lang === 'th' ? 'ส่งคำขอรับคำปรึกษา' : 'Request Consultation'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PRODUCT LAYOUT (CarbonCal, Carbon Scout)                                   */}
      {/* ========================================================================= */}
      {solution.type === 'product' && (
        <div>
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{solution.badge?.[lang] || 'Enterprise Software'}</span>
              </div>
              <BrandHeadline lang={lang} size="h1" as="h1" className="mb-4">
                {solution.title[lang]}
              </BrandHeadline>
              <p className="text-base sm:text-xl text-black/70 mb-8 leading-relaxed font-normal">
                {solution.tagline[lang]}
              </p>

              {/* [Request free trial] [Book a demo] */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  to={`/${lang}/contact?topic=solutions&solution=${solution.id}`}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  {lang === 'th' ? 'ทดลองใช้งานฟรี (Request free trial)' : 'Request free trial'}
                </Button>
                <Button
                  to={`/${lang}/contact?topic=solutions&solution=${solution.id}`}
                  variant="outline"
                  size="lg"
                >
                  {lang === 'th' ? 'นัดหมายสาธิตระบบ (Book a demo)' : 'Book a demo'}
                </Button>
              </div>
            </div>
          </div>

          {/* 3 Benefit cards */}
          {solution.benefits && (
            <section className="py-16 bg-white border-y border-black/8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solution.benefits[lang].map((ben, idx) => (
                    <Card key={idx} variant="offwhite" className="p-6 sm:p-8">
                      <div className="w-12 h-12 rounded-2xl bg-white text-[#0EA552] flex items-center justify-center mb-4 shadow-2xs font-bold">
                        0{idx + 1}
                      </div>
                      <h3 className="font-bold text-lg text-black mb-2">{ben.title}</h3>
                      <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                        {ben.desc}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Stats ([x] companies · [x] users · [x] tCO₂e measured) */}
          {solution.stats && (
            <section className="py-12 bg-[#0EA552] text-[#F3F0DF]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  {solution.stats[lang].map((st, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-3xl sm:text-5xl font-black font-termina">
                        {st.value}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold opacity-90">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 4-6 key features with screenshot placeholders */}
          {solution.features && (
            <section className="py-20 bg-[#F3F0DF]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0EA552] block mb-2">
                    FEATURE ARCHITECTURE
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-black font-anakotmai">
                    {lang === 'th' ? 'ฟีเจอร์หลักเพื่อการบริหารจัดการคาร์บอน' : 'Engineered for Enterprise Compliance'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solution.features[lang].map((feat, idx) => (
                    <Card key={idx} variant="white" className="p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <span className="text-[11px] font-bold uppercase px-2.5 py-1 rounded-full bg-[#0EA552]/10 text-[#0EA552] inline-block mb-3">
                          {feat.tag}
                        </span>
                        <h3 className="font-bold text-lg text-black mb-2">{feat.title}</h3>
                        <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-6">
                          {feat.desc}
                        </p>
                      </div>

                      {/* Mock software UI screenshot placeholder */}
                      <div className="rounded-2xl bg-[#F3F0DF] border border-black/10 p-4 space-y-3">
                        <div className="flex items-center justify-between border-b border-black/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          </div>
                          <span className="text-[10px] font-mono text-black/50">telemetry_dashboard.view</span>
                        </div>
                        <div className="h-24 bg-white rounded-xl flex items-center justify-center text-xs font-semibold text-black/40">
                          [Interactive Dashboard Preview: {feat.title}]
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CarbonCamp Section (inside CarbonCal) */}
          {solution.id === 'carboncal' && (
            <section className="py-20 bg-white border-y border-black/8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 sm:p-12 rounded-3xl bg-[#0EA552]/10 border-2 border-[#0EA552]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA552] text-white text-xs font-bold uppercase">
                      <GraduationCap className="w-4 h-4" />
                      <span>{lang === 'th' ? 'บริการเสริม: Carbon Camp' : 'Integrated Training: Carbon Camp'}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black font-anakotmai">
                      {lang === 'th'
                        ? 'Carbon Camp — บูตแคมป์เปลี่ยนทีมงานให้เป็นนักบัญชีคาร์บอน'
                        : 'Carbon Camp — Internal Carbon Accounting Enablement'}
                    </h3>
                    <p className="text-sm text-black/75 leading-relaxed">
                      {lang === 'th'
                        ? 'ซอฟต์แวร์ที่ดีต้องมาพร้อมทีมงานที่เข้าใจ ใน Carbon Camp เราส่งผู้เชี่ยวชาญเข้าประกบทีมบัญชีและสิ่งแวดล้อมของท่าน เพื่อให้ใช้งาน CarbonCal ได้อย่างเต็มศักยภาพตั้งแต่วันแรก'
                        : 'Software is only as good as the internal team operating it. Carbon Camp is our hands-on enablement academy training your team to master emission factors and audits.'}
                    </p>
                  </div>
                  <Button
                    to={`/${lang}/contact?topic=solutions&solution=carboncal`}
                    variant="primary"
                    size="md"
                    className="shrink-0"
                  >
                    {lang === 'th' ? 'สอบถามรอบอบรม Carbon Camp' : 'Inquire for Carbon Camp'}
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* 2-3 Testimonials */}
          {solution.testimonials && (
            <section className="py-20 bg-[#F3F0DF]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-xl mx-auto mb-12">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0EA552] block mb-2">
                    CLIENT TESTIMONIALS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black font-anakotmai">
                    {lang === 'th' ? 'เสียงตอบรับจากองค์กรผู้ใช้งานจริง' : 'Trusted by Leading Operators'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solution.testimonials.map((testi, idx) => (
                    <Card key={idx} variant="white" className="p-8 flex flex-col justify-between">
                      <p className="text-sm sm:text-base text-black/80 italic leading-relaxed mb-6">
                        "{testi.quote[lang]}"
                      </p>
                      <div className="pt-4 border-t border-black/8">
                        <div className="font-bold text-sm text-black">{testi.author}</div>
                        <div className="text-xs text-[#0EA552] font-semibold">{testi.role[lang]}</div>
                        <div className="text-xs text-black/50">{testi.company}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Carbon Simulator (moved from Home to CarbonCal page as section before FAQ) */}
          {solution.slug === 'carboncal' && (
            <section className="py-16 md:py-24 bg-[#F3F0DF] border-t border-black/8">
              <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0EA552] block mb-2 font-termina">
                    {lang === 'th' ? 'เครื่องมือจำลอง' : 'INTERACTIVE TOOL'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black font-anakotmai">
                    {lang === 'th' ? 'จำลองแผน Carbon Diet ขององค์กร' : 'Simulate Your Corporate Carbon Diet'}
                  </h2>
                </div>
                <CarbonDietSimulator lang={lang} />
              </div>
            </section>
          )}

          {/* FAQ Accordion (pricing, data security, support) */}
          {solution.faq && (
            <section className="py-20 bg-white border-t border-black/8">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0EA552] block mb-2">
                    FREQUENTLY ASKED QUESTIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black font-anakotmai">
                    {lang === 'th' ? 'คำถามที่พบบ่อย' : 'Frequently Asked Questions'}
                  </h2>
                </div>

                <div className="space-y-4">
                  {solution.faq.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-black/10 overflow-hidden bg-[#F3F0DF]"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full p-5 text-left font-bold text-sm sm:text-base text-black flex items-center justify-between gap-4 cursor-pointer hover:bg-black/5 transition-colors"
                      >
                        <span>{item.question[lang]}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 text-[#0EA552] shrink-0 ${
                            openFaqIndex === idx ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="p-5 pt-0 text-xs sm:text-sm text-black/75 leading-relaxed bg-[#F3F0DF]">
                          {item.answer[lang]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Band with this solution pre-selected */}
          <CtaBand
            lang={lang}
            solutionId={solution.id}
            primaryBtnText={
              lang === 'th' ? `เริ่มต้นใช้งาน ${solution.title[lang]}` : `Get Started with ${solution.title[lang]}`
            }
          />
        </div>
      )}
    </div>
  );
};
