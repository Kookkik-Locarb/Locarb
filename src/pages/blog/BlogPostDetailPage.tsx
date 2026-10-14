import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Language } from '../../types/content';
import { BLOG_POSTS_DATA } from '../../content/posts';
import { SOLUTIONS_DATA } from '../../content/solutions';
import { SeoHead } from '../../components/common/SeoHead';
import { BrandHeadline } from '../../components/brand/BrandHeadline';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { CtaBand } from '../../components/common/CtaBand';
import {
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Building2,
  Quote,
  ShieldCheck,
  ChevronLeft,
} from 'lucide-react';

export const BlogPostDetailPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug) || BLOG_POSTS_DATA[0];
  const matchingSolution = SOLUTIONS_DATA.find((s) => s.id === post.solutionTag);
  const relatedPosts = BLOG_POSTS_DATA.filter(
    (p) => p.id !== post.id && p.solutionTag === post.solutionTag
  );

  const isPortfolio = post.category === 'portfolio';

  // Schema.org Article JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title[lang],
    image: [post.image],
    datePublished: post.date,
    author: [
      {
        '@type': 'Person',
        name: post.author.name,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'LO-CARB',
      url: 'https://locarb.green',
    },
    description: post.subtitle ? post.subtitle[lang] : post.challenge?.[lang] || '',
  };

  return (
    <div className="pt-32 pb-0 bg-[#F3F0DF]">
      <SeoHead
        lang={lang}
        title={`${post.title[lang]} | LO-CARB`}
        description={post.subtitle ? post.subtitle[lang] : post.challenge?.[lang] || ''}
        pathname={`/${lang}/blog/${post.category}/${post.slug}`}
        type="article"
        image={post.image}
        schema={articleSchema}
      />

      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to={`/${lang}/blog`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black/60 hover:text-[#0EA552] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{lang === 'th' ? 'กลับไปยังหน้าบทความทั้งหมด' : 'Back to all insights'}</span>
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* PORTFOLIO STORY TEMPLATE                                                 */}
      {/* ========================================================================= */}
      {isPortfolio ? (
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 space-y-12">
          {/* Hero */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#0EA552] text-white">
                {lang === 'th' ? 'กรณีศึกษาความสำเร็จ' : 'Case Study'}
              </span>
              {post.industry && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-black/10 text-black/70">
                  {post.industry[lang]}
                </span>
              )}
              {matchingSolution && (
                <Link
                  to={`/${lang}/solutions/${matchingSolution.slug}`}
                  className="text-xs font-bold px-3 py-1 rounded-full bg-[#0EA552]/10 text-[#0EA552] hover:bg-[#0EA552] hover:text-white transition-colors"
                >
                  {matchingSolution.title[lang]}
                </Link>
              )}
            </div>

            <BrandHeadline lang={lang} size="h1" as="h1">
              {post.title[lang]}
            </BrandHeadline>

            {post.headlineResult && (
              <div className="p-6 rounded-2xl bg-[#0EA552]/10 border border-[#0EA552]/30 text-lg sm:text-xl font-bold text-[#0EA552]">
                "{post.headlineResult[lang]}"
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-black/10 h-80 sm:h-96 w-full">
            <img
              src={post.image}
              alt={post.title[lang]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="white" className="p-6 sm:p-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                {lang === 'th' ? 'ความท้าทาย (The Challenge)' : 'The Challenge'}
              </span>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                {post.challenge?.[lang]}
              </p>
            </Card>

            <Card variant="white" className="p-6 sm:p-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0EA552]">
                {lang === 'th' ? 'แนวทางแก้ไข (The Solution)' : 'The LO-CARB Solution'}
              </span>
              <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-4">
                {post.solutionDetails?.[lang]}
              </p>
              {matchingSolution && (
                <Link
                  to={`/${lang}/solutions/${matchingSolution.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0EA552] hover:underline"
                >
                  <span>{lang === 'th' ? 'ดูโซลูชันที่นำมาใช้:' : 'View Solution:'} {matchingSolution.title[lang]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </Card>
          </div>

          {/* Outcome (3 numbers) */}
          {post.outcomes && (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0EA552] text-[#F3F0DF]">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-1">
                  QUANTIFIED IMPACT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-anakotmai">
                  {lang === 'th' ? 'ผลลัพธ์เชิงตัวเลขที่เกิดขึ้นจริง' : 'Measurable Business Outcomes'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {post.outcomes[lang].map((oc, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs">
                    <div className="text-3xl sm:text-4xl font-black font-termina mb-1">
                      {oc.metric}
                    </div>
                    <div className="text-xs sm:text-sm font-medium opacity-90">
                      {oc.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Quote */}
          {post.quote && (
            <div className="p-8 rounded-3xl bg-white border border-black/10 relative">
              <Quote className="w-10 h-10 text-[#0EA552]/20 absolute top-6 right-6" />
              <p className="text-base sm:text-lg text-black/90 italic leading-relaxed mb-4">
                "{post.quote.text[lang]}"
              </p>
              <div className="font-bold text-sm text-black">{post.quote.author}</div>
              <div className="text-xs text-[#0EA552] font-semibold">{post.quote.company}</div>
            </div>
          )}

          {/* "Product used" card */}
          {matchingSolution && (
            <Card variant="offwhite" className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-[#0EA552]/30">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase text-[#0EA552]">
                  {lang === 'th' ? 'โซลูชันที่ใช้ในโครงการนี้' : 'Solution Deployed in this Case'}
                </span>
                <h4 className="text-lg font-bold text-black">{matchingSolution.title[lang]}</h4>
                <p className="text-xs text-black/70 max-w-lg">{matchingSolution.tagline[lang]}</p>
              </div>
              <Button
                to={`/${lang}/solutions/${matchingSolution.slug}`}
                variant="outline"
                size="sm"
                className="shrink-0"
              >
                {lang === 'th' ? 'อ่านรายละเอียดโซลูชัน' : 'Explore Solution'}
              </Button>
            </Card>
          )}

          {/* CTA "Talk to us about a project like this" */}
          <div className="text-center pt-6">
            <Button
              to={`/${lang}/contact?topic=solutions&solution=${post.solutionTag}`}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              {lang === 'th' ? 'ปรึกษาเราเกี่ยวกับโปรเจกต์ลักษณะนี้' : 'Talk to us about a project like this'}
            </Button>
          </div>
        </article>
      ) : (
        /* ========================================================================= */
        /* ARTICLE TEMPLATE                                                          */
        /* ========================================================================= */
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 space-y-10">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-black/50">
              <span className="font-bold text-[#0EA552] uppercase text-[11px] px-2.5 py-0.5 rounded-full bg-[#0EA552]/10">
                {post.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0EA552]" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0EA552]" />
                {post.readTime[lang]}
              </span>
            </div>

            <BrandHeadline lang={lang} size="h1" as="h1">
              {post.title[lang]}
            </BrandHeadline>

            {post.subtitle && (
              <p className="text-base sm:text-xl text-black/70 leading-relaxed font-normal">
                {post.subtitle[lang]}
              </p>
            )}
          </div>

          {/* Hero Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-black/10 h-72 sm:h-96 w-full">
            <img
              src={post.image}
              alt={post.title[lang]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#0EA552]/30 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0EA552]">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'th' ? 'สาระสำคัญ (Key Takeaways)' : 'Executive Takeaways'}</span>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base text-black/85">
                {post.keyTakeaways[lang].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA552] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body with H2s */}
          <div className="prose max-w-none text-black/80 space-y-6 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-black font-anakotmai">
              {lang === 'th' ? 'ทำไมประเด็นนี้จึงเปลี่ยนโฉมหน้าตลาดทุนไทย?' : 'Why Capital Markets Are Shifting'}
            </h2>
            <p>
              {lang === 'th'
                ? 'ในอดีต การรายงานข้อมูลด้านสิ่งแวดล้อมมักถูกมองว่าเป็นเรื่องของภาพลักษณ์องค์กร (Corporate PR) แต่ภายใต้เกณฑ์ IFRS S1 และ S2 ข้อมูลเหล่านี้กลายเป็นสาระสำคัญทางการเงิน (Material Financial Information) ที่ผู้สอบบัญชีและนักวิเคราะห์ให้ความสำคัญไม่น้อยไปกว่างบกำไรขาดทุน'
                : 'Historically, environmental reporting was viewed primarily through a marketing lens. Under IFRS S1 and S2, disclosures now represent material financial information scrutinized by auditors, rating agencies, and asset managers.'}
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-black font-anakotmai">
              {lang === 'th' ? 'แนวทางปฏิบัติสำหรับคณะกรรมการและทีมงาน' : 'Immediate Priorities for Boards & Teams'}
            </h2>
            <p>
              {lang === 'th'
                ? 'ขั้นตอนแรกคือการทำ Gap Analysis เพื่อตรวจดูว่าระบบบัญชีเดิมมีข้อมูล Scope 1, Scope 2 และ Scope 3 มากน้อยเพียงใด และทำการประเมิน Scenario Analysis เพื่อให้คณะกรรมการมีมติเชิงกลยุทธ์ที่สามารถเปิดเผยในแบบ 56-1 One Report ได้อย่างมั่นใจ'
                : 'The immediate step is conducting a readiness gap diagnosis, assessing primary Scope 1-3 ledger integrity, and framing board-level climate governance policies ahead of regulatory deadlines.'}
            </p>
          </div>

          {/* Inline CTA to matching solution */}
          {matchingSolution && (
            <div className="p-6 rounded-2xl bg-[#0EA552]/10 border border-[#0EA552]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#0EA552]">RECOMMENDED SOLUTION</span>
                <h4 className="font-bold text-base text-black">{matchingSolution.title[lang]}</h4>
                <p className="text-xs text-black/70">{matchingSolution.outcomeLine[lang]}</p>
              </div>
              <Button
                to={`/${lang}/solutions/${matchingSolution.slug}`}
                variant="primary"
                size="sm"
                className="shrink-0"
              >
                {lang === 'th' ? 'ศึกษาโซลูชันนี้' : 'Learn More'}
              </Button>
            </div>
          )}

          {/* Author Box */}
          <div className="p-6 rounded-2xl bg-white border border-black/10 flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-14 h-14 rounded-full object-cover shrink-0"
            />
            <div>
              <div className="text-xs uppercase font-bold text-[#0EA552]">
                {lang === 'th' ? 'ผู้เขียนบทความ' : 'Author'}
              </div>
              <h4 className="font-bold text-base text-black">{post.author.name}</h4>
              <p className="text-xs text-black/60">{post.author.title[lang]}</p>
            </div>
          </div>
        </article>
      )}

      {/* CTA Band */}
      <CtaBand lang={lang} />
    </div>
  );
};
