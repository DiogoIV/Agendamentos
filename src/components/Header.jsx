import { Heart } from "../assets/icons"

import { Link, NavLink } from "react-router-dom"

function Header () {
    return(
        <header>
            
            <Link to="#">
                <h1>
                    <Heart/> Agenda fácil
                </h1>
            </Link>

            <nav>
                <NavLink to="/">Início</NavLink>
                <NavLink to="/agendar">Agendar</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </header>
    )
}

export default Header