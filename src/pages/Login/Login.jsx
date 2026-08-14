import { Link } from "react-router-dom"
import { Heart, Mail, Eye, EyeOff,Lock, TriangleAlert   } from "../../assets/icons/"

import { estiloSection, estiloAviso } from "../../styles/Estilos"

import { validarCampoSenha, validarEmail } from "../../validations/validations"
import { useState } from "react"

function Login() {

    const [input, setInputs] = useState({
        email: '',
        senha: ''
    })

    console.log('minha Senha', input.senha)

    const [erro, setErro] = useState({
        email: '',
        senha: ''
    })

    console.log('aaa',validarCampoSenha( input.senha))

    function handleLogin (e) {
        e.preventDefault()

        setErro({  
            email: validarEmail(input.email),
            senha: validarCampoSenha(input.senha)

        })
    }

    return (

        <section className={estiloSection}>

            <div className="
                flex items-center 
                gap-1
                text-2xl
                ">
                <Heart size={42} /> <span>Agenda Fácil</span>
            </div>

            <h1 className="text-xl">Entrar na conta</h1>

            <form action=""  className="            
            flex
            flex-col
            gap-6
            w-full
            "
            onSubmit={handleLogin}>

                <div className="flex flex-col gap-4">
                    <div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            
                        </div>

                        <div className="relative">

                            <Mail className="
                            text-gray-400
                            absolute top-1/2 -translate-y-1/2 left-3"/>

                            <input type="text" name="" id="email" className="
                            w-full rounded-lg
                            h-12
                            pl-12
                            border
                            outline-none
                            bg-gray-50
                            transition
                            focus:border-white
                            focus:ring-2
                            focus:ring-white/30
                            text-black
                            
                            placeholder:text-gray-400
                            
                            " placeholder="Digite seu email"
                            onChange={(e)=> setInputs({
                                ...input,
                                email: e.target.value
                            })}
                            />
                        </div>
                        {erro.email && (
                            <div className={estiloAviso}>
                                <TriangleAlert size={19} />
                                {erro.email}

                            </div>
                        )}

                    </div>

                    <div>

                        <div>
                            <label htmlFor="senha" className="sr-only">Senha</label>
                        </div>
                        
                        <div className="relative">
                            <Lock className="
                            absolute
                            top-1/2 -translate-y-1/2 left-3
                            text-gray-400
                            
                            "
                            size={25}
                            />
                            <input type="password" id="senha" className="
                            w-full rounded-lg
                            h-12
                            pl-12
                            border
                            
                            bg-gray-50
                            placeholder:text-gray-400                           
                            outline-none
                            transition
                            focus:border-white
                            focus:ring-2
                            focus:ring-white/30
                            text-black
                            " placeholder="Digite sua Senha"
                            onChange={(e)=> setInputs({
                                ...input,
                                senha: e.target.value
                            })}
                            />

                            <EyeOff className="
                            absolute
                            text-gray-400
                            top-1/2
                            -translate-y-1/2
                            right-2
                            "/>
                        </div>

                        {erro.senha && (
                            <div className={estiloAviso}>
                                <TriangleAlert size={19}/>
                                {erro.senha}
                            </div>
                        )}

                    </div>
                </div>

                <div className="flex flex-col gap-2">


                    <div className="flex flex-col gap-4">

                        <button  type="submit" className="bg-white
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
                        </button>

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

                        <Link to="/cadastro" className="font-semibold
                        
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