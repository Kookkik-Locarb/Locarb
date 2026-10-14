import React from 'react';
import { Language } from '../../types/content';
import { SeoHead } from '../../components/common/SeoHead';
import { BrandHeadline } from '../../components/brand/BrandHeadline';
import { Card } from '../../components/common/Card';
import { ShieldCheck, Lock } from 'lucide-react';

export const LegalPage: React.FC<{ lang: Language; type: 'privacy' | 'terms' }> = ({
  lang,
  type,
}) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-32 pb-20 bg-[#F3F0DF] min-h-screen">
      <SeoHead
        lang={lang}
        title={
          isPrivacy
            ? lang === 'th'
              ? 'นโยบายความเป็นส่วนตัวและคุ้มครองข้อมูล (PDPA)'
              : 'Privacy Policy & PDPA Compliance'
            : lang === 'th'
            ? 'ข้อตกลงและเงื่อนไขการใช้บริการ'
            : 'Terms of Service'
        }
        description="Official privacy policy, PDPA notice, and terms of service for LO-CARB (locarb.green)."
        pathname={`/${lang}/${type}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isPrivacy ? 'PDPA & DATA PROTECTION' : 'TERMS OF USE'}</span>
          </div>
          <BrandHeadline lang={lang} size="h1" as="h1">
            {isPrivacy
              ? lang === 'th'
                ? 'นโยบายความเป็นส่วนตัวและการคุ้มครองข้อมูลส่วนบุคคล (PDPA)'
                : 'Privacy Policy & PDPA Compliance Statement'
              : lang === 'th'
              ? 'ข้อตกลงและเงื่อนไขการใช้บริการ'
              : 'Terms & Conditions of Service'}
          </BrandHeadline>
          <p className="text-xs text-black/50 mt-2">
            {lang === 'th' ? 'มีผลบังคับใช้ ณ วันที่ 1 มกราคม 2026' : 'Effective date: January 1, 2026'}
          </p>
        </div>

        <Card variant="white" className="p-8 sm:p-12 space-y-8 text-black/80 leading-relaxed text-sm sm:text-base">
          {isPrivacy ? (
            <>
              <section id="pdpa" className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#0EA552]" />
                  <span>
                    {lang === 'th'
                      ? '1. การปฏิบัติตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)'
                      : '1. PDPA Compliance Statement'}
                  </span>
                </h2>
                <p>
                  {lang === 'th'
                    ? 'บริษัท โล-คาร์บ จำกัด ("LO-CARB") ให้ความสำคัญสูงสุดต่อการรักษาความลับและความปลอดภัยของข้อมูลส่วนบุคคลของท่าน เอกสารฉบับนี้อธิบายถึงวิธีการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของผู้ใช้งานเว็บไซต์ locarb.green และบริการที่ปรึกษา'
                    : 'LO-CARB operates in full compliance with the Thailand Personal Data Protection Act B.E. 2562 (PDPA). This policy outlines how we collect, store, and process personal data received via locarb.green and advisory consultations.'}
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-black">
                  {lang === 'th' ? '2. ข้อมูลที่เราเก็บรวบรวม' : '2. Personal Data Collected'}
                </h3>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    {lang === 'th'
                      ? 'ข้อมูลสำหรับการติดต่อ: ชื่อ-นามสกุล, อีเมลองค์กร, หมายเลขโทรศัพท์, ชื่อบริษัท และตำแหน่งงาน'
                      : 'Contact identifiers: Full name, business email, telephone number, organization name, and title.'}
                  </li>
                  <li>
                    {lang === 'th'
                      ? 'ข้อมูลสำหรับการสมัครงาน: ข้อมูลแนะนำตัว, ประวัติการทำงาน และลิงก์ LinkedIn'
                      : 'Career application data: Professional background and LinkedIn profile URL.'}
                  </li>
                  <li>
                    {lang === 'th'
                      ? 'ข้อมูลเชิงเทคนิค: การตั้งค่าภาษา ขนาดตัวอักษร และคุกกี้ที่ท่านให้ความยินยอม'
                      : 'Technical telemetry: Language preferences, font size selection, and consented analytics cookies.'}
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-black">
                  {lang === 'th' ? '3. สิทธิของเจ้าของข้อมูล' : '3. Data Subject Rights'}
                </h3>
                <p>
                  {lang === 'th'
                    ? 'ท่านมีสิทธิ์ในการเข้าถึง ขอสำเนา แก้ไข ลบ หรือคัดค้านการประมวลผลข้อมูลส่วนบุคคลของท่านได้ตลอดเวลา โดยติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราที่ dpo@locarb.green'
                    : 'You retain full statutory rights to access, rectify, revoke consent, or request deletion of your personal data by contacting our Data Protection Officer at dpo@locarb.green.'}
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-black">
                  {lang === 'th' ? '1. ข้อกำหนดทั่วไป' : '1. Acceptance of Terms'}
                </h2>
                <p>
                  {lang === 'th'
                    ? 'การเข้าใช้งานเว็บไซต์ locarb.green ถือว่าท่านตกลงผูกพันตามข้อกำหนดและเงื่อนไขการใช้บริการนี้ LO-CARB ขอสงวนสิทธิ์ในการแก้ไขปรับปรุงข้อกำหนดได้ตามความเหมาะสม'
                    : 'By accessing locarb.green, you agree to be bound by these Terms of Service and applicable Thai laws and regulations.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-black">
                  {lang === 'th' ? '2. ทรัพย์สินทางปัญญา' : '2. Intellectual Property'}
                </h2>
                <p>
                  {lang === 'th'
                    ? 'เครื่องหมายการค้า โลโก้ ข้อความ งานออกแบบ และรหัสซอฟต์แวร์บนเว็บไซต์นี้เป็นทรัพย์สินทางปัญญาของ LO-CARB ห้ามทำซ้ำหรือดัดแปลงโดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร'
                    : 'All trademarks, logos, methodologies, and content on this platform are proprietary to LO-CARB and protected under international copyright legislation.'}
                </p>
              </section>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};
