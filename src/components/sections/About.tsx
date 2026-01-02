import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-border border-t px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-primary mb-8 text-4xl font-bold">{t('about.title')}</h2>
        <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
