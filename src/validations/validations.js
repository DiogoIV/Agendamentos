
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexSenha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)\S+$/

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

function validarSenha (senha, confirmarSenha) {

    const senhaLimpa = senha.trim()
    const confirmarLimpa = confirmarSenha.trim()

    if( senhaLimpa === "" || confirmarLimpa === "") {
        return 'Capo vazio'
    }

    if(!regexSenha.test(senhaLimpa)) {
        return "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    }

    if(senhaLimpa.length < 8) {
        return "Mínimo de 8 caracteres";
    }


    if(senhaLimpa !== confirmarLimpa) {
        return 'Senhas iguais.'
    }

    
}