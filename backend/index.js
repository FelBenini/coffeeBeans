import Express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import userController from "./controllers/userController.js";
import postController from "./controllers/postController.js";
import cookieParser from "cookie-parser";
import multer from 'multer';

const uploadMiddleware = multer({dest: 'uploads/'})

const app = Express()

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(cookieParser())
app.use(Express.json())

mongoose.connect('mongodb://127.0.0.1:27017/CoffeeBeans');
mongoose.connection.once('open', () => {
    console.log('MongoDB conectado com sucesso')
})

//user

app.post('/register', userController.RegisterUser)
app.post('/login', userController.loginUser)
app.get('/profile', userController.profile)
app.post('/logout', userController.logout)

//post

app.post('/createpost', uploadMiddleware.single('file'), postController.newPost)

app.listen(4000, () => {
    console.log('Servidor iniciado')
})