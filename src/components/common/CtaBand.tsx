import React from 'react';
import { Language, SolutionId } from '../../types/content';
import { CONTENT_TH } from '../../content/th';
import { CONTENT_EN } from '../../content/en';
import { Button } from './Button';
import { ArrowRight, Leaf } from 'lucide-react';

interface CtaBandProps {
  lang: Language;
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  solutionId?: SolutionId;
  variant?: 'green' | 'dark' | 'offwhite';
}

export const CtaBand: React.FC<CtaBandProps> = ({
  lang,
  title,
  subtitle,
  primaryBtnText,
  solutionId,
  variant = 'green',
}) => {
  const content = lang === 'th' ? CONTENT_TH : CONTENT_EN;
  const t = content.ctaBand;

  const resolvedTitle = title || t.title;
  const resolvedSubtitle = subtitle || t.subtitle;
  const resolvedPrimaryText = primaryBtnText || t.primaryBtn;

  const contactUrl = solutionId
    ? `/${lang}/contact?topic=solutions&solution=${solutionId}`
    : `/${lang}/contact`;

  const bgClasses = {
    green: 'bg-[#0EA552] text-[#F3F0DF]',
    dark: 'bg-[#111111] text-[#F3F0DF]',
    offwhite: 'bg-[#F3F0DF] text-[#000000] border-t border-b border-[#000000]/10',
  }[variant];

  return (
    <section className={`w-full py-16 md:py-24 relative overflow-hidden ${bgClasses}`}>
      {/* Subtle organic background elements */}
      <div className="absolute -right-16 -bottom-16 w-64 h-64 opacity-10 pointer-events-none rounded-full border-[32px] border-white" />
      <div className="absolute -left-12 -top-12 w-48 h-48 opacity-10 pointer-events-none rounded-full bg-white blur-2xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/15 text-xs font-semibold tracking-wider uppercase mb-6">
          <Leaf className="w-3.5 h-3.5 text-[#F3F0DF]" />
          <span>{lang === 'th' ? 'เริ่มต้นการเปลี่ยนแปลง' : 'TAKE ACTION TODAY'}</span>
        </div>

        <h2
          className={`text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-4xl mx-auto mb-6 tracking-tight ${
            lang === 'th' ? 'font-anakotmai th-text' : 'font-termina uppercase'
          }`}
        >
          {resolvedTitle}
        </h2>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed font-normal">
          {resolvedSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            to={contactUrl}
            variant={variant === 'green' ? 'secondary' : 'primary'}
            size="lg"
            className="w-full sm:w-auto shadow-xl"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            {resolvedPrimaryText}
          </Button>
          <Button
            to={`/${lang}/blog`}
            variant={variant === 'green' ? 'offwhite' : 'outline'}
            size="lg"
            className="w-full sm:w-auto"
          >
            {t.secondaryBtn}
          </Button>
        </div>
      </div>
    </section>
  );
};
