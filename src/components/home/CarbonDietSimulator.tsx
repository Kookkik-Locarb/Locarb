import React, { useState, useMemo } from 'react';
import { Language, SolutionId } from '../../types/content';
import { Button } from '../common/Button';
import {
  TrendingDown,
  Building,
  Factory,
  Ship,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface CarbonDietSimulatorProps {
  lang: Language;
}

export const CarbonDietSimulator: React.FC<CarbonDietSimulatorProps> = ({ lang }) => {
  const [sector, setSector] = useState<'listed' | 'pre-ipo' | 'exporter' | 'sme'>('listed');
  const [facilities, setFacilities] = useState<number>(6);
  const [scope3Priority, setScope3Priority] = useState<boolean>(true);

  // Dynamic calculations
  const calculation = useMemo(() => {
    let basePerFacility = 2800; // tCO2e per site
    let complianceTimeline =
      lang === 'th' ? 'ปี 2569–2570 (ก.ล.ต. บังคับใช้)' : '2026–2027 (SEC Phased Mandate)';
    let recommendedSolution: SolutionId = 'ifrs';
    let solutionName =
      lang === 'th'
        ? 'IFRS S1/S2 Standards + CarbonCal'
        : 'IFRS S1/S2 Disclosure Advisory + CarbonCal';

    if (sector === 'listed') {
      basePerFacility = 3400;
      complianceTimeline =
        lang === 'th' ? 'ปี 2569 (กลุ่ม SET50/100)' : '2026 (SET50/100 Priority Filing)';
      recommendedSolution = 'ifrs';
      solutionName =
        lang === 'th'
          ? 'IFRS S1/S2 Advisory + CarbonCal'
          : 'IFRS S1/S2 Advisory + CarbonCal Platform';
    } else if (sector === 'pre-ipo') {
      basePerFacility = 1900;
      complianceTimeline =
        lang === 'th' ? 'ก่อนยื่นไฟลิ่ง ก.ล.ต.' : 'Pre-Filing IPO Readiness Requirement';
      recommendedSolution = 'carboncal';
      solutionName =
        lang === 'th'
          ? 'CarbonCal + Carbon Camp Enablement'
          : 'CarbonCal SaaS + Carbon Camp';
    } else if (sector === 'exporter') {
      basePerFacility = 2500;
      complianceTimeline =
        lang === 'th' ? 'มาตรการ EU CBAM / Scope 3' : 'EU CBAM Scope 3 Primary Data Rule';
      recommendedSolution = 'carbon-scout';
      solutionName =
        lang === 'th'
          ? 'Carbon Scout (Scope 3) + Reporting'
          : 'Carbon Scout Scope 3 Telemetry';
    } else {
      basePerFacility = 650;
      complianceTimeline =
        lang === 'th' ? 'ตามข้อกำหนดคู่ค้าองค์กร' : 'Corporate Supply Chain Supplier Rule';
      recommendedSolution = 'carboncal';
      solutionName =
        lang === 'th' ? 'CarbonCal Starter' : 'CarbonCal Starter + Training';
    }

    const totalEmissions = facilities * basePerFacility;
    const dietReductionPct = sector === 'listed' ? 32 : sector === 'pre-ipo' ? 28 : 38;
    const reducedAmount = Math.round((totalEmissions * dietReductionPct) / 100);

    return {
      totalEmissions,
      dietReductionPct,
      reducedAmount,
      complianceTimeline,
      recommendedSolution,
      solutionName,
    };
  }, [sector, facilities, lang]);

  return (
    <div className="w-full rounded-[24px] bg-[#FBFAF3] text-black p-6 sm:p-10 shadow-sm border border-black/10 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-black/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA552]/10 border border-[#0EA552]/20 text-[#0EA552] text-xs font-bold uppercase tracking-wider mb-2 font-termina">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA552]" />
            <span>
              {lang === 'th'
                ? 'เครื่องมือจำลองเป้าหมายคาร์บอนไดเอ็ต'
                : 'Interactive Carbon Diet Simulator'}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-black font-termina uppercase tracking-tight">
            {lang === 'th'
              ? 'ประเมินการลดคาร์บอนขององค์กรท่าน'
              : 'Simulate Your Corporate Carbon Diet'}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-black/60 font-medium">
          <Zap className="w-4 h-4 text-[#0EA552]" />
          <span>
            {lang === 'th'
              ? 'คำนวณตามสัมประสิทธิ์ TGO & IFRS S2'
              : 'Calibrated with TGO & IFRS S2 Benchmarks'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: Input controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Sector selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-3 font-termina">
              {lang === 'th'
                ? '1. เลือกกลุ่มธุรกิจ / อุตสาหกรรม'
                : '1. Select Enterprise Category'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                {
                  id: 'listed',
                  label: lang === 'th' ? 'SET100 Listed' : 'SET100 Listed',
                  icon: <Building className="w-4 h-4" />,
                },
                {
                  id: 'pre-ipo',
                  label: lang === 'th' ? 'Pre-IPO Firm' : 'Pre-IPO Firm',
                  icon: <Factory className="w-4 h-4" />,
                },
                {
                  id: 'exporter',
                  label: lang === 'th' ? 'Global Exporter' : 'Global Exporter',
                  icon: <Ship className="w-4 h-4" />,
                },
                {
                  id: 'sme',
                  label: lang === 'th' ? 'Mid-Corp / SME' : 'Mid-Corp / SME',
                  icon: <Building className="w-4 h-4" />,
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSector(item.id as typeof sector)}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    sector === item.id
                      ? 'bg-[#0EA552] text-white border-[#0EA552] shadow-sm'
                      : 'bg-white border-black/10 text-black/80 hover:border-[#0EA552]/40'
                  }`}
                >
                  {item.icon}
                  <span className="text-center">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Facility count slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black/70 mb-2 font-termina">
              <span>
                {lang === 'th'
                  ? '2. จำนวนโรงงาน สาขา หรือศูนย์กระจายสินค้า'
                  : '2. Facilities / Distribution Sites'}
              </span>
              <span className="text-[#0EA552] font-mono font-bold text-sm">
                {facilities} {lang === 'th' ? 'แห่ง' : 'Sites'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              value={facilities}
              onChange={(e) => setFacilities(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#0EA552]"
            />
            <div className="flex justify-between text-[11px] text-black/50 mt-1 font-mono">
              <span>1 site</span>
              <span>10 sites</span>
              <span>25+ sites</span>
            </div>
          </div>

          {/* Scope 3 toggle */}
          <div className="p-4 rounded-2xl bg-white border border-black/10 flex items-center justify-between gap-4">
            <div>
              <div className="font-bold text-xs sm:text-sm text-black">
                {lang === 'th'
                  ? 'นับรวม Scope 3 (คู่ค้าและห่วงโซ่อุปทาน)'
                  : 'Include Scope 3 Upstream Supply Chain'}
              </div>
              <div className="text-[11px] text-black/60">
                {lang === 'th'
                  ? 'จำเป็นสำหรับเกณฑ์ IFRS S2 และแบบ 56-1 One Report'
                  : 'Mandatory under IFRS S2 and international customer audits'}
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={scope3Priority}
                onChange={(e) => setScope3Priority(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0EA552]"></div>
            </label>
          </div>
        </div>

        {/* Right: Real-time Telemetry Output Card (Restyled in light brand colors) */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#0EA552]/30 shadow-md space-y-5">
            <div>
              <div className="text-xs uppercase tracking-wider text-black/50 font-bold mb-1 font-termina">
                {lang === 'th'
                  ? 'ประมาณการก๊าซเรือนกระจกต่อปี'
                  : 'Estimated Annual Footprint'}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-black font-termina tracking-tight">
                  {calculation.totalEmissions.toLocaleString()}
                </span>
                <span className="text-xs font-bold text-black/50">tCO₂e / year</span>
              </div>
            </div>

            {/* Simulated Carbon Diet Reduction */}
            <div className="p-4 rounded-xl bg-[#0EA552]/10 border border-[#0EA552]/20 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-[#0EA552] uppercase tracking-wider font-termina">
                <span className="flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4" />
                  {lang === 'th'
                    ? 'ผลลัพธ์ Carbon Diet ที่เป็นไปได้'
                    : 'Achievable Carbon Diet'}
                </span>
                <span className="font-mono text-sm">-{calculation.dietReductionPct}%</span>
              </div>
              <div className="text-sm font-semibold text-black">
                {lang === 'th' ? 'ลดได้เฉลี่ย:' : 'Potential Abatement:'}{' '}
                <span className="text-[#0EA552] font-bold">
                  {calculation.reducedAmount.toLocaleString()} tCO₂e
                </span>
              </div>
            </div>

            {/* Compliance Milestone */}
            <div className="space-y-0.5 text-xs">
              <div className="text-black/50 font-bold uppercase tracking-wider font-termina">
                {lang === 'th' ? 'กำหนดส่งตามกฎหมาย ก.ล.ต.:' : 'Statutory SEC Target:'}
              </div>
              <div className="font-semibold text-black">{calculation.complianceTimeline}</div>
            </div>

            {/* Recommended Solution */}
            <div className="pt-3 border-t border-black/10 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0EA552] font-termina">
                {lang === 'th' ? 'โซลูชันที่แนะนำ:' : 'Recommended Roadmap:'}
              </div>
              <div className="font-bold text-sm text-black flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0EA552] shrink-0" />
                <span>{calculation.solutionName}</span>
              </div>

              <Button
                to={`/${lang}/contact?topic=solutions&solution=${calculation.recommendedSolution}`}
                variant="primary"
                size="md"
                fullWidth
                className="font-bold shadow-sm mt-1"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                {lang === 'th' ? 'ขอคำปรึกษาแผนลดคาร์บอน' : 'Request Consultation'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
