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
                <h1 className="flex items-center gap-2 text-xl font-bold  ">
                    <Heart size={41} /> Agenda fácil
                </h1>
            </Link>

            <button onClick={() => setOpen(!open)}>
                <TiThMenu size={35} />
            </button>

            {open && (
                <>
                    <div onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black/40">

                    </div>


                    <nav className="
                    fixed top-0 right-0
                    flex flex-col 
                    gap-2
                    w-[70%] h-screen
                    pt-6  
                    px-5
                    font-bold text-lg bg-[var(--color-primary)]
                    z-50">
                        <div className=" px-4 pb-4 border-b border-white/40">
                            <h2 className="text-lg font-bold">
                                Menu
                            </h2>
                        </div>

                        <NavLink to="/" className="
                        flex items-center 
                        gap-3 
                        w-full 
                        p-3 " onClick={()=> setOpen(false)}>
                            <FaHome /> Início
                        </NavLink>

                        <NavLink to="/agendar" className="
                        flex
                        items-center 
                        gap-3 
                        w-full 
                        p-3" onClick={()=> setOpen(false)}>
                            <FaCalendarAlt />Agendar
                        </NavLink>

                        <NavLink to="/login" className="
                        flex
                        items-center
                        gap-3 
                        w-full 
                        p-3" onClick={()=> setOpen(false)}>
                            <FaUser /> Login
                        </NavLink>
                    </nav>
                </>

            )}

        </header>
    )
}

export default Header