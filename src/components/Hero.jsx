import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div name='home' className='w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-transparent to-slate-950/50'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full gap-8 md:gap-16'>

        {/* Text Content */}
        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left h-full order-2 md:order-1'>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-cyan-400 font-medium mb-4 tracking-wide text-lg'
          >
            Hola, mi nombre es
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-5xl sm:text-7xl font-bold text-slate-100 mb-4 tracking-tight'
          >
            Federico Rojas
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-3xl sm:text-5xl font-bold text-slate-400 mb-6'
          >
            Software Engineer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-slate-400 text-lg max-w-[600px] mb-10 leading-relaxed'
          >
            Especialista en construir APIs robustas y sistemas escalables con <span className='text-cyan-400 font-semibold'>Java</span>, <span className='text-cyan-400 font-semibold'>Spring Boot</span> y microservicios.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#projects"
              className='group border-2 border-cyan-400 text-cyan-400 px-8 py-3 flex items-center rounded-full hover:bg-cyan-400 hover:text-slate-950 font-bold transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]'
            >
              Ver Proyectos
              <span className='group-hover:translate-x-1 duration-300'>
                <HiArrowNarrowRight className='ml-3 text-xl' />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='order-1 md:order-2 relative'
        >
          <div className='w-48 h-48 md:w-72 md:h-72 relative z-10'>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&h=600"
              alt="Federico Rojas"
              className='w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl'
            />
            <div className='absolute inset-0 rounded-full ring-4 ring-cyan-400/30 animate-pulse'></div>
          </div>
          {/* Decorative background blur */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/20 blur-3xl rounded-full -z-10'></div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
