
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexSenhaMinuscula = /[a-z]/
const regexSenhaMaiuscula = /[A-Z]/
const regexSenhaNumero = /[0-9]/
const regexSenhaEspecial = /[^a-zA-Z0-9]/

function validarNome(nome) {

    const nomeLimpo = nome.trim()

    if (nomeLimpo === "") {
        return 'Campo obrigatório.'
    }

    if (nomeLimpo.length < 3) {
        return ' O nome deve ter pelo menos 3 caracteres'
    }

    return null
}

function validarEmail(email) {

    if (email.trim() === "") {
        
        return 'Campo obrigatório.'
        
    }
    if (!regexEmail.test(email)) {
        
        return 'Formato de email inválido! '
    }

    return null
}

function ValidarDigitarSenha(senha) {

    const senhaLimpa = senha.trim()

    const validacoes = {
        temMaiuscula: regexSenhaMaiuscula.test(senha),
        temMinuscula: regexSenhaMinuscula.test(senha),
        temNumero: regexSenhaNumero.test(senha),
        temEspecial: regexSenhaEspecial.test(senha),
        tamanhoSenha: senhaLimpa.length > 8 ? true : false
    }

    return validacoes
}

function validarSenha(senha, confirmarSenha) {

    const senhaLimpa = senha.trim()
    const confirmarLimpa = confirmarSenha.trim()

    const campoSenha = {
        campoSenha: senha === '' ? 'Campo obrigatório': null,
        campoConfirmarSenha: confirmarLimpa === '' ? 'Campo obrigatório': null,
        senhaDiferenca: senhaLimpa !== '' && confirmarLimpa !== '' && senhaLimpa !== confirmarLimpa ? 'senhas não batem': null 
    }

    return campoSenha

    

}

export {validarNome, validarEmail, validarSenha, ValidarDigitarSenha}