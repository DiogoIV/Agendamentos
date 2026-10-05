import { useState } from "react"
import { Link } from "react-router-dom"



function MinhaConta() {

    const bancoAgendamentos = [
        {
            id: 1,
            data: '15/10/2026',
            horario: '14:00'
        },

        {
            id: 2,
            data: '20/11/2026',
            horario: '20:00'
        },

        {
            id: 3,
            data: '16/11/2026',
            horario: '09:00'
        }

    ]


    const itemsEscolhidos = bancoAgendamentos.slice(0, 3)


    const itemsAgendamentos = itemsEscolhidos.map(item => (

        <div key={item.id}>

            <h4>Consulta</h4>

            <p>
                {item.data} às {item.horario}
            </p>

            <button>
                ver detalhes
            </button>
        </div>

    ))

    return (

        <section className="
        ">
            <h2>Minha conta</h2>

            <div>

                <h3>Próximos agendamentos</h3>

                {itemsAgendamentos.length > 0 ? (

                    itemsAgendamentos

                )
                    :
                    (
                        <div>
                             <p>Você não possui agendamentos.</p>
                             
                             <Link to='/agendar'>
                                Agendar agora
                             </Link>  
                        </div>
                    )
                }
            </div>

            <div>

                <h3>Seus dados</h3>
                
                <div>

                    <div>
                        <h3>Nome</h3>
                        <p>Diogo Rodrigues</p>
                    </div>

                    <div>
                        <h3>Email</h3>
                        <p>Diogo@email.com</p>
                    </div>

                    <Link to="meus-dados">Editar</Link>
                </div>

            </div>

        </section>

    )
}

export default MinhaConta