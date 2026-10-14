import React, { useState } from 'react';
import { Language } from '../../types/content';
import {
  FileCheck2,
  TrendingUp,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Building,
  ArrowRight,
} from 'lucide-react';

export const IfrsArchitectureDiagram: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeNode, setActiveNode] = useState<'s1' | 's2' | 'output'>('s2');

  return (
    <div className="w-full p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-white border border-[#000000]/10 shadow-xl overflow-hidden relative">
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#0EA552] block mb-1">
          {lang === 'th' ? 'สถาปัตยกรรมข้อมูล IFRS S1 & S2' : 'IFRS S1 & S2 Technical Architecture'}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-black font-termina uppercase tracking-tight">
          {lang === 'th' ? 'การเชื่อมโยงข้อมูลสู่มูลค่ากิจการ' : 'Translating Climate Data Into Enterprise Value'}
        </h3>
      </div>

      {/* Interactive 3-Pillar Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Node 1: IFRS S1 */}
        <div
          onClick={() => setActiveNode('s1')}
          className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
            activeNode === 's1'
              ? 'bg-[#F3F0DF] border-[#0EA552] shadow-lg -translate-y-1'
              : 'bg-white border-black/10 hover:border-[#0EA552]/40'
          }`}
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#0EA552]/10 text-[#0EA552] flex items-center justify-center mb-4 font-black">
              S1
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-1">
              {lang === 'th' ? 'กรอบทั่วไป (General)' : 'General Requirements'}
            </div>
            <h4 className="font-bold text-lg text-black mb-2 font-termina">
              IFRS S1 Standards
            </h4>
            <p className="text-xs text-black/70 leading-relaxed mb-4">
              {lang === 'th'
                ? 'การกำกับดูแลระดับบอร์ด (Governance), กลยุทธ์การบริหารความเสี่ยงด้านความยั่งยืน และการเปิดเผยข้อมูลเชื่อมโยงงบการเงิน'
                : 'Board oversight, fiduciary risk management, and holistic sustainability governance.'}
            </p>
          </div>
          <div className="pt-3 border-t border-black/10 flex items-center gap-1.5 text-[11px] font-bold text-[#0EA552]">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? 'ความพร้อมด้าน Governance' : 'Governance & Strategy'}</span>
          </div>
        </div>

        {/* Node 2: IFRS S2 (Center highlight) */}
        <div
          onClick={() => setActiveNode('s2')}
          className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
            activeNode === 's2'
              ? 'bg-[#0EA552] text-[#F3F0DF] border-[#0EA552] shadow-xl -translate-y-1'
              : 'bg-white border-black/10 hover:border-[#0EA552]/40'
          }`}
        >
          {activeNode === 's2' && (
            <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-black text-[#F3F0DF] text-[10px] font-bold uppercase tracking-wider">
              Core Focus
            </span>
          )}
          <div>
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 font-black ${
                activeNode === 's2' ? 'bg-white text-[#0EA552]' : 'bg-[#0EA552]/10 text-[#0EA552]'
              }`}
            >
              S2
            </div>
            <div
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                activeNode === 's2' ? 'text-white/80' : 'text-[#0EA552]'
              }`}
            >
              {lang === 'th' ? 'สภาพภูมิอากาศ (Climate)' : 'Climate Disclosures'}
            </div>
            <h4
              className={`font-bold text-lg mb-2 font-termina ${
                activeNode === 's2' ? 'text-white' : 'text-black'
              }`}
            >
              IFRS S2 Standards
            </h4>
            <p
              className={`text-xs leading-relaxed mb-4 ${
                activeNode === 's2' ? 'text-white/80' : 'text-black/70'
              }`}
            >
              {lang === 'th'
                ? 'การประเมินแบบจำลอง Scenario Analysis, ความเสี่ยงน้ำท่วม/ภัยแล้ง (Physical) และการเปลี่ยนผ่านพลังงาน (Transition) สู่ผลกระทบทางการเงิน'
                : 'Climate scenario stress testing, physical & transition financial risk modeling across 1.5°C & 2°C paths.'}
            </p>
          </div>
          <div
            className={`pt-3 border-t flex items-center gap-1.5 text-[11px] font-bold ${
              activeNode === 's2' ? 'border-white/20 text-white' : 'border-black/10 text-[#0EA552]'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? 'การเงินและกระแสเงินสด' : 'Cash Flow Impact'}</span>
          </div>
        </div>

        {/* Node 3: Capital Market Output */}
        <div
          onClick={() => setActiveNode('output')}
          className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
            activeNode === 'output'
              ? 'bg-[#F3F0DF] border-[#0EA552] shadow-lg -translate-y-1'
              : 'bg-white border-black/10 hover:border-[#0EA552]/40'
          }`}
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#0EA552]/10 text-[#0EA552] flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-1">
              {lang === 'th' ? 'ผลลัพธ์สู่ตลาดทุน' : 'Capital Valuation'}
            </div>
            <h4 className="font-bold text-lg text-black mb-2 font-termina">
              Investor Trust & Rating
            </h4>
            <p className="text-xs text-black/70 leading-relaxed mb-4">
              {lang === 'th'
                ? 'รายงานที่ผ่านการรับรองจากผู้สอบบัญชี Big 4 พร้อมดึงดูดเงินลงทุนสถาบันสากล และได้คะแนน SET ESG Ratings สูงสุด'
                : 'Audit-assured disclosures recognized by global institutional funds, optimizing cost of debt and capital.'}
            </p>
          </div>
          <div className="pt-3 border-t border-black/10 flex items-center gap-1.5 text-[11px] font-bold text-[#0EA552]">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? '100% ผ่านการทวนสอบ' : 'Audit Verification Ready'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
