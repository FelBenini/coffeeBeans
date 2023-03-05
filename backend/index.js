import Express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import userModel from "./models/user.js";
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import Jwt from "jsonwebtoken";

dotenv.config()

const salt = bcrypt.genSaltSync(10);

const app = Express()

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

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
    if (passVerification) {
        //logged
        Jwt.sign({username, id: user._id}, process.env.SECRET_KEY, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok')
        })
    } else {
        //not logged
        res.status(400).json('Could not login')
    }
})

app.listen(4000, () => {
    console.log('Servidor iniciado')
})