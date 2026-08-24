import { Router } from 'express';

import { validarNome, validarSenha, validarEmail } from '../validations/validacao.js'

const router = Router();

const BancoDados = []



/*Cadastro*/

router.post('/cadastro', async (req, res) => {

    const { nome, email, senha, confirmarSenha } = req.body
    const senhaHash = await bcrypt.hash(senha, 10)

    const erroNome = validarNome(nome)
    const erroEmail = validarEmail(email)
    const erroSenha = validarSenha(senha)
    

    if (erroNome || erroEmail || erroSenha) {
        return res.status(400).json({
            mensagem: 'Dados inválidos'
        });
    }

    if (senha !== confirmarSenha) {
        return res.status(400).json({
            mensagem: 'As senhas não coincidem'
        });
    }

    BancoDados.push({
        nome: nome,
        email: email,
        senha: senhaHash
    })

    res.status(201).json({
        mensagem: 'Cadastrado com sucesso!!!'
    })

})

console.log(BancoDados)



export default router;