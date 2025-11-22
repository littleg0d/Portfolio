
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <img
              src="/image.png"
              alt="Profile"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary shadow-glow"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Federico Rojas
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Backend Developer
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm">Java</span>
              <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm">Spring Boot</span>
              <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm">Docker</span>
              <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
