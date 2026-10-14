import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost, Language } from '../../types/content';
import { Button } from './Button';
import { X, Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PostQuickPreviewModalProps {
  post: BlogPost | null;
  lang: Language;
  onClose: () => void;
}

export const PostQuickPreviewModal: React.FC<PostQuickPreviewModalProps> = ({
  post,
  lang,
  onClose,
}) => {
  const navigate = useNavigate();
  const modalRef = React.useRef<HTMLDivElement>(null);

  // Close on Escape key and trap Tab key focus
  React.useEffect(() => {
    if (!post) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on close button or modal
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const firstBtn = modalRef.current.querySelector<HTMLElement>('button');
        firstBtn?.focus();
      }
    }, 50);

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, [post, onClose]);

  if (!post) return null;

  const fullUrl = `/${lang}/blog/${post.category}/${post.slug}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-preview-title"
    >
      <div
        ref={modalRef}
        className="bg-[#F3F0DF] text-[#000000] w-full max-w-2xl rounded-3xl shadow-2xl border border-black/15 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header image & close button */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-black/10 shrink-0">
          <img
            src={post.image}
            alt={post.title[lang]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0EA552]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#0EA552] text-[#F3F0DF] inline-block mb-2">
              {post.category === 'portfolio'
                ? lang === 'th'
                  ? 'กรณีศึกษา'
                  : 'Portfolio Story'
                : lang === 'th'
                ? 'คลังความรู้'
                : 'Knowledge Base'}
            </span>
            <h3
              id="quick-preview-title"
              className={`text-lg sm:text-2xl font-bold leading-tight ${
                lang === 'th' ? 'font-anakotmai' : 'font-termina'
              }`}
            >
              {post.title[lang]}
            </h3>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div className="flex items-center gap-4 text-xs text-black/60 border-b border-black/10 pb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0EA552]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0EA552]" />
              <span>{post.readTime[lang]}</span>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="font-semibold text-black">{post.author.name}</span>
            </div>
          </div>

          {post.subtitle && (
            <p className="text-sm sm:text-base text-black/80 font-medium leading-relaxed">
              {post.subtitle[lang]}
            </p>
          )}

          {post.headlineResult && (
            <div className="p-4 rounded-2xl bg-[#0EA552]/10 border border-[#0EA552]/20">
              <p className="text-xs font-bold text-[#0EA552] uppercase mb-1">
                {lang === 'th' ? 'ผลลัพธ์สำคัญ (Key Outcome)' : 'Key Impact'}
              </p>
              <p className="text-sm sm:text-base font-semibold text-black">
                {post.headlineResult[lang]}
              </p>
            </div>
          )}

          {post.keyTakeaways && post.keyTakeaways[lang] && (
            <div>
              <h4 className="text-xs font-bold text-black/50 uppercase tracking-wider mb-2">
                {lang === 'th' ? 'สาระสำคัญ (Key Takeaways)' : 'Key Takeaways'}
              </h4>
              <ul className="space-y-2 text-sm text-black/80">
                {post.keyTakeaways[lang].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0EA552] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 border-t border-black/10 bg-white flex items-center justify-between gap-4">
          <Button variant="ghost" size="sm" onClick={onClose}>
            {lang === 'th' ? 'ปิด' : 'Dismiss'}
          </Button>
          <Button
            size="sm"
            onClick={() => {
              navigate(fullUrl);
              onClose();
            }}
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            {lang === 'th' ? 'อ่านบทความฉบับเต็ม' : 'Read full article'}
          </Button>
        </div>
      </div>
    </div>
  );
};
