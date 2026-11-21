
/*Crie a lógica de ver detalhes de cada card agendamentos*/

import { tituloMenu2, tituloMenu3 } from "../../styles/Estilos"

function MeusAgendamentos() {

    const dadosAgendamentos = [
        {
            id: 1,
            data: '15/10/2026',
            horas: '14:00',
            Profissional: 'Tiago Rodrigues'
        },

        {
            id: 2,
            data: '15/11/2026',
            horas: '13:00',
            Profissional: 'Tiago Rodrigues'
        },

        {
            id: 3,
            data: '15/12/2026',
            horas: '06:00',
            Profissional: 'Tiago Rodrigues'
        }
    ]

    const cardAgendamentos = dadosAgendamentos.map((item => (

            <div key={item.id}>

                <h2>Consulta</h2>

                <div>
                    <span>{item.data}</span>
                    <span>{item.horas}</span>
                </div>

                <button>DETALHES</button>
            </div>
        )
    ))

    return (

        <section className="flex flex-col gap-6">

            <h2 className={tituloMenu2}>Agendamentos</h2>

            

            <div className="flex flex-col gap-4">
                <h3 className={tituloMenu3}>Meus agendamentos</h3>

                {dadosAgendamentos.length > 0 ? (
                    cardAgendamentos
                ):
                (
                    <div>
                        <p>Você ainda não possui Agendamentos!</p>
                        <button>Agendar Agora</button>
                    </div>
                )
                }
            </div>

        </section>

    )
}

export default MeusAgendamentos