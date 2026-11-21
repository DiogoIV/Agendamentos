
/*Crie a lógica de ver detalhes de cada card agendamentos*/

import { Clock, Calendar } from  '../../assets/icons/index'
import { tituloMenu2, tituloMenu3, descMenu, tituloMenuCampo, btnMenu } from "../../styles/Estilos"

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

            <div key={item.id} className="
            flex flex-col gap-2
            bg-white
            p-2 rounded
            ">

                <h2 className={tituloMenuCampo}>Consulta</h2>

                <div className="flex flex-col gap-3">

                    <div className='flex gap-2 items-center'>

                         <Calendar size={17} className='text-[var(--color-primary)]'/> 

                         <span className={descMenu}>{item.data}</span>
                         
                    </div>

                    <div className='flex gap-2 items-center'> 

                        <Clock size={17} className='text-[var(--color-primary)]'/>
                        
                        <span className={descMenu}>{item.horas}</span>

                    </div>

                </div>

                <button className={`${btnMenu} bg-[#EDE9FE] p-2`}>Ver detalhes</button>
            </div>
        )
    ))

    return (

        <section className="flex flex-col gap-6">

            <h2 className={tituloMenu2}>Agendamentos</h2>

            

            <div className="flex flex-col gap-4">
                <h3 className={tituloMenu3}>Meus agendamentos</h3>

                {dadosAgendamentos.length > 0 ? (
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>

                        {cardAgendamentos}

                    </div>
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