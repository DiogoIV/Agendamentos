import { Router } from 'express';

const router = Router();

router.post('/agendamentos', (req, res) => {

    res.json({
        mensagem: 'Agendamento criado'
    });

});

export default router;