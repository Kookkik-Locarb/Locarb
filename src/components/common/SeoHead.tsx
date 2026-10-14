import React, { useEffect } from 'react';
import { Language } from '../../types/content';

interface SeoHeadProps {
  lang: Language;
  title: string;
  description: string;
  pathname: string;
  schema?: Record<string, unknown>;
  type?: 'website' | 'article';
  image?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  lang,
  title,
  description,
  pathname,
  schema,
  type = 'website',
  image = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
}) => {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | LO-CARB`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update OpenGraph Tags
    const updateMeta = (prop: string, val: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', val);
    };

    updateMeta('og:title', fullTitle);
    updateMeta('og:description', description);
    updateMeta('og:type', type);
    updateMeta('og:image', image);
    updateMeta('og:url', window.location.href);

    // 4. Update HTML lang attribute
    document.documentElement.lang = lang;

    // 5. Update hreflang link tags
    const origin = window.location.origin;
    // Calculate opposite language path
    const thPath = pathname.replace(/^\/(th|en)/, '/th');
    const enPath = pathname.replace(/^\/(th|en)/, '/en');

    const updateLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      let linkEl = document.querySelector(selector) as HTMLLinkElement | null;
      if (!linkEl) {
        linkEl = document.createElement('link');
        linkEl.rel = rel;
        if (hreflang) linkEl.hreflang = hreflang;
        document.head.appendChild(linkEl);
      }
      linkEl.href = href;
    };

    updateLinkTag('alternate', `${origin}${thPath}`, 'th');
    updateLinkTag('alternate', `${origin}${enPath}`, 'en');
    updateLinkTag('alternate', `${origin}${enPath}`, 'x-default');
    updateLinkTag('canonical', window.location.href);

    // 6. JSON-LD Structured Data
    const defaultOrgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'LO-CARB',
      url: 'https://locarb.green',
      logo: 'https://locarb.green/assets/logo.png',
      description: 'Thailand premier climate-tech and sustainability consultancy.',
      slogan: 'We put the world on a carbon diet.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'TH',
        addressLocality: 'Bangkok',
      },
      sameAs: [
        'https://www.linkedin.com/company/locarb-green',
        'https://www.facebook.com/locarb.green',
      ],
    };

    const targetSchema = schema || defaultOrgSchema;
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(targetSchema);
  }, [lang, title, description, pathname, schema, type, image]);

  return null;
};
