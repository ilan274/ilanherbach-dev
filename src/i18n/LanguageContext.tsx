import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { Content, content, Locale } from './content';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: content.en,
});

const STORAGE_KEY = 'locale';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Restore the saved choice, or fall back to the browser language.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (saved === 'en' || saved === 'pt') setLocaleState(saved);
    else if (navigator.language?.toLowerCase().startsWith('pt')) setLocaleState('pt');
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: content[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
