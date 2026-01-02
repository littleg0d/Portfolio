import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { educationData } from '@/data/education';

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="border-border border-t px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-primary mb-12 text-4xl font-bold">{t('education.title')}</h2>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-card border-border hover:border-primary rounded-lg border p-8 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary mt-2 h-2 w-2 rounded-full"></div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-2xl font-semibold">{t(item.titleKey)}</h3>
                    {item.badgeKey && (
                      <Badge variant="secondary" className="text-xs">
                        {t(item.badgeKey)}
                      </Badge>
                    )}
                  </div>
                  <p className="text-primary mb-2 text-lg">{t(item.schoolKey)}</p>
                  <p className="text-muted-foreground">{t(item.locationKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
