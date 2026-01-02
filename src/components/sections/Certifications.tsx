import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
// import { useLanguage } from "@/contexts/LanguageContext"; // Unused import removed
import type { CollectionEntry } from 'astro:content';

interface Props {
  certifications: CollectionEntry<'certifications'>['data'][];
}

const Certifications = ({ certifications }: Props) => {
  // const { t } = useLanguage(); // Removed unused translation hook

  return (
    <section id="certifications" className="border-border border-t px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-primary mb-12 text-4xl font-bold">Certifications</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CardContainer key={cert.id} className="inter-var w-full">
              <CardBody className="bg-card group/card relative flex h-auto w-full flex-col gap-4 rounded-xl border border-black/[0.1] p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {cert.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {cert.issuer}
                </CardItem>
                <CardItem translateZ="40" className="text-muted-foreground mt-2 text-xs">
                  Issued: {cert.date}
                </CardItem>

                <div className="mt-8 flex items-center justify-between">
                  {cert.credentialUrl && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-xl bg-black px-4 py-2 text-xs font-bold text-white transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
                    >
                      Verify Credential
                    </CardItem>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
