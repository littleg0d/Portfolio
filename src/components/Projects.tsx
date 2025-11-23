import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "E-Commerce API REST",
      description: "API RESTful para plataforma de e-commerce con gestión de productos, carritos y órdenes. Implementa autenticación JWT y patrones de diseño enterprise.",
      details: "Esta API fue construida utilizando Spring Boot y sigue una arquitectura en capas. Incluye endpoints para la gestión completa de productos, usuarios y órdenes de compra. La seguridad está manejada con Spring Security y JWT. La base de datos es PostgreSQL y se utiliza Hibernate como ORM. Se implementaron pruebas unitarias con JUnit y Mockito.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/littleg0d",
      liveUrl: null,
    },
    {
      title: "Sistema de Microservicios",
      description: "Arquitectura de microservicios con Spring Cloud, incluyendo service discovery, config server y API gateway. Implementa circuit breaker y distributed tracing.",
      details: "Este sistema demuestra una arquitectura de microservicios robusta. Utiliza Eureka para el descubrimiento de servicios, Spring Cloud Config para la configuración centralizada y Spring Cloud Gateway como punto de entrada. Se implementó tolerancia a fallos con Resilience4j y trazabilidad distribuida con Zipkin y Sleuth.",
      technologies: ["Java", "Spring Cloud", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/littleg0d",
      liveUrl: null,
    },
    {
      title: "API de Gestión de Usuarios",
      description: "Sistema de gestión de usuarios con roles y permisos. Incluye autenticación, autorización y auditoría de cambios.",
      details: "Una solución completa para la administración de identidad y acceso. Permite la creación de roles personalizados y la asignación de permisos granulares. Incluye un sistema de auditoría que registra todas las acciones importantes realizadas por los usuarios. La documentación de la API se genera automáticamente con Swagger/OpenAPI.",
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
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary transition-all cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
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
              <DialogTitle className="text-2xl font-bold mb-4">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">
                {selectedProject?.details}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Tecnologías:</h4>
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
                      Ver Código
                    </a>
                  </Button>
                )}
                {selectedProject?.liveUrl && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
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
