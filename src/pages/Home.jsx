import { Link } from "react-router-dom"
import { Calendar, CheckCircle, Clock } from '../assets/icons'

function Home() {
    return (
        <>
            {/*sessão hero*/}
            <section className="
                flex flex-col gap-8
                
                py-16 md:py-24
                items-center
                md:flex-row
                md:max-w-[1200px]
                
                md:mx-auto
                md:gap-10
            ">

                <div className="
                    flex flex-col gap-6
                    flex-1
                    md:flex-[1.5]
                ">

                    <h1 className="
                        text-3xl
                        
                        md:text-4xl
                        font-extrabold
                        text-[var(--color-primary)]
                        max-w-xl
                        
                        leading-tight
                    ">
                        Seu sistema de agendamentos fácil
                    </h1>

                    <p className="
                        text-[var(--color-text-light)]
                        max-w-md
                        leading-relaxed
                    ">
                        Escolha um horário e agende em poucos segundos
                    </p>

                    <Link
                        to="/agendar"
                        className="
                        bg-[var(--color-primary)]
                        text-white
                        font-bold
                        text-center
                        rounded-lg
                        py-3 px-6
                        shadow-md
                        transition
                        hover:opacity-90
                        
                        w-full
                        md:w-fit
                        
                    "
                    >
                        Agendar agora
                    </Link>

                </div>


                <div className="
                    flex-1
                    w-full
                    flex
                    justify-center
                ">

                    <img
                        src="src/assets/imagens/layout-agendar-img.jpg"
                        alt="Imagem ilustrativa de agendamento"
                        className="
                        w-full
                        max-w-md
                        md:max-w-xl
                        
                        aspect-[4/3]
                        object-cover
                        rounded-xl
                        shadow-md
                    "
                    />

                </div>

            </section>

            {/* sessão explicação*/}

            <section className=" flex flex-col gap-4
            md:max-w-[1200px]
            
            border rounded-md p-4 md:pb-8
            shadow-md md:m-auto">

                <h2 className="text-2xl 
                text-[var(--color-primary)] font-bold">Como funciona?</h2>

                <ol className="flex flex-col gap-4 
                md:flex-row justify-between" >
                    <li className="flex gap-4 items-center "><Calendar size={22} />Escolha um horário disponível</li>
                    <li className="flex gap-4 items-center"><CheckCircle size={22} /> Confirme o agendamento</li>
                    <li className="flex gap-4 items-center"><Clock size={22} /> Pronto, seu horário está marcado</li>
                </ol>


            </section>

            {/* sessão profissional*/}

            <section className="flex flex-col gap-4 p-4">

                <h2 className="text-2xl 
                text-[var(--color-primary)] font-bold ">Sobre o Profissional</h2>

                <div className="flex flex-col gap-4 ">

                    <img src="src\assets\imagens\2a256a9e-f6a a-4c56-9059-2ca28e299f08.jpg" alt="" className="w-40 md:w-48 aspect-square object-cover rounded-xl shadow-md" />

                    <div className="flex flex-col gap-4">

                        <h3 className="text-lg font-semibold text-[var(--color-primary)]">Tiago Rodrigues </h3>

                        <p className="text-base font-normal leading-relaxed  ">Atendimento com profissional qualificado e formado, com foco em qualidade e pontualidade.</p>
                    </div>
                </div>



                <div className="flex flex-col gap-2">

                    <h3 className=" font-semibold text-[var(--color-primary)]">Especialidades</h3>
                    <ul className="list-disc pl-7 space-y-2">
                        <li>Terapia Cognitivo-Comportamental</li>
                        <li>Ansiedade</li>
                        <li>Depressão</li>
                    </ul>

                    <h3 className=" font-semibold text-[var(--color-primary)]">Experiência</h3>
                    <ul className="list-disc pl-7 space-y-2">
                        <li>Atendimento online</li>
                        <li>Atendimento presencial</li>
                    </ul>
                </div>

            </section>

            {/*Chamada final*/}

            <section className="flex flex-col gap-4
            border rounded-md p-5 md:pb-8
            shadow-md">

                <h2 className="text-xl 
                text-[var(--color-primary)] font-bold ">Pronto para agendar seu horário?</h2>

                <p className="text-[var(--color-text-light)]  leading-relaxed ">Agende em poucos minutos, de forma simples e rápida.</p>

                <Link to="/agendar" className="bg-[var(--color-primary)]
                    p-3
                    text-center text-white rounded-lg 
                    font-normal shadow-sm">
                    Agendar agora
                </Link>
            </section>
        </>
    )
}

export default Home