import { useState } from 'react';
import iconMenu from '../../img/icons/icon_menu.png'
import logo from '../../img/icons/logo.png';
import iconCerrar from '../../img/icons/icon_cancelar.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-[#253444] shadow sm:flex justify-between py-5">
            <div className="flex justify-between px-3">
                <div className='cursor-pointer'>
                    <img src={logo.src} alt="" className='h-14 rounded-md' />
                </div>

                <div className='p-2 cursor-pointer sm:hidden'>
                    <img
                        className='h-8'
                        onClick={ handleClick }
                        src={menuOpen ? iconCerrar.src: iconMenu.src} 
                        alt=""
                    />
                </div>
            </div>

            <div className={`bg-[#233253] p-6 duration-500 ease-in absolute top-[-400px] sm:top-0 sm:w-auto left-0 
                w-full sm:static transition-all ${menuOpen && 'top-[80px] opacity-100'}`}>
                <ul className='flex flex-col gap-4 sm:flex-row'>
                    <li className='text-white font-light tracking-wide'><a href="#">Servicios</a></li>
                    <li className='text-white font-light tracking-wide'><a href="#">Unidades</a></li>
                    <li className='text-white font-light tracking-wide'><a href="#">Viajes</a></li>
                    <li className='text-white font-light tracking-wide'><a href="#">Cotizador</a></li>
                    <li className='text-white font-light tracking-wide'><a href="#">Contacto</a></li>
                </ul>
            </div>        
        </nav>
    );
};

export default Navbar;