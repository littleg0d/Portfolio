import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { useLanguage } from '@/contexts/LanguageContext';
import type { ProjectData } from '@/types';

interface ProjectCardProps {
  project: ProjectData;
  onDetailsClick: (project: ProjectData) => void;
}

export const ProjectCard = ({ project, onDetailsClick }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="glass-panel group/card relative flex h-auto w-full flex-col gap-4 rounded-xl p-6 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
          {t(project.titleKey)}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 line-clamp-3 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {t(project.descKey)}
        </CardItem>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <CardItem
              key={tech}
              translateZ={40}
              className="bg-secondary border-border inline-block w-auto rounded-full border px-2 py-1 text-[10px]"
            >
              {tech}
            </CardItem>
          ))}
          {project.technologies.length > 3 && (
            <CardItem
              translateZ={40}
              className="text-muted-foreground inline-block w-auto px-2 py-1 text-[10px]"
            >
              +{project.technologies.length - 3}
            </CardItem>
          )}
        </div>
        <div className="mt-8 flex items-center justify-between gap-4">
          <CardItem translateZ={100} className="pointer-events-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDetailsClick(project);
              }}
              className="bg-card border-border pointer-events-auto relative z-50 cursor-pointer rounded-xl border px-4 py-2 text-xs font-normal transition-all hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
            >
              Details →
            </button>
          </CardItem>
          <div className="flex gap-3">
            {project.githubUrl && (
              <CardItem
                translateZ={20}
                as="a"
                href={project.githubUrl}
                target="_blank"
                className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:scale-110 hover:bg-neutral-800 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                GitHub
              </CardItem>
            )}
            {project.liveUrl && (
              <CardItem
                translateZ={20}
                as="a"
                href={project.liveUrl}
                target="_blank"
                className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Demo
              </CardItem>
            )}
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};
