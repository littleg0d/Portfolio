'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Code2, Home, Mail, User } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';

export const DynamicNavbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useLanguage();

  useMotionValueEvent(scrollY, 'change', (current) => {
    // Show on scroll up, hide on scroll down (smart behavior)
    if (typeof current === 'number') {
      const direction = current - lastScrollY;

      if (current < 50) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      setLastScrollY(current);
    }
  });

  // Detect idle state to show navbar
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(true), 800); // Show after 800ms of no scrolling
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  const navItems = [
    { name: t('nav.home'), link: '#home', icon: <Home className="h-4 w-4" /> },
    { name: t('nav.about'), link: '#about', icon: <User className="h-4 w-4" /> },
    { name: t('nav.skills'), link: '#skills', icon: <Code2 className="h-4 w-4" /> },
    { name: t('nav.projects'), link: '#projects', icon: <Code2 className="h-4 w-4" /> },
    { name: t('nav.education'), link: '#education', icon: <Award className="h-4 w-4" /> },
    { name: t('nav.certifications'), link: '#certifications', icon: <Award className="h-4 w-4" /> },
    { name: t('nav.contact'), link: '#contact', icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-0 top-4 z-[5000] mx-auto hidden w-fit md:flex',
          'pointer-events-none items-center justify-center' // Container is pointer-events-none, children restore it
        )}
      >
        <div className="glass-panel pointer-events-auto flex items-center justify-center gap-2 rounded-full px-4 py-2 shadow-2xl shadow-black/40">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              to={navItem.link.replace('#', '')} // react-scroll takes ID without #
              spy={true}
              smooth={true}
              duration={500}
              offset={-50} // Adjust for navbar height
              activeClass="bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.5)] scale-105 font-bold"
              className={cn(
                'relative flex cursor-pointer items-center space-x-1 rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-white dark:text-neutral-200'
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden text-sm font-medium sm:block">{navItem.name}</span>
            </Link>
          ))}
          <div className="mx-2 h-4 w-[1px] bg-white/20"></div>
          <LanguageToggle />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
