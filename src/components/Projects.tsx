import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API REST",
      description: "API RESTful para plataforma de e-commerce con gestión de productos, carritos y órdenes. Implementa autenticación JWT y patrones de diseño enterprise.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/littleg0d",
      liveUrl: null,
    },
    {
      title: "Sistema de Microservicios",
      description: "Arquitectura de microservicios con Spring Cloud, incluyendo service discovery, config server y API gateway. Implementa circuit breaker y distributed tracing.",
      technologies: ["Java", "Spring Cloud", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/littleg0d",
      liveUrl: null,
    },
    {
      title: "API de Gestión de Usuarios",
      description: "Sistema de gestión de usuarios con roles y permisos. Incluye autenticación, autorización y auditoría de cambios.",
      technologies: ["Java", "Spring Boot", "Maven", "PostgreSQL"],
      githubUrl: "https://github.com/littleg0d",
      liveUrl: null,
    },
  ];

  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card border-border hover:border-primary transition-all">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
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
                <div className="flex gap-2">
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
      </div>
    </section>
  );
};

export default Projects;
