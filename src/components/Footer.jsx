import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer className="grid grid-cols-1 
        sm:grid-cols-2 sm:grid-rows-2
        lg:grid-cols-4
        
        p-4 gap-4
        bg-[var(--color-primary)] text-[var(--color-secondary)]">

            <section className="flex flex-col ">
                <Link to="/" className="flex gap-2 font-bold text-lg">
                    <Heart size={27}/>
                    Agenda fácil

                </Link>

                <p className="">
                    agendamentos simples e rápidos
                </p>

            </section>


            <section className=" ">
                <h3 className="font-bold text-lg">Links</h3>
                <ul className="list-none pl-4">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/agendar">Agendar</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul>
            </section>

            <section>
                <h3 className="font-bold text-lg">Redes Socias</h3>
                <ul className="list-none pl-4">

                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>


                </ul>
            </section>

            <section>
                <h3 className="font-bold text-lg">Contatos</h3>
                <ul className="list-none pl-4">

                    <li>
                        <a href="#">Contato direto</a>
                    </li>

                    <li><Link to="">Suporte/ajuda</Link></li>


                </ul>
            </section>

            <section>
                <p>Todos os direitos reservados, © Agenda fácil</p>
            </section>

        </footer>
    )
}

export default Footer