import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";

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

    return (

        <div className="
        flex flex-col 2
        flex-1
        p-4
          
        ">

            <nav aria-label="Breadcrumb" >
                <ol className="flex font-bold text-sm text-gray-400 ">
                    <li className="after:content-['>'] after:mx-2">Home</li>
                    {dados}
                </ol>
            </nav>

            <article className="
            flex 
            gap-4 
            m-auto
            w-full
            max-w-3xl
            bg-[var(--color-primary)]
            text-[var(--color-secondary)]
            p-4
            
            shadow-md
            rounded-md         
            ">

                <section className="
                flex flex-col gap-6
                border-r
                
                border-[var(--color-secondary)]
                px-2
                basis-[300px]
                
                ">

                    <h1 className="
                    
                    
                    bg-[var(--color-background)]
                    rounded-lg
                    p-2
                    text-center
                    text-[var(--color-primary)]
                    border
                    border-[var(--color-secondary)]
                    
                    pb-2
                    text-xl
                    font-[500]
                    ">Olá, Diogo</h1>

                    <ul className="
                        flex flex-col
                        
                        gap-4
                        text-lg
                        
                    ">
                        <li>
                            <NavLink to="/minha-conta" >Minha conta</NavLink>
                        </li>
                        <li>
                            <NavLink to="meus-dados">Meus dados</NavLink>
                        </li>
                        <li>
                            <NavLink to="meus-agendamentos">Meus Agendamentos</NavLink>
                        </li>
                    </ul>

                </section>

                <section className="w-full">

                    <Outlet />
                    
                </section>

            </article>

        </div>

    )

}

export default MinhaContaLayout