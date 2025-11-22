const About = () => {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-primary">Sobre Mí</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Soy desarrollador backend apasionado por crear soluciones robustas y escalables. 
            Mi enfoque principal está en el ecosistema Java, trabajando con tecnologías modernas 
            como Spring Boot y arquitecturas de microservicios.
          </p>
          <p>
            Me especializo en el diseño e implementación de APIs RESTful, gestión de bases de datos 
            y contenerización de aplicaciones. Siempre busco aplicar las mejores prácticas y mantener 
            un código limpio y mantenible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
