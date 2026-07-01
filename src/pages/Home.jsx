import { Link } from "react-router-dom"


function Home() {
    return (
        <>  
            {/*sessão hero*/}
            <section>
                <h1>
                    Seu sistema de agendamentos fácil
                </h1>

                <p>
                    Escolha um horário e agende em poucos segundos
                </p>

                <Link to="/agendar">
                    Agendar agora
                </Link>
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