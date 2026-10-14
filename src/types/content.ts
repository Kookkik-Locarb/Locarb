export type Language = 'th' | 'en';

export type SolutionId = 
  | 'ifrs' 
  | 'carboncal' 
  | 'issb-training' 
  | 'carbon-scout' 
  | 'reporting-consulting';

export type SolutionType = 'service' | 'product';

export interface SolutionItem {
  id: SolutionId;
  type: SolutionType;
  slug: string;
  badge?: {
    th: string;
    en: string;
  };
  title: {
    th: string;
    en: string;
  };
  tagline: {
    th: string;
    en: string;
  };
  shortDescription: {
    th: string;
    en: string;
  };
  outcomeLine: {
    th: string;
    en: string;
  };
  iconName: string;
  stats?: {
    th: { value: string; label: string }[];
    en: { value: string; label: string }[];
  };
  // Service-specific
  whatIs?: {
    th: { title: string; explanation: string; whoMustReport: string; deadline: string };
    en: { title: string; explanation: string; whoMustReport: string; deadline: string };
  };
  steps?: {
    th: { step: number; title: string; desc: string }[];
    en: { step: number; title: string; desc: string }[];
  };
  // Product-specific
  benefits?: {
    th: { title: string; desc: string; icon: string }[];
    en: { title: string; desc: string; icon: string }[];
  };
  features?: {
    th: { title: string; desc: string; tag: string }[];
    en: { title: string; desc: string; tag: string }[];
  };
  testimonials?: {
    quote: { th: string; en: string };
    author: string;
    role: { th: string; en: string };
    company: string;
  }[];
  faq?: {
    question: { th: string; en: string };
    answer: { th: string; en: string };
  }[];
}

export type PostCategory = 'portfolio' | 'knowledge-base' | 'others';

export interface BlogPost {
  id: string;
  slug: string;
  category: PostCategory;
  solutionTag: SolutionId;
  title: { th: string; en: string };
  subtitle?: { th: string; en: string };
  date: string;
  readTime: { th: string; en: string };
  author: {
    name: string;
    title: { th: string; en: string };
    avatar: string;
  };
  clientName?: string;
  industry?: { th: string; en: string };
  headlineResult?: { th: string; en: string };
  challenge?: { th: string; en: string };
  solutionDetails?: { th: string; en: string };
  outcomes?: { th: { metric: string; label: string }[]; en: { metric: string; label: string }[] };
  quote?: {
    text: { th: string; en: string };
    author: string;
    company: string;
  };
  keyTakeaways?: { th: string[]; en: string[] };
  contentMarkdown?: { th: string; en: string };
  image: string;
  featured?: boolean;
}

export interface CertificateItem {
  id: string;
  name: { th: string; en: string };
  issuer: string;
  year: string;
  pdfUrl: string;
  isAlliance: boolean;
  badge: { th: string; en: string };
  description: { th: string; en: string };
}

export interface BoardMember {
  id: string;
  name: { th: string; en: string };
  title: { th: string; en: string };
  bio: { th: string; en: string };
  photo: string;
  credentials: string[];
}
