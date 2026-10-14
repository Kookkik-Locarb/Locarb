import { CertificateItem } from '../types/content';

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: 'ifrs-alliance',
    name: {
      th: 'สมาชิกพันธมิตร IFRS Sustainability Alliance แห่งแรกในประเทศไทย',
      en: "Thailand's 1st Official Member of IFRS Sustainability Alliance",
    },
    issuer: 'IFRS Foundation / ISSB',
    year: '2024–ปัจจุบัน',
    pdfUrl: '#cert-ifrs-sustainability-alliance',
    isAlliance: true,
    badge: {
      th: 'พันธมิตรรายแรกในไทย',
      en: "Thailand's 1st Member",
    },
    description: {
      th: 'ได้รับการรับรองอย่างเป็นทางการจาก IFRS Foundation ให้เป็นผู้เชี่ยวชาญด้านการให้คำปรึกษาและเผยแพร่มาตรฐาน IFRS S1 & S2',
      en: 'Official global partner credentialed by the IFRS Foundation to implement and advise on IFRS S1 & S2 disclosure architecture.',
    },
  },
  {
    id: 'tgo-verifier',
    name: {
      th: 'ผู้ประเมินภายนอกที่ขึ้นทะเบียนกับองค์การบริหารจัดการก๊าซเรือนกระจก (อบก.)',
      en: 'Registered Greenhouse Gas Verifier — TGO Thailand',
    },
    issuer: 'องค์การบริหารจัดการก๊าซเรือนกระจก (TGO)',
    year: '2023',
    pdfUrl: '#cert-tgo-verifier',
    isAlliance: false,
    badge: {
      th: 'TGO Registered',
      en: 'TGO Registered',
    },
    description: {
      th: 'ขึ้นทะเบียนหน่วยงานประเมินและทวนสอบคาร์บอนฟุตพริ้นท์ขององค์กร (CFO) และผลิตภัณฑ์ (CFP)',
      en: 'Registered verifier for Carbon Footprint of Organizations (CFO) and Carbon Footprint of Products (CFP).',
    },
  },
  {
    id: 'iso-14064',
    name: {
      th: 'การรับรอง ISO 14064-1 & ISO 14064-3 Lead Verifier Credentials',
      en: 'ISO 14064-1 & ISO 14064-3 Certified Lead Verifiers',
    },
    issuer: 'International Standards Organization / BSI',
    year: '2023',
    pdfUrl: '#cert-iso-14064',
    isAlliance: false,
    badge: {
      th: 'ISO 14064 Lead',
      en: 'ISO 14064 Lead',
    },
    description: {
      th: 'ผู้เชี่ยวชาญการตรวจประเมินก๊าซเรือนกระจกระดับองค์กรตามหลักเกณฑ์สากล ISO',
      en: 'Global validation and verification qualification for corporate-level greenhouse gas quantification.',
    },
  },
  {
    id: 'ghg-protocol',
    name: {
      th: 'GHG Protocol Corporate Standard & Scope 3 Mastery',
      en: 'GHG Protocol Corporate Standard & Scope 3 Accredited Team',
    },
    issuer: 'World Resources Institute (WRI) & WBCSD',
    year: '2022',
    pdfUrl: '#cert-ghg-protocol',
    isAlliance: false,
    badge: {
      th: 'WRI / WBCSD',
      en: 'WRI / WBCSD',
    },
    description: {
      th: 'ผ่านการรับรองความเชี่ยวชาญการประเมินการปล่อยก๊าซเรือนกระจก Scope 1, Scope 2, และ Scope 3 Value Chain',
      en: 'Certified mastery across Scope 1, 2, and 15 categories of Scope 3 upstream and downstream emissions.',
    },
  },
];
