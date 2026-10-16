import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Language } from './types/content';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieConsent } from './components/common/CookieConsent';
import { SearchModal } from './components/common/SearchModal';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/about/StoryPage';
import { CertificatesPage } from './pages/about/CertificatesPage';
import { BoardPage } from './pages/about/BoardPage';
import { SolutionDetailPage } from './pages/solutions/SolutionDetailPage';
import { BlogHubPage } from './pages/blog/BlogHubPage';
import { BlogPostDetailPage } from './pages/blog/BlogPostDetailPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/legal/LegalPage';

// Scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Root layout for localized pages
const LocalizedLayout: React.FC<{ children: (lang: Language) => React.ReactNode }> = ({
  children,
}) => {
  const { lang: rawLang } = useParams<{ lang: string }>();
  const [searchOpen, setSearchOpen] = useState(false);

  // Default to 'en' first
  const lang: Language = rawLang === 'th' ? 'th' : 'en';

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#0E0E0C] selection:bg-[#0B7A3E] selection:text-white">
      <ScrollToTop />
      <Navbar lang={lang} onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex-1 w-full">{children(lang)}</main>
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
      <SearchModal lang={lang} isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirect to /en (English first) */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* /th and /en mirrored routes */}
        <Route
          path="/:lang"
          element={
            <LocalizedLayout>
              {(lang) => <HomePage lang={lang} />}
            </LocalizedLayout>
          }
        />

        {/* About subpages */}
        <Route
          path="/:lang/about/story"
          element={
            <LocalizedLayout>
              {(lang) => <StoryPage lang={lang} />}
            </LocalizedLayout>
          }
        />
        <Route
          path="/:lang/about/certificates"
          element={
            <LocalizedLayout>
              {(lang) => <CertificatesPage lang={lang} />}
            </LocalizedLayout>
          }
        />
        <Route
          path="/:lang/about/board"
          element={
            <LocalizedLayout>
              {(lang) => <BoardPage lang={lang} />}
            </LocalizedLayout>
          }
        />

        {/* Solutions */}
        <Route
          path="/:lang/solutions/:slug"
          element={
            <LocalizedLayout>
              {(lang) => <SolutionDetailPage lang={lang} />}
            </LocalizedLayout>
          }
        />

        {/* Blog hub */}
        <Route
          path="/:lang/blog"
          element={
            <LocalizedLayout>
              {(lang) => <BlogHubPage lang={lang} />}
            </LocalizedLayout>
          }
        />

        {/* Blog post detail */}
        <Route
          path="/:lang/blog/:category/:slug"
          element={
            <LocalizedLayout>
              {(lang) => <BlogPostDetailPage lang={lang} />}
            </LocalizedLayout>
          }
        />

        {/* Contact Page */}
        <Route
          path="/:lang/contact"
          element={
            <LocalizedLayout>
              {(lang) => <ContactPage lang={lang} />}
            </LocalizedLayout>
          }
        />

        {/* Legal Pages */}
        <Route
          path="/:lang/privacy"
          element={
            <LocalizedLayout>
              {(lang) => <LegalPage lang={lang} type="privacy" />}
            </LocalizedLayout>
          }
        />
        <Route
          path="/:lang/terms"
          element={
            <LocalizedLayout>
              {(lang) => <LegalPage lang={lang} type="terms" />}
            </LocalizedLayout>
          }
        />

        {/* Catch-all redirect to /en */}
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
}
