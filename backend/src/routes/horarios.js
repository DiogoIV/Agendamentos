import { Router } from 'express';

const router = Router();

router.get('/horarios', (req, res) => {
    res.json([
        { horario: '09:00' },
        { horario: '10:00' }
    ]);
});

export default router;