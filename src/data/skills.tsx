import { FaJava, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiSpring, SiPostgresql, SiApachemaven } from "react-icons/si";
import type { Skill } from "@/types";

export const skills: Skill[] = [
    { name: "Java", descKey: "skills.java.desc", icon: <FaJava className="w-8 h-8 mx-auto mb-4 text-orange-500" /> },
    { name: "Spring Boot", descKey: "skills.springboot.desc", icon: <SiSpringboot className="w-8 h-8 mx-auto mb-4 text-green-500" /> },
    { name: "Spring Cloud", descKey: "skills.springcloud.desc", icon: <SiSpring className="w-8 h-8 mx-auto mb-4 text-green-600" /> },
    { name: "Docker", descKey: "skills.docker.desc", icon: <FaDocker className="w-8 h-8 mx-auto mb-4 text-blue-500" /> },
    { name: "PostgreSQL", descKey: "skills.postgresql.desc", icon: <SiPostgresql className="w-8 h-8 mx-auto mb-4 text-blue-400" /> },
    { name: "Git", descKey: "skills.git.desc", icon: <FaGitAlt className="w-8 h-8 mx-auto mb-4 text-red-500" /> },
    { name: "Maven", descKey: "skills.maven.desc", icon: <SiApachemaven className="w-8 h-8 mx-auto mb-4 text-red-600" /> },
];
