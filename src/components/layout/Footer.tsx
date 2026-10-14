import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Language } from '../../types/content';
import { CONTENT_TH } from '../../content/th';
import { CONTENT_EN } from '../../content/en';
import { Logo } from '../brand/Logo';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = (lang === 'th' ? CONTENT_TH : CONTENT_EN).footer;
  const brand = (lang === 'th' ? CONTENT_TH : CONTENT_EN).brand;
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenCookieSettings = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  const handleLanguageSwitch = () => {
    const targetLang: Language = lang === 'th' ? 'en' : 'th';
    const newPath = location.pathname.replace(/^\/(th|en)/, `/${targetLang}`);
    navigate(`${newPath}${location.search}`);
  };

  return (
    <footer className="w-full bg-[#111111] text-[#F3F0DF] pt-16 pb-12 border-t border-black/20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link to={`/${lang}`} className="inline-block" aria-label="LO-CARB">
              <Logo variant="on-green" height={36} />
            </Link>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              {t.aboutText}
            </p>
            <div className="text-xs text-[#0EA552] font-semibold tracking-wider uppercase pt-1">
              "{brand.tagline}"
            </div>

            {/* Direct contact info */}
            <div className="pt-2 space-y-1.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0EA552]" />
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-[#00C281] underline transition-colors"
                >
                  {brand.email}
                </a>
              </div>
              <div className="text-gray-400">
                {brand.address}
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-3">
              <a
                href="https://www.linkedin.com/company/locarb-green"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-[#F3F0DF] hover:text-[#00C281] transition-colors"
                aria-label="LinkedIn"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://www.facebook.com/locarb.green"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-[#F3F0DF] hover:text-[#00C281] transition-colors"
                aria-label="Facebook"
              >
                <span>Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
              {t.solutions}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <Link
                  to={`/${lang}/solutions/ifrs`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  IFRS S1 & S2 Standards
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/solutions/carboncal`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  CarbonCal (+ Carbon Camp)
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/solutions/issb-training`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  ISSB Executive Training
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/solutions/carbon-scout`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  Carbon Scout (Scope 3)
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/solutions/reporting-consulting`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  Sustainability Reporting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Insights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <Link
                  to={`/${lang}/about/story`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  {lang === 'th' ? 'เรื่องราวของเรา' : 'Our Story'}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/about/certificates`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  {lang === 'th' ? 'ใบรับรองและมาตรฐาน' : 'Certificates'}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/about/board`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  {lang === 'th' ? 'คณะกรรมการ' : 'Board of Directors'}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/blog?category=portfolio`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  {lang === 'th' ? 'ผลงานและกรณีศึกษา' : 'Portfolio Stories'}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/blog?category=knowledge-base`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  {lang === 'th' ? 'คลังความรู้' : 'Knowledge Base'}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/contact`}
                  className="hover:text-[#0EA552] transition-colors block font-semibold text-white"
                >
                  {lang === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Preferences */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
              {t.legal}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <Link
                  to={`/${lang}/privacy`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/privacy#pdpa`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  {t.pdpaNotice}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/terms`}
                  className="hover:text-[#0EA552] transition-colors block"
                >
                  {t.termsOfService}
                </Link>
              </li>
              <li>
                <button
                  onClick={handleOpenCookieSettings}
                  className="hover:text-[#0EA552] transition-colors text-left cursor-pointer flex items-center gap-1.5 text-xs text-gray-400 hover:text-white"
                >
                  <span>{t.cookieSettings}</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={handleLanguageSwitch}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-[#0EA552] hover:text-[#F3F0DF] text-xs font-bold tracking-wider transition-colors cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>{brand.copyright}</div>
          <div className="flex items-center gap-3">
            <span>locarb.green</span>
            <span>·</span>
            <span>Bangkok</span>
            <span>·</span>
            <span className="text-[#0EA552]">IFRS Sustainability Alliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
