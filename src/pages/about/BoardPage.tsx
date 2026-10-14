import React from 'react';
import { Language } from '../../types/content';
import { BOARD_MEMBERS_DATA } from '../../content/board';
import { SeoHead } from '../../components/common/SeoHead';
import { BrandHeadline } from '../../components/brand/BrandHeadline';
import { Card } from '../../components/common/Card';
import { CtaBand } from '../../components/common/CtaBand';
import { Users, ShieldCheck } from 'lucide-react';

export const BoardPage: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-32 pb-0 bg-[#F3F0DF]">
      <SeoHead
        lang={lang}
        title={lang === 'th' ? 'คณะกรรมการและผู้บริหาร | LO-CARB' : 'Board of Directors | LO-CARB Leadership'}
        description={
          lang === 'th'
            ? 'ทำความรู้จักคณะกรรมการและผู้บริหารระดับสูงของ LO-CARB ผู้เชี่ยวชาญด้านบรรษัทภิบาล บัญชีการเงิน และเทคโนโลยีสภาพภูมิอากาศ'
            : 'Meet the board of directors and executive leadership team guiding LO-CARB.'
        }
        pathname={`/${lang}/about/board`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? 'คณะกรรมการและผู้บริหาร' : 'BOARD OF DIRECTORS'}</span>
          </div>
          <BrandHeadline lang={lang} size="h1" as="h1" className="mb-4">
            {lang === 'th'
              ? 'ผู้นำที่ผสานบรรษัทภิบาลและการเปลี่ยนแปลงสภาพภูมิอากาศ'
              : 'Governance, Finance & Climate Informatics Leadership'}
          </BrandHeadline>
          <p className="text-base sm:text-xl text-black/70 leading-relaxed font-normal">
            {lang === 'th'
              ? 'คณะกรรมการผู้ทรงคุณวุฒิที่พร้อมนำพาองค์กรไทยสู่มาตรฐานรายงานความยั่งยืนสากล IFRS S1/S2 ด้วยความโปร่งใส'
              : 'Guiding corporate Thailand through the global transition with board-level fiduciary rigor.'}
          </p>
        </div>

        {/* One row of cards on desktop: photo, name, title, one-line bio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOARD_MEMBERS_DATA.map((member) => (
            <Card
              key={member.id}
              variant="white"
              padding="none"
              className="flex flex-col justify-between overflow-hidden group hover:border-[#0EA552]/40 transition-colors"
            >
              <div className="relative h-64 w-full overflow-hidden bg-black/10">
                <img
                  src={member.photo}
                  alt={member.name[lang]}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-semibold text-[#00C281] mb-0.5">
                    {member.title[lang]}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg leading-tight">
                    {member.name[lang]}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                {/* One-line bio */}
                <p className="text-xs sm:text-sm text-black/70 leading-relaxed line-clamp-3 mb-4">
                  {member.bio[lang]}
                </p>

                <div className="pt-3 border-t border-black/8 flex flex-wrap gap-1.5">
                  {member.credentials.map((cred, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#F3F0DF] text-black/70"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <CtaBand lang={lang} />
    </div>
  );
};
