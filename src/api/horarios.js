

async function buscarHorarios() {

    const res = await fetch('http://localhost:3000/horarios')


    const dados = await res.json()
    
    
    return dados
    
}

export default buscarHorarios


