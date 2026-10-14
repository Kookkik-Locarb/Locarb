import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../types/content';
import { Button } from '../common/Button';
import {
  FileCheck2,
  Calculator,
  Radar,
  ArrowRight,
  ShieldCheck,
  TrendingDown,
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
  Building2,
  BarChart3,
  Globe2,
} from 'lucide-react';

interface HeroInteractiveStageProps {
  lang: Language;
}

export const HeroInteractiveStage: React.FC<HeroInteractiveStageProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'ifrs' | 'carboncal' | 'scope3'>('ifrs');
  const [selectedScenario, setSelectedScenario] = useState<'1.5c' | '2.0c'>('1.5c');
  const [carbonScope, setCarbonScope] = useState<'all' | 'scope12' | 'scope3'>('all');

  return (
    <div className="w-full max-w-5xl mx-auto my-12 relative z-20">
      {/* Decorative ambient glow */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#0EA552]/15 blur-3xl rounded-full pointer-events-none" />

      {/* Main Glass Stage Container */}
      <div className="rounded-[32px] sm:rounded-[40px] bg-white/90 backdrop-blur-xl border border-black/10 shadow-2xl overflow-hidden transition-all duration-300">
        {/* Top Control Bar with Segmented Switcher */}
        <div className="px-5 py-4 sm:px-8 sm:py-5 border-b border-black/8 bg-gradient-to-r from-[#F3F0DF]/60 via-white to-[#F3F0DF]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0EA552] animate-pulse" />
            <span className="font-termina text-xs font-bold uppercase tracking-wider text-black">
              LO-CARB <span className="text-[#0EA552]">TELEMETRY HUB</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0EA552]/15 text-[#0EA552] font-bold">
              LIVE PREVIEW
            </span>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-[#F3F0DF] border border-black/10 w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab('ifrs')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'ifrs'
                  ? 'bg-[#0EA552] text-white shadow-xs'
                  : 'text-black/70 hover:text-black hover:bg-black/5'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? '1. IFRS S1/S2 ธรรมาภิบาล' : '1. IFRS S1/S2 Governance'}</span>
            </button>
            <button
              onClick={() => setActiveTab('carboncal')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'carboncal'
                  ? 'bg-[#0EA552] text-white shadow-xs'
                  : 'text-black/70 hover:text-black hover:bg-black/5'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? '2. บัญชีคาร์บอน CarbonCal' : '2. CarbonCal Ledger'}</span>
            </button>
            <button
              onClick={() => setActiveTab('scope3')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'scope3'
                  ? 'bg-[#0EA552] text-white shadow-xs'
                  : 'text-black/70 hover:text-black hover:bg-black/5'
              }`}
            >
              <Radar className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? '3. ห่วงโซ่อุปทาน Scope 3' : '3. Scope 3 Radar'}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="p-6 sm:p-8 lg:p-10">
          {/* TAB 1: IFRS S1 & S2 Governance */}
          {activeTab === 'ifrs' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA552]/10 text-[#0EA552] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{lang === 'th' ? 'มาตรฐาน ก.ล.ต. และ ISSB ระดับสากล' : 'Global ISSB & Thai SEC Framework'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-black font-termina leading-tight">
                  {lang === 'th'
                    ? 'แบบจำลองผลกระทบทางการเงิน IFRS S1 & S2'
                    : 'IFRS S1 & S2 Balance Sheet Climate Stress Test'}
                </h3>

                <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                  {lang === 'th'
                    ? 'คำนวณผลกระทบของความเสี่ยงทางกายภาพ (Physical Risk) และความเสี่ยงในการเปลี่ยนผ่าน (Transition Risk) สู่กระแสเงินสดและงบดุลของบริษัทจดทะเบียน'
                    : 'Quantifying physical hazards and carbon taxation exposure directly into corporate discounted cash flows and audited balance sheets.'}
                </p>

                {/* Scenario Toggle */}
                <div className="p-3.5 rounded-2xl bg-[#F3F0DF]/70 border border-black/8 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-black/70 uppercase tracking-wider">
                      {lang === 'th' ? 'เลือกแบบจำลองสภาพภูมิอากาศ (Scenario):' : 'Climate Scenario Model:'}
                    </span>
                    <span className="text-[#0EA552] font-mono">
                      {selectedScenario === '1.5c' ? '1.5°C Paris Trajectory' : '2.0°C Delayed Transition'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedScenario('1.5c')}
                      className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedScenario === '1.5c'
                          ? 'bg-[#0EA552] text-white shadow-2xs'
                          : 'bg-white text-black/70 hover:bg-black/5'
                      }`}
                    >
                      1.5°C Orderly Transition
                    </button>
                    <button
                      onClick={() => setSelectedScenario('2.0c')}
                      className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedScenario === '2.0c'
                          ? 'bg-[#0EA552] text-white shadow-2xs'
                          : 'bg-white text-black/70 hover:bg-black/5'
                      }`}
                    >
                      2.0°C Delayed Policy Shock
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <Button
                    to={`/${lang}/solutions/ifrs`}
                    variant="primary"
                    size="sm"
                    className="font-semibold shadow-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
                  >
                    {lang === 'th' ? 'สำรวจโซลูชัน IFRS S1/S2' : 'Explore IFRS S1/S2 Solution'}
                  </Button>
                  <span className="text-xs text-black/60 font-semibold">
                    {lang === 'th' ? 'สมาชิก IFRS Alliance รายแรกในไทย' : '1st Official Member in Thailand'}
                  </span>
                </div>
              </div>

              {/* Right: Live Interactive Card Preview */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-[#111111] text-white shadow-xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="text-xs font-mono uppercase text-gray-400">
                      DISCLOSURE MATURITY
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0EA552]/20 text-[#00C281] font-mono">
                      TIER 1 COMPLIANT
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">Governance & Board Oversight</span>
                        <span className="text-[#00C281] font-mono font-bold">96%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#0EA552] rounded-full w-[96%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">Climate Scenario Stress-Testing</span>
                        <span className="text-[#00C281] font-mono font-bold">
                          {selectedScenario === '1.5c' ? '92%' : '88%'}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-[#00C281] rounded-full transition-all duration-500"
                          style={{ width: selectedScenario === '1.5c' ? '92%' : '88%' }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">Financial Quantification (EBITDA)</span>
                        <span className="text-[#00C281] font-mono font-bold">
                          {selectedScenario === '1.5c' ? '-1.8% Risk' : '-4.2% Risk'}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full transition-all duration-500"
                          style={{ width: selectedScenario === '1.5c' ? '85%' : '72%' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
                    <span>Audit Ready: Big 4 Qualified</span>
                    <span className="text-[#00C281] font-bold">100% Passed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CarbonCal Enterprise GHG Ledger */}
          {activeTab === 'carboncal' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA552]/10 text-[#0EA552] text-xs font-bold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>{lang === 'th' ? 'ซอฟต์แวร์บัญชีคาร์บอนระดับองค์กร' : 'Enterprise SaaS Accounting Platform'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-black font-termina leading-tight">
                  {lang === 'th'
                    ? 'ระบบคำนวณและทวนสอบคาร์บอน CarbonCal'
                    : 'CarbonCal Automated Scope 1, 2, 3 Ledger'}
                </h3>

                <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                  {lang === 'th'
                    ? 'รวบรวมข้อมูลพลังงาน ก๊าซเรือนกระจก และสัมประสิทธิ์การปล่อยก๊าซ TGO โดยอัตโนมัติ ลดเวลาจัดทำรายงานจาก 3 เดือน เหลือเพียง 2 สัปดาห์'
                    : 'Automates primary activity data ingestion with pre-loaded Thai TGO and GHG Protocol emission factors, cutting audit preparation time by 70%.'}
                </p>

                {/* Scope Filter Switcher */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-black/60">Scope:</span>
                  {(['all', 'scope12', 'scope3'] as const).map((sc) => (
                    <button
                      key={sc}
                      onClick={() => setCarbonScope(sc)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        carbonScope === sc
                          ? 'bg-[#0EA552] text-white shadow-2xs'
                          : 'bg-[#F3F0DF] text-black/70 hover:bg-black/10'
                      }`}
                    >
                      {sc === 'all' ? 'Scope 1 + 2 + 3' : sc === 'scope12' ? 'Scope 1 & 2' : 'Scope 3 Only'}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <Button
                    to={`/${lang}/solutions/carboncal`}
                    variant="primary"
                    size="sm"
                    className="font-semibold shadow-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
                  >
                    {lang === 'th' ? 'สำรวจ CarbonCal + Carbon Camp' : 'Explore CarbonCal SaaS'}
                  </Button>
                  <span className="text-xs text-black/60 font-semibold">
                    {lang === 'th' ? 'ลดเวลาเตรียมเอกสารสอบทาน 70%' : '70% Audit Prep Time Saved'}
                  </span>
                </div>
              </div>

              {/* Right: Interactive Carbon Telemetry Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-[#111111] text-white shadow-xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="text-xs font-mono uppercase text-gray-400">
                      EMISSIONS LEDGER (FY2026)
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00C281]/20 text-[#00C281] font-mono">
                      VERIFIED BY TGO
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-baseline justify-between">
                    <div>
                      <div className="text-[11px] text-gray-400 uppercase font-semibold">Total Measured</div>
                      <div className="text-2xl font-black font-termina text-white">
                        {carbonScope === 'all' ? '185,420' : carbonScope === 'scope12' ? '42,180' : '143,240'}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#00C281] flex items-center justify-end gap-1">
                        <TrendingDown className="w-3.5 h-3.5" />
                        -32.4% Diet
                      </div>
                      <div className="text-[11px] text-gray-400">tCO₂e / year</div>
                    </div>
                  </div>

                  {/* Visual Breakdown Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] text-gray-300">
                      <span>Scope 1 (18%)</span>
                      <span>Scope 2 (24%)</span>
                      <span>Scope 3 (58%)</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex">
                      <div className="h-full bg-[#0EA552] w-[18%]" title="Scope 1" />
                      <div className="h-full bg-[#00C281] w-[24%]" title="Scope 2" />
                      <div className="h-full bg-emerald-300 w-[58%]" title="Scope 3" />
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-gray-400 flex items-center justify-between border-t border-white/10">
                    <span>Audit Trail Proof Hash:</span>
                    <span className="font-mono text-[#00C281]">#LOCARB-ASSURE-098</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Scope 3 Carbon Scout */}
          {activeTab === 'scope3' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA552]/10 text-[#0EA552] text-xs font-bold uppercase tracking-wider">
                  <Radar className="w-3.5 h-3.5" />
                  <span>{lang === 'th' ? 'ระบบสำรวจข้อมูลซัพพลายเชน' : 'Supply Chain Primary Data Engine'}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-black font-termina leading-tight">
                  {lang === 'th'
                    ? 'ระบบรวบรวมคาร์บอนคู่ค้า Carbon Scout'
                    : 'Carbon Scout Primary Supplier Engagement'}
                </h3>

                <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                  {lang === 'th'
                    ? 'เปลี่ยนการประมาณการ Scope 3 ที่คลาดเคลื่อนให้เป็นข้อมูลจริงระดับกิจกรรมจากคู่ค้า SME และซัพพลายเออร์ พร้อมส่งออกรองรับเกณฑ์ EU CBAM และคู่ค้าต่างประเทศ'
                    : 'Replaces inaccurate industry-average spend estimates with verified primary supplier activity data, primed for EU CBAM customs compliance and SET 56-1 One Report.'}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-[#F3F0DF]/80 border border-black/8">
                    <div className="font-bold text-black font-termina text-sm text-[#0EA552]">94.2%</div>
                    <div className="text-black/60 mt-0.5">{lang === 'th' ? 'อัตราคู่ค้าตอบกลับ' : 'Supplier Response Rate'}</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F3F0DF]/80 border border-black/8">
                    <div className="font-bold text-black font-termina text-sm text-[#0EA552]">CBAM Ready</div>
                    <div className="text-black/60 mt-0.5">{lang === 'th' ? 'พร้อมส่งออกยุโรป' : 'EU Customs Formats'}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-1">
                  <Button
                    to={`/${lang}/solutions/carbon-scout`}
                    variant="primary"
                    size="sm"
                    className="font-semibold shadow-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5 ml-1" />}
                  >
                    {lang === 'th' ? 'สำรวจ Carbon Scout' : 'Explore Carbon Scout'}
                  </Button>
                  <span className="text-xs text-black/60 font-semibold">
                    {lang === 'th' ? 'ออกแบบเพื่อซัพพลายเออร์ไทย' : 'Built for Thai SME Suppliers'}
                  </span>
                </div>
              </div>

              {/* Right: Supplier Radar Card */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-[#111111] text-white shadow-xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="text-xs font-mono uppercase text-gray-400">
                      SUPPLY CHAIN CAMPAIGN
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0EA552]/20 text-[#00C281] font-mono">
                      ACTIVE SURVEY
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#0EA552]" />
                        <span className="text-xs text-gray-200">Tier-1 Packaging Suppliers</span>
                      </div>
                      <span className="text-xs font-bold text-[#00C281]">100% Verified</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#0EA552]" />
                        <span className="text-xs text-gray-200">Logistics & Freight Fleet</span>
                      </div>
                      <span className="text-xs font-bold text-[#00C281]">92% Verified</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#0EA552]" />
                        <span className="text-xs text-gray-200">Raw Agricultural Inputs</span>
                      </div>
                      <span className="text-xs font-bold text-amber-300">89% In Progress</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-gray-400 flex items-center justify-between border-t border-white/10">
                    <span>Export Target:</span>
                    <span className="text-white font-semibold">EU CBAM & SET 56-1 One Report</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Proof Strip */}
        <div className="px-6 py-4 bg-[#F3F0DF]/80 border-t border-black/8 flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-2 text-xs text-black/80 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#0EA552]" />
            <span>{lang === 'th' ? '185,000+ tCO₂e ตรวจวัดและทวนสอบ' : '185k+ tCO₂e Measured & Assured'}</span>
          </div>
          <div className="hidden sm:block text-black/20">|</div>
          <div className="flex items-center gap-2 text-xs text-black/80 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#0EA552]" />
            <span>{lang === 'th' ? 'สมาชิก IFRS Alliance แห่งแรกในไทย' : "Thailand's 1st IFRS Alliance Member"}</span>
          </div>
          <div className="hidden sm:block text-black/20">|</div>
          <div className="flex items-center gap-2 text-xs text-black/80 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#0EA552]" />
            <span>{lang === 'th' ? 'ผ่านเกณฑ์ตรวจสอบ ก.ล.ต. 100%' : '100% SEC & Big 4 Pass Rate'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
