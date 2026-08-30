import { Router } from 'express';
import bcrypt from 'bcrypt'
import { validarNome, validarSenha, validarEmail } from '../validations/validacao.js'



const router = Router();

const BancoDados = []




/*Cadastro*/

router.post('/cadastro', async (req, res) => {

    const { nome, email, senha, confirmarSenha } = req.body
    const senhaHash = await bcrypt.hash(senha, 10)

    /*Validações*/

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

    /*Banco de dados*/

    BancoDados.push({
        nome: nome,
        email: email,
        senha: senhaHash
    })

    console.log(BancoDados)

    res.status(201).json({
        mensagem: 'Cadastrado com sucesso!!!'
    })

})


/*Login*/

router.post('/login', async (req, res) => {

    const { email, senha } = req.body

    /*  Validações */

    const erroEmail = validarEmail(email)
    

    if (erroEmail) {
        return res.status(400).json({
            mensagem: 'Dados inválidos'
        });
    }

    /*Banco de dados*/

    try {

        const usuario = BancoDados.find(el => el.email === email)

        if(!usuario) {

            return res.status(404).json({mensagem: 'E-mail ou senha inválidos.!'})

        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

        if(!senhaCorreta) {
           
            return res.status(401).json({mensagem: 'E-mail ou senha inválidos.'})

        } 

        return res.status(200).json({mensagem: 'Login realizado com sucesso!'})

    } catch(erro) {
        
        console.error('erro na conexão do Banco')

        return res.status(500).json({mensagem: 'Dados invalídos'})
    }

    

})



export default router;