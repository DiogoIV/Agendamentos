import { Heart } from "../assets/icons"

import { Link, NavLink } from "react-router-dom"

function Header () {
    return(
        <header className="flex justify-between items-center h-20 px-8 py-4 bg-[var(--color-primary)]  text-[var(--color-secondary)] text-base ">
            
            <Link to="/" >
                <h1 className="flex items-center gap-2 text-xl font-bold">
                    <Heart/> Agenda fácil
                </h1>
            </Link>

            <nav className="flex gap-4 font-semibold">
                <NavLink to="/">Início</NavLink>
                <NavLink to="/agendar">Agendar</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </header>
    )
}

export default Header