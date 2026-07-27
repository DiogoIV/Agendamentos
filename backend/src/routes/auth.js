import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {

    res.json({
        mensagem: 'Login realizado'
    });

});

export default router;