import Express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import userModel from "./models/user.js";
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

const app = Express()

app.use(cors())
app.use(Express.json())

mongoose.connect('mongodb://127.0.0.1:27017/CoffeeBeans');
mongoose.connection.once('open', () => {
    console.log('MongoDB conectado com sucesso')
})

app.post('/register', async (req, res) => {
    const {username, email, password} = req.body
    let userExists = await userModel.findOne({ "$or": [ { email: req.body.email }, { username: req.body.username} ] })
    if (userExists) {
        res.status(409).json('Username or email already taken')
    } else {
        let user = await new userModel({username, email, password: bcrypt.hashSync(password, salt)})
        user.save()
        res.status(200).json(user)
    }
})

app.post('/login', async (req, res) => {
    const {username, password} = req.body
    const user = await userModel.findOne({username: username})
    const passVerification = bcrypt.compareSync(password, user.password)
    res.json(passVerification)
})

app.listen(4000, () => {
    console.log('Servidor iniciado')
})