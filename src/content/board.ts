import { BoardMember } from '../types/content';

export const BOARD_MEMBERS_DATA: BoardMember[] = [
  {
    id: 'dr-somchai',
    name: {
      th: 'ดร. สมชาย ภัทรธาดา',
      en: 'Dr. Somchai Phatarathada',
    },
    title: {
      th: 'ประธานกรรมการ และผู้ร่วมก่อตั้ง',
      en: 'Chairman of the Board & Co-Founder',
    },
    bio: {
      th: 'อดีตกรรมการผู้ทรงคุณวุฒิด้านการบัญชีและบรรษัทภิบาล และผู้เชี่ยวชาญด้านมาตรฐานการเปิดเผยข้อมูลทางการเงินกว่า 25 ปี',
      en: 'Former statutory corporate governance director with over 25 years advising Thai regulatory bodies on financial disclosure frameworks.',
    },
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    credentials: ['Ph.D. Accounting & Governance', 'Certified Director (IOD)'],
  },
  {
    id: 'pimada',
    name: {
      th: 'พิมพ์มาดา อัครเดชานันท์',
      en: 'Pimada Akaradechanant',
    },
    title: {
      th: 'ประธานเจ้าหน้าที่บริหาร (CEO) และผู้ร่วมก่อตั้ง',
      en: 'Chief Executive Officer & Co-Founder',
    },
    bio: {
      th: 'ผู้นำคลื่นลูกใหม่ด้าน Climate-Tech ในเอเชียตะวันออกเฉียงใต้ ผู้บุกเบิกการผนวกข้อมูลคาร์บอนเข้ากับงบการเงินขององค์กรไทย',
      en: 'Southeast Asian climate-tech pioneer bridging primary industrial carbon engineering directly into corporate capital allocations.',
    },
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    credentials: ['M.Sc. Environmental Economics (LSE)', 'IFRS Sustainability Alliance Fellow'],
  },
  {
    id: 'narong',
    name: {
      th: 'ณรงค์ฤทธิ์ ชาญวณิชย์กุล',
      en: 'Narongrit Chanwanichkul',
    },
    title: {
      th: 'กรรมการอิสระ และประธานคณะกรรมการตรวจสอบ',
      en: 'Independent Director & Audit Committee Chair',
    },
    bio: {
      th: 'ผู้เชี่ยวชาญด้านการตรวจสอบบัญชีและที่ปรึกษาการควบรวมกิจการ (M&A) ให้แก่องค์กรจดทะเบียนชั้นนำในภูมิภาค',
      en: 'Senior audit partner and cross-border M&A specialist ensuring rigorous fiduciary compliance and non-financial data assurance.',
    },
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    credentials: ['Certified Public Accountant (CPA)', 'Fellow Member, SEC Governance Panel'],
  },
  {
    id: 'chutima',
    name: {
      th: 'ชุติมา ตันติวิทยาคุณ',
      en: 'Chutima Tantiwittayakun',
    },
    title: {
      th: 'กรรมการผู้ทรงคุณวุฒิด้านเทคโนโลยีและข้อมูล',
      en: 'Non-Executive Director, Climate Informatics',
    },
    bio: {
      th: 'ผู้เชี่ยวชาญด้านสถาปัตยกรรมข้อมูลระดับองค์กรและซอฟต์แวร์วิเคราะห์ข้อมูลสภาพภูมิอากาศระดับนานาชาติ',
      en: 'Enterprise data architect specializing in automated environmental telemetry and scalable carbon quantification engines.',
    },
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    credentials: ['Ex-VP Enterprise Platforms', 'B.Eng. Computer Engineering'],
  },
];
