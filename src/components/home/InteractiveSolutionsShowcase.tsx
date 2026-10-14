import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language, SolutionId } from '../../types/content';
import { SOLUTIONS_DATA } from '../../content/solutions';
import { Button } from '../common/Button';
import {
  ShieldCheck,
  Calculator,
  GraduationCap,
  Radar,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
} from 'lucide-react';

export const InteractiveSolutionsShowcase: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<SolutionId>('ifrs');

  const selectedSolution =
    SOLUTIONS_DATA.find((s) => s.id === selectedSolutionId) || SOLUTIONS_DATA[0];

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0EA552]" />,
    Calculator: <Calculator className="w-5 h-5 text-[#0EA552]" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#0EA552]" />,
    Radar: <Radar className="w-5 h-5 text-[#0EA552]" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-[#0EA552]" />,
  };

  return (
    <div className="w-full space-y-10">
      {/* Interactive Tabs Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-xs border border-black/8 max-w-4xl mx-auto">
        {SOLUTIONS_DATA.map((sol) => (
          <button
            key={sol.id}
            type="button"
            onClick={() => setSelectedSolutionId(sol.id)}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedSolutionId === sol.id
                ? 'bg-[#0EA552] text-white shadow-md scale-[1.02]'
                : 'text-black/70 hover:text-black hover:bg-black/5'
            }`}
          >
            <span>{sol.badge?.[lang] || sol.title[lang]}</span>
          </button>
        ))}
      </div>

      {/* Featured Interactive Showcase Box with Curves */}
      <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] sm:rounded-[48px] bg-gradient-to-br from-white to-[#F3F0DF] border-2 border-[#0EA552]/30 shadow-xl relative overflow-hidden">
        {/* Soft decorative background circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0EA552]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2.5 rounded-2xl bg-[#0EA552]/10 text-[#0EA552]">
                {iconMap[selectedSolution.iconName] || <Sparkles className="w-5 h-5" />}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black text-white">
                {selectedSolution.badge?.[lang] || selectedSolution.type.toUpperCase()}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-black font-termina leading-tight tracking-tight">
              {selectedSolution.title[lang]}
            </h3>

            <p className="text-base sm:text-lg text-[#0EA552] font-semibold leading-relaxed">
              {selectedSolution.outcomeLine[lang]}
            </p>

            <p className="text-sm sm:text-base text-black/75 leading-relaxed font-normal">
              {selectedSolution.tagline[lang]}
            </p>

            {/* Quick value bullets */}
            <div className="space-y-2.5 pt-2">
              {selectedSolution.steps ? (
                selectedSolution.steps[lang].slice(0, 3).map((st, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0EA552] shrink-0 mt-0.5" />
                    <span>
                      <strong>{st.title}:</strong> {st.desc}
                    </span>
                  </div>
                ))
              ) : selectedSolution.benefits ? (
                selectedSolution.benefits[lang].slice(0, 3).map((bn, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/80 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0EA552] shrink-0 mt-0.5" />
                    <span>
                      <strong>{bn.title}:</strong> {bn.desc}
                    </span>
                  </div>
                ))
              ) : null}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button
                to={`/${lang}/solutions/${selectedSolution.slug}`}
                variant="primary"
                size="md"
                className="w-full sm:w-auto font-semibold shadow-md"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                {lang === 'th' ? 'ดูรายละเอียดโซลูชันแบบเต็ม' : 'Explore Full Solution'}
              </Button>
              <Button
                to={`/${lang}/contact?topic=solutions&solution=${selectedSolution.id}`}
                variant="outline"
                size="md"
                className="w-full sm:w-auto font-semibold"
              >
                {lang === 'th' ? 'ขอใบเสนอราคา / ปรึกษา' : 'Schedule Diagnostic'}
              </Button>
            </div>
          </div>

          {/* Right Visual Interactive Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] text-white shadow-2xl border border-white/10 space-y-6 relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0EA552] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-gray-300">
                    {selectedSolution.id.toUpperCase()}_ENGINE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#00C281]">
                  STATUS: VERIFIED
                </span>
              </div>

              {/* Dynamic stats preview */}
              <div className="space-y-4">
                <div className="text-xs uppercase text-gray-400 font-bold">
                  {lang === 'th' ? 'ประสิทธิภาพเชิงประจักษ์' : 'Benchmark Telemetry'}
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-300">{lang === 'th' ? 'อัตราความพร้อม' : 'Readiness Index'}</span>
                  <span className="text-xl font-black text-[#0EA552] font-termina">98.4%</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-300">{lang === 'th' ? 'การลดเวลาทำรายงาน' : 'Processing Velocity'}</span>
                  <span className="text-xl font-black text-[#00C281] font-termina">-70% HRS</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-300">{lang === 'th' ? 'มาตรฐานผู้สอบทาน' : 'Assurance Level'}</span>
                  <span className="text-xs font-bold text-white uppercase">Big 4 & TGO Ready</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0EA552]/20 border border-[#0EA552]/40 text-center text-xs font-semibold text-[#00C281]">
                {lang === 'th' ? 'รองรับเกณฑ์ ก.ล.ต. และมาตรฐาน IFRS สากล 100%' : '100% SEC Thailand & IFRS Compliant'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
