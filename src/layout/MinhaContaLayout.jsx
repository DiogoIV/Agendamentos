import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function MinhaContaLayout() {

    /*broadcast */

    const location = useLocation();

    const dadosLocation = location.pathname.split("/")

    const nomes = {
        "minha-conta": "Minha conta",
        "meus-dados": "Meus dados",
        "agendamentos": "Meus agendamentos"
    };


    const dados = dadosLocation.filter(el => el !== "").map(part => (
        <li className="
        after:content-['>'] last:after:content-['']
        ">{nomes[part]}</li>
    )
    )

    return (

        <div className="
        flex flex-col 2 h-full 
        ">

            <nav aria-label="Breadcrumb">
                <ol className="flex font-bold text-sm text-gray-400">
                    <li className="after:content-['>'] after:mx-2">Home</li>
                    {dados}
                </ol>
            </nav>

            <article className="
            flex gap-4 m-auto
            bg-blue-200 p-2
            ">

                <section className="">

                    <h1>Olá, Diogo</h1>

                    <ul>
                        <li>
                            <NavLink>Minha conta</NavLink>
                        </li>
                        <li>
                            <NavLink>Meus dados</NavLink>
                        </li>
                        <li>
                            <NavLink>Meus agendamentos</NavLink>
                        </li>
                    </ul>

                </section>

                <section>

                    <Outlet />

                </section>

            </article>

        </div>

    )

}

export default MinhaContaLayout