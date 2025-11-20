
const ProjectCard = ({ title, status, description, tags, statusColor }) => (
  <div className='bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2 group'>
    <div className='flex justify-between items-start mb-4'>
      <h3 className='text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors'>{title}</h3>
    </div>

    <div className='mb-6'>
      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
        {status}
      </span>
    </div>

    <p className='text-slate-400 mb-6 leading-relaxed'>
      {description}
    </p>

    <div className='flex flex-wrap gap-2 mt-auto'>
      {tags.map((tag, index) => (
        <span key={index} className='text-xs font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full'>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <div name='projects' className='w-full py-20'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <div className='mb-12'>
          <p className='text-4xl font-bold text-slate-100 inline'>Proyectos</p>
          <div className='h-1 w-20 bg-cyan-400 rounded-full mt-2'></div>
          <p className='py-4 text-slate-400'>// Arquitecturas en las que estoy trabajando</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <ProjectCard
              title="API Gateway eCommerce"
              status="En desarrollo"
              statusColor="bg-yellow-500/20 text-yellow-500"
              description="Orquestación de microservicios con Spring Cloud Gateway. Implementación de routing dinámico, seguridad centralizada y rate limiting."
              tags={['Java 17', 'Spring Cloud', 'Eureka']}
            />

            <ProjectCard
              title="Auth System OAuth2"
              status="Planeando"
              statusColor="bg-blue-500/20 text-blue-500"
              description="Servidor de autorización robusto compatible con OAuth 2.0 y OIDC. Gestión de tokens JWT y seguridad de sesiones con Redis."
              tags={['Spring Security', 'JWT', 'Redis']}
            />

            <ProjectCard
              title="Resiliency Patterns"
              status="En desarrollo"
              statusColor="bg-yellow-500/20 text-yellow-500"
              description="Implementación de patrones de resiliencia como Circuit Breaker y Retry para garantizar la disponibilidad en sistemas distribuidos."
              tags={['Resilience4j', 'Docker', 'Grafana']}
            />
        </div>
      </div>
    </div>
  );
};

export default Projects;
