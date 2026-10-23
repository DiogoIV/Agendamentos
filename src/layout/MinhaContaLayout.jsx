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
            rounded-md         
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

                    <h1 className="  
                    w-full
                    max-w-96

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
                        flex 
                        md:flex-col
                        text-center
                        
                        gap-4
                        text-lg
                        pb-4
                        
                    ">
                        <li>
                            <NavLink to="/minha-conta" >Minha conta</NavLink>
                        </li>
                        <li>
                            <NavLink to="meus-dados">Meus dados</NavLink>
                        </li>
                        <li>
                            <NavLink to="meus-agendamentos">agendamentos</NavLink>
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