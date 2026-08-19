import { createContext, useContext, useEffect, useState } from 'react';
import { type Language, Languages } from '../types/language';

const htmlLang: Record<Language, string> = {
  [Languages.FRENCH]: 'fr',
  [Languages.ENGLISH]: 'en',
};

interface LanguageContextType {
  language: Language;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('french');
  const toggle = () =>
    setLanguage((l) => (l === 'french' ? 'english' : 'french'));

  useEffect(() => {
    document.documentElement.lang = htmlLang[language];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
