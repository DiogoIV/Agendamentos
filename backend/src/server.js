import express from 'express';
import dotenv from 'dotenv/config'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

const horarios = [
    {
        data: "20/07/2026",
        horario: "10:00",
        disponivel: true
    },

    {
        data: "20/07/2026",
        horario: "12:00",
        disponivel: false
    },

    {
        data: "20/07/2026",
        horario: "13:00",
        disponivel: true
    },

    {
        data: "20/07/2026",
        horario: "15:00",
        disponivel: false
    }
]


app.get('/horarios', (req, res)=> {
    res.json(horarios)
})



app.listen(3000, ()=> {
    console.log('Executando')
});
