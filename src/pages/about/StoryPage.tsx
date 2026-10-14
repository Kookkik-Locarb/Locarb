import React from 'react';
import { Language } from '../../types/content';
import { SeoHead } from '../../components/common/SeoHead';
import { BrandHeadline } from '../../components/brand/BrandHeadline';
import { Card } from '../../components/common/Card';
import { CtaBand } from '../../components/common/CtaBand';
import { Sparkles, Target, Compass, Award } from 'lucide-react';

export const StoryPage: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-32 pb-0 bg-[#F3F0DF]">
      <SeoHead
        lang={lang}
        title={lang === 'th' ? 'เรื่องราวของเรา | พันธกิจและประวัติ' : 'Our Story | Mission & History'}
        description={
          lang === 'th'
            ? 'เรื่องราวของ LO-CARB: พันธกิจในการนำองค์กรธุรกิจไทยสู่การลดคาร์บอนอย่างยั่งยืนและมีผลตอบแทนทางการเงิน'
            : "The origins of LO-CARB: We put the world on a carbon diet with rigor, engineering, and capital market trust."
        }
        pathname={`/${lang}/about/story`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? 'เรื่องราวของเรา' : 'OUR ORIGINS & MISSION'}</span>
          </div>
          <BrandHeadline lang={lang} size="h1" as="h1" className="mb-6">
            {lang === 'th'
              ? 'เราเชื่อว่า “การลดคาร์บอน” ต้องสร้างมูลค่าทางธุรกิจ'
              : 'Decarbonization Must Create Real Enterprise Value.'}
          </BrandHeadline>
          <p className="text-base sm:text-xl text-black/70 leading-relaxed font-normal">
            {lang === 'th'
              ? 'LO-CARB ก่อตั้งขึ้นเพื่อเป็นสะพานเชื่อมระหว่างวิทยาศาสตร์สภาพภูมิอากาศ บัญชีการเงิน และเทคโนโลยีซอฟต์แวร์ระดับองค์กร'
              : 'Bridging climate physics, corporate financial accounting, and scalable SaaS infrastructure.'}
          </p>
        </div>

        {/* Narrative & History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-black/80 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-black font-anakotmai">
              {lang === 'th' ? 'จุดเริ่มต้นและการเติบโต' : 'From Inception to Strategic Growth'}
            </h2>
            <p>
              {lang === 'th'
                ? 'LO-CARB เริ่มต้นจากกลุ่มวิศวกรสิ่งแวดล้อมและผู้เชี่ยวชาญด้านตลาดทุนที่เห็นปัญหาเดียวกัน: บริษัทไทยจำนวนมากกำลังเผชิญกับคลื่นข้อบังคับด้าน ESG และ IFRS S1/S2 จากทั้ง ก.ล.ต. สหภาพยุโรป (CBAM) และคู่ค้าข้ามชาติ แต่กลับต้องพึ่งพาสเปรดชีตที่ซับซ้อนและข้อมูลที่ไม่สามารถตรวจสอบได้'
                : 'LO-CARB was founded by climate engineers and capital market specialists who recognized a critical impasse: Thai listed enterprises faced immense pressure from SEC regulations, EU CBAM, and global MNC supply chains, yet relied on fragmented, unverifiable spreadsheets.'}
            </p>
            <p>
              {lang === 'th'
                ? 'เราจึงพัฒนาแพลตฟอร์ม CarbonCal และสร้างทีมที่ปรึกษาที่เชี่ยวชาญการประเมินความเสี่ยงทางการเงินจากสภาพภูมิอากาศ จนได้รับการแต่งตั้งให้เป็นสมาชิกเครือข่าย IFRS Sustainability Alliance รายแรกในประเทศไทย'
                : 'We engineered the CarbonCal telemetry platform and assembled a specialist task force capable of translating climate risk directly into financial cash flows, earning our distinction as Thailand’s first official member of the IFRS Sustainability Alliance.'}
            </p>

            <div className="p-6 rounded-2xl bg-white border border-black/10 mt-8">
              <h3 className="font-bold text-lg text-black mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#0EA552]" />
                <span>{lang === 'th' ? 'คำมั่นสัญญาของเรา (Our Tagline)' : 'Our Brand Tagline'}</span>
              </h3>
              <p className="text-xl font-bold font-termina text-[#0EA552]">
                "We put the world on a carbon diet."
              </p>
              <p className="text-xs text-black/60 mt-1">
                {lang === 'th'
                  ? 'ไม่ใช่แค่การชดเชย แต่คือการปรับพฤติกรรม ลดไขมันส่วนเกินของก๊าซเรือนกระจกในระบบการผลิต'
                  : 'Beyond offsets — trimming excess emissions at the operational core of business.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-black/10">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="LO-CARB Nature and Technology"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-white space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0EA552]">
                  {lang === 'th' ? 'สถิติสำคัญ ณ ปัจจุบัน' : 'Key Numbers as Text'}
                </span>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center justify-between border-b border-black/5 pb-2">
                    <span className="text-black/70">{lang === 'th' ? 'ก๊าซเรือนกระจกที่ทวนสอบ' : 'GHG Measured & Assured'}</span>
                    <span className="font-bold text-[#0EA552]">185,000+ tCO₂e</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-black/5 pb-2">
                    <span className="text-black/70">{lang === 'th' ? 'องค์กรจดทะเบียนที่ให้คำปรึกษา' : 'Listed & Pre-IPO Clients'}</span>
                    <span className="font-bold text-black">45+ Companies</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-black/5 pb-2">
                    <span className="text-black/70">{lang === 'th' ? 'การเป็นพันธมิตร IFRS' : 'IFRS Sustainability Alliance'}</span>
                    <span className="font-bold text-[#0EA552]">1st in Thailand</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-black/70">{lang === 'th' ? 'อัตราผ่านการตรวจสอบ ก.ล.ต.' : 'SEC & Audit Pass Rate'}</span>
                    <span className="font-bold text-black">100%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaBand lang={lang} />
    </div>
  );
};
