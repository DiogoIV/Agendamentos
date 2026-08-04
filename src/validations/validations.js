
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexSenhaMinuscula = /[a-z]/
const regexSenhaMaiuscula = /[A-Z]/
const regexSenhaNumero = /[0-9]/
const regexSenhaEspecial = /[^a-zA-Z0-9]/

function validarNome(nome) {

    const nomeLimpo = nome.trim()

    if (nomeLimpo === "") {
        return 'Preecha os dados corretamente'
    }

    if (nomeLimpo.length < 3) {
        return '"O nome deve ter pelo menos 3 caracterese'
    }

    return null
}

function validarEmail(email) {

    if (email.trim() === "") {
        return 'Preecha os dados corretamente'
    }
    if (!regexEmail.test(email)) {
        return 'email invalido! '
    }


}

function validarSenha(senha, confirmarSenha) {

    const senhaLimpa = senha.trim()
    const confirmarLimpa = confirmarSenha.trim()

    if (senhaLimpa === "" || confirmarLimpa === "") {
        return 'Capo vazio'
    }

    if (senhaLimpa !== confirmarLimpa) {
        return 'As senhas não coincidem.'
    }

    const validacoes = {
        temMaiscula: regexSenhaMaiuscula.test(senha),
        temMinuscula: regexSenhaMinuscula.test(senha),
        temNumero: regexSenhaNumero.test(senha),
        temEspecial: regexSenhaEspecial.test(senha),
        tamanhoSenha: senhaLimpa.length > 8 ? true : false
    }

    return validacoes


}

export {validarNome, validarEmail, validarSenha}