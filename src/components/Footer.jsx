import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer className=" 
        
        bg-[var(--color-primary)] text-[var(--color-secondary)]">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 
            
            pt-10
            max-w-[1200px]
            mx-auto">
                <section className="flex flex-col space-y-2 ">
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold ">
                        <Heart size={27} />
                        Agenda fácil
                    </Link>
                    <p className="text-sm leading-relaxed">
                        Agendamentos simples e rápidos
                    </p>
                </section>

                <section className="">
                    <h3 className="font-semibold mb-2">Links</h3>
                    <ul className=" flex flex-col gap-2
                     text-sm">
                        <li><Link to="/" className="hover:underline hover:opacity-80 transition"> Home</Link></li>
                        <li><Link to="/agendar" className="hover:underline hover:opacity-80 transition">Agendar</Link></li>
                        <li><Link to="/login" className="hover:underline hover:opacity-80 transition">Login</Link></li>
                    </ul>
                </section>

                <section className="">
                    <h3 className="font-semibold mb-2">Redes Socias</h3>
                    <ul className="list-none text-sm
                    flex flex-col gap-2">
                        <li className="hover:underline hover:opacity-80 transition"><a href="">Instagram</a></li>
                        <li className="hover:underline hover:opacity-80 transition"><a href="">Facebook</a></li>
                    </ul>
                </section>
                <section>
                    <h3 className="font-semibold mb-2">Contatos</h3>
                    <ul className="list-none text-sm
                    flex flex-col gap-2">
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
            </div>

        </footer>
    )
}

export default Footer