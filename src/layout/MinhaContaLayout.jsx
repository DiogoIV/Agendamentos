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
        flex flex-col 2 h-full 
        flex-1
        p-2
        ">

            <nav aria-label="Breadcrumb" >
                <ol className="flex font-bold text-sm text-gray-400 ">
                    <li className="after:content-['>'] after:mx-2">Home</li>
                    {dados}
                </ol>
            </nav>

            <article className="
            flex gap-4 m-auto
            
            bg-blue-200 p-4
                       
            ">

                <section className="
                flex flex-col gap-2
                ">

                    <h1 className="flex items-center gap-2"><User size={20}/>Olá, Diogo</h1>

                    <ul className="
                        flex flex-col
                        gap-1
                    ">
                        <li>
                            <NavLink to="/minha-conta" >Minha conta</NavLink>
                        </li>
                        <li>
                            <NavLink to="meus-dados">Meus dados</NavLink>
                        </li>
                        <li>
                            <NavLink to="meus-agendamentos">Meus agendamentos</NavLink>
                        </li>
                    </ul>

                </section>

                <section>

                    <Outlet />
                    <p>dasdd</p>
                </section>

            </article>

        </div>

    )

}

export default MinhaContaLayout