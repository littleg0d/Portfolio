'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { ProjectData } from '@/types';
import { ProjectCard } from '../molecules/ProjectCard';

interface ProjectsProps {
  projects: ProjectData[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="border-border border-t px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-primary mb-4 overflow-visible text-4xl font-bold whitespace-nowrap">
            {t('projects.title')}
          </h2>
          <div className="bg-primary h-1 w-20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.titleKey}
              project={project}
              onDetailsClick={setSelectedProject}
            />
          ))}
        </div>
      </div>{' '}
      {/* Closing div for max-w-6xl mx-auto */}
      {/* Dialog for Details (Only for Grid View essentially, but good to keep) */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="mb-4 text-2xl font-bold">
              {selectedProject && t(selectedProject.titleKey)}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              {selectedProject && t(selectedProject.detailsKey)}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <h4 className="mb-3 font-semibold">{t('projects.technologies')}</h4>
            <div className="mb-6 flex flex-wrap gap-2">
              {selectedProject?.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-secondary border-border rounded-full border px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {selectedProject?.githubUrl && (
                <Button asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t('projects.viewCode')}
                  </a>
                </Button>
              )}
              {selectedProject?.liveUrl && (
                <Button variant="outline" asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t('projects.viewDemo')}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
