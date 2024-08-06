import { useState } from 'react';
import iconMenu from '../img/icons/icon_menu.png';
import iconCerrar from '../img/icons/icon_cerrar.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className=" bg-slate-400 border border-blue-600 p-4 sm:flex justify-between">
            <div className="flex justify-between items-center">
                <div className="w-28 h-10 border border-red-300">
                    <img src="" alt="Logo" />
                </div>
                <img 
                    className="w-10 h-10 cursor-pointer sm:hidden" 
                    src={menuOpen ? iconCerrar : iconMenu} 
                    alt="menu_icon" 
                    onClick={handleClick} 
                />
            </div>

            <nav className={`absolute top-7 left-0 w-full bg-slate-400 border border-lime-300 py-3 px-2 transition-transform duration-300 ease-in-out ${menuOpen ? 'transform translate-y-9' : 'transform -translate-y-full'} sm:static sm:transform-none sm:flex`}>
                <ul className="flex flex-col gap-6 sm:flex-row sm:gap-4">
                    <li className='text-yellow-100 font-medium tracking-wide text-xl'><a href="#">Servicios</a></li>
                    <li className='text-yellow-100 font-medium tracking-wide text-xl'><a href="#">Unidades</a></li>
                    <li className='text-yellow-100 font-medium tracking-wide text-xl'><a href="#">Viajes</a></li>
                    <li className='text-yellow-100 font-medium tracking-wide text-xl'><a href="#">Cotizador</a></li>
                    <li className='text-yellow-100 font-medium tracking-wide text-xl'><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

