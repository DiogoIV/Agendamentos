import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10 bg-[var(--color-primary)] text-[var(--color-secondary)]">

            <section className="flex flex-col space-y-2 ">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold ">
                    <Heart size={27}/>
                    Agenda fácil

                </Link>

                <p className="text-sm leading-relaxed">
                    Agendamentos simples e rápidos
                </p>

            </section>


            <section >
                <h3 className="font-semibold mb-2">Links</h3>
                <ul className=" flex flex-col gap-1
                pl-4 space-y-1 text-sm">

                    <li><Link to="/" className="hover:underline hover:opacity-80 transition"> Home</Link></li>
                    <li><Link to="/agendar" className="hover:underline hover:opacity-80 transition">Agendar</Link></li>
                    <li><Link to="/login" className="hover:underline hover:opacity-80 transition">Login</Link></li>

                </ul>
            </section>

            <section>
                <h3 className="font-semibold mb-2">Redes Socias</h3>
                <ul className="list-none pl-4 space-y-1 text-sm
                flex flex-col gap-1">

                    <li className="hover:underline hover:opacity-80 transition"><a href="">Instagram</a></li>
                    <li className="hover:underline hover:opacity-80 transition"><a href="">Facebook</a></li>


                </ul>
            </section>

            <section>
                <h3 className="font-semibold mb-2">Contatos</h3>
                <ul className="list-none pl-4 space-y-1 text-sm
                flex flex-col gap-1">

                    <li className="hover:underline hover:opacity-80 transition">
                        <a href="#">Contato direto</a>
                    </li>

                    <li className="hover:underline hover:opacity-80 transition "><Link to="">Suporte/ajuda</Link></li>


                </ul>
            </section>

            <section className="flex items-center justify-center
            border-t border-[var(--color-secondary)]
            p-4 sm:col-span-full ">
                <p className="text-sm opacity-80">Todos os direitos reservados, © Agenda fácil</p>
            </section>

        </footer>
    )
}

export default Footer