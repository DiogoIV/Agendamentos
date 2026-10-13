import { useState } from "react"
import { Link } from "react-router-dom"

import { tituloMenu2, tituloMenu3,  tituloMenuCampo, descMenu, btnMenu} from '../../styles/Estilos.js'


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

        <div key={item.id} className="flex
        flex-col gap-3
        bg-white        
        rounded
        px-2
        py-4">

            <h4 className={tituloMenuCampo}>Consulta</h4>

            <p className={descMenu}>
                {item.data} às {item.horario}
            </p>

            <button className={btnMenu}>
                Ver detalhes
            </button>
        </div>

    ))

    return (

        <section className="      
        flex flex-col
        gap-6
        ">
            <h2 className={tituloMenu2}>Minha conta</h2>

            <div className="
            flex
            flex-col
            gap-2
            ">

                <h3 className={tituloMenu3}>Próximos agendamentos</h3>

                {itemsAgendamentos.length > 0 ? (

                    <div className="
                    grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))]
                    gap-4
                    
                    ">
                        {itemsAgendamentos}
                    </div>

                )
                    :
                    (
                        <div>
                             <p className={descMenu}>Você não possui agendamentos.</p>
                             
                             <Link to='/agendar'>
                                Agendar agora
                             </Link>  
                        </div>
                    )
                }
            </div>

            <div className="
            flex flex-col gap-2
            
            ">

                <h3 className={tituloMenu3}>Seus dados</h3>
                
                <div className="flex flex-col gap-2
                bg-white
                rounded
                p-4
                ">

                    <div>
                        <h4 className={tituloMenuCampo}>Nome</h4>
                        <p className={descMenu}>Diogo Rodrigues</p>
                    </div>

                    <div>
                        <h4 className={tituloMenuCampo}>Email</h4>
                        <p className={descMenu}>Diogo@email.com</p>
                    </div>

                    <Link to="meus-dados"
                    className={btnMenu}>Editar</Link>
                </div>

            </div>

        </section>

    )
}

export default MinhaConta