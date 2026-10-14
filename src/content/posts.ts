import { BlogPost } from '../types/content';

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'case-set100-retail',
    slug: 'set100-retail-ifrs-s2',
    category: 'portfolio',
    solutionTag: 'ifrs',
    title: {
      th: 'กรณีศึกษา: ผู้นำค้าปลีก SET50 รับมือ IFRS S2 และลดความเสี่ยงสภาพภูมิอากาศ',
      en: 'Case Study: How a SET50 Retail Giant Prepared for IFRS S2 Climate Disclosures',
    },
    subtitle: {
      th: 'ตรวจประเมิน Gap Analysis และจำลองผลกระทบทางการเงินจากภัยแล้งและน้ำท่วมต่อห่วงโซ่อุปทาน 1,200 สาขา',
      en: 'Gap analysis and scenario modeling of drought and flood impacts across a 1,200-store distribution network.',
    },
    date: '2026-08-14',
    readTime: { th: 'อ่าน 5 นาที', en: '5 min read' },
    author: {
      name: 'ธนาวัต รัตนโภคิน',
      title: { th: 'หัวหน้าทีมที่ปรึกษา IFRS S1/S2', en: 'Head of IFRS Climate Advisory' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    clientName: '[Leading SET50 Retail Group]',
    industry: { th: 'ค้าปลีกและสินค้าอุปโภคบริโภค', en: 'Retail & Consumer Goods' },
    headlineResult: {
      th: 'ความพร้อมด้านการเปิดเผยข้อมูล IFRS S2 แตะ 96% พร้อมผ่านการรับรองจากผู้สอบบัญชี Big 4',
      en: 'Reached 96% IFRS S2 readiness with full assurance from Big 4 auditors.',
    },
    challenge: {
      th: 'ลูกค้าเป็นผู้นำค้าปลีกขนาดใหญ่ที่มีศูนย์กระจายสินค้า 8 แห่ง และสาขากว่า 1,200 แห่งทั่วประเทศ แต่ยังขาดแบบจำลองผลกระทบทางการเงินจากภัยพิบัติสภาพภูมิอากาศ และข้อมูล Scope 3 จากผู้ผลิตสินค้าเกษตรยังเป็นศูนย์',
      en: 'The client operates 8 regional distribution hubs and over 1,200 branches nationwide. They lacked physical climate risk models, and Scope 3 data from agricultural suppliers was virtually nonexistent.',
    },
    solutionDetails: {
      th: 'LO-CARB ทำงานร่วมกับคณะกรรมการและทีมบริหาร ทำ Gap Analysis เชิงลึก, ติดตั้งระบบแบบจำลอง Climate Scenario ตามแนวทาง IPCC RCP 2.6 และ 8.5 และใช้ Carbon Scout เพื่อเก็บข้อมูลซัพพลายเชนรายหลัก 200 รายแรก',
      en: 'LO-CARB embedded an on-site advisory task force, calibrated IPCC RCP 2.6 and 8.5 climate impact projections, and deployed Carbon Scout across top 200 strategic food suppliers.',
    },
    outcomes: {
      th: [
        { metric: '96%', label: 'ความพร้อมการเปิดเผยข้อมูล IFRS S2' },
        { metric: '14 วัน', label: 'ลดเวลาประมวลผลข้อมูลรายปี' },
        { metric: '0 ข้อท้วงติง', label: 'จากการตรวจประเมินของ External Auditor' },
      ],
      en: [
        { metric: '96%', label: 'IFRS S2 disclosure readiness' },
        { metric: '14 Days', label: 'Saved in annual audit preparation' },
        { metric: 'Zero', label: 'Material audit findings by verifiers' },
      ],
    },
    quote: {
      text: {
        th: 'ทีมงาน LO-CARB ไม่ได้แค่ให้คำแนะนำเชิงทฤษฎี แต่ช่วยสร้างโมเดลตัวเลขทางการเงินที่บอร์ดและนักลงทุนต่างชาติเข้าใจและเชื่อมั่นในแผนกลยุทธ์ของเราอย่างแท้จริง',
        en: 'LO-CARB did not just hand us dry templates; they translated complex climate physics into balance sheet metrics our Board and foreign investors respect.',
      },
      author: 'คุณพัชราภรณ์ วงศ์สว่าง',
      company: 'SET50 Retailer — Chief Sustainability Officer',
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'case-logistics-carboncal',
    slug: 'pre-ipo-logistics-carboncal',
    category: 'portfolio',
    solutionTag: 'carboncal',
    title: {
      th: 'กรณีศึกษา: บริษัทโลจิสติกส์ Pre-IPO ลดเวลาทำบัญชีคาร์บอน 70% ด้วย CarbonCal',
      en: 'Case Study: Pre-IPO Logistics Firm Slashes Carbon Accounting Time by 70% with CarbonCal',
    },
    subtitle: {
      th: 'จัดการคาร์บอนฟุตพริ้นท์ยานพาหนะขนส่งกว่า 400 คัน พร้อมส่งไฟล์สำหรับยื่นไฟลิ่ง ก.ล.ต.',
      en: 'Automated fleet emissions accounting across 400 transport vehicles to accelerate SEC IPO filing.',
    },
    date: '2026-07-22',
    readTime: { th: 'อ่าน 4 นาที', en: '4 min read' },
    author: {
      name: 'ชญานิศ สินประเสริฐ',
      title: { th: 'ผู้เชี่ยวชาญด้านระบบบัญชีคาร์บอน', en: 'Carbon Accounting Lead' },
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    clientName: '[Pre-IPO Logistics Corporation]',
    industry: { th: 'ขนส่งและโลจิสติกส์', en: 'Logistics & Supply Chain' },
    headlineResult: {
      th: 'รวบรวมข้อมูลคาร์บอน 3 ปี ย้อนหลังเสร็จใน 3 สัปดาห์ และได้รับคะแนนประเมิน ESG เกรด A จากที่ปรึกษาทางการเงิน',
      en: 'Reconstructed 3 years of historical carbon data in 3 weeks, securing Grade A ESG underwriting.',
    },
    challenge: {
      th: 'บริษัทกำลังเตรียมยื่นไฟลิ่งเข้าจดทะเบียนในตลาดหลักทรัพย์ แต่ขาดระบบจัดเก็บบิลน้ำมันและค่าก๊าซ NGV ของกองรถบรรทุก 400 คัน ทำให้ไม่สามารถยืนยันตัวเลขการปล่อยก๊าซในแบบ 56-1 One Report ได้',
      en: 'Approaching SEC IPO filing, the fleet management data was locked in paper fuel slips and fractured GPS logs, making verified greenhouse gas reporting impossible.',
    },
    solutionDetails: {
      th: 'ติดตั้งระบบ CarbonCal เชื่อมต่อข้อมูลบัตรเติมน้ำมันองค์กร (Fleet Card) และระบบเทเลเมติกส์เข้าแพลตฟอร์ม พร้อมจัดอบรม Carbon Camp ให้ทีมบัญชีและปฏิบัติการ',
      en: 'Implemented CarbonCal with automated fleet card data ingestion, GPS route correlation, and intensive Carbon Camp coaching for operational staff.',
    },
    outcomes: {
      th: [
        { metric: '-70%', label: 'ลดเวลาการคำนวณคาร์บอน' },
        { metric: '400 คัน', label: 'ติดตามการปล่อยก๊าซแบบรายคัน' },
        { metric: '100%', label: 'ผ่านเกณฑ์ตรวจสอบของ ก.ล.ต.' },
      ],
      en: [
        { metric: '-70%', label: 'Reduction in carbon accounting hours' },
        { metric: '400 Trucks', label: 'Individually monitored emissions' },
        { metric: '100%', label: 'SEC IPO filing ESG compliance' },
      ],
    },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 'kb-demystifying-ifrs',
    slug: 'demystifying-ifrs-s1-s2',
    category: 'knowledge-base',
    solutionTag: 'ifrs',
    title: {
      th: 'สรุปเข้าใจง่าย: สาระสำคัญของ IFRS S1 และ IFRS S2 ที่ผู้บริหารและทีม IR ต้องรู้',
      en: 'Demystifying IFRS S1 & S2: The Essential Playbook for Thai IR & Board Directors',
    },
    subtitle: {
      th: 'เจาะลึก 4 เสาหลัก Governance, Strategy, Risk Management, และ Metrics & Targets ที่จะเปลี่ยนมาตรฐานรายงานไทย',
      en: 'A practical breakdown of the 4 core pillars and why climate is now a material financial item.',
    },
    date: '2026-09-02',
    readTime: { th: 'อ่าน 7 นาที', en: '7 min read' },
    author: {
      name: 'ดร. กฤษดา พิริยะพงศ์',
      title: { th: 'ที่ปรึกษาอาวุโสด้านนโยบายสิ่งแวดล้อม', en: 'Senior Climate Policy Advisor' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    keyTakeaways: {
      th: [
        'IFRS S1/S2 ย้ายเรื่องความยั่งยืนจากฝ่ายประชาสัมพันธ์ (PR) ไปอยู่ในการกำกับดูแลของคณะกรรมการและฝ่ายการเงิน',
        'การประเมิน Scenario Analysis เป็นข้อกำหนดภาคบังคับ ไม่ใช่ทางเลือกอีกต่อไป',
        'Scope 3 GHG emissions ต้องเปิดเผยตามขั้นตอน โดยมีระยะเวลาผ่อนผัน (Relief provisions) 1 ปี',
        'บริษัทในไทยต้องเริ่มเตรียมระบบฐานข้อมูลตั้งแต่วันนี้เพื่อหลีกเลี่ยงต้นทุนค่าปรับและความเสี่ยงถูกถอดจากพอร์ตลงทุน',
      ],
      en: [
        'IFRS S1 & S2 shifts ESG from marketing departments straight into the audit committee and CFO domain.',
        'Scenario analysis is mandatory, compelling firms to quantify cash-flow resilience under global warming paths.',
        'Scope 3 disclosures are required, with a 1-year phase-in relief for initial adoption.',
        'Thai corporations must build auditable data pipelines now to avoid capital outflows and verification penalties.',
      ],
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'kb-scope3-guide',
    slug: 'scope-3-supply-chain-roadmap',
    category: 'knowledge-base',
    solutionTag: 'carbon-scout',
    title: {
      th: 'คู่มือ 5 ขั้นตอน ปลดล็อกการเก็บข้อมูล Scope 3 จากซัพพลายเชน SME',
      en: 'The 5-Step Roadmap to Collecting Scope 3 Supplier Data from SMEs Without Tears',
    },
    subtitle: {
      th: 'วิธีเปลี่ยนแบบสอบถามที่ไม่มีใครตอบ ให้กลายเป็นข้อมูลคาร์บอนปฐมภูมิที่พร้อมส่งให้ผู้สอบทานสากล',
      en: 'How to transform unread spreadsheet requests into primary, audit-grade carbon metrics.',
    },
    date: '2026-08-28',
    readTime: { th: 'อ่าน 6 นาที', en: '6 min read' },
    author: {
      name: 'ชญานิศ สินประเสริฐ',
      title: { th: 'ผู้เชี่ยวชาญด้านระบบบัญชีคาร์บอน', en: 'Carbon Accounting Lead' },
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    keyTakeaways: {
      th: [
        'มากกว่า 80% ของการปล่อยคาร์บอนในภาคอุตสาหกรรมเกิดขึ้นใน Scope 3 (ซัพพลายเชน)',
        'อย่าส่งสเปรดชีตที่ซับซ้อน ให้ใช้ฟอร์มที่มี UX เรียบง่ายและแปลงหน่วยอัตโนมัติ',
        'แบ่งกลุ่มซัพพลายเออร์ตาม Pareto 80/20 เพื่อเริ่มต้นกับกลุ่มที่มีนัยสำคัญก่อน',
      ],
      en: [
        'Over 80% of corporate carbon footprints lie upstream and downstream within Scope 3.',
        'Ditch complex spreadsheet files for guided web micro-surveys that convert units automatically.',
        'Apply the 80/20 Pareto rule to focus initial validation on the top 15% tier-1 suppliers.',
      ],
    },
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
  {
    id: 'others-carbon-tax-thailand',
    slug: 'thailand-carbon-tax-2026',
    category: 'others',
    solutionTag: 'reporting-consulting',
    title: {
      th: 'ภาษีคาร์บอนไทยและพ.ร.บ. การเปลี่ยนแปลงสภาพภูมิอากาศ: สิ่งที่ธุรกิจต้องรู้',
      en: 'Thailand Carbon Tax & Climate Change Act: What Corporate Leaders Must Prepare For',
    },
    subtitle: {
      th: 'วิเคราะห์ผลกระทบของโครงสร้างภาษีสรรพสามิตคาร์บอนและการเตรียมตัวสำหรับผู้ประกอบการ',
      en: 'An analytical briefing on the upcoming excise carbon tax and statutory emissions thresholds.',
    },
    date: '2026-06-19',
    readTime: { th: 'อ่าน 5 นาที', en: '5 min read' },
    author: {
      name: 'ธนาวัต รัตนโภคิน',
      title: { th: 'หัวหน้าทีมที่ปรึกษา IFRS S1/S2', en: 'Head of IFRS Climate Advisory' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    keyTakeaways: {
      th: [
        'ประเทศไทยเตรียมจัดเก็บภาษีคาร์บอนนำร่องในภาคพลังงานและเชื้อเพลิงฟอสซิล',
        'องค์กรที่มีการคำนวณคาร์บอนที่ผ่านการทวนสอบจะสามารถบริหารต้นทุนภาษีได้มีประสิทธิภาพสูงสุด',
      ],
      en: [
        'Thailand is piloting carbon taxation across fossil fuel and heavy energy sectors.',
        'Enterprises with audited carbon ledgers can proactively hedge tax liabilities.',
      ],
    },
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    featured: false,
  },
];
