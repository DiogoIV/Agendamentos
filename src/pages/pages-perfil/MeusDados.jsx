import { useState } from "react"

import { tituloMenu2, tituloMenu3, tituloMenuCampo, descMenu, btnMenu} from '../../styles/Estilos.js'


function MeusDados() {
    const estiloEditarDados = `flex flex-col gap-1 border p-4 rounded-lg`

    const [editarDados, setEditarDados] = useState(false)
    const [editarSenha, setEditarSenha] = useState(false)
    

    return (

        <section className="flex flex-col 
        gap-6  ">

            <h2 className={tituloMenu2}>Dados da Conta</h2>

            {!editarDados ? (
                
                
                <div className="flex flex-col gap-4
                bg-white
                rounded
                p-4
                ">

                    <div className={estiloEditarDados}>

                        <h3 className={tituloMenuCampo}>Nome do Usuario</h3>
                        <p className={descMenu}>Diogo Rodrigues</p>

                    </div>

                    <div className={estiloEditarDados}>

                        <h3 className={tituloMenuCampo}>Email</h3>
                        <p className={descMenu}>diogorodrigues@gmail.com</p>

                    </div>

                    <div className={estiloEditarDados}>

                        <h3 className={tituloMenuCampo}>Telefone</h3>
                        <p className={descMenu}>(11) 93090-8226</p>

                    </div>

                    <button onClick={()=> setEditarDados(true)} className={btnMenu}>
                        Editar Dados
                    </button>
                </div>


            ) :
                (
                    <form >

                        <div >

                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" autoComplete="name" />

                        </div>

                        <div>

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" autoComplete="email" />

                        </div>

                        <div>

                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" autoComplete="tel" />

                        </div>

                        <div>

                            <button onClick={()=> setEditarDados(false)}>Cancelar</button>

                            <button>Salvar</button>

                        </div>

                    </form>
                )
            }
            
            {!editarSenha ? (

                <div className="">

                    <h3 className={`${tituloMenu3} mb-2`}>Alterar Senha</h3>

                    <div className="flex flex-col gap-4
                bg-white
                rounded
                p-4
                ">
                        <div className={estiloEditarDados}>
                            <h4 className={tituloMenuCampo}>Senha</h4>
                            <p className={descMenu}>********</p>
                        </div>

                        <button onClick={()=>setEditarSenha(true)} className={btnMenu}>Alterar Senha</button>

                    </div>

                      
                </div>

                ) :

                (
                    <form action="">

                        <div>

                            <label htmlFor="senhaatual">Senha atual</label>
                            <input type="password"  id="senhaatual" autoComplete="current-password"/>

                        </div>

                        <div>

                            <label htmlFor="novasenha">Nova senha</label>
                            <input type="password"  id="novasenha" autoComplete="new-password" />
                            
                        </div>

                        <div>

                            <label htmlFor="confirmarsenha">Confirmar nova senha</label>

                            <input type="password"  id="confirmarsenha" autoComplete="new-password"/>
                            
                        </div>

                        <div>
                            <button onClick={()=> setEditarSenha(false)}>Cancelar</button>
                            <button>Salvar</button>
                        </div>

                    </form>
                )

            }

        </section>
    )
}

export default MeusDados