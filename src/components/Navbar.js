//Componente que contiene la interfaz de una barra de navegación superior, con varios botones

export function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="null">Pokedex</a></li>
                <li className="navbar-item"><a href="null">Tipos</a></li>
                <li className="navbar-item"><a href="null">Movimientos</a></li>
                <li className="navbar-item"><a href="null">Mi equipo</a></li>
            </ul>
        </div> 
    );
}