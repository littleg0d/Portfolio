import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Skills = () => {
  const { t } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; descKey: string } | null>(null);

  const skills = [
    { name: "Java", descKey: "skills.java.desc" },
    { name: "Spring Boot", descKey: "skills.springboot.desc" },
    { name: "Spring Cloud", descKey: "skills.springcloud.desc" },
    { name: "Docker", descKey: "skills.docker.desc" },
    { name: "PostgreSQL", descKey: "skills.postgresql.desc" },
    { name: "Git", descKey: "skills.git.desc" },
    { name: "Maven", descKey: "skills.maven.desc" },
  ];

  return (
    <section id="skills" className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">{t("skills.title")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-200 cursor-pointer hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedSkill} onOpenChange={(open) => !open && setSelectedSkill(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">{selectedSkill?.name}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed pt-4">
                {selectedSkill && t(selectedSkill.descKey)}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Skills;
