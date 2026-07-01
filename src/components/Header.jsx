import { useState } from "react"
import { Heart, TiThMenu, FaHome, FaCalendarAlt, FaUser } from "../assets/icons"

import { Link, NavLink } from "react-router-dom"

function Header() {

    const [open, setOpen] = useState(false)

    return (
        <header className="
        relative
        flex justify-between items-center 
        h-20 px-8 py-4 
        bg-[var(--color-primary)]  text-[var(--color-secondary)] text-base ">

            <Link to="/" >
                <span className="flex items-center gap-2 text-xl font-bold  ">
                    <Heart size={41} /> Agenda fácil
                </span>
            </Link>

            <button className="md:hidden"
                aria-label={open ? "Fechar menu": "Abrir menu"}
                onClick={() => setOpen(!open)}
                aria-expanded={open}>
                <TiThMenu size={35} />
            </button>



            {/* menu fixo */}

            <nav className="hidden md:flex gap-6">
                <NavLink to="/">Início</NavLink>
                <NavLink to="/agendar">Agendar</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>

            {/*menu mobile*/}

            <div onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 
                    ${open ? "opacity-100" : "opacity-0  pointer-events-none "}`}>

            </div>
            <nav className={`fixed top-0 right-0
                    flex flex-col 
                    gap-2
                    w-[70%] h-screen
                    pt-6  
                    px-5
                    font-bold text-lg bg-[var(--color-primary)]
                    z-50
                    
                    transform transition-transform duration-500 ease-in-out
                    ${open ? "translate-x-0 " : "translate-x-full"}`}
            >
                <div className=" px-4 pb-4 border-b border-white/40">
                    <h2 className="text-lg font-bold">
                        Menu
                    </h2>
                </div>

                <NavLink
                    to="/"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                        `flex items-center gap-3 w-full p-3
                    rounded
                    transition-all duration-200
                    hover:bg-white/10 hover:translate-x-3
                    ${isActive ? "bg-white/20 translate-x-3" : ""}`
                    }
                >
                    <FaHome /> Início
                </NavLink>

                <NavLink to="/agendar"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                        `flex items-center gap-3 w-full p-3
                    rounded
                    transition-all duration-200
                    hover:bg-white/10 hover:translate-x-3
                    ${isActive ? "bg-white/20 translate-x-3" : ""}`
                    }
                >
                    <FaCalendarAlt />Agendar
                </NavLink>

                <NavLink to="/login"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                        `flex items-center gap-3 w-full p-3
                    rounded
                    transition-all duration-200
                    hover:bg-white/10 hover:translate-x-3
                    ${isActive ? "bg-white/20 translate-x-3" : ""}`
                    }
                >
                    <FaUser /> Login
                </NavLink>
            </nav>


        </header>
    )
}

export default Header