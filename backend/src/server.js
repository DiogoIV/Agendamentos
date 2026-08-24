import express from 'express';
import dotenv from 'dotenv/config'
import cors from 'cors';


import authRoutes from './routes/auth.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes)



app.listen(process.env.PORT, ()=> {
    console.log(`Rodando o servidor!, porta ${process.env.PORT}`)
});
