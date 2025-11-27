import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      titleKey: "projects.ecommerce.title",
      descKey: "projects.ecommerce.desc",
      detailsKey: "projects.ecommerce.details",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/littleg0d",
      liveUrl: null,
    },
    {
      titleKey: "projects.microservices.title",
      descKey: "projects.microservices.desc",
      detailsKey: "projects.microservices.details",
      technologies: ["Java", "Spring Cloud", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/littleg0d",
      liveUrl: null,
    },
    {
      titleKey: "projects.usermgmt.title",
      descKey: "projects.usermgmt.desc",
      detailsKey: "projects.usermgmt.details",
      technologies: ["Java", "Spring Boot", "Maven", "PostgreSQL"],
      githubUrl: "https://github.com/littleg0d",
      liveUrl: null,
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">{t("projects.title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.titleKey}
              className="bg-card border-border hover:border-primary transition-all cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                <CardTitle className="text-xl">{t(project.titleKey)}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t(project.descKey)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">
                {selectedProject && t(selectedProject.titleKey)}
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed">
                {selectedProject && t(selectedProject.detailsKey)}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">{t("projects.technologies")}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject?.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-sm rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selectedProject?.githubUrl && (
                  <Button asChild>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {t("projects.viewCode")}
                    </a>
                  </Button>
                )}
                {selectedProject?.liveUrl && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("projects.viewDemo")}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
