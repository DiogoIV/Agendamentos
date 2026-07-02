import { Link } from "react-router-dom"


function Home() {
    return (
        <>  
            {/*sessão hero*/}
            <section className="flex flex-col md:flex-row items-center 
            min-h-[70vh] gap-6">

                <div className="flex flex-col  gap-6 flex-[1.5]">

                    <h1 className="text-3xl font-extrabold text-[var(--color-primary)] max-w-xl">
                        Seu sistema de agendamentos fácil
                    </h1>
                    <p className="text-gray-600  max-w-md leading-relaxed">
                        Escolha um horário e agende em poucos segundos
                    </p>

                    <Link to="/agendar" className="bg-[var(--color-primary)]
                    p-4
                    text-center text-white rounded-lg 
                    font-bold shadow-sm
                    
                    ">
                        Agendar agora
                    </Link>
                </div>

                <div className=" w-full md:flex-1 ">
                    <img src="src\assets\imagens\fundo_elefante.jpg" alt=""  
                    className="w-full h-64 md-h-full 
                    object-cover rounded-lg
                    "/>
                </div>


            </section>

            {/* sessão explicação*/}

            <section>

                <h2>Como funciona?</h2>

                <ol>
                    <li>Escolha um horário disponível</li>
                    <li>Confirme o agendamento</li>
                    <li>Pronto, seu horário está marcado</li>
                </ol>

                <p>Simples e direto, sem burocracia.</p>
            </section>

            {/* sessão profissional*/}
            <section>
                <h2>Sobre o Profissional</h2>

                <p>Atendimento com profissional qualificado, com foco em qualidade e pontualidade.</p>

                foto
                <p>
                    Profissional especializado Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam qui soluta corporis ipsa fugiat porro, facilis ut itaque sequi architecto? Dolore, obcaecati distinctio. Omnis iure et culpa architecto ad corrupti!
                </p>
            </section>

            {/*Chamada final*/}
            
            <section>
                <h2>pronta para agendar seu horário?</h2>

                <Link to="/agendar">
                    Agendar agora
                </Link>
            </section>
        </>
    )
}

export default Home