import { useState } from 'react';
import iconMenu from '../../img/icons/icon_menu.png';
import logo4 from '../../img/icons/logo4.svg';
import iconCerrar from '../../img/icons/icon_cancelar.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="bg-gradient-to-r from-[#0d161c] to-[#1e324d] shadow-2xl sm:flex justify-between py-5">
            <div className="flex justify-between px-3">
                <div className={`cursor-pointer ml-4 duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={logo4.src} alt="" className='h-12 animate-pulse' />
                </div>

                <div className='p-2 cursor-pointer sm:hidden'>
                    <img
                        className='h-8'
                        onClick={ handleClick }
                        src={menuOpen ? iconCerrar.src: iconMenu.src} 
                        alt="menu"
                    />
                </div>
            </div>

            <div className={`bg-gradient-to-r from-[#0d161c] to-[#1e324d] p-6 duration-200 ease-in absolute top-[-400px] sm:top-0 sm:w-auto left-0 
                w-full sm:static ${menuOpen && 'top-[80px] opacity-100'}`}>
                <ul className='flex flex-col gap-5 sm:flex-row'>
                    <li className='text-white font-light tracking-wide'><a href="#servicios" onClick={ closeMenu }>Servicios</a></li>
                    <li className='text-white font-light tracking-wide'><a href="#unidades" onClick={ closeMenu}>Unidades</a></li>
                    <li className='text-white font-light tracking-wide'><a href="#viajes" onClick={ closeMenu}>Viajes</a></li>
                    <li className='text-white font-light tracking-wide'><a href="#cotizador" onClick={ closeMenu}>Cotizador</a></li>
                    <li className='text-white font-light tracking-wide'><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
                </ul>
            </div>        
        </nav>
    );
};

export default Navbar;