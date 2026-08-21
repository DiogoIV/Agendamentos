const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexNome = /^(?:\p{L}{2,})(?:\s\p{L}{2,})*$/u;

const regexSenhaMinuscula = /[a-z]/;
const regexSenhaMaiuscula = /[A-Z]/;
const regexSenhaNumero = /[0-9]/;
const regexSenhaEspecial = /[^a-zA-Z0-9]/;


function validarNome(nome) {

    const nomeLimpo = nome.trim();

    if (nomeLimpo === '') {
        return 'Nome obrigatório';
    }

    if (nomeLimpo.length < 3) {
        return 'Nome deve ter pelo menos 3 caracteres';
    }

    if (!regexNome.test(nomeLimpo)) {
        return 'Nome inválido';
    }

    return null;
}


function validarEmail(email) {

    const emailLimpo = email.trim();

    if (emailLimpo === '') {
        return 'E-mail obrigatório';
    }

    if (!regexEmail.test(emailLimpo)) {
        return 'E-mail inválido';
    }

    return null;
}


function validarSenha(senha) {

    if (senha === '') {
        return 'Senha obrigatória';
    }

    if (senha.length < 8) {
        return 'Senha inválida';
    }

    if (!regexSenhaMinuscula.test(senha)) {
        return 'Senha inválida';
    }

    if (!regexSenhaMaiuscula.test(senha)) {
        return 'Senha inválida';
    }

    if (!regexSenhaNumero.test(senha)) {
        return 'Senha inválida';
    }

    if (!regexSenhaEspecial.test(senha)) {
        return 'Senha inválida';
    }

    return null;
}

export {validarNome, validarSenha, validarEmail}