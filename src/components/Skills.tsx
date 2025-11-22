const Skills = () => {
  const skills = [
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "Docker",
    "PostgreSQL",
    "Git",
    "Maven",
  ];

  return (
    <section className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Tecnologías con las que trabajo</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
