import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className='fixed w-full h-[80px] flex justify-between items-center px-6 md:px-12 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800/50'>
      <div>
        <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>FR</h1>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex gap-8'>
        {['Inicio', 'Acerca de', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
           <li key={item}>
             <a
               href={`#${item === 'Inicio' ? 'home' : item === 'Acerca de' ? 'about' : item === 'Habilidades' ? 'skills' : item === 'Proyectos' ? 'projects' : 'contact'}`}
               className='text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-300'
             >
               {item}
             </a>
           </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-slate-300 hover:text-cyan-400 transition-colors'>
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-950 flex flex-col justify-center items-center gap-8'}>
        {['Inicio', 'Acerca de', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
           <li key={item} className='text-3xl'>
             <a
               onClick={handleClick}
               href={`#${item === 'Inicio' ? 'home' : item === 'Acerca de' ? 'about' : item === 'Habilidades' ? 'skills' : item === 'Proyectos' ? 'projects' : 'contact'}`}
               className='text-slate-300 hover:text-cyan-400 transition-colors'
             >
               {item}
             </a>
           </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
