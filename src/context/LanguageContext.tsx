import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from '@/data/portfolio';
import { getTranslation, type Translation } from '@/data/translations';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLang(): Language {
  if (typeof window === 'undefined') return 'en';
  // Check URL path first — e.g. /#/es or /?lang=es
  const hash = window.location.hash;
  const hashLang = hash.match(/^#\/(es|en|no)$/);
  if (hashLang) return hashLang[1] as Language;
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get('lang');
  if (queryLang === 'es' || queryLang === 'en' || queryLang === 'no') return queryLang;
  const stored = window.localStorage.getItem('lang');
  if (stored === 'es' || stored === 'en' || stored === 'no') return stored;
  const browser = navigator.language.toLowerCase();
  if (browser.startsWith('es')) return 'es';
  if (browser.startsWith('no') || browser.startsWith('nb') || browser.startsWith('nn')) return 'no';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem('lang', lang);
    // Update URL hash for shareable language-specific URLs
    const hashMatch = window.location.hash.match(/^#\/(es|en|no)$/);
    if (hashMatch) {
      window.history.replaceState(null, '', `#/${lang}`);
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    // Update URL for shareable links
    const currentHash = window.location.hash;
    if (currentHash.match(/^#\/(es|en|no)$/)) {
      window.history.replaceState(null, '', `#/${newLang}`);
    }
  };

  const t = getTranslation(lang);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
