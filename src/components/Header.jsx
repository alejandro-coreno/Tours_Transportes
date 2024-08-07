import { useState } from 'react';
import iconMenu from '../img/icons/icon_menu.png';
import logo from "../img/icons/logo.png"
import iconCerrar from '../img/icons/icon_cerrar.png';
import "../styles/styles.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full h-20 bg-slate-500 flex flex-col  sm:flex-row justify-between shadow-md">
    
        <div className="flex h-full items-center border border-blue-400 justify-between px-3">
            <div className='w-20 border rounded-md '>
                <img src={logo.src} alt="" className='w-20 bg-contain bg-center  rounded-md' />
            </div>

            <div className='w-20 border border-red-300 sm:hidden'>
                <img
                    onClick={ handleClick }
                    src={menuOpen ? iconCerrar.src: iconMenu.src} 
                    alt=""
                
                />
            </div>
        </div>

        <nav className={` bg-indigo-400 p-4 duration-300 ease-linear absolute top-[8.9%] h-custom sm:top-0 sm:w-auto sm:border right-[-100%] w-[80%] sm:relative sm:h-auto ${menuOpen && 'right-[-0]'}`}>
            <ul className='flex flex-col gap-4 sm:flex-row'>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Unidades</a></li>
                <li><a href="#">Viajes</a></li>
                <li><a href="#">cotizador</a></li>
                <li><a href="#">Contacto</a></li>

            </ul>
        </nav>
</header>
    );
};

export default Header;

