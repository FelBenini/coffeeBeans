import Express  from "express";
import cors from 'cors';

const app = Express()

app.use(cors())
app.use(Express.json())

app.post('/register', (req, res) => {
    let {username, password, email} = req.body;
    res.json({username, password, email})
})

app.listen(4000, () => {
    console.log('Servidor iniciado')
})