import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Language, SolutionId } from '../types/content';
import { CONTENT_TH } from '../content/th';
import { CONTENT_EN } from '../content/en';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { SeoHead } from '../components/common/SeoHead';
import { BrandHeadline } from '../components/brand/BrandHeadline';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  X,
  Send,
  ShieldCheck,
} from 'lucide-react';

export const ContactPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const [searchParams] = useSearchParams();
  const t = (lang === 'th' ? CONTENT_TH : CONTENT_EN).contact;
  const brand = (lang === 'th' ? CONTENT_TH : CONTENT_EN).brand;

  // Form states
  const [topic, setTopic] = useState<'solutions' | 'partnership' | 'careers' | 'other'>('solutions');
  const [solution, setSolution] = useState<SolutionId>('ifrs');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [careersBio, setCareersBio] = useState('');
  const [careersLinkedin, setCareersLinkedin] = useState('');
  const [message, setMessage] = useState('');
  const [pdpaConsent, setPdpaConsent] = useState(false);

  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    topic: string;
    solution?: string;
    routedEmail: string;
    subject: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Hidden UTM and referrer params
  const [sourceUrl, setSourceUrl] = useState('');
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  });

  // Pre-fill from URL query (?topic=solutions&solution=ifrs)
  useEffect(() => {
    const urlTopic = searchParams.get('topic');
    const urlSolution = searchParams.get('solution') as SolutionId | null;

    if (urlTopic && ['solutions', 'partnership', 'careers', 'other'].includes(urlTopic)) {
      setTopic(urlTopic as 'solutions' | 'partnership' | 'careers' | 'other');
    }
    if (
      urlSolution &&
      ['ifrs', 'carboncal', 'issb-training', 'carbon-scout', 'reporting-consulting'].includes(
        urlSolution
      )
    ) {
      setSolution(urlSolution);
    }

    setSourceUrl(window.location.href);
    setUtmParams({
      utm_source: searchParams.get('utm_source') || '',
      utm_medium: searchParams.get('utm_medium') || '',
      utm_campaign: searchParams.get('utm_campaign') || '',
    });
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!name.trim()) {
      setErrorMessage(lang === 'th' ? 'กรุณากรอกชื่อ-นามสกุล' : 'Please enter your full name');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage(lang === 'th' ? 'กรุณากรอกอีเมลที่ถูกต้อง' : 'Please enter a valid email address');
      return;
    }
    if (!company.trim()) {
      setErrorMessage(lang === 'th' ? 'กรุณากรอกชื่อบริษัทหรือองค์กร' : 'Please enter your company name');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage(lang === 'th' ? 'กรุณากรอกเบอร์โทรศัพท์' : 'Please enter your phone number');
      return;
    }
    if (topic === 'careers') {
      if (!careersBio.trim() || !careersLinkedin.trim()) {
        setErrorMessage(
          lang === 'th'
            ? 'กรุณากรอกคำแนะนำตัวและลิงก์ LinkedIn สำหรับการสมัครงาน'
            : 'Please provide a short intro and LinkedIn profile URL for career applications'
        );
        return;
      }
    }
    if (!pdpaConsent) {
      setErrorMessage(
        lang === 'th'
          ? 'กรุณายินยอมตามนโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA)'
          : 'Please accept the PDPA privacy consent to proceed'
      );
      return;
    }

    setIsSubmitting(true);

    // Routing logic mock: Careers → hr@locarb.green; everything else → contact@locarb.green
    const routedEmail = topic === 'careers' ? brand.careersEmail : brand.email;
    const resolvedSolution = topic === 'solutions' ? solution : undefined;
    const emailSubject = resolvedSolution
      ? `[${topic.toUpperCase()}] [${resolvedSolution.toUpperCase()}] Inquiry from ${name}`
      : `[${topic.toUpperCase()}] Inquiry from ${name}`;

    // Push event to dataLayer
    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: 'generate_lead',
        topic,
        solution: resolvedSolution || null,
        company,
        timestamp: new Date().toISOString(),
      });
      console.info('[LO-CARB dataLayer Event] generate_lead fired:', {
        topic,
        solution: resolvedSolution,
      });
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        topic,
        solution: resolvedSolution,
        routedEmail,
        subject: emailSubject,
      });
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F3F0DF]">
      <SeoHead
        lang={lang}
        title={lang === 'th' ? 'ติดต่อเรา | ปรึกษาผู้เชี่ยวชาญด้านคาร์บอน' : 'Contact Us | Talk to an IFRS Specialist'}
        description={
          lang === 'th'
            ? 'ติดต่อทีมงาน LO-CARB เพื่อรับคำปรึกษา IFRS S1/S2 แพลตฟอร์ม CarbonCal หรือสมัครร่วมงาน'
            : 'Reach out to LO-CARB to discuss IFRS S1/S2 advisory, CarbonCal demo, or partnership inquiries.'
        }
        pathname={`/${lang}/contact`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-bold uppercase tracking-wider text-[#0EA552] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0EA552]" />
            <span>{t.badge}</span>
          </div>
          <BrandHeadline lang={lang} size="h1" as="h1" className="mb-4">
            {t.title}
          </BrandHeadline>
          <p className="text-base sm:text-lg text-black/70 leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct contact info & promise */}
          <div className="lg:col-span-4 space-y-6">
            <Card variant="white" className="space-y-6">
              <h3 className="font-bold text-lg text-black pb-3 border-b border-black/10">
                {lang === 'th' ? 'ช่องทางติดต่อโดยตรง' : 'Direct Channels'}
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0EA552]/10 text-[#0EA552] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-black">
                      {lang === 'th' ? 'อีเมลสอบถามทั่วไป' : 'General & Advisory'}
                    </div>
                    <a
                      href={`mailto:${brand.email}`}
                      className="text-[#0EA552] hover:underline font-medium"
                    >
                      {brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0EA552]/10 text-[#0EA552] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-black">
                      {lang === 'th' ? 'ฝ่ายทรัพยากรบุคคล (Careers)' : 'Careers & Talent'}
                    </div>
                    <a
                      href={`mailto:${brand.careersEmail}`}
                      className="text-[#0EA552] hover:underline font-medium"
                    >
                      {brand.careersEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0EA552]/10 text-[#0EA552] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-black">
                      {lang === 'th' ? 'ที่ตั้งสำนักงาน' : 'Office Location'}
                    </div>
                    <div className="text-black/70">{brand.address}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F3F0DF] border border-black/8 text-xs text-black/70 space-y-2">
                <div className="font-bold text-black flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#0EA552]" />
                  <span>{lang === 'th' ? 'การตอบกลับภายใน 24 ชม.' : 'Response Guarantee'}</span>
                </div>
                <p>
                  {lang === 'th'
                    ? 'ทีมที่ปรึกษา IFRS และวิศวกรคาร์บอนของเราจะติดต่อกลับเพื่อให้คำปรึกษาเบื้องต้นโดยไม่มีค่าใช้จ่าย'
                    : 'Our certified IFRS specialists and carbon leads will follow up with an initial diagnostic roadmap.'}
                </p>
              </div>
            </Card>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-8">
            <Card variant="white" className="p-6 sm:p-10">
              {/* Success Alert Modal / Box */}
              {submittedData && (
                <div className="mb-8 p-6 rounded-2xl bg-[#0EA552]/10 border border-[#0EA552]/30 text-black relative animate-fade-in">
                  <button
                    onClick={() => setSubmittedData(null)}
                    className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/10 text-black/50 hover:text-black cursor-pointer"
                    aria-label="Close message"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0EA552] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-base sm:text-lg text-black mb-1">
                        {t.form.successTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-black/80 mb-3 leading-relaxed">
                        {t.form.successDesc}
                      </p>
                      <div className="p-3 rounded-xl bg-white/80 border border-[#0EA552]/20 text-xs text-black/70 space-y-1">
                        <div>
                          <span className="font-bold">{t.form.routedNotice}</span>{' '}
                          <code className="text-[#0EA552] font-semibold">{submittedData.routedEmail}</code>
                        </div>
                        <div>
                          <span className="font-bold">{lang === 'th' ? 'หัวข้อส่ง:' : 'Subject:'}</span>{' '}
                          <span>{submittedData.subject}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. I'm contacting about* */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2">
                    {t.form.topicLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['solutions', 'partnership', 'careers', 'other'] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setTopic(opt)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                          topic === opt
                            ? 'bg-[#0EA552] text-white border-[#0EA552] shadow-xs'
                            : 'bg-white text-black/80 border-black/15 hover:border-[#0EA552]'
                        }`}
                      >
                        {t.form.topics[opt]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. If Solutions: select solution dropdown/cards */}
                {topic === 'solutions' && (
                  <div className="p-4 rounded-2xl bg-[#F3F0DF] border border-black/10 animate-fade-in">
                    <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2">
                      {t.form.solutionLabel}
                    </label>
                    <select
                      value={solution}
                      onChange={(e) => setSolution(e.target.value as SolutionId)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm font-semibold text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                    >
                      <option value="ifrs">{t.form.solutionsOptions.ifrs}</option>
                      <option value="carboncal">{t.form.solutionsOptions.carboncal}</option>
                      <option value="issb-training">{t.form.solutionsOptions['issb-training']}</option>
                      <option value="carbon-scout">{t.form.solutionsOptions['carbon-scout']}</option>
                      <option value="reporting-consulting">{t.form.solutionsOptions['reporting-consulting']}</option>
                    </select>
                  </div>
                )}

                {/* 3. Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-black/80 mb-1.5">
                      {t.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.form.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/80 mb-1.5">
                      {t.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.form.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                    />
                  </div>
                </div>

                {/* Company & Position & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-black/80 mb-1.5">
                      {t.form.companyLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={t.form.companyPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/80 mb-1.5">
                      {t.form.positionLabel}
                    </label>
                    <input
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      placeholder={t.form.positionPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-black/80 mb-1.5">
                      {t.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.form.phonePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                    />
                  </div>
                </div>

                {/* 4. If Careers: Short Intro + LinkedIn URL */}
                {topic === 'careers' && (
                  <div className="space-y-4 p-4 rounded-2xl bg-[#0EA552]/10 border border-[#0EA552]/20 animate-fade-in">
                    <div>
                      <label className="block text-xs font-bold text-black/80 mb-1.5">
                        {t.form.careersBioLabel}
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={careersBio}
                        onChange={(e) => setCareersBio(e.target.value)}
                        placeholder={t.form.careersBioPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black/80 mb-1.5">
                        {t.form.careersLinkedinLabel}
                      </label>
                      <input
                        type="url"
                        required
                        value={careersLinkedin}
                        onChange={(e) => setCareersLinkedin(e.target.value)}
                        placeholder={t.form.careersLinkedinPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                      />
                    </div>
                  </div>
                )}

                {/* 5. Message */}
                <div>
                  <label className="block text-xs font-bold text-black/80 mb-1.5">
                    {t.form.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.form.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
                  />
                </div>

                {/* 6. PDPA Consent */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="pdpa-consent"
                    checked={pdpaConsent}
                    onChange={(e) => setPdpaConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-[#0EA552] border-black/20 focus:ring-[#0EA552] cursor-pointer"
                  />
                  <label htmlFor="pdpa-consent" className="text-xs text-black/70 cursor-pointer leading-relaxed">
                    {t.form.pdpaConsent}{' '}
                    <Link
                      to={`/${lang}/privacy`}
                      target="_blank"
                      className="text-[#0EA552] font-semibold underline"
                    >
                      {t.form.pdpaLink}
                    </Link>
                    *
                  </label>
                </div>

                {/* 7. Hidden fields: source URL & UTM */}
                <input type="hidden" name="source_url" value={sourceUrl} />
                <input type="hidden" name="utm_source" value={utmParams.utm_source} />
                <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
                <input type="hidden" name="utm_campaign" value={utmParams.utm_campaign} />

                {/* Submit button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto font-semibold shadow-md"
                    icon={<Send className="w-4 h-4 ml-1" />}
                  >
                    {isSubmitting ? t.form.submitting : t.form.submitBtn}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
