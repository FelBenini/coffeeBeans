import Express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import userController from "./controllers/userController.js";
import postController from "./controllers/postController.js";
import cookieParser from "cookie-parser";
import multer from 'multer';
import helmet from "helmet";
import path from 'path'
import * as url from 'url';
import * as dotenv from 'dotenv'

dotenv.config()

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const apiKey = process.env.API_KEY

function apiAuth(req, res, next) {
    const { authorization } = req.headers;
    if (authorization === apiKey) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }

const uploadMiddleware = multer({dest: 'uploads/',
limits: { fieldSize: 25 * 10000 * 10000 }})

const app = Express()

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(cookieParser())
app.use(Express.json())
app.use(
    '/uploads',
     Express.static(path.join(__dirname, './uploads'))
   );
app.use(helmet())


mongoose.connect('mongodb://127.0.0.1:27017/CoffeeBeans');
mongoose.connection.once('open', () => {
    console.log('MongoDB connected')
})

//user

app.post('/register', apiAuth, userController.RegisterUser)
app.post('/login', apiAuth, userController.loginUser)
app.get('/profile', apiAuth, userController.profile)
app.post('/logout', apiAuth, userController.logout)

//post

app.post('/createpost', apiAuth, uploadMiddleware.single('file'), postController.newPost)
app.get('/posts', apiAuth, postController.displayPost)
app.get('/postcontent/:id', apiAuth, postController.getPost)

app.listen(4000, () => {
    console.log('Server started')
})