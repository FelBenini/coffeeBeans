import Express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import userModel from "./models/user.js";
const app = Express()

app.use(cors())
app.use(Express.json())

mongoose.connect('mongodb://127.0.0.1:27017/CoffeeBeans');
mongoose.connection.once('open', () => {
    console.log('MongoDB conectado com sucesso')
})

app.post('/register', (req, res) => {
    console.log(req.body)
    let user = new userModel(req.body)
    user.save()
    res.json({username, password, email})
})

app.listen(4000, () => {
    console.log('Servidor iniciado')
})