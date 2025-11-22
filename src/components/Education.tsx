const Education = () => {
  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Educación</h2>
        <div className="space-y-8">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Ingeniería en Computación</h3>
                <p className="text-lg text-primary mb-2">Universidad Nacional de La Plata (UNLP)</p>
                <p className="text-muted-foreground">La Plata, Buenos Aires</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Técnico en Informática</h3>
                <p className="text-lg text-primary mb-2">Escuela Técnica N°1</p>
                <p className="text-muted-foreground">Chacabuco, Buenos Aires</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
