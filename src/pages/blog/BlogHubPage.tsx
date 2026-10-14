import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Language, PostCategory, SolutionId } from '../../types/content';
import { BLOG_POSTS_DATA } from '../../content/posts';
import { SOLUTIONS_DATA } from '../../content/solutions';
import { SeoHead } from '../../components/common/SeoHead';
import { BrandHeadline } from '../../components/brand/BrandHeadline';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { CtaBand } from '../../components/common/CtaBand';
import { Calendar, Clock, ArrowRight, BookOpen, Filter } from 'lucide-react';

export const BlogHubPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCat = searchParams.get('category');
  const activeCategory: PostCategory | 'all' =
    rawCat === 'portfolio' || rawCat === 'knowledge-base' || rawCat === 'others'
      ? rawCat
      : 'all';
  const [activeSolutionTag, setActiveSolutionTag] = useState<SolutionId | 'all'>('all');

  const categories = [
    { id: 'all', label: lang === 'th' ? 'ทั้งหมด (All)' : 'All Insights' },
    { id: 'portfolio', label: lang === 'th' ? 'ผลงานและกรณีศึกษา (Portfolio)' : 'Portfolio Cases' },
    { id: 'knowledge-base', label: lang === 'th' ? 'คลังความรู้ (Knowledge base)' : 'Knowledge Base' },
    { id: 'others', label: lang === 'th' ? 'บทความและข่าวสาร (Others)' : 'Others' },
  ];

  const handleCategoryChange = (cat: string) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_DATA.filter((post) => {
      const matchCat = activeCategory === 'all' || post.category === activeCategory;
      const matchTag = activeSolutionTag === 'all' || post.solutionTag === activeSolutionTag;
      return matchCat && matchTag;
    });
  }, [activeCategory, activeSolutionTag]);

  const featuredPost = useMemo(() => {
    return filteredPosts.find((p) => p.featured) || filteredPosts[0];
  }, [filteredPosts]);

  const regularPosts = useMemo(() => {
    return filteredPosts.filter((p) => p.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost]);

  return (
    <div className="pt-32 pb-0 bg-[#F3F0DF]">
      <SeoHead
        lang={lang}
        title={lang === 'th' ? 'บทความและผลงาน | LO-CARB' : 'Insights & Work | Portfolio & Knowledge Base'}
        description={
          lang === 'th'
            ? 'คลังความรู้ IFRS S1/S2 คาร์บอนฟุตพริ้นท์ และกรณีศึกษาความสำเร็จของบริษัทจดทะเบียนไทย'
            : 'Authoritative perspectives on IFRS S1 & S2, corporate carbon accounting, and verified SET case studies.'
        }
        pathname={`/${lang}/blog`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? 'บทความและผลงาน' : 'INSIGHTS & PORTFOLIO'}</span>
          </div>
          <BrandHeadline lang={lang} size="h1" as="h1" className="mb-4">
            {lang === 'th' ? 'คลังความรู้และกรณีศึกษาความสำเร็จ' : 'Perspectives & Transformation Stories'}
          </BrandHeadline>
          <p className="text-base sm:text-xl text-black/70 leading-relaxed font-normal">
            {lang === 'th'
              ? 'เจาะลึกเกณฑ์ใหม่ ก.ล.ต. และตัวอย่างการดำเนินงานจริงจากบริษัทจดทะเบียนในตลาดหลักทรัพย์'
              : 'Practical analysis on capital market decarbonization, climate accounting, and verified case studies.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 border-b border-black/10 pb-4">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => handleCategoryChange(c.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-[#0EA552] text-white shadow-xs'
                  : 'bg-white text-black/70 hover:bg-black/5 hover:text-black'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Filter chips by solution tag */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-1.5 text-xs font-bold text-black/50 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? 'กรองตามโซลูชัน:' : 'Filter by Solution:'}</span>
          </div>
          <button
            onClick={() => setActiveSolutionTag('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${
              activeSolutionTag === 'all'
                ? 'bg-black text-white'
                : 'bg-black/5 text-black/70 hover:bg-black/10'
            }`}
          >
            {lang === 'th' ? 'ทุกโซลูชัน' : 'All Solutions'}
          </button>
          {SOLUTIONS_DATA.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSolutionTag(s.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${
                activeSolutionTag === s.id
                  ? 'bg-[#0EA552] text-white'
                  : 'bg-black/5 text-black/70 hover:bg-black/10'
              }`}
            >
              {s.badge?.[lang] || s.id}
            </button>
          ))}
        </div>

        {/* Featured Post Card */}
        {featuredPost && (
          <div className="mb-12">
            <Card variant="white" padding="none" interactive className="overflow-hidden">
              <Link
                to={`/${lang}/blog/${featuredPost.category}/${featuredPost.slug}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-7 h-64 sm:h-96 w-full overflow-hidden bg-black/10">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title[lang]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0EA552] text-white">
                        {lang === 'th' ? 'เรื่องเด่น' : 'Featured'}
                      </span>
                      <span className="text-xs text-black/50">{featuredPost.date}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 leading-snug hover:text-[#0EA552] transition-colors">
                      {featuredPost.title[lang]}
                    </h2>

                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-4">
                      {featuredPost.subtitle
                        ? featuredPost.subtitle[lang]
                        : featuredPost.challenge?.[lang]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/8 flex items-center justify-between text-xs font-bold text-[#0EA552]">
                    <span>{lang === 'th' ? 'อ่านต่อฉบับเต็ม' : 'Read Full Story'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} variant="white" padding="none" interactive>
              <Link to={`/${lang}/blog/${post.category}/${post.slug}`} className="block">
                <div className="h-48 w-full overflow-hidden bg-black/10">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-black/50 mb-2">
                    <span className="font-semibold text-[#0EA552] uppercase text-[10px]">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-black mb-2 line-clamp-2 hover:text-[#0EA552] transition-colors leading-snug">
                    {post.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-black/70 line-clamp-2 leading-relaxed">
                    {post.subtitle ? post.subtitle[lang] : post.challenge?.[lang]}
                  </p>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      <CtaBand lang={lang} />
    </div>
  );
};
