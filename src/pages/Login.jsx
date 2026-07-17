import { Link } from "react-router-dom"
import { Heart } from "lucide-react"

function Login() {
    return (


        <section className="
            flex
            flex-col
            justify-center
            items-center
            gap-8
            bg-[var(--color-primary)]
            rounded-lg
            min-h-96
            max-w-md
            w-full
            p-10
            mx-auto
            text-white
            ">

            <div className="
                flex items-center 
                gap-1
                text-2xl
                ">
                <Heart size={42} /> <span>Agenda Fácil</span>
            </div>

            <h1 className="text-xl">Entrar na conta</h1>

            <form action="" method="post" className="            
            flex
            flex-col
            gap-6
            w-full
            ">

                <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="sr-only">Email</label>

                    <input type="text" name="" id="email" className="
                    w-full rounded-lg
                    h-10
                    px-4
                    border
                    outline-none
                    focus:border-white
                    focus:ring-2
                    focus:ring-white/30
                    text-black
                    " placeholder="Digite seu email"/>

                    <label htmlFor="senha" className="sr-only">Senha</label>

                    <input type="number" id="senha" className="
                    w-full rounded-lg
                    h-10
                    px-4
                    border-2
                    
                    outline-none
                    focus:border-white
                    focus:ring-2
                    focus:ring-white/30
                    text-black
                    " placeholder="Digite sua Senha"/>
                </div>

                <div className="flex flex-col gap-2">


                    <div className="flex flex-col gap-4">

                        <button type="submit" className="bg-[var(--color-secondary)]
                        p-4
                        rounded-lg
                        text-inherit
                        font-normal
                        text-lg
                        ">
                            Entrar
                        </button>

                        <Link to="">
                            Esqueceu a Senha?
                        </Link>
                    </div>

                    <div>
                        <p>Ainda não tem conta?</p>
                        <Link to="">Cadraste-se</Link>
                    </div>
                </div>


            </form>




        </section>

    )
}

export default Login