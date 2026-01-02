import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/data/skills';

const Skills = () => {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<{ title: string; description: string } | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="border-border scroll-mt-28 border-t px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-primary text-4xl font-bold">{t('skills.title')}</h2>
          <Button
            variant={showDetails ? 'default' : 'outline'}
            onClick={() => setShowDetails(!showDetails)}
            className="relative z-50 hidden cursor-pointer transition-all md:flex"
          >
            {showDetails ? t('skills.hideDetails') : t('skills.showDetails')}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className={cn(
                'group focus-visible:ring-primary relative h-full w-full rounded-xl p-2 outline-none focus-visible:ring-2',
                !showDetails ? 'cursor-pointer' : 'cursor-default',
                !showAll && idx >= 3 ? 'hidden md:block' : 'block'
              )}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                !showDetails &&
                setSelectedSkill({
                  title: skill.name,
                  description: t(skill.descKey),
                })
              }
              onKeyDown={(e) => {
                if (!showDetails && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setSelectedSkill({
                    title: skill.name,
                    description: t(skill.descKey),
                  });
                }
              }}
              role={!showDetails ? 'button' : 'presentation'}
              tabIndex={!showDetails ? 0 : -1}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="bg-primary/10 absolute inset-0 block h-full w-full rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <div className="bg-card border-border group-hover:border-primary relative z-20 h-full w-full overflow-hidden rounded-2xl border p-4 transition-colors duration-500">
                <div className="relative z-50 p-4">
                  <div className="mb-2">{skill.icon}</div>
                  <h4 className="text-foreground mt-4 text-center font-bold tracking-wide">
                    {skill.name}
                  </h4>
                  {showDetails && (
                    <p className="text-muted-foreground mt-8 text-sm leading-relaxed tracking-wide">
                      {t(skill.descKey)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Show More Button */}
        <div className="mt-4 flex justify-center md:hidden">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="w-full max-w-xs"
          >
            {showAll ? 'Show Less' : 'Show More'}{' '}
            {/* Hardcoded for now or add translation key later */}
          </Button>
        </div>

        <Dialog open={!!selectedSkill} onOpenChange={(open) => !open && setSelectedSkill(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-primary text-2xl font-bold">
                {selectedSkill?.title}
              </DialogTitle>
              <DialogDescription className="pt-4 text-base leading-relaxed">
                {selectedSkill?.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Skills;
