import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../../types/content';
import { CONTENT_TH } from '../../content/th';
import { CONTENT_EN } from '../../content/en';
import { Logo } from '../brand/Logo';
import { Button } from '../common/Button';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  FileCheck2,
  GraduationCap,
  Calculator,
  Radar,
  FileSpreadsheet,
  BookOpen,
  Award,
  Users,
  Compass,
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg'>('md');
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  const t = (lang === 'th' ? CONTENT_TH : CONTENT_EN).nav;

  // Initialize and persist text size
  useEffect(() => {
    const saved = localStorage.getItem('locarb_text_size') as 'sm' | 'md' | 'lg' | null;
    if (saved && ['sm', 'md', 'lg'].includes(saved)) {
      setTextSize(saved);
      document.documentElement.setAttribute('data-text-size', saved);
    }
  }, []);

  const handleTextSizeChange = (newSize: 'sm' | 'md' | 'lg') => {
    setTextSize(newSize);
    localStorage.setItem('locarb_text_size', newSize);
    document.documentElement.setAttribute('data-text-size', newSize);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Language switch handler: mirrors the exact current path to the alternate language
  const handleLanguageSwitch = () => {
    const targetLang: Language = lang === 'th' ? 'en' : 'th';
    const currentPath = location.pathname;
    const searchParams = location.search;
    // Replace prefix /th or /en
    const newPath = currentPath.replace(/^\/(th|en)/, `/${targetLang}`);
    navigate(`${newPath}${searchParams}`);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 px-3 sm:px-6 pointer-events-none'
          : 'py-4 px-4 sm:px-6'
      }`}
    >
      <div
        className={`max-w-[1248px] mx-auto transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'rounded-full bg-white/90 backdrop-blur-xl border border-black/8 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)] px-5 sm:px-7 py-2.5'
            : 'px-2 py-0'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to={`/${lang}`}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="LO-CARB Homepage"
          >
            <Logo height={34} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'about' ? null : 'about')
                }
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  location.pathname.includes('/about')
                    ? 'text-[#0EA552] bg-[#0EA552]/10'
                    : 'text-black hover:text-[#0EA552] hover:bg-black/5'
                }`}
                aria-expanded={activeDropdown === 'about'}
              >
                <span>{t.about}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white shadow-xl border border-black/10 py-2 z-50 animate-fade-in">
                  <Link
                    to={`/${lang}/about/story`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[#0EA552]" />
                    <span>{t.aboutMenu.story}</span>
                  </Link>
                  <Link
                    to={`/${lang}/about/certificates`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <Award className="w-4 h-4 text-[#0EA552]" />
                    <span>{t.aboutMenu.certificates}</span>
                  </Link>
                  <Link
                    to={`/${lang}/about/board`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <Users className="w-4 h-4 text-[#0EA552]" />
                    <span>{t.aboutMenu.board}</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Our Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')
                }
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  location.pathname.includes('/solutions')
                    ? 'text-[#0EA552] bg-[#0EA552]/10'
                    : 'text-black hover:text-[#0EA552] hover:bg-black/5'
                }`}
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>{t.solutions}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white shadow-xl border border-black/10 py-2.5 z-50 animate-fade-in">
                  <Link
                    to={`/${lang}/solutions/ifrs`}
                    className="flex items-start gap-3 px-4 py-2 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <FileCheck2 className="w-4 h-4 text-[#0EA552] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{t.solutionsMenu.ifrs}</div>
                      <div className="text-xs text-black/50">
                        {lang === 'th' ? 'มาตรฐาน S1 & S2 สากล' : 'S1 & S2 Advisory'}
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={`/${lang}/solutions/carboncal`}
                    className="flex items-start gap-3 px-4 py-2 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <Calculator className="w-4 h-4 text-[#0EA552] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{t.solutionsMenu.carboncal}</div>
                      <div className="text-xs text-black/50">
                        {lang === 'th' ? 'ซอฟต์แวร์และค่ายอบรม' : 'SaaS + Training'}
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={`/${lang}/solutions/issb-training`}
                    className="flex items-start gap-3 px-4 py-2 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-[#0EA552] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{t.solutionsMenu.issbTraining}</div>
                      <div className="text-xs text-black/50">
                        {lang === 'th' ? 'หลักสูตรผู้บริหารและทีมงาน' : 'Executive Masterclasses'}
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={`/${lang}/solutions/carbon-scout`}
                    className="flex items-start gap-3 px-4 py-2 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <Radar className="w-4 h-4 text-[#0EA552] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{t.solutionsMenu.carbonScout}</div>
                      <div className="text-xs text-black/50">
                        {lang === 'th' ? 'สำรวจข้อมูลซัพพลายเชน' : 'Scope 3 Supply Chain'}
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={`/${lang}/solutions/reporting-consulting`}
                    className="flex items-start gap-3 px-4 py-2 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-[#0EA552] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{t.solutionsMenu.reporting}</div>
                      <div className="text-xs text-black/50">
                        {lang === 'th' ? 'ที่ปรึกษา One-Report & GRI' : 'One-Report & GRI'}
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'blog' ? null : 'blog')
                }
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                  location.pathname.includes('/blog')
                    ? 'text-[#0EA552] bg-[#0EA552]/10'
                    : 'text-black hover:text-[#0EA552] hover:bg-black/5'
                }`}
                aria-expanded={activeDropdown === 'blog'}
              >
                <span>{t.blog}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'blog' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'blog' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white shadow-xl border border-black/10 py-2 z-50 animate-fade-in">
                  <Link
                    to={`/${lang}/blog?category=portfolio`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <Award className="w-4 h-4 text-[#0EA552]" />
                    <span>{t.blogMenu.portfolio}</span>
                  </Link>
                  <Link
                    to={`/${lang}/blog?category=knowledge-base`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[#0EA552]" />
                    <span>{t.blogMenu.knowledgeBase}</span>
                  </Link>
                  <Link
                    to={`/${lang}/blog?category=others`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-black hover:bg-[#0EA552]/10 hover:text-[#0EA552] transition-colors"
                  >
                    <Compass className="w-4 h-4 text-[#0EA552]" />
                    <span>{t.blogMenu.others}</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full hover:bg-black/5 text-black hover:text-[#0EA552] transition-colors cursor-pointer"
              aria-label={t.searchAria}
              title={t.searchAria}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* A- / A / A+ text-size control */}
            <div
              className="hidden sm:inline-flex items-center p-0.5 rounded-full bg-black/5 border border-black/10"
              role="group"
              aria-label={t.textSizeAria}
            >
              <button
                onClick={() => handleTextSizeChange('sm')}
                className={`px-2 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  textSize === 'sm'
                    ? 'bg-[#0EA552] text-white shadow-xs'
                    : 'text-black/60 hover:text-black'
                }`}
                title="Small text"
              >
                A−
              </button>
              <button
                onClick={() => handleTextSizeChange('md')}
                className={`px-2 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  textSize === 'md'
                    ? 'bg-[#0EA552] text-white shadow-xs'
                    : 'text-black/60 hover:text-black'
                }`}
                title="Default text"
              >
                A
              </button>
              <button
                onClick={() => handleTextSizeChange('lg')}
                className={`px-2 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  textSize === 'lg'
                    ? 'bg-[#0EA552] text-white shadow-xs'
                    : 'text-black/60 hover:text-black'
                }`}
                title="Large text"
              >
                A+
              </button>
            </div>

            {/* TH/EN toggle */}
            <button
              onClick={handleLanguageSwitch}
              className="px-2.5 py-1.5 text-xs font-bold tracking-wider rounded-full border border-black/15 bg-white text-black hover:bg-[#0EA552] hover:text-[#F3F0DF] hover:border-[#0EA552] transition-all cursor-pointer"
              aria-label={t.langToggleAria}
              title={t.langToggleAria}
            >
              {lang === 'th' ? 'EN' : 'TH'}
            </button>

            {/* Contact Us Primary Button */}
            <Button
              to={`/${lang}/contact`}
              variant="primary"
              size="sm"
              className="hidden md:inline-flex font-semibold shadow-xs"
            >
              {t.contactBtn}
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-black lg:hidden hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-[#F3F0DF] border-b border-black/10 shadow-2xl p-6 max-h-[85vh] overflow-y-auto animate-fade-in z-50">
          <div className="space-y-6">
            {/* Mobile Text Size */}
            <div className="flex items-center justify-between pb-4 border-b border-black/10">
              <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                {t.textSizeAria}
              </span>
              <div className="inline-flex items-center p-0.5 rounded-full bg-black/5 border border-black/10">
                <button
                  onClick={() => handleTextSizeChange('sm')}
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    textSize === 'sm' ? 'bg-[#0EA552] text-white' : 'text-black/60'
                  }`}
                >
                  A−
                </button>
                <button
                  onClick={() => handleTextSizeChange('md')}
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    textSize === 'md' ? 'bg-[#0EA552] text-white' : 'text-black/60'
                  }`}
                >
                  A
                </button>
                <button
                  onClick={() => handleTextSizeChange('lg')}
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    textSize === 'lg' ? 'bg-[#0EA552] text-white' : 'text-black/60'
                  }`}
                >
                  A+
                </button>
              </div>
            </div>

            {/* About Group */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-2">
                {t.about}
              </div>
              <div className="space-y-2 pl-2">
                <Link
                  to={`/${lang}/about/story`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.aboutMenu.story}
                </Link>
                <Link
                  to={`/${lang}/about/certificates`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.aboutMenu.certificates}
                </Link>
                <Link
                  to={`/${lang}/about/board`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.aboutMenu.board}
                </Link>
              </div>
            </div>

            {/* Solutions Group */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-2">
                {t.solutions}
              </div>
              <div className="space-y-2 pl-2">
                <Link
                  to={`/${lang}/solutions/ifrs`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.solutionsMenu.ifrs}
                </Link>
                <Link
                  to={`/${lang}/solutions/carboncal`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.solutionsMenu.carboncal}
                </Link>
                <Link
                  to={`/${lang}/solutions/issb-training`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.solutionsMenu.issbTraining}
                </Link>
                <Link
                  to={`/${lang}/solutions/carbon-scout`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.solutionsMenu.carbonScout}
                </Link>
                <Link
                  to={`/${lang}/solutions/reporting-consulting`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.solutionsMenu.reporting}
                </Link>
              </div>
            </div>

            {/* Blog Group */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-2">
                {t.blog}
              </div>
              <div className="space-y-2 pl-2">
                <Link
                  to={`/${lang}/blog?category=portfolio`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.blogMenu.portfolio}
                </Link>
                <Link
                  to={`/${lang}/blog?category=knowledge-base`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.blogMenu.knowledgeBase}
                </Link>
                <Link
                  to={`/${lang}/blog?category=others`}
                  className="block text-sm font-semibold text-black hover:text-[#0EA552]"
                >
                  {t.blogMenu.others}
                </Link>
              </div>
            </div>

            <Button
              to={`/${lang}/contact`}
              variant="primary"
              size="md"
              fullWidth
              className="font-semibold shadow-md mt-4"
            >
              {t.contactBtn}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
