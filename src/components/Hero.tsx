
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300 fill-mode-both">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <img
              src="/image.png"
              alt="Profile"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary shadow-glow hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
              Federico Rojas
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
              Backend Developer
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
              <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm hover:border-primary transition-colors cursor-default">Java</span>
              <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm hover:border-primary transition-colors cursor-default">Spring Boot</span>
              <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm hover:border-primary transition-colors cursor-default">Docker</span>
              <span className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm hover:border-primary transition-colors cursor-default">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
