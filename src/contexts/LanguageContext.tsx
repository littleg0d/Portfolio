import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

export type Language = 'en' | 'es';

export const languageAtom = atom<Language>('en');

import { translations } from '@/i18n/translations';

export const useLanguage = () => {
  const language = useStore(languageAtom);

  const setLanguage = (lang: Language) => {
    languageAtom.set(lang);
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return { language, setLanguage, t };
};

export const LanguageProvider = ({ children }: { children: any }) => <>{children}</>;
