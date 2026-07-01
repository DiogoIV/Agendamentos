import { Heart } from "lucide-react"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer>
            <section>
                <Link to="/">
                        <Heart />
                        Agenda fácil
          
                </Link>

                <p>
                    agendamentos simples e rápidos
                </p>

            </section>


            <section>
                <h3>Links</h3>
                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/agendar">Agendar</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul>
            </section>

            <section>
                <h3>Redes Socias</h3>
                <ul>

                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>


                </ul>
            </section>

            <section>
                <h3>Contatos</h3>
                <ul>

                    <li>
                        <a href="#">Contato direto</a>
                    </li>

                    <li><Link to="">Suporte/ajuda</Link></li>


                </ul>
            </section>

            <section>
                <p>todos os direitos reservados, © Agenda fácil</p>
            </section>

        </footer>
    )
}

export default Footer