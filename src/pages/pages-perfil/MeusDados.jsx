import { useState } from "react"

import {Pencil, User} from '../../assets/icons/index.js'

import { tituloMenu2, tituloMenu3, tituloMenuCampo, descMenu, btnMenu } from '../../styles/Estilos.js'

import { validarEmail, validarNome } from "../../validations/validations.js"


function MeusDados() {

    /* Estilos */

    const estiloEditarDados = `flex flex-col gap-1 border p-4 rounded-lg`

    const LabelInput = `text-[var(--color-primary)] font-bold`

    const estiloInputs = `
        w-full
        py-2
        rounded-lg
        pl-4
        pr-4

        border border-gray-300
        bg-white
        text-gray-700
        placeholder:text-gray-400
        

        outline-none
        transition-all duration-200

        focus:border-violet-500
        focus:ring-2
        focus:ring-violet-500/20
        `;
    const estiloContainerInputs = `flex flex-col gap-2`

    /*Campo Dados*/
    
    const [valorInput, setValorInput] = useState({
        inputNome: null,
        inputEmail: null,
        inputTel: null
    })

    console.log(valorInput)

    const [mensagemErro, setMensagemErro] = useState({
        erroNome: null,
        erroEmail: null,
        erroTel: null
    })

    const [editarDados, setEditarDados] = useState(false)

    const [usuario, setUsuario] = useState({
        nome: 'Diogo Rodrigues',
        email: 'diogorodrigues@gmail.com',
        telefone: '(11) 95954-93935'
    })

    function handleEditarDados (e) {
        e.preventDefault()

        const valCampoNome = validarNome(valorInput)
        
        if (valCampoNome !== null) {
            return setMensagemErro(
                (el)=> (
                    {
                        ...el,
                        erroNome: valCampoNome
                    }
                )
            )
        }

    }
    
    

    /* Campo Senha */

    const [editarSenha, setEditarSenha] = useState(false)


    return (

        <section className="flex flex-col 
        gap-6  ">

            <h2 className={tituloMenu2}>Dados da conta</h2>

            {!editarDados ? (


                <div className="flex flex-col gap-4
                bg-white
                rounded
                p-4
                ">

                    <div className={estiloEditarDados}>

                        <h3 className={tituloMenuCampo}>Nome do Usuario</h3>
                        <p className={descMenu}>{usuario.nome}</p>

                    </div>

                    <div className={estiloEditarDados}>

                        <h3 className={tituloMenuCampo}>Email</h3>

                        <p className={descMenu}>{usuario.email}</p>

                    </div>

                    <div className={estiloEditarDados}>

                        <h3 className={tituloMenuCampo}>Telefone</h3>
                        <p className={descMenu}>{usuario.telefone}</p>

                    </div>

                    <button onClick={() => setEditarDados(true)} className={`${btnMenu} flex `}>
                        Editar dados <Pencil size={12}/>
                    </button>
                </div>


            ) :
                (
                    <form className="flex flex-col gap-4
                  bg-white
                    rounded
                    p-6
                "
                onSubmit={(e)=> handleEditarDados(e)}
                >

                        <div className={estiloContainerInputs}>

                            <label htmlFor="nome" className={`${LabelInput}
                            flex gap-1 items-center`} >
                            Nome
                            </label>

                            <input type="text" id="nome" autoComplete="name" className={estiloInputs} 
                            onChange={(e)=>  setValorInput(
                                (el)=> (
                                    {...el,
                                    inputNome: e.target.value
                                }
                                )
                            )}/>

                        </div>

                        <div className={estiloContainerInputs}>

                            <label htmlFor="email" className={LabelInput}>Email</label>

                            <input type="email" id="email" autoComplete="email"
                            className={estiloInputs} 
                            onChange={(e)=> setValorInput(
                                (el)=> (
                                    {                                ...el,
                                        inputEmail: e.target.value
                                    }
                                )
                                
                            )}/>

                        </div>

                        <div className={estiloContainerInputs}>

                            <label htmlFor="telefone" className={LabelInput}>Telefone</label>

                            <input type="tel" id="telefone" autoComplete="tel"
                            className={estiloInputs} 
                            onChange={(e)=> setValorInput(
                                (el)=> (
                                    {                                ...el,
                                        inputTel: e.target.value
                                    }
                                )
                                
                            )}
                            />

                        </div>

                        <div className="flex gap-4 justify-end">

                            <button onClick={() => setEditarDados(false)} className={btnMenu}>Cancelar</button>

                            <button className={` font-semibold p-2 bg-[var(--color-primary)] text-white rounded-lg w-[130px] hover:bg-violet-600  transition   `
                        }>Salvar</button>

                        </div>

                    </form>
                )
            }

            <h3 className={`${tituloMenu3} mt-5`}>Alterar senha</h3>
            {!editarSenha ? (

                <div className="">



                    <div className="flex flex-col gap-4
                    bg-white
                    rounded
                    p-4
                    ">
                        <div className={estiloEditarDados}>

                            <h4 className={tituloMenuCampo}>Senha</h4>
                            <p className={descMenu}>********</p>

                        </div>

                        <button onClick={() => setEditarSenha(true)} className={`${btnMenu} flex `}>
                            Alterar senha <Pencil size={12}/>
                            </button>

                    </div>


                </div>

            ) :

                (

                    <form  className="flex flex-col gap-4
                  bg-white
                    rounded
                    p-6">


                        <div className={estiloContainerInputs}>

                            <label htmlFor="senhaatual" className={LabelInput}>Senha atual</label>

                            <input type="password" id="senhaatual" autoComplete="current-password" className={estiloInputs} />

                        </div>

                        <div className={estiloContainerInputs}>

                            <label htmlFor="novasenha" className={LabelInput}> Nova senha</label>

                            <input type="password" id="novasenha" autoComplete="new-password" className={estiloInputs} />

                        </div>

                        <div className={estiloContainerInputs}>

                            <label htmlFor="confirmarsenha" className={LabelInput}>Confirmar nova senha</label>

                            <input type="password" id="confirmarsenha" autoComplete="new-password" className={estiloInputs} />

                        </div>

                        <div className="flex gap-4 justify-end">

                            <button onClick={() => setEditarSenha(false)} className={btnMenu}>Cancelar</button>

                            <button className={` font-semibold p-2 bg-[var(--color-primary)] text-white rounded-lg w-[130px] hover:bg-violet-600  transition   `
                        }>Salvar</button>

                        </div>

                        

                    </form>
                )

            }

        </section>
    )
}

export default MeusDados