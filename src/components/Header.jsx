import iconMenu from "../img/icons/icon_menu.png"

const Header = () => {

    const handlerClick = () => {
        alert('Click en el menu');
    }

    return (
        <header className="bg-slate-500 flex justify-between p-5">
            <div className="w-32 border border-red-300">
                <img src="" alt="" />
            </div>

            <nav className="border border-red-300 py-2 px-1 hidden sm:block">
                <ul className="flex gap-4">
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Unidades</a></li>
                    <li><a href="#">Viajes</a></li>
                    <li><a href="#">cotizador</a></li>
                    <li><a href="#">Contacto</a></li>

                 </ul>
            </nav>

            <img 
                className="sm:hidden"
                src={iconMenu.src} 
                alt="" 
                id="logo"
                onClick={ handlerClick }
            />
        </header>
    )
}

export default Header;
