
const About = () => {
  return (
    <div name='about' className='w-full py-20 flex justify-center items-center'>
      <div className='max-w-[1000px] w-full px-8 grid sm:grid-cols-2 gap-12 items-center'>
        <div className='sm:text-right'>
          <p className='text-4xl font-bold text-slate-100 mb-4'>
            Acerca de mí
          </p>
          <div className='h-1 w-20 bg-cyan-400 ml-auto hidden sm:block rounded-full'></div>
          <div className='h-1 w-20 bg-cyan-400 mr-auto sm:hidden rounded-full mb-4'></div>
        </div>

        <div>
          <p className='text-xl font-medium text-slate-300 mb-4'>
            Hola. Soy Federico, un apasionado por el desarrollo backend.
          </p>
          <p className='text-slate-400 leading-relaxed mb-4'>
            Me especializo en la arquitectura de software y la resolución de problemas complejos en el lado del servidor.
            Mi enfoque no es solo escribir código que funcione, sino diseñar sistemas <span className='text-cyan-400'>escalables</span>, <span className='text-cyan-400'>mantenibles</span> y <span className='text-cyan-400'>eficientes</span>.
          </p>
          <p className='text-slate-400 leading-relaxed'>
            Aporto valor a los equipos mediante la implementación de prácticas de código limpio, TDD y metodologías ágiles.
            Creo firmemente que una buena arquitectura es la base de cualquier producto exitoso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
