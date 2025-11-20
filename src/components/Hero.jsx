import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen flex items-center justify-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center text-center h-full'>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-cyan-400 font-medium mb-4 tracking-wide'
        >
          Hola, mi nombre es
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-5xl sm:text-7xl font-bold text-slate-100 mb-4'
        >
          Federico Rojas
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-3xl sm:text-5xl font-bold text-slate-400 mb-6'
        >
          Ingeniero de Software Backend
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-slate-400 text-lg max-w-[600px] mb-10 leading-relaxed'
        >
          Especialista en construir APIs robustas y sistemas escalables con <span className='text-cyan-400'>Java</span>, <span className='text-cyan-400'>Spring Boot</span> y microservicios.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#projects"
            className='group border border-cyan-400 text-cyan-400 px-8 py-3 flex items-center rounded-full hover:bg-cyan-400/10 transition-all duration-300'
          >
            Ver Proyectos
            <span className='group-hover:translate-x-1 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
