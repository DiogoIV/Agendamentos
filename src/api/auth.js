

async function Cadrasto (){
    try {
        
        const res = fetch('http://localhost:3000/Cadrasto', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({})
        })

    } catch(erro) {

        console.log(erro, 'erro ao enviar dados do Cadrasto')
    }

} 

export default Cadrasto