
/* Cadastrar */
async function Cadastrar(inputs) {


    const res = await fetch('http://localhost:3000/auth/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: inputs.nome, email: inputs.email, senha: inputs.senha, confirmarSenha: inputs.confirmarsenha })

    })

    const dados = await res.json()

    return {
        ok: res.ok,
        codigo: dados.codigo,
        mensagem: dados.mensagem
    }



}



/* Logar */

async function Logar(email, senha) {

    const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            email: email,
            senha: senha
        })  
    })
    

    const dados = await res.json()

    return {
        ok: res.ok,
        codigo: dados.codigo,
        mensagem: dados.mensagem
    }

}



export { Cadastrar, Logar }