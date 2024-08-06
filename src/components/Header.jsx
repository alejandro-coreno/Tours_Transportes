import { useState } from 'react';
import iconMenu from '../img/icons/icon_menu.png';
import iconCerrar from '../img/icons/icon_cerrar.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full h-20 bg-slate-500 flex flex-col sm:flex-row justify-between py-5">
    
        <picture className="flex justify-between">
            <div className='w-32 border border-red-300'>
                <img src={iconCerrar.src} alt="" />
            </div>

            <div className='w-32 border border-red-300 sm:hidden'>
                <img
                    onClick={ handleClick }
                    src={iconMenu ? iconCerrar.src: iconMenu.src} 
                    alt=""
                
                />
            </div>
        </picture>

        <nav className={`bg-slate-500 p-4 duration-300 ease-linear absolute top-[-100%] sm:top-0 sm:w-auto sm:border left-0 w-full sm:relative ${menuOpen && 'top-[13%]'}`}>
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

