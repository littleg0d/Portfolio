import { FaDocker, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiApachemaven, SiHibernate, SiPostgresql, SiSpring, SiSpringboot } from 'react-icons/si';

const SkillCard = ({ icon, name, color }) => (
  <div className='bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-800 hover:border-cyan-400/30 flex flex-col items-center justify-center gap-4 group'>
    <div className={`text-5xl ${color} group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <p className='font-medium text-slate-300'>{name}</p>
  </div>
);

const Skills = () => {
  return (
    <div name='skills' className='w-full py-20'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
          <div className='mb-12'>
              <p className='text-4xl font-bold text-slate-100 inline border-b-4 border-cyan-400/0'>Habilidades</p>
              <div className='h-1 w-20 bg-cyan-400 rounded-full mt-2'></div>
              <p className='py-4 text-slate-400'>// Tecnologías con las que construyo soluciones</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
              <SkillCard icon={<FaJava />} name="Java" color="text-orange-500" />
              <SkillCard icon={<SiSpringboot />} name="Spring Boot" color="text-green-500" />
              <SkillCard icon={<SiSpring />} name="Spring Cloud" color="text-green-600" />
              <SkillCard icon={<SiHibernate />} name="JPA / Hibernate" color="text-slate-400" />
              <SkillCard icon={<SiPostgresql />} name="PostgreSQL" color="text-blue-400" />
              <SkillCard icon={<FaDocker />} name="Docker" color="text-blue-600" />
              <SkillCard icon={<FaGitAlt />} name="Git" color="text-orange-600" />
              <SkillCard icon={<SiApachemaven />} name="Maven" color="text-red-600" />
          </div>
      </div>
    </div>
  );
};

export default Skills;
