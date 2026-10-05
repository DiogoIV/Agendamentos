
/*Crie a lógica de ver detalhes de cada card agendamentos*/

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

        <section>

            <h2>Agendamentos</h2>

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

        </section>

    )
}

export default MeusAgendamentos