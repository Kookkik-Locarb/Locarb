import React, { useState, useEffect } from 'react';
import { Language } from '../../types/content';
import { CONTENT_TH } from '../../content/th';
import { CONTENT_EN } from '../../content/en';
import { Button } from './Button';
import { Shield, Settings as SettingsIcon, Check, X } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'locarb_cookie_consent_v1';

// Global mock/stub loaders behind consent
export const initTrackingScripts = (prefs: CookiePreferences) => {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer regardless for app events
  (window as unknown as { dataLayer: unknown[] }).dataLayer =
    (window as unknown as { dataLayer: unknown[] }).dataLayer || [];

  if (prefs.analytics) {
    // Stub GA4 loader
    console.info('[LO-CARB Analytics] Consent granted: GA4 initialized.');
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag = function (
      ...args: unknown[]
    ) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args);
    };
  }

  if (prefs.marketing) {
    // Stub LinkedIn Insight Tag and Meta Pixel
    console.info('[LO-CARB Marketing] Consent granted: LinkedIn Insight Tag & Meta Pixel loaded.');
    (window as unknown as { lintrk?: (...args: unknown[]) => void }).lintrk = function (
      ...args: unknown[]
    ) {
      console.log('[LinkedIn Insight Tag Stub]', ...args);
    };
    (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq = function (
      ...args: unknown[]
    ) {
      console.log('[Meta Pixel Stub]', ...args);
    };
  }
};

export const CookieConsent: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = (lang === 'th' ? CONTENT_TH : CONTENT_EN).cookies;
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setIsOpen(true);
    } else {
      try {
        const parsed: CookiePreferences = JSON.parse(saved);
        initTrackingScripts(parsed);
      } catch {
        setIsOpen(true);
      }
    }

    // Listener for footer "Cookie settings" trigger
    const handleOpenSettings = () => {
      setShowModal(true);
      setIsOpen(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const handleSave = (customPrefs?: Partial<CookiePreferences>) => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: customPrefs?.analytics ?? analytics,
      marketing: customPrefs?.marketing ?? marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    initTrackingScripts(prefs);
    setIsOpen(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    handleSave({ analytics: true, marketing: true });
  };

  const handleRejectNonEssential = () => {
    setAnalytics(false);
    setMarketing(false);
    handleSave({ analytics: false, marketing: false });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Banner */}
      <div
        role="region"
        aria-label="Cookie consent banner"
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#000000]/95 backdrop-blur-md text-[#F3F0DF] border-t border-white/10 shadow-2xl animate-fade-in"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2 rounded-xl bg-[#0EA552]/20 text-[#0EA552] shrink-0 mt-0.5">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white mb-1">
                {t.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
                {t.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowModal(true)}
              className="border-white/30 text-[#F3F0DF] hover:bg-white/10 text-xs"
              icon={<SettingsIcon className="w-3.5 h-3.5" />}
            >
              {t.settings}
            </Button>
            <Button
              variant="offwhite"
              size="sm"
              onClick={handleRejectNonEssential}
              className="text-xs"
            >
              {t.rejectNonEssential}
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAcceptAll}
              className="text-xs font-semibold"
              icon={<Check className="w-3.5 h-3.5" />}
            >
              {t.acceptAll}
            </Button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#F3F0DF] text-[#000000] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-black/10 text-black/60 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 font-anakotmai">
              {t.title}
            </h3>
            <p className="text-sm text-black/70 mb-6 leading-relaxed">
              {t.description}
            </p>

            <div className="space-y-4 mb-8">
              {/* Strictly necessary */}
              <div className="p-4 rounded-2xl bg-white border border-black/8 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-black mb-1">
                    {t.categories.necessary.name}
                  </h4>
                  <p className="text-xs text-black/60 leading-relaxed">
                    {t.categories.necessary.desc}
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase px-2.5 py-1 rounded bg-[#0EA552]/15 text-[#0EA552] shrink-0">
                  Always On
                </span>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-white border border-black/8 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-black mb-1">
                    {t.categories.analytics.name}
                  </h4>
                  <p className="text-xs text-black/60 leading-relaxed">
                    {t.categories.analytics.desc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0EA552]"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-2xl bg-white border border-black/8 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-black mb-1">
                    {t.categories.marketing.name}
                  </h4>
                  <p className="text-xs text-black/60 leading-relaxed">
                    {t.categories.marketing.desc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0EA552]"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectNonEssential}
                className="w-full sm:w-auto text-xs"
              >
                {t.rejectNonEssential}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleSave()}
                className="w-full sm:w-auto text-xs font-semibold"
              >
                {t.savePreferences}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
