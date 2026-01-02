'use client';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import { cn } from '@/lib/utils';

const LanguageToggle = ({ className }: { className?: string }) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        'relative flex cursor-pointer items-center justify-center rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-neutral-100 active:scale-95 dark:border-white/[0.2] dark:text-white dark:hover:bg-neutral-800',
        className
      )}
    >
      <span>{language.toUpperCase()}</span>
      <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </button>
  );
};

export default LanguageToggle;
