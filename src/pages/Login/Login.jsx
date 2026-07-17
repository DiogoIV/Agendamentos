import { Link } from "react-router-dom"
import { Heart, Mail, Eye, EyeOff   } from "../../assets/icons/"

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
                    h-12
                    px-4
                    border
                    outline-none

                    bg-gray-50

                    transition
                    focus:border-white
                    focus:ring-2
                    focus:ring-white/30
                    text-black
                    
                    placeholder:text-gray-400
                    placeholder:text-sm

                    " placeholder="Digite seu email"/>

                    <label htmlFor="senha" className="sr-only">Senha</label>

                    <input type="number" id="senha" className="
                    w-full rounded-lg
                    h-12
                    px-4
                    border-2
                    
                    bg-gray-50

                    placeholder:text-gray-400
                    placeholder:text-sm

                    outline-none
                    transition
                    focus:border-white
                    focus:ring-2
                    focus:ring-white/30
                    text-black
                    " placeholder="Digite sua Senha"/>
                </div>

                <div className="flex flex-col gap-2">


                    <div className="flex flex-col gap-4">

                        <Link to="" type="submit" className="bg-white
                        text-[var(--color-primary)]
                        font-bold
                        
                        py-3
                        text-center
                        rounded-lg
                        
                        shadow-md
                        transition
                        hover:opacity-90
                        hover:shadow-md
                        hover:scale-[1.02]
                        ">
                            Entrar
                        </Link>

                        <p className="mt-2">
                            <Link to="/esquecisenha" className="
                            hover:underline
                            
                            ">
                                Esqueceu a Senha?
                            </Link>
                        </p>
                    </div>

                    <div className="
                    flex gap-2
                    border-t
                  border-gray-200
                    pt-4
                    mt-4
                    ">
                        <p>Ainda não tem conta?</p>

                        <Link to="/cadrasto" className="font-semibold
                        
                        hover:underline">
                            Cadraste-se
                        </Link>
                    </div>
                </div>


            </form>




        </section>

    )
}

export default Login