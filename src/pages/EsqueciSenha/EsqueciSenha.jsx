import { Link } from "react-router-dom"
import { Heart, Mail, TriangleAlert } from "../../assets/icons/"
import { useState } from "react"

import { estiloSection, estiloInputs, estiloAviso } from "../../styles/Estilos"

import { validarEmail } from "../../validations/validations"

function EsqueciSenha() {

    const [input, setInput] = useState('')

    const [erro, setErro] = useState('')

    function handleEsqueci(e) {
        e.preventDefault()

        setErro(validarEmail(input))
    }

    return (



        <section className={estiloSection}>

            <div className="
                flex items-center 
                gap-1
                text-2xl
                ">
                <Heart size={42} /> <span>Agenda Fácil</span>
            </div>

            <h1 className="text-xl">Recuperar senha</h1>

            <form action="" className="            
            flex
            flex-col
            gap-6
            w-full
            "
                onSubmit={(e) => handleEsqueci(e)}
            >

                <div>

                    <div>
                        <label htmlFor="email" className="sr-only">email</label>
                    </div>

                    <div className="relative">

                        <Mail className="absolute
                                top-1/2 -translate-y-1/2 left-3
                                text-gray-400" size={25}
                        />

                        <input type="text" name="" id="email" className={estiloInputs} placeholder="Digite seu email"
                            onChange={(e) => setInput(e.target.value)}
                        />



                    </div>

                    
                    {erro && (
                        <div className={estiloAviso}>
                            <TriangleAlert size={19} />
                            {erro}
                        </div>
                    )}

                </div>

                <div className="flex flex-col gap-2">


                    <div className="flex flex-col gap-4">

                        <button to="" type="submit" className="bg-white
                        text-[var(--color-primary)]
                        font-bold
                        
                        py-3
                        text-center
                        rounded-lg
                        
                        shadow-md
                        transition
                        hover:opacity-90
                        hover:shadow-md
                        hover:scale-[1.02]
                        ">
                            Enviar
                        </button>


                    </div>

                    <div className="
                    flex gap-2
                    border-t
                  border-gray-200
                    pt-4
                    mt-4
                    ">
                        <p>Lembrou da senha?</p>

                        <Link to="/login" className="font-semibold
                        
                        hover:underline">
                            Entrar
                        </Link>
                    </div>
                </div>


            </form>




        </section>

    )
}

export default EsqueciSenha