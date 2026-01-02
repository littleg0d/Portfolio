import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Spotlight } from '@/components/ui/Spotlight';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/components/hooks/useTypewriter';
import profileImg from '@/assets/image.png';

import { FileText } from 'lucide-react';

// Robust safety check for image source
const getImgSrc = (img: string | { src: string }) => {
  if (typeof img === 'string') return img;
  if (img && typeof img === 'object' && 'src' in img) return img.src;
  return '/image.png'; // Fallback
};

const TypewriterText = ({ words }: { words: string[] }) => {
  const { text, blink } = useTypewriter(words);

  return (
    <span className="inline-block min-w-[20px]">
      {text}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-primary ml-1`}>_</span>
    </span>
  );
};

import ConstellationEffect from '@/components/ui/ConstellationEffect';

import { siteConfig } from '@/config/site';

const Hero = () => {
  const { t } = useLanguage();
  const roles = siteConfig.roles;

  return (
    <section
      id="home"
      className="font-heading bg-background relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
    >
      <ConstellationEffect />
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="hsl(var(--primary))" />

      <div className="relative z-10 w-full max-w-4xl">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
            className="relative"
          >
            <div className="bg-primary/20 absolute inset-0 animate-pulse rounded-full blur-3xl"></div>
            <img
              src={getImgSrc(profileImg)}
              alt="Profile"
              className="border-primary shadow-glow relative h-48 w-48 rounded-full border-2 object-cover transition-transform duration-500 hover:scale-105 md:h-64 md:w-64"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-[length:var(--font-size-3xl)] font-bold text-transparent"
            >
              Federico Rojas
            </motion.h1>

            {/* Subtitle with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-foreground mb-6 flex h-[40px] items-center justify-center text-[length:var(--font-size-xl)] md:justify-start"
            >
              <span>{'>'} </span>
              <TypewriterText words={roles} />
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="cursor-pointer rounded-full text-base font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  <a href="#projects">{t('hero.cta')}</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="cursor-pointer rounded-full text-base transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  <a href="#contact">{t('hero.contact')}</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="border-primary/20 text-primary hover:text-primary hover:border-primary/50 cursor-pointer gap-2 rounded-full border text-base transition-all duration-300 hover:bg-white/5"
                >
                  <a href="/resume.pdf" download="Federico_Rojas_CV.pdf">
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
