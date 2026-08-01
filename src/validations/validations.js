
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validarNome(nome) {

    const nomeLimpo = nome.trim()

    if(nomeLimpo === "") {
        return 'Preecha os dados corretamente'
    }

    if(nomeLimpo.length < 3) {
        return '"O nome deve ter pelo menos 3 caracterese'
    }
}

function validarEmail (email) {

    if(email.trim() === "") {
        return 'Preecha os dados corretamente'
    }
    if(!regexEmail.test(email)) {
        return 'email invalido! '
    }


}