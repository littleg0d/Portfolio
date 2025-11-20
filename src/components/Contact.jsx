
const Contact = () => {
  return (
    <div name='contact' className='w-full py-20 flex justify-center items-center'>
        <form method='POST' action="https://getform.io/f/your-form-id" className='flex flex-col max-w-[600px] w-full px-8'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-slate-100 inline'>Contacto</p>
                <div className='h-1 w-20 bg-cyan-400 rounded-full mt-2'></div>
                <p className='text-slate-400 py-4'>// Hablemos de código y arquitectura</p>
            </div>

            <div className='flex flex-col gap-4'>
              <input className='bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors' type="text" placeholder='Nombre' name='name' />
              <input className='bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors' type="email" placeholder='Email' name='email' />
              <textarea className='bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors' name="message" rows="6" placeholder='Mensaje'></textarea>
            </div>

            <button className='text-slate-900 bg-cyan-400 hover:bg-cyan-300 font-bold px-8 py-4 my-8 mx-auto flex items-center rounded-full transition-colors duration-300'>
              Enviar Mensaje
            </button>
        </form>
    </div>
  );
};

export default Contact;
