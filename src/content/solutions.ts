import { SolutionItem } from '../types/content';

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'ifrs',
    type: 'service',
    slug: 'ifrs',
    badge: {
      th: 'พันธมิตร IFRS แห่งแรกในไทย',
      en: "Thailand's 1st IFRS Sustainability Alliance",
    },
    title: {
      th: 'IFRS S1 & S2 Sustainability Standards',
      en: 'IFRS S1 & S2 Sustainability Standards',
    },
    tagline: {
      th: 'ยกระดับการเปิดเผยข้อมูลความยั่งยืนสู่มาตรฐานสากลระดับโลกสำหรับบริษัทจดทะเบียน SET100 และ Pre-IPO',
      en: 'Elevate sustainability disclosures to global capital market standards for SET100 & Pre-IPO leaders.',
    },
    shortDescription: {
      th: 'บริการให้คำปรึกษาและจัดทำรายงานความยั่งยืนตามมาตรฐาน IFRS S1 และ S2 ครบวงจร โดยสมาชิกทางการของ IFRS Sustainability Alliance',
      en: 'End-to-end IFRS S1 & S2 disclosure consulting and financial impact assessment by official IFRS Alliance members.',
    },
    outcomeLine: {
      th: 'พร้อมรับเกณฑ์ ก.ล.ต. และดึงดูดเม็ดเงินลงทุนสถาบันระดับโลกด้วยความเชื่อมั่น 100%',
      en: '100% compliance with SEC/SET mandates and instant credibility for global institutional investors.',
    },
    iconName: 'ShieldCheck',
    whatIs: {
      th: {
        title: 'ทำความเข้าใจ IFRS S1 & S2 ในภาษาที่เรียบง่าย',
        explanation: 'IFRS S1 กำหนดหลักการเปิดเผยความเสี่ยงและโอกาสด้านความยั่งยืนที่ส่งผลต่องบการเงิน ส่วน IFRS S2 เจาะลึกความเสี่ยงและโอกาสที่เกี่ยวข้องกับการเปลี่ยนแปลงสภาพภูมิอากาศ (Climate-related disclosures) ที่เชื่อมโยงกับมูลค่ากิจการ',
        whoMustReport: 'บริษัทจดทะเบียนในตลาดหลักทรัพย์ (SET / mai), บริษัทเตรียม IPO และซัพพลายเชนขององค์กรข้ามชาติ',
        deadline: 'เริ่มมีผลบังคับใช้ในระดับสากลแล้ว และสำนักงาน ก.ล.ต. กำลังทยอยบังคับใช้กับบริษัทขนาดใหญ่ภายในปี 2026–2027',
      },
      en: {
        title: 'What are IFRS S1 & S2 in plain words?',
        explanation: 'IFRS S1 sets the benchmark for disclosing sustainability-related financial risks and opportunities, while IFRS S2 focuses strictly on climate risks and impacts directly tied to corporate cash flows and enterprise value.',
        whoMustReport: 'SET/mai listed corporations, pre-IPO enterprises, and strategic suppliers to international MNCs.',
        deadline: 'Effective globally now, with Thailand SEC phased adoption targeting leading listed issuers by 2026–2027.',
      },
    },
    steps: {
      th: [
        { step: 1, title: 'Gap Analysis', desc: 'ตรวจประเมินความพร้อมและเปรียบเทียบข้อมูลปัจจุบันกับข้อกำหนด IFRS S1/S2 อย่างละเอียด' },
        { step: 2, title: 'Gap Closing & Governance', desc: 'วางโครงสร้างการกำกับดูแล (Governance) และกลยุทธ์จัดการความเสี่ยงระดับคณะกรรมการ' },
        { step: 3, title: 'Climate Risk & Opportunity Assessment', desc: 'ประเมินความเสี่ยงทางกายภาพ (Physical) และการเปลี่ยนผ่าน (Transition) ตามแบบจำลองสภาพภูมิอากาศ' },
        { step: 4, title: 'Financial Impact Assessment', desc: 'จำลองผลกระทบเชิงตัวเลขต่อกระแสเงินสด สินทรัพย์ และการประเมินมูลค่าบริษัท' },
        { step: 5, title: 'Disclosure & Reporting', desc: 'จัดทำร่างรายงานการเปิดเผยข้อมูลตามโครงสร้างมาตรฐานที่ผู้สอบทานสากลยอมรับ' },
        { step: 6, title: 'Capacity Building', desc: 'ถ่ายทอดองค์ความรู้และฝึกอบรมทีมงานภายในองค์กรเพื่อการทำงานต่อเนื่องอย่างยั่งยืน' },
      ],
      en: [
        { step: 1, title: 'Gap Analysis', desc: 'Thorough readiness diagnostic mapping your current disclosure posture to IFRS S1/S2 requirements.' },
        { step: 2, title: 'Gap Closing & Governance', desc: 'Establish board-level governance charters, climate oversight metrics, and management workflows.' },
        { step: 3, title: 'Climate Risk & Opportunity Assessment', desc: 'Evaluate physical & transition risks across climate scenarios tailored to Thailand and Southeast Asia.' },
        { step: 4, title: 'Financial Impact Assessment', desc: 'Quantify climate financial implications directly onto balance sheet items, cash flows, and capital allocation.' },
        { step: 5, title: 'Disclosure & Reporting', desc: 'Draft comprehensive, investor-grade disclosures ready for assurance and annual reporting integration.' },
        { step: 6, title: 'Capacity Building', desc: 'Empower internal sustainability and finance teams with ongoing tools and technical know-how.' },
      ],
    },
  },
  {
    id: 'carboncal',
    type: 'product',
    slug: 'carboncal',
    badge: {
      th: 'Carbon Accounting Platform',
      en: 'Carbon Accounting Platform',
    },
    title: {
      th: 'CarbonCal — แพลตฟอร์มคำนวณคาร์บอนฟุตพริ้นท์องค์กร',
      en: 'CarbonCal — Enterprise Carbon Accounting SaaS',
    },
    tagline: {
      th: 'ระบบคำนวณและบริหารจัดการคาร์บอนฟุตพริ้นท์ Scope 1, 2, 3 อัตโนมัติ รวดเร็ว แม่นยำ และตรวจสอบได้',
      en: 'Automated, audit-ready carbon footprint accounting across Scope 1, 2, and 3 in one intuitive platform.',
    },
    shortDescription: {
      th: 'ซอฟต์แวร์ตรวจวัดและวางแผนลดการปล่อยก๊าซเรือนกระจกขององค์กร พร้อมระบบ Carbon Camp เพิ่มทักษะทีมงาน',
      en: 'Measure, report, and plan emission reductions across your organization with built-in Thailand emission factors.',
    },
    outcomeLine: {
      th: 'ลดเวลาประมวลผลข้อมูลลง 70% พร้อมเอกสารรองรับการทวนสอบจากผู้สอบทานภายนอกทันที',
      en: 'Cut carbon accounting time by 70% with instantly verifiable audit trails and TGO emission factors.',
    },
    iconName: 'Calculator',
    stats: {
      th: [
        { value: '120+', label: 'องค์กรชั้นนำไว้วางใจ' },
        { value: '1,200+', label: 'ผู้ใช้งานในระบบ' },
        { value: '1.8M+', label: 'tCO₂e ที่คำนวณแล้ว' },
      ],
      en: [
        { value: '120+', label: 'Leading enterprises' },
        { value: '1,200+', label: 'Active business users' },
        { value: '1.8M+', label: 'tCO₂e measured' },
      ],
    },
    benefits: {
      th: [
        { title: 'คำนวณอัตโนมัติ แม่นยำสูง', desc: 'อ้างอิงค่า Emission Factors ของ TGO และ IPCC ล่าสุด คำนวณรวดเร็วโดยไม่ต้องใช้สเปรดชีตที่ซับซ้อน', icon: 'Cpu' },
        { title: 'พร้อมรับการทวนสอบ 100%', desc: 'จัดเก็บหลักฐานทุกจุดพร้อมบันทึก Audit Trail โปร่งใส ผู้สอบทาน (Third-party verifier) ตรวจสอบได้ทันที', icon: 'FileCheck' },
        { title: 'จำลองกลยุทธ์ Decarbonization', desc: 'วางแผนเป้าหมาย Net Zero ด้วย Scenario Modeling เพื่อตัดสินใจลงทุนพลังงานสะอาดได้อย่างคุ้มค่า', icon: 'TrendingDown' },
      ],
      en: [
        { title: 'Automated & Highly Accurate', desc: 'Built-in Thai TGO and international IPCC factors. Replace error-prone spreadsheets with automated algorithms.', icon: 'Cpu' },
        { title: 'Audit-Ready by Design', desc: 'Every calculation links directly to primary proof documents, cutting audit prep time to hours instead of weeks.', icon: 'FileCheck' },
        { title: 'Actionable Decarbonization Roadmap', desc: 'Model Net Zero scenarios and marginal abatement cost curves to allocate green capex with high ROI.', icon: 'TrendingDown' },
      ],
    },
    features: {
      th: [
        { title: 'Scope 1, 2, 3 Data Ingestion', desc: 'นำเข้าข้อมูลใบเสร็จ ค่าน้ำมัน ค่าไฟ ค่าเดินทาง และซัพพลายเออร์ได้ทั้งไฟล์ CSV, API หรือกรอกฟอร์ม', tag: 'Core Engine' },
        { title: 'Thai & Global Emission Database', desc: 'อัปเดตค่าสัมประสิทธิ์การปล่อยก๊าซของไทย (TGO) และสากล (DEFRA, Ecoinvent) แบบอัตโนมัติ', tag: 'Database' },
        { title: '56-1 One Report Export', desc: 'ส่งออกรายงานสรุปสำหรับหมวด 2 การขับเคลื่อนธุรกิจเพื่อความยั่งยืน ได้ในคลิกเดียว', tag: 'Compliance' },
        { title: 'Enterprise Role & Multi-facility', desc: 'รองรับการแบ่งสิทธิ์ตามแผนก โรงงาน สาขา และบริษัทในเครือ พร้อมระบบอนุมัติข้อมูล', tag: 'Security' },
      ],
      en: [
        { title: 'Scope 1, 2 & 3 Data Ingestion', desc: 'Upload utility bills, fuel manifests, travel records, and supplier data via drag-and-drop or API.', tag: 'Core Engine' },
        { title: 'Local & Global Emission Database', desc: 'Continuously updated with Thailand TGO factors as well as DEFRA, IEA, and Ecoinvent datasets.', tag: 'Database' },
        { title: 'One-Click SEC 56-1 Export', desc: 'Instant export formatted specifically for Thailand SEC One Report sustainability disclosures.', tag: 'Compliance' },
        { title: 'Enterprise Multi-Facility RBAC', desc: 'Manage unlimited subsidiaries, plants, and cost centers with granular role-based approvals.', tag: 'Security' },
      ],
    },
    testimonials: [
      {
        quote: {
          th: 'CarbonCal เปลี่ยนการรวบรวมข้อมูลคาร์บอนที่เคยใช้เวลา 3 เดือน ให้เสร็จสิ้นได้ในเวลาไม่ถึง 2 สัปดาห์ พร้อมส่งผู้ทวนสอบได้ทันที',
          en: 'CarbonCal turned a 3-month chaotic spreadsheet nightmare into a streamlined 2-week workflow with zero audit findings.',
        },
        author: 'คุณพัชราภรณ์ วงศ์สว่าง',
        role: { th: 'ผู้อำนวยการฝ่ายพัฒนาความยั่งยืน', en: 'Sustainability Director' },
        company: 'เครือบริษัทค้าปลีกชั้นนำใน SET50',
      },
      {
        quote: {
          th: 'ทีมงาน LO-CARB และระบบ CarbonCal ทำให้โรงงานผลิต 8 แห่งของเราติดตามการปล่อยคาร์บอนแบบเรียลไทม์ และวางแผนลงทุน Solar Rooftop ได้อย่างแม่นยำ',
          en: 'LO-CARB and CarbonCal allowed our 8 manufacturing sites to monitor emissions in real time and optimize our solar investments.',
        },
        author: 'คุณธีรยุทธ อัศวเมฆินทร์',
        role: { th: 'รองกรรมการผู้จัดการฝ่ายปฏิบัติการ', en: 'VP of Operations' },
        company: 'ผู้ผลิตชิ้นส่วนยานยนต์ส่งออก',
      },
    ],
    faq: [
      {
        question: { th: 'CarbonCal มีรูปแบบราคา (Pricing) อย่างไร?', en: 'How is CarbonCal priced?' },
        answer: {
          th: 'เราคิดค่าบริการตามขนาดขององค์กรและจำนวนสาขา/โรงงาน โดยมีแพ็กเกจสำหรับ SME, บริษัทขนาดกลาง และระดับ Enterprise สัญญารายปีพร้อมบริการสนับสนุนจากผู้เชี่ยวชาญ',
          en: 'We offer tiered annual subscriptions based on company size, number of facilities, and data volume, covering SMEs, mid-caps, and full enterprise groups.',
        },
      },
      {
        question: { th: 'ความปลอดภัยของข้อมูลองค์กรเป็นอย่างไร?', en: 'How is data security managed?' },
        answer: {
          th: 'ข้อมูลจัดเก็บบนคลาวด์มาตรฐาน ISO 27001 เข้ารหัสข้อมูลระดับ AES-256 ทั้งขณะส่งผ่านและจัดเก็บ และสอดคล้องตามกฎหมาย PDPA ของไทย 100%',
          en: 'Data is hosted on ISO 27001-certified cloud infrastructure with end-to-end AES-256 encryption, fully compliant with Thailand PDPA.',
        },
      },
      {
        question: { th: 'มีบริการช่วยเหลือและอบรมการใช้งานหรือไม่?', en: 'What onboarding and support are provided?' },
        answer: {
          th: 'ทุกแพ็กเกจมาพร้อมโปรแกรม Carbon Camp ช่วยอบรมผู้ใช้งาน มีทีม Customer Success และ Carbon Specialists คอยตรวจสอบความถูกต้องของข้อมูลตลอดสัญญา',
          en: 'Every tier includes our Carbon Camp onboarding workshop, a dedicated customer success manager, and review by certified carbon accountants.',
        },
      },
    ],
  },
  {
    id: 'issb-training',
    type: 'service',
    slug: 'issb-training',
    badge: {
      th: 'Executive & Team Workshop',
      en: 'Executive & Team Workshop',
    },
    title: {
      th: 'ISSB Executive & Practitioner Training',
      en: 'ISSB Executive & Practitioner Training',
    },
    tagline: {
      th: 'หลักสูตรพัฒนาศักยภาพผู้บริหารและทีมปฏิบัติการด้านมาตรฐานความยั่งยืนสากล IFRS S1 & S2',
      en: 'Executive masterclasses and practitioner bootcamps on IFRS S1 & S2 standards.',
    },
    shortDescription: {
      th: 'หลักสูตรเข้มข้นที่ออกแบบสำหรับคณะกรรมการ ผู้บริหารระดับสูง และทีม IR/บัญชี/ความยั่งยืน เพื่อเตรียมองค์กรสู่เกณฑ์ใหม่',
      en: 'Practical, case-study-driven programs for Boards, C-suite, and IR/Finance professionals navigating new climate rules.',
    },
    outcomeLine: {
      th: 'ติดอาวุธองค์ความรู้ให้ทีมงานพร้อมวางกลยุทธ์ และตอบคำถามนักวิเคราะห์/นักลงทุนสถาบันได้อย่างมั่นใจ',
      en: 'Equip your core team with strategic fluency to answer ESG rating agencies and institutional analysts.',
    },
    iconName: 'GraduationCap',
    whatIs: {
      th: {
        title: 'ทำไมองค์กรต้องอบรมมาตรฐาน ISSB?',
        explanation: 'มาตรฐานของ International Sustainability Standards Board (ISSB) ไม่ใช่เพียงเรื่อง CSR แต่เป็นมาตรฐานบัญชีและการเงินที่ส่งผลต่อต้นทุนทางการเงิน (Cost of Capital) และราคาหุ้น การที่ผู้บริหารและทีมงานเข้าใจนิยามและวิธีคำนวณจึงสำคัญสูงสุด',
        whoMustReport: 'คณะกรรมการบริษัท (Board), ประธานเจ้าหน้าที่บริหาร (C-Suite), ทีม IR, ฝ่ายบัญชีการเงิน และฝ่ายความยั่งยืน',
        deadline: 'ควรเตรียมความพร้อมล่วงหน้าอย่างน้อย 1 ปี ก่อนรอบเปิดเผยข้อมูลประจำปี',
      },
      en: {
        title: 'Why is ISSB Training critical today?',
        explanation: 'The International Sustainability Standards Board (ISSB) reframed sustainability from philanthropic CSR into capital market fundamentals that affect cost of capital and enterprise valuation.',
        whoMustReport: 'Board members, C-level executives, Head of Investor Relations, Finance teams, and Chief Sustainability Officers.',
        deadline: 'Recommended at least 12 months ahead of statutory disclosure cycles.',
      },
    },
    steps: {
      th: [
        { step: 1, title: 'Needs Assessment', desc: 'สำรวจระดับความพร้อมและโจทย์เฉพาะของอุตสาหกรรมท่าน' },
        { step: 2, title: 'Executive Briefing', desc: 'เวิร์กช็อป 1 วัน สำหรับบอร์ดและผู้บริหารระดับสูง เน้นผลกระทบต่อกลยุทธ์และการเงิน' },
        { step: 3, title: 'Practitioner Masterclass', desc: 'ฝึกปฏิบัติการลงลึก 2–3 วัน สำหรับทีมจัดทำข้อมูลและรายงาน' },
        { step: 4, title: 'Simulated Disclosure Drill', desc: 'ซ้อมทำแบบประเมินและจัดทำร่างเปิดเผยข้อมูลเสมือนจริง' },
        { step: 5, title: 'Examination & Certification', desc: 'ทดสอบวัดผลและมอบประกาศนียบัตรรับรองจาก LO-CARB' },
        { step: 6, title: 'Post-Training Advisory', desc: 'คลินิกให้คำปรึกษาติดตามผลต่อเนื่อง 3 เดือน' },
      ],
      en: [
        { step: 1, title: 'Needs Assessment', desc: 'Diagnostic alignment tailored to your sector challenges and peer benchmarks.' },
        { step: 2, title: 'Executive Briefing', desc: 'High-impact board workshop focusing on fiduciary duties, capital costs, and strategy.' },
        { step: 3, title: 'Practitioner Masterclass', desc: 'Deep-dive intensive for disclosure authors, finance leads, and IR specialists.' },
        { step: 4, title: 'Simulated Disclosure Drill', desc: 'Hands-on drafting exercise under realistic scenario stress-testing.' },
        { step: 5, title: 'Examination & Certification', desc: 'Knowledge verification and credentialing issued by LO-CARB.' },
        { step: 6, title: 'Post-Training Advisory', desc: 'Quarterly review clinic and ongoing advisory support hotline.' },
      ],
    },
  },
  {
    id: 'carbon-scout',
    type: 'product',
    slug: 'carbon-scout',
    badge: {
      th: 'Supply Chain Scope 3 Scout',
      en: 'Supply Chain Scope 3 Scout',
    },
    title: {
      th: 'Carbon Scout — ระบบเก็บข้อมูลคาร์บอนซัพพลายเชน',
      en: 'Carbon Scout — Scope 3 Supply Chain Intelligence',
    },
    tagline: {
      th: 'เครื่องมือส่งฟอร์มและรวบรวมข้อมูลคาร์บอนจากคู่ค้าและซัพพลายเออร์นับร้อยรายอย่างง่ายดาย',
      en: 'Seamlessly survey, collect, and verify primary carbon data across hundreds of suppliers.',
    },
    shortDescription: {
      th: 'แก้ปัญหาคอขวด Scope 3 ด้วยระบบแบบสอบถามอัจฉริยะที่คู่ค้ากรอกได้ง่าย ไม่ต้องมีความรู้เรื่องคาร์บอนมาก่อน',
      en: 'Solve the Scope 3 supplier data collection bottleneck with guided questionnaires and automated validation.',
    },
    outcomeLine: {
      th: 'เพิ่มอัตราการตอบกลับข้อมูลจากซัพพลายเออร์เป็น 85%+ และลดการพึ่งพาค่าประมาณการทางสถิติ',
      en: 'Achieve 85%+ supplier response rates and replace blunt spend-based proxies with real primary data.',
    },
    iconName: 'Radar',
    stats: {
      th: [
        { value: '1,200+', label: 'ซัพพลายเออร์ที่ตอบแบบประเมิน' },
        { value: '86%', label: 'Response Rate เฉลี่ย' },
        { value: '4.8/5', label: 'คะแนนความพึงพอใจของคู่ค้า' },
      ],
      en: [
        { value: '1,200+', label: 'Suppliers engaged' },
        { value: '86%', label: 'Average completion rate' },
        { value: '4.8/5', label: 'Supplier usability rating' },
      ],
    },
    benefits: {
      th: [
        { title: 'คู่ค้ากรอกง่ายใน 15 นาที', desc: 'ออกแบบด้วย UX ที่เป็นมิตร มีคำอธิบายและตัวแปลงหน่วยพลังงานอัตโนมัติ ช่วยให้คู่ค้า SME กรอกข้อมูลได้ทันที', icon: 'Smile' },
        { title: 'ระบบตรวจสอบข้อมูลผิดปกติ (AI Check)', desc: 'ตรวจจับตัวเลขที่ผิดพลาดหรือสูงเกินจริงเปรียบเทียบกับค่าเฉลี่ยอุตสาหกรรมก่อนกดยืนยัน', icon: 'Sparkles' },
        { title: 'แดชบอร์ดจัดอันดับซัพพลายเออร์', desc: 'จัดกลุ่มคู่ค้าตามระดับคาร์บอนและความพร้อม เพื่อวางนโยบาย Sustainable Procurement อย่างเป็นรูปธรรม', icon: 'BarChart3' },
      ],
      en: [
        { title: '15-Minute Guided Completion', desc: 'SME-friendly UX with auto-converters so non-expert vendors can report without friction.', icon: 'Smile' },
        { title: 'Anomaly & Outlier Flagging', desc: 'Algorithmic checks flag impossible energy leaps and typographical mistakes before submission.', icon: 'Sparkles' },
        { title: 'Supplier Decarbonization Heatmap', desc: 'Rank vendors by carbon intensity and readiness to inform green procurement incentives.', icon: 'BarChart3' },
      ],
    },
    features: {
      th: [
        { title: 'Automated Supplier Campaign', desc: 'ส่งลิงก์คำขอข้อมูลและระบบติดตามทวงถาม (Automated Reminders) อัตโนมัติทางอีเมล', tag: 'Automation' },
        { title: 'Multi-Language Forms', desc: 'รองรับภาษาไทย อังกฤษ จีน และญี่ปุ่น เพื่อซัพพลายเออร์ในภูมิภาคอาเซียนและเอเชีย', tag: 'Localization' },
        { title: 'Document & Utility Proof Hub', desc: 'พื้นที่อัปโหลดใบเสร็จค่าไฟฟ้าและน้ำมันเพื่อเก็บเป็นหลักฐานยืนยัน', tag: 'Verification' },
        { title: 'Export to CarbonCal & GHG Protocol', desc: 'เชื่อมต่อผลลัพธ์ Scope 3 Category 1 & 4 เข้าสู่ระบบบัญชีคาร์บอนหลักได้ทันที', tag: 'Integration' },
      ],
      en: [
        { title: 'Automated Supplier Campaigns', desc: 'Schedule survey blasts and intelligent nudges to drive compliance without manual follow-up.', tag: 'Automation' },
        { title: 'Multi-Language Portal', desc: 'Supports Thai, English, Chinese, and Japanese for cross-border Southeast Asian supply chains.', tag: 'Localization' },
        { title: 'Proof & Bill Repository', desc: 'Attach and archive utility invoices and certificates as audit verification evidence.', tag: 'Verification' },
        { title: 'Direct CarbonCal & GHG Export', desc: 'Pushes validated Scope 3 Cat 1 (Purchased Goods) data directly into your core ledger.', tag: 'Integration' },
      ],
    },
    testimonials: [
      {
        quote: {
          th: 'แต่ก่อนเราส่งเอ็กเซลให้คู่ค้า 120 ราย ตอบกลับมาไม่ถึง 20% พอใช้ Carbon Scout เดือนเดียวคู่ค้าส่งข้อมูลครบกว่า 90%',
          en: 'We used to get less than 20% response on spreadsheets. With Carbon Scout, over 90% submitted verifiable data in month one.',
        },
        author: 'คุณนรินทร์ เกียรติไพบูลย์',
        role: { th: 'ผู้อำนวยการฝ่ายจัดซื้อเชิงกลยุทธ์', en: 'Chief Procurement Officer' },
        company: 'บริษัทผู้ผลิตอาหารและเครื่องดื่มเพื่อการส่งออก',
      },
    ],
    faq: [
      {
        question: { th: 'คู่ค้าของเราเป็น SME ไม่มีความรู้เรื่องก๊าซเรือนกระจกจะกรอกได้ไหม?', en: 'Can non-technical SME suppliers fill this in?' },
        answer: {
          th: 'ได้แน่นอน Carbon Scout ออกแบบมาเพื่อให้คู่ค้าเพียงแค่นำตัวเลขจากบิลค่าไฟ ปริมาณน้ำมัน หรือเลขไมล์รถมาใส่ ระบบจะคำนวณเป็น tCO₂e ให้เองอัตโนมัติ',
          en: 'Yes. The interface asks for familiar metrics like electricity units (kWh) and fuel expenditure, auto-calculating tCO₂e behind the scenes.',
        },
      },
      {
        question: { th: 'สามารถนำข้อมูลไปรวมกับ CarbonCal ได้เลยไหม?', en: 'Does it sync with CarbonCal?' },
        answer: {
          th: 'สามารถเชื่อมต่อข้อมูลเข้า CarbonCal ได้โดยอัตโนมัติ หรือส่งออกเป็นรูปแบบ CSV/Excel สำหรับระบบภายนอกได้เช่นกัน',
          en: 'Yes, it natively synchronizes with CarbonCal Scope 3 ledgers and can also export to Excel/CSV for any external reporting tool.',
        },
      },
    ],
  },
  {
    id: 'reporting-consulting',
    type: 'service',
    slug: 'reporting-consulting',
    badge: {
      th: 'Strategic ESG Advisory',
      en: 'Strategic ESG Advisory',
    },
    title: {
      th: 'Sustainability Reporting & One-Report Consulting',
      en: 'Sustainability Reporting & One-Report Consulting',
    },
    tagline: {
      th: 'บริการที่ปรึกษาจัดทำรายงานความยั่งยืนประจำปี แบบ 56-1 One Report, GRI Standards, และ TCFD',
      en: 'End-to-end consulting for SEC 56-1 One Report, GRI Standards, and TCFD alignment.',
    },
    shortDescription: {
      th: 'ยกระดับคะแนน CGR, เพิ่มโอกาสเข้าสู่ดัชนีหุ้นยั่งยืน SET ESG Ratings และสร้างความน่าเชื่อถือต่อนักลงทุน',
      en: 'Optimize your CGR score, achieve top-tier SET ESG Ratings (AAA), and showcase authentic sustainable performance.',
    },
    outcomeLine: {
      th: 'รายงานที่กระชับ โปร่งใส ปราศจากการฟอกเขียว (Anti-Greenwashing) และตรงใจนักลงทุนสถาบัน',
      en: 'Substantive, clear, anti-greenwashing disclosures built to satisfy analysts and international ESG rating agencies.',
    },
    iconName: 'FileSpreadsheet',
    whatIs: {
      th: {
        title: 'ทำไมรายงานความยั่งยืนคุณภาพสูงจึงสร้างมูลค่าให้ธุรกิจ?',
        explanation: 'นักลงทุนสถาบันทั้งในไทยและต่างประเทศใช้ข้อมูล ESG ประกอบการตัดสินใจลงทุน รายงานที่น่าเชื่อถือช่วยลดต้นทุนดอกเบี้ยกู้ยืม (Sustainability-linked loans) และป้องกันความเสี่ยงด้านชื่อเสียงจากการฟอกเขียว',
        whoMustReport: 'บริษัทจดทะเบียนในตลาดหลักทรัพย์ทุกขนาด และบริษัทที่เตรียมระดมทุน IPO',
        deadline: 'ส่งพร้อมแบบ 56-1 One Report ประจำปี ภายใน 3 เดือนหลังปิดรอบบัญชี',
      },
      en: {
        title: 'Why does rigorous sustainability reporting drive enterprise value?',
        explanation: 'Capital markets increasingly reward authentic ESG performance. Credible disclosures qualify companies for green financing at favorable rates and insulate management from reputational backlash.',
        whoMustReport: 'All SET and mai listed companies, along with high-growth IPO candidates.',
        deadline: 'Mandatory filing alongside annual Form 56-1 One Report within 3 months of fiscal year-end.',
      },
    },
    steps: {
      th: [
        { step: 1, title: 'Double Materiality Assessment', desc: 'วิเคราะห์ประเด็นสาระสำคัญทั้งผลกระทบต่อสิ่งแวดล้อมและผลกระทบทางการเงิน' },
        { step: 2, title: 'Stakeholder Engagement', desc: 'สำรวจความคาดหวังของผู้มีส่วนได้เสียทุกกลุ่มอย่างมีหลักการ' },
        { step: 3, title: 'Data Architecture Setup', desc: 'วางระบบจัดเก็บตัวเลขและตัวชี้วัด ESG ข้ามทุกสายงานในองค์กร' },
        { step: 4, title: 'Narrative & Report Drafting', desc: 'เรียบเรียงเนื้อหา ออกแบบ Infographic และจัดวางเลย์เอาต์ระดับสากล' },
        { step: 5, title: 'Pre-Assurance & Verification Review', desc: 'ตรวจสอบความถูกต้องของข้อมูลตามมาตรฐานก่อนส่งตรวจรับรองภายนอก' },
        { step: 6, title: 'SET ESG Ratings Optimization', desc: 'เตรียมเอกสารหลักฐานเพื่อยื่นประเมิน SET ESG Ratings และรางวัลความยั่งยืน' },
      ],
      en: [
        { step: 1, title: 'Double Materiality Assessment', desc: 'Determine what matters most across both impact materiality and financial materiality.' },
        { step: 2, title: 'Stakeholder Engagement', desc: 'Execute systematic surveys and consultations across employees, clients, communities, and investors.' },
        { step: 3, title: 'Data Architecture Setup', desc: 'Establish internal data governance protocols across operational units and corporate entities.' },
        { step: 4, title: 'Narrative & Report Drafting', desc: 'Craft compelling narratives, professional infographics, and layout aligned with international standards.' },
        { step: 5, title: 'Pre-Assurance & Verification Review', desc: 'Rigorous internal verification review to ensure smooth sign-off by external auditors.' },
        { step: 6, title: 'SET ESG Ratings Optimization', desc: 'Optimize evidentiary submissions for SET ESG Ratings (AAA) and corporate governance awards.' },
      ],
    },
  },
];
