

async function Cadastrar(inputs) {


    const res = await fetch('http://localhost:3000/Cadrasto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: inputs.nome, email: inputs.email, senha: inputs.senha, confirmarSenha: inputs.confirmarSenha })

    })

    const dados = await res.json()

    if (res.ok) {

        return dados.mensagem || 'Cadastrado com sucesso!'

    } else {

        return dados.mensagem || 'Erro ao cadastrar'

    }



}

export default Cadastrar