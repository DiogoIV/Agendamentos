import { useState } from "react"
import { Heart, Mail, Eye, EyeOff, User, Lock  } from "../../assets/icons/"
import { Link } from "react-router-dom"

import {validarNome, validarEmail, validarSenha} from '../../validations/validations'


function Cadrasto () {
    
    const  [inputs, setInputs] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarsenha: ''
    })

    const [erroNome, setErroNome] = useState(null)
    
    setErroNome(validarNome(inputs.nome))
    

    console.log(inputs.nome)


    const estiloInputs = `
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
            " onSubmit={(el) => el.preventDefault()}>

                <div className="flex flex-col gap-4">


                    <div>

                        <div>
                            <label htmlFor="usuario" className="sr-only">Usuario</label>
                        </div>
                        
                        <div className="relative">

                            <User className="
                            absolute
                            top-1/2 -translate-y-1/2 left-3
                            text-gray-400
                            "
                            size={25}/>

                            <input type="text"  id="usuario" className={estiloInputs} placeholder="Digite seu nome" onChange={(el)=> 
                            setInputs({...inputs, 
                                nome: el.target.value
                            })}/>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                        </div>


                        <div className="relative">

                            <Mail className="absolute
                            top-1/2 -translate-y-1/2 left-3
                            text-gray-400" size={25}/>

                            <input type="text" name="" id="email" className={estiloInputs}placeholder="Digite seu email"
                            onChange={(el)=> 
                            setInputs({...inputs, 
                                email: el.target.value
                            })}/>
                        </div>
                    </div>

                    <div>

                        <div>
                            
                            <label htmlFor="senha" className="sr-only">
                                Senha
                            </label>
                        </div>

                        <div className="relative">
                            <Lock className="absolute
                            top-1/2 -translate-y-1/2 left-3
                            text-gray-400" size={25}/>

                            <input type="password" id="senha" className={estiloInputs}placeholder="Crie sua senha"
                            onChange={(el)=> 
                            setInputs({...inputs, 
                                senha: el.target.value
                            })}/>

                            <EyeOff className="
                            absolute
                            text-gray-400
                            top-1/2
                            -translate-y-1/2
                            right-2
                            " size={25}/>
                        </div>
                    </div>

                    <div>

                        <div>
                            <label htmlFor="newsenha" className="sr-only">Senha</label>
                        </div>

                        <div className="relative">

                            <Lock className="absolute
                            top-1/2 -translate-y-1/2 left-3
                            text-gray-400" size={25}/>

                            <input type="password" id="newsenha" className={estiloInputs}placeholder="Confirmar senha"
                            onChange={(el)=> 
                            setInputs({...inputs, 
                                confirmarsenha: el.target.value
                            })}
                            />

                            <EyeOff className="
                            absolute
                            text-gray-400
                            top-1/2
                            -translate-y-1/2
                            right-2
                            " size={25}/>
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-col gap-2">


                    <div className="flex flex-col gap-4">

                        <button to="" type="submit" className="bg-white
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
                        " onClick={()=> validarNome(inputs.nome)}>
                            Criar conta
                        </button>
             
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