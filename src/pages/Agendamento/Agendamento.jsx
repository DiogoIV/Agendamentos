import { useEffect, useState } from "react";
import buscarHorarios from "../../api/horarios";

function Agendamento() {

    const [horarios, setHorarios] = useState([]);

    const dadosHoras = horarios.map(el => (
        <button className="bg-[var(--color-primary)] text-white rounded-lg px-5 py-3">
            {el.horario}
        </button>
        )
    )



    useEffect(() => {

        async function carregar() {

            const horas = await buscarHorarios();

            setHorarios(horas);


        }

        carregar();

    }, []);


    return (

        <div className="
            max-w-4xl
            mx-auto
            flex flex-col
            gap-8
        ">

            <h1 className="
                text-center  
                text-3xl
                md:text-4xl
                font-extrabold
                text-[var(--color-primary)]
            ">
                Agende sua consulta
            </h1>


            <section className="
                border
                rounded-xl
                shadow-md
                p-6
                flex
                flex-col
                gap-8
                md:grid
                md:grid-cols-2
            ">

                {/* Informações */}

                <div className="
                    flex flex-col
                    gap-4
                ">

                    <h2 className="
                        text-2xl
                        font-bold
                        text-[var(--color-primary)]
                    ">
                        Consulta
                    </h2>

                    <div>
                        <p className="font-semibold">
                            Tiago Rodrigues
                        </p>

                        <p>
                            Duração: 50 minutos
                        </p>
                    </div>

                </div>


                {/* Agendamento */}

                <div className="
                    flex flex-col
                    gap-6
                ">

                    <h2 className="
                        text-2xl
                        font-bold
                        text-[var(--color-primary)]
                    ">
                        Escolha um horário
                    </h2>


                    <div className="flex flex-col gap-2">

                        <h3 className="
                            text-lg
                            font-semibold
                        ">
                            Escolha uma data
                        </h3>

                        <input
                            type="date"

                            className="
                            border
                            rounded-lg
                            p-3
                            bg-white
                        "
                        />

                    </div>


                    <div className="flex flex-col gap-3">

                        <h3 className="
                            text-lg
                            font-semibold
                        ">

                            Horários disponíveis
                        </h3>


                        <div className="
                            flex
                            flex-wrap
                            gap-3
                        ">
                            {dadosHoras}

                        </div>

                    </div>


                    <button className="
                        bg-[var(--color-primary)]
                        text-white
                        rounded-lg
                        py-3
                        font-bold
                        w-full
                    ">
                        Confirmar agendamento
                    </button>

                </div>


            </section>

        </div>
    )
}

export default Agendamento