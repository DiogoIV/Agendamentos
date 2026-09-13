import { useEffect, useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { Heart, TiThMenu, FaHome, FaCalendarAlt, FaUser, CircleUserRound, UserRound } from "../assets/icons"

import { AuthContext } from "../contexts/AuthContext"


function Header() {
    const estiloLink = `relative 
                after:content-[''] after:absolute after:bg-[var(--color-secondary)] after:h-[1px] after:w-full
                after:-bottom-1 after:left-0 
                after:scale-x-0 hover:after:scale-x-100
                after:transition-transform
                hover:opacity-70 transition`
    const mobileLinkStyle = `
    flex items-center gap-3 w-full p-3
    rounded
    transition-all duration-200
    hover:bg-white/10
    hover:translate-x-3
`

    const [open, setOpen] = useState(false)


    const { isAuthenticated, LoggedOut } = useContext(AuthContext)








    useEffect(() => {

        function handleResize() {

            if (window.innerWidth >= 768) {
                setOpen(false)
            }
        }



        window.addEventListener('resize', handleResize)

       

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])



    return (
        <header className="
        relative
        flex justify-between items-center 
        h-20 px-8 py-4 
        bg-[var(--color-primary)]  text-[var(--color-secondary)]  ">

            <Link to="/" >
                <span className="flex items-center gap-2  text-xl lg:text-2xl font-bold ">
                    <Heart size={45} className="transition-transform hover:scale-105" /> Agenda fácil
                </span>
            </Link>

            <button className="md:hidden"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen(!open)}
                aria-expanded={open}>
                <TiThMenu size={35} />
            </button>



            {/* menu fixo */}

            <nav className={`
                hidden 
                md:flex 
                md:gap-6
                md:text-lg
                items-center   
                lg:text-xl
                lg:gap-8
                font-semibold
            `

            }>
                <NavLink to="/" className={estiloLink}>Início</NavLink>

                <NavLink to="/agendar" className={estiloLink}>Agendar</NavLink>

                {isAuthenticated ? (
                    <button className={estiloLink}>
                        <UserRound size={26} />
                    </button>
                ) :
                    (
                        <NavLink to="/login" className={estiloLink}>Login</NavLink>
                    )

                }

            </nav>

            {/*menu mobile*/}

            <div onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 
                    transition-opacity
                    duration-300
                    ${open ? "opacity-100" : "opacity-0  pointer-events-none "}`}>

            </div>

            <nav className={`fixed top-0 right-0
                                  
                    w-[70%] h-screen
                    pt-6  
                    px-5
                    font-bold text-lg bg-[var(--color-primary)]
                    z-50
                    
                    transform transition-transform duration-500 ease-in-out
                    ${open ? "translate-x-0 " : "translate-x-full"}`}
            >
                <ul className="flex flex-col gap-3
                ">

                    <li className=" px-4 pb-4  border-b border-white/40">
                        <h2 className="text-lg font-bold">
                            Menu
                        </h2>
                    </li>

                    <li className="pl-2">
                        <NavLink
                            to="/"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `${mobileLinkStyle}
                                ${isActive ? " bg-white/15 " : ""}
                                mt-2`
                            }
                        >
                            <FaHome /> Início
                        </NavLink>
                    </li>

                    <li className="pl-2">
                        <NavLink to="/agendar"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `${mobileLinkStyle}
                                ${isActive ? "bg-white/15" : ""}`
                            }
                        >
                            <FaCalendarAlt />Agendar
                        </NavLink>
                    </li>

                    {!isAuthenticated ? (
                        <li className="pl-2">

                            <NavLink to="/login"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `${mobileLinkStyle}
                            ${isActive ? "bg-white/15" : ""}`
                                }
                            >
                                <FaUser /> Login
                            </NavLink>

                        </li>
                    ) :
                        (

                            <li className="
                                flex
                                flex-col
                                gap-4
                                pt-5  
                                pl-3 border-t border-white/40"
                            >

                                <h2 className="flex items-center gap-1"> <UserRound size={28} /> Olá, Diogo</h2>

                                <ul className="
                                    flex
                                    flex-col
                                    gap-1
                                    pl-8
                                    pb-2
                                ">

                                    <li>
                                        <NavLink to="/minha-conta"
                                            className={
                                                ({ isActive }) =>
                                                    `
                                            ${isActive ? "text-[#8B5CF6]" : ""}
                                            `
                                            }>
                                            Minha conta
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/minha-conta/meus-dados"
                                            className={
                                                ({ isActive }) =>
                                                    `
                                            ${isActive ? "text-[#8B5CF6]" : ""}
                                            `
                                            }
                                        >
                                            Meus dados
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/minha-conta/meus-agendamentos"
                                            className={
                                                ({ isActive }) =>
                                                    `
                                            ${isActive ? "text-[#8B5CF6]" : ""}
                                            `
                                            }
                                        >
                                            Meus agendamentos
                                        </NavLink>
                                    </li>
                                </ul>

                                <button className="
                                    bg-[var(--color-secondary)]
                                    text-[var(--color-primary)]                 
                                    font-bold
                                    py-2
                                    rounded
                                " onClick={
                                        LoggedOut
                                    }
                                >
                                Sair
                            </button>

                            </li>
                        )}

            </ul>



        </nav>


        </header >
    )
}

export default Header