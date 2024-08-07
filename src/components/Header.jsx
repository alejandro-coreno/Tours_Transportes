import { useState } from 'react';
import iconMenu from '../img/icons/icon_menu.png';
import iconCerrar from "../img/icons/icon_cerrar.png";
import logo from "../img/icons/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <header className="bg-slate-300 z-[-1] flex-col gap-3 justify-between flex sm:flex-row border border-blue-600 p-4">
            <div className="flex justify-between items-center">
                <div className="w-20">
                    <img src={logo.src} alt="Logo" className='w-20 bg-contain rounded-md'/>
                </div>
                <img 
                    className="w-10 cursor-pointer sm:hidden" 
                    src={ menuOpen ? iconCerrar.src : iconMenu.src } 
                    alt="Menu icon" 
                    onClick={handleClick} 
                />
            </div>

            <nav className={`border border-lime-300 py-3 px-2 sm:block ${menuOpen ? ' block' : ' hidden'}`}>
                <ul className="flex flex-col gap-5 sm:flex-row sm:gap-4">
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#unidades">Unidades</a></li>
                    <li><a href="#">Viajes</a></li>
                    <li><a href="#">Cotizador</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
