import { useState } from "react"
import { Heart, Mail, Eye, EyeOff, User, Lock, TriangleAlert } from "../../assets/icons/"
import { Link } from "react-router-dom"

import { validarNome, validarEmail, validarSenha, ValidarDigitarSenha } from '../../validations/validations'


function Cadrasto() {

    const [inputs, setInputs] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarsenha: ''
    })


    const [erros, setErro] = useState({
        nome: null,
        email: null,
        senha: null,
        confirmarsenha: null
    })

    const [validacoesSenha, setValidacoesSenha] = useState({
        RegexSenhas: ValidarDigitarSenha(inputs.senha)
    })

    const [senhaEmFoco, setSenhaEmFoco] = useState(false)



    function handleCadatroChange(el) {


        setValidacoesSenha()
    }

    function handleCadastro() {

        setErro((prev) => ({
            ...prev,
            nome: validarNome(inputs.nome)
        }))

        setErro((prev) => ({
            ...prev,
            email: validarEmail(inputs.email)
        }))

        setErro((prev) => (
            {
                ...prev,
                senha: validarSenha(inputs.senha, inputs.confirmarsenha)
            }

        ))

        return

    }



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
                                size={25} />

                            <input type="text" id="usuario" className={estiloInputs} placeholder="Digite seu nome"
                                onChange={(el) =>
                                    setInputs({
                                        ...inputs,
                                        nome: el.target.value
                                    })
                                } />
                        </div>

                        {erros.nome && (
                            <div className="                           flex  gap-2
                            items-center
                            pt-2                
                            text-sm
                            pl-2
                            text-red-400
                            ">
                                <TriangleAlert size={19} />
                                <span>
                                    {erros.nome}
                                </span>
                            </div>

                        )}

                    </div>

                    <div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                        </div>


                        <div className="relative">

                            <Mail className="absolute
                            top-1/2 -translate-y-1/2 left-3
                            text-gray-400" size={25} />

                            <input type="text" name="" id="email" className={estiloInputs} placeholder="Digite seu email"
                                onChange={(el) =>
                                    setInputs({
                                        ...inputs,
                                        email: el.target.value
                                    })} />


                        </div>
                        {erros.email && (
                            <div className="                           flex  gap-2
                            items-center
                            pt-2                
                            text-sm
                            pl-2
                            text-red-400
                            ">
                                <TriangleAlert size={19} />
                                <span>
                                    {erros.email}
                                </span>
                            </div>

                        )}
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
                            text-gray-400" size={25} />

                            <input type="password" id="senha" className={estiloInputs} placeholder="Crie sua senha"
                                onFocus={() => setSenhaEmFoco(true)}
                                onBlur={() => setSenhaEmFoco(false)}
                                onChange={(el) =>
                                    handleCadatroChange(el.target.value)
                                    }
                            />

                            <EyeOff className="
                            absolute
                            text-gray-400
                            top-1/2
                            -translate-y-1/2
                            right-2
                            " size={25} />
                        </div>

                        {senhaEmFoco && (
                            <ul className="flex flex-col gap-2">
                                <li>{!validacoesSenha.RegexSenhas.temMaiuscula && 'Necessario maiúscula'}</li>
                                <li>{!validacoesSenha.RegexSenhas.temMinuscula && 'Necessario minúscula'}</li>
                                <li>{!validacoesSenha.RegexSenhas.temNumero && 'Pelo menos um número'}</li>
                                <li>{!validacoesSenha.RegexSenhas.temEspecial && 'Necessario caractér especial'}</li>
                                <li>{!validacoesSenha.RegexSenhas.tamanhoSenha && 'Minímo 8 caracteres'}</li>
                            </ul>
                        )}



                    </div>

                    <div>

                        <div>
                            <label htmlFor="newsenha" className="sr-only">Senha</label>
                        </div>

                        <div className="relative">

                            <Lock className="absolute
                            top-1/2 -translate-y-1/2 left-3
                            text-gray-400" size={25} />

                            <input type="password" id="newsenha" className={estiloInputs} placeholder="Confirmar senha"
                                onChange={(el) =>
                                    setInputs({
                                        ...inputs,
                                        confirmarsenha: el.target.value
                                    })}
                            />

                            <EyeOff className="
                            absolute
                            text-gray-400
                            top-1/2
                            -translate-y-1/2
                            right-2
                            " size={25} />
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-2">


                    <div className="flex flex-col gap-4">

                        <button type="submit" className="bg-white
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
                        " onClick={() => handleCadastro()}>
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