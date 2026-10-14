import React, { useState } from 'react';
import { Language } from '../../types/content';
import { CERTIFICATES_DATA } from '../../content/certificates';
import { SeoHead } from '../../components/common/SeoHead';
import { BrandHeadline } from '../../components/brand/BrandHeadline';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { CtaBand } from '../../components/common/CtaBand';
import { Award, FileText, Download, CheckCircle, ExternalLink, X } from 'lucide-react';

export const CertificatesPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activePdfModal, setActivePdfModal] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-0 bg-[#F3F0DF]">
      <SeoHead
        lang={lang}
        title={lang === 'th' ? 'ใบรับรองและมาตรฐาน | พันธมิตร IFRS' : 'Certificates & Credentials | IFRS Sustainability Alliance'}
        description={
          lang === 'th'
            ? 'ตรวจสอบใบรับรองและมาตรฐานระดับสากลของ LO-CARB: พันธมิตร IFRS Sustainability Alliance รายแรกในประเทศไทย'
            : "Review LO-CARB's verified credentials: Thailand's 1st member of IFRS Sustainability Alliance and TGO verifiers."
        }
        pathname={`/${lang}/about/certificates`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'th' ? 'มาตรฐานและใบรับรอง' : 'OFFICIAL ACCREDITATIONS'}</span>
          </div>
          <BrandHeadline lang={lang} size="h1" as="h1" className="mb-4">
            {lang === 'th'
              ? 'การรับรองและมาตรฐานสากลที่องค์กรชั้นนำไว้วางใจ'
              : 'Internationally Verified Standards & Credentials'}
          </BrandHeadline>
          <p className="text-base sm:text-xl text-black/70 leading-relaxed font-normal">
            {lang === 'th'
              ? 'เราให้ความสำคัญกับความถูกต้องตามหลักวิทยาศาสตร์และมาตรฐานการเปิดเผยข้อมูลระดับโลก'
              : 'Every methodology, factor, and advisory workflow is anchored in recognized global institutions.'}
          </p>
        </div>

        {/* Certificates Grid (IFRS Sustainability Alliance first) */}
        <div className="space-y-6">
          {CERTIFICATES_DATA.map((cert) => (
            <Card
              key={cert.id}
              variant={cert.isAlliance ? 'white' : 'offwhite'}
              className={`p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                cert.isAlliance ? 'border-2 border-[#0EA552]/40 shadow-md ring-4 ring-[#0EA552]/10' : ''
              }`}
            >
              <div className="flex items-start gap-5 flex-1">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    cert.isAlliance
                      ? 'bg-[#0EA552] text-white shadow-md'
                      : 'bg-black/5 text-[#0EA552]'
                  }`}
                >
                  <Award className="w-7 h-7" />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                        cert.isAlliance
                          ? 'bg-[#0EA552] text-white'
                          : 'bg-black/10 text-black/70'
                      }`}
                    >
                      {cert.badge[lang]}
                    </span>
                    <span className="text-xs font-semibold text-black/50">
                      {cert.issuer} · {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-black">
                    {cert.name[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed max-w-2xl">
                    {cert.description[lang]}
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Button
                  variant={cert.isAlliance ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActivePdfModal(cert.name[lang])}
                  className="w-full md:w-auto"
                  icon={<Download className="w-3.5 h-3.5 ml-1" />}
                >
                  {lang === 'th' ? 'ดาวน์โหลดเอกสาร PDF' : 'Download Credential (PDF)'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Mock PDF preview viewer */}
      {activePdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white text-black w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActivePdfModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-black/10 text-black/50"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-3 w-12 h-12 rounded-2xl bg-[#0EA552]/10 text-[#0EA552] flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">{activePdfModal}</h3>
            <p className="text-sm text-black/70 mb-6 leading-relaxed">
              {lang === 'th'
                ? 'เอกสารรับรองมาตรฐานฉบับสมบูรณ์พร้อมลายมือชื่อและรหัสยืนยันจากหน่วยงานผู้ออกเอกสาร (Verified Issuer Seal)'
                : 'Official verified certificate registry copy with cryptographic issuer seal and validity index.'}
            </p>
            <div className="p-4 rounded-2xl bg-[#F3F0DF] border border-black/10 mb-6 text-xs text-black/70">
              <div className="font-bold text-black mb-1">Document Status: ACTIVE & VERIFIED</div>
              <div>Issuer: IFRS Foundation / TGO Thailand</div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="ghost" size="sm" onClick={() => setActivePdfModal(null)}>
                {lang === 'th' ? 'ปิด' : 'Close'}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  alert(lang === 'th' ? 'กำลังดาวน์โหลดไฟล์ PDF เอกสารรับรอง...' : 'Downloading certified verification PDF...');
                  setActivePdfModal(null);
                }}
              >
                {lang === 'th' ? 'ยืนยันดาวน์โหลด' : 'Confirm Download'}
              </Button>
            </div>
          </div>
        </div>
      )}

      <CtaBand lang={lang} />
    </div>
  );
};
