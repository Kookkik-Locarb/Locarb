import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../../types/content';
import { CONTENT_TH } from '../../content/th';
import { CONTENT_EN } from '../../content/en';
import { SOLUTIONS_DATA } from '../../content/solutions';
import { BLOG_POSTS_DATA } from '../../content/posts';
import { Search, X, ArrowRight, FileText, Layers, Compass } from 'lucide-react';

interface SearchModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  id: string;
  title: string;
  snippet: string;
  url: string;
  category: 'page' | 'solution' | 'post';
  badge: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ lang, isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const t = (lang === 'th' ? CONTENT_TH : CONTENT_EN).search;

  // Build searchable index
  const searchableItems = useMemo<SearchItem[]>(() => {
    const items: SearchItem[] = [];

    // Pages
    const pages = [
      {
        id: 'home',
        title: lang === 'th' ? 'หน้าหลัก (Home)' : 'Home Page',
        snippet: lang === 'th' ? 'เราช่วยปรับสมดุลคาร์บอน เพื่อโลกที่ยั่งยืน' : 'We put the world on a carbon diet.',
        url: `/${lang}`,
        badge: lang === 'th' ? 'หน้าหลัก' : 'Home',
      },
      {
        id: 'story',
        title: lang === 'th' ? 'เรื่องราวของเรา (Our Story)' : 'Our Story',
        snippet: lang === 'th' ? 'ภารกิจ ประวัติความเป็นมา และเป้าหมายของ LO-CARB' : 'Our mission, origins, and corporate decarbonization conviction.',
        url: `/${lang}/about/story`,
        badge: lang === 'th' ? 'เกี่ยวกับเรา' : 'About',
      },
      {
        id: 'certificates',
        title: lang === 'th' ? 'ใบรับรองและมาตรฐาน (Certificates)' : 'Certificates & Credentials',
        snippet: lang === 'th' ? 'สมาชิก IFRS Sustainability Alliance รายแรกในไทย และการรับรองระดับสากล' : 'Thailand 1st IFRS Sustainability Alliance member and TGO credentials.',
        url: `/${lang}/about/certificates`,
        badge: lang === 'th' ? 'เกี่ยวกับเรา' : 'About',
      },
      {
        id: 'board',
        title: lang === 'th' ? 'คณะกรรมการและผู้บริหาร (Board of Directors)' : 'Board of Directors',
        snippet: lang === 'th' ? 'รายชื่อคณะกรรมการและผู้บริหารระดับสูงของ LO-CARB' : 'Meet our board of directors and executive leadership team.',
        url: `/${lang}/about/board`,
        badge: lang === 'th' ? 'เกี่ยวกับเรา' : 'About',
      },
      {
        id: 'contact',
        title: lang === 'th' ? 'ติดต่อเรา (Contact Us)' : 'Contact Us & Request Consultation',
        snippet: lang === 'th' ? 'สอบถามโซลูชัน ติดต่อความร่วมมือ หรือร่วมงานกับเรา' : 'Speak with an IFRS specialist or request product demos.',
        url: `/${lang}/contact`,
        badge: lang === 'th' ? 'ติดต่อ' : 'Contact',
      },
    ];

    pages.forEach((p) => {
      items.push({
        id: p.id,
        title: p.title,
        snippet: p.snippet,
        url: p.url,
        category: 'page',
        badge: p.badge,
      });
    });

    // Solutions
    SOLUTIONS_DATA.forEach((sol) => {
      items.push({
        id: `sol-${sol.id}`,
        title: sol.title[lang],
        snippet: `${sol.tagline[lang]} — ${sol.shortDescription[lang]}`,
        url: `/${lang}/solutions/${sol.slug}`,
        category: 'solution',
        badge: sol.badge?.[lang] || (lang === 'th' ? 'โซลูชัน' : 'Solution'),
      });
    });

    // Blog Posts
    BLOG_POSTS_DATA.forEach((post) => {
      items.push({
        id: `post-${post.id}`,
        title: post.title[lang],
        snippet: post.subtitle ? post.subtitle[lang] : post.challenge?.[lang] || '',
        url: `/${lang}/blog/${post.category}/${post.slug}`,
        category: 'post',
        badge:
          post.category === 'portfolio'
            ? lang === 'th'
              ? 'กรณีศึกษา'
              : 'Case Study'
            : lang === 'th'
            ? 'คลังความรู้'
            : 'Knowledge Base',
      });
    });

    return items;
  }, [lang]);

  // Filter items based on query
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchableItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
    );
  }, [query, searchableItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F3F0DF] text-[#000000] w-full max-w-2xl rounded-3xl shadow-2xl border border-black/15 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search header */}
        <div className="p-4 sm:p-5 border-b border-black/10 flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#0EA552] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            autoFocus
            className="flex-1 bg-transparent text-sm sm:text-base outline-none text-black placeholder:text-black/40 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full hover:bg-black/5 text-black/40 hover:text-black"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-black/5 hover:bg-black/10 text-black/70 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results area */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-2 flex-1">
          {!query.trim() ? (
            <div className="py-8 text-center text-black/50 text-sm">
              <Compass className="w-8 h-8 mx-auto mb-2 opacity-40 text-[#0EA552]" />
              <p>{t.placeholder}</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-black/50 text-sm">
              <p>{t.noResults}</p>
            </div>
          ) : (
            results.map((res) => (
              <div
                key={res.id}
                onClick={() => {
                  navigate(res.url);
                  onClose();
                }}
                className="group p-3.5 rounded-2xl bg-white hover:bg-[#0EA552]/10 border border-black/5 hover:border-[#0EA552]/30 transition-all cursor-pointer flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 rounded-xl bg-[#F3F0DF] group-hover:bg-[#0EA552] text-[#000000] group-hover:text-[#F3F0DF] transition-colors shrink-0 mt-0.5">
                    {res.category === 'solution' ? (
                      <Layers className="w-4 h-4" />
                    ) : res.category === 'post' ? (
                      <FileText className="w-4 h-4" />
                    ) : (
                      <Compass className="w-4 h-4" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#0EA552]/10 text-[#0EA552]">
                        {res.badge}
                      </span>
                      <h4 className="font-bold text-sm text-black truncate group-hover:text-[#0EA552] transition-colors">
                        {res.title}
                      </h4>
                    </div>
                    <p className="text-xs text-black/60 line-clamp-1 leading-relaxed">
                      {res.snippet}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-[#0EA552] group-hover:translate-x-1 transition-all shrink-0 mt-2" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
