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

app.post('/register', async (req, res) => {

    let userExists = await userModel.findOne({ "$or": [ { email: req.body.email }, { username: req.body.username} ] })
    if (userExists) {
        res.status(409).json('Username or email already taken')
    } else {
        let user = await new userModel(req.body)
        user.save()
        res.status(200).json(user)
    }
})

app.listen(4000, () => {
    console.log('Servidor iniciado')
})