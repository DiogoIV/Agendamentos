import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, User, ChevronRight } from "lucide-react";

function MinhaContaLayout() {

    /*broadcast */

    const location = useLocation();

    const dadosLocation = location.pathname.split("/")

    const nomes = {
        "minha-conta": "Minha conta",
        "meus-dados": "Meus dados",
        "meus-agendamentos": "Meus agendamentos"
    };


    const dados = dadosLocation.filter(el => el !== "").map(part => (
        <li className="
        after:content-['>']  after:mx-2 last:after:content-['']
        ">{nomes[part]}</li>
    )
    )

    /* Estilos*/

    const EstiloSelecionar = `  `

    return (

        <div className="
        flex flex-col 2
        flex-1
        px-4
        pt-4
        pb-8
        gap-20  
        ">

            <nav aria-label="Breadcrumb" >
                <ol className="flex font-bold text-sm text-gray-400 ">
                    <li className="after:content-['>'] after:mx-2">Home</li>
                    {dados}
                </ol>
            </nav>

            <article className="
            flex
            flex-col
            md:flex-row 
            md:gap-6
            gap-8
            m-auto
            
            w-full
            md:max-w-4xl
            max-w-xl

            bg-[var(--color-primary)]
            text-[var(--color-secondary)]
            px-4
            py-6
            md:py-8
            
            shadow-md
            rounded-2xl        
            ">

                <section className="
                flex flex-col gap-4
                
                md:border-r
                md:border-b-0               
                border-[var(--color-secondary)]

                border-b
                items-center
                px-2
                md:basis-[300px]
                
                
                ">

                    <div className="
                    flex
                    gap-2
                    items-center
                    justify-center
                    
                   
                    
                    
                    p-2
                    text-center
                    font-medium
                    text-[var(--color-secondary)]
                    
                    border-b border-violet-400/50 
                    text-xl">
                        <User size={20} />
                        <span>Olá, Diogo</span>
                    </div>

                    <ul className="
                        flex 
                        md:flex-col
                        text-center
                        
                        gap-4
                        text-lg
                        pb-4
                        
                    ">
                        <li>
                            <NavLink
                                to="/minha-conta" end

                                className={({ isActive }) =>
                                    `flex items-center md:gap-2 gap-1 rounded-md
                                    ${isActive ? "font-semibold" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && <ChevronRight size={18} />}
                                        Minha conta
                                    </>
                                )}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="meus-dados"

                                className={({ isActive }) =>
                                    `flex items-center md:gap-2 gap-1 rounded-md
                                    ${isActive ? "font-semibold" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && <ChevronRight size={18} />}
                                        Meus dados
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="meus-agendamentos"

                                className={({ isActive }) =>
                                    `flex items-center md:gap-2 gap-1 rounded-md
                                    ${isActive ? "font-semibold" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && <ChevronRight size={18} />}
                                       agendamentos
                                    </>
                                )}
                            </NavLink>
                        </li>
                    </ul>

                </section>

                <section className="w-full ">

                    <Outlet />

                </section>

            </article>

        </div>

    )

}

export default MinhaContaLayout