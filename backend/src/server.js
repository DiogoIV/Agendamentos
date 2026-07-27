import express from 'express';
import dotenv from 'dotenv/config'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());



import horariosRoutes from './routes/horarios.js';
import authRoutes from './routes/auth.js';
import agendamentosRoutes from './routes/agendamentos.js';

app.use(horariosRoutes)



app.listen(3000, ()=> {
    console.log('Executando')
});
