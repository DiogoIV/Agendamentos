import { useState } from "react"
import { Heart, Mail, Eye, EyeOff, User, Lock, TriangleAlert } from "../../assets/icons"
import { Link } from "react-router-dom"

import { estiloSection, estiloAviso, estiloInputs, estiloIconeExibir } from "../../styles/Estilos"

import { validarNome, validarEmail, validarSenha, ValidarDigitarSenha } from '../../validations/validations'
import Cadastrar from "../../api/auth"


function Cadastro() {

    /*Estados Regex e validações*/

    const [inputs, setInputs] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarsenha: ''
    })


    const [erros, setErro] = useState({
        nome: null,
        email: null,
        senha: null
    })

    const [validacoesSenha, setValidacoesSenha] = useState({
        RegexSenhas: ValidarDigitarSenha(inputs.senha)
    })

    const [senhaEmFoco, setSenhaEmFoco] = useState(false)


    const validacoesSenhaArray = Object.values(validacoesSenha.RegexSenhas)

    const validarArraySenha = validacoesSenhaArray.some((num) => num === false)

    /*Estados exibir Senha */

    const [exibirSenha, setExibirSenha] = useState(false)

    const [exibirConfirmarSenha, setExibirConfirmarSenha] = useState(false)


    /*Funcões*/

    function handleCadatroChange(el) {

        setValidacoesSenha({
            RegexSenhas: ValidarDigitarSenha(el)
        })

        setInputs((prev) => ({
            ...prev,
            senha: el
        }))

    }

    async function handleCadastro() {

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

        try {

            const mensagem = await Cadastrar(inputs)

        } catch(erro) {

            console.error(erro, 'Erro ao cadastrar os dados ')

        }

        

        

    }


    /*Estilos*/

    const estiloLista = `flex items-center gap-2`




    return (
        <section className={estiloSection}>

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
                            <div className={estiloAviso}
                            >
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
                            <div className={estiloAviso}>
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

                            <input type={exibirSenha ? "text" : "password"} id="senha" className={estiloInputs} placeholder="Crie sua senha"
                                onFocus={() => setSenhaEmFoco(true)}
                                onBlur={() => setSenhaEmFoco(false)}
                                onChange={(el) =>
                                    handleCadatroChange(el.target.value)
                                }
                            />

                            {!exibirSenha ? (
                                <EyeOff className={estiloIconeExibir} size={25}
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => setExibirSenha(!exibirSenha)}
                                />
                            ) :
                                <Eye className={estiloIconeExibir} size={25}
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => setExibirSenha(!exibirSenha)} />
                            }


                        </div>

                        {senhaEmFoco && validarArraySenha ? (

                            <ul className="                        flex flex-col gap-2
                           
                            pt-2                
                            text-sm
                            pl-2
                            text-red-400
                            ">
                                {!validacoesSenha.RegexSenhas.temMaiuscula && (
                                    <li className={estiloLista}>
                                        <span>
                                            <TriangleAlert size={19} />
                                        </span>

                                        <span>
                                            Necessario Maiúscula
                                        </span>
                                    </li>
                                )}

                                {!validacoesSenha.RegexSenhas.temMinuscula && (
                                    <li className={estiloLista}>
                                        <span>
                                            <TriangleAlert size={19} />
                                        </span>

                                        <span>
                                            Necessario Minúscula
                                        </span>
                                    </li>
                                )}
                                {!validacoesSenha.RegexSenhas.temNumero && (
                                    <li className={estiloLista}>
                                        <span>
                                            <TriangleAlert size={19} />
                                        </span>

                                        <span>
                                            Pelo menos um número
                                        </span>
                                    </li>
                                )}

                                {!validacoesSenha.RegexSenhas.temEspecial && (
                                    <li className={estiloLista}>
                                        <span>
                                            <TriangleAlert size={19} />
                                        </span>

                                        <span>
                                            Necessario caractér especial(.@-_etc.)
                                        </span>
                                    </li>
                                )}

                                {!validacoesSenha.RegexSenhas.tamanhoSenha && (
                                    <li className={estiloLista}>
                                        <span>
                                            <TriangleAlert size={19} />
                                        </span>

                                        <span>
                                            Minímo 8 caracteres
                                        </span>
                                    </li>
                                )}

                            </ul>
                        ) :
                            ''
                        }

                        {erros.senha && (
                            <div className={estiloAviso}
                            >


                                {erros.senha.campoSenhas && (
                                    <div className={estiloLista}>
                                        <TriangleAlert size={19} />
                                        {
                                            erros.senha.campoSenhas
                                        }
                                    </div>
                                )}

                            </div>
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

                            <input type={exibirConfirmarSenha ? "text" : "password"} id="newsenha" className={estiloInputs} placeholder="Confirmar senha"
                                onChange={(el) =>
                                    setInputs({
                                        ...inputs,
                                        confirmarsenha: el.target.value
                                    })}
                            />

                            {!exibirConfirmarSenha ? (

                                <EyeOff className={estiloIconeExibir}
                                    onClick={() => setExibirConfirmarSenha(!exibirConfirmarSenha)}
                                />
                            ) :

                                <Eye className={estiloIconeExibir}
                                    onClick={() => setExibirConfirmarSenha(!exibirConfirmarSenha)}
                                />

                            }

                        </div>

                        {erros.senha && (
                            <div className={estiloAviso}>
                                {erros.senha.campoConfirmarSenha && (
                                    <div className={estiloLista}>
                                        <TriangleAlert size={19} />
                                        <span>
                                            {erros.senha.campoConfirmarSenha}
                                        </span>
                                    </div>
                                )}


                                {erros.senha.senhaDiferenca && (
                                    <div className={estiloLista}>
                                        <TriangleAlert size={19} />
                                        <span>
                                            {erros.senha.senhaDiferenca}
                                        </span>
                                    </div>
                                )}
                            </div>


                        )}
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

export default Cadastro