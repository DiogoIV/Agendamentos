import { Link } from "react-router-dom"
import { Heart } from "lucide-react"

function Login() {
    return (
        <div>

            <section>

                <div>
                    <Heart/> <span>Agenda Fácil</span>
                </div>
                
                <h1>Entrar na conta</h1>

                <form action="" method="post">

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="text" name="" id="email" className="sr-only"/>
                        
                        <label htmlFor="senha">Senha</label>
                        <input type="number" id="senha"/>
                    </div>

                    <div>
                        <button type="submit">Entrar</button>
                        <Link to="">
                            Esqueceu a Senha?
                        </Link>
                    </div>

                    <div>
                        <p>Ainda não tem conta?</p>
                        <Link to="">Cadrastre-se</Link>
                    </div>

                </form>
                    
                


            </section>
        </div>
    )
}

export default Login