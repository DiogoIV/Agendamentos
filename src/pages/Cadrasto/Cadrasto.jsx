import { Heart, Mail, Eye, EyeOff, User, Lock  } from "../../assets/icons/"
import { Link } from "react-router-dom"


function Cadrasto () {

    const estiloInputs = `
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

                    `

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

            <h1 className="text-xl">Criar conta</h1>

            <form action="" method="post" className="            
            flex
            flex-col
            gap-6
            w-full
            ">

                <div className="flex flex-col gap-4">
                    <label htmlFor="usuario" className="sr-only">Usuario</label>
                    <input type="text"  id="usuario" className={estiloInputs} placeholder="Digite seu Nome"/>

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" name="" id="email" className={estiloInputs}placeholder="Digite seu email"/>

                    <label htmlFor="senha" className="sr-only">Senha</label>
                    <input type="password" id="senha" className={estiloInputs}placeholder="Digite sua Senha"/>

                    <label htmlFor="newsenha" className="sr-only">Senha</label>
                    <input type="password" id="newsenha" className={estiloInputs}placeholder="Repita a Senha"/>
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
                            Registra-se
                        </Link>
             
                    </div>

                    <div className="
                    flex gap-2
                    border-t
                  border-gray-200
                    pt-4
                    mt-4
                    ">
                        <p>já possui uma conta?</p>

                        <Link to="/login" className="font-semibold
                        
                        hover:underline">
                            Entrar
                        </Link>
                    </div>
                </div>

            </form>

        </section>
    )
}

export default Cadrasto