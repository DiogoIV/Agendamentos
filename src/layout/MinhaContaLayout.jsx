import { NavLink, Outlet } from "react-router-dom"



function MinhaContaLayout() {

    return (
        <section>

            <nav aria-label="Breadcrumb">
                <ol>
                    <li>Home</li>
                    <li>Minha conta</li>
                    <li>Meus dados</li>
                </ol>
            </nav>

            <section>

                <h1>Menu Lateral</h1>

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
                 <Outlet/>
            </section>

        </section>
    )

}

export default MinhaContaLayout