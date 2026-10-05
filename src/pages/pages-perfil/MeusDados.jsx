import { useState } from "react"




function MeusDados() {

    const [editarDados, setEditarDados] = useState(false)
    const [editarSenha, setEditarSenha] = useState(false)

    return (

        <section>

            <h2>Dados da Conta</h2>

            {!editarDados ? (
                <div>

                    <div>

                        <h3>Nome do Usuario</h3>
                        <p>Diogo Rodrigues</p>

                    </div>

                    <div>

                        <h3>Email</h3>
                        <p>diogo@gmail.com</p>

                    </div>

                    <div>

                        <h3>Telefone</h3>
                        <p>11 9999-9999</p>

                    </div>

                    <button onClick={()=> setEditarDados(true)}>
                        EDITAR DADOS
                    </button>
                </div>


            ) :
                (
                    <form >

                        <div>

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

                <div>
                    <div>

                        <h3>Senha</h3>

                        <p>********</p>

                    </div>

                      <button onClick={()=>setEditarSenha(true)}>ALTERAR SENHA</button>
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