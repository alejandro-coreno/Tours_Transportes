import { useState } from 'react';
import iconMenu from '../img/icons/icon_menu.png';
import iconCerrar from '../img/icons/icon_cerrar.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full h-20 bg-slate-500 flex gap-4 justify-between px-2 py-5 border border-blue-600">
    
            <div className="w-32 border-2 border-red-300">
                <img src={ menuOpen.src} alt="" />
            </div>

            <nav className={`sm:block absolute left-0  bg-slate-500 w-full px-2 duration-300 ${menuOpen ? 'top-[13%]' : 'top-[-100%] z-[-1]' }`}>
                <ul className='flex flex-col border border-red-400 gap-6 sm:flex-row'>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Unidades</a></li>
                    <li><a href="#">Viajes</a></li>
                    <li><a href="#">cotizador</a></li>
                    <li><a href="#">Contacto</a></li>

                </ul>
            </nav>


            <div className='w-32 sm:hidden'>
                <img src={ menuOpen ? iconCerrar.src : iconMenu.src} alt="" id="logo" onClick={ () => setMenuOpen(!menuOpen) } />
            </div>

        </header>
    );
};

export default Header;

