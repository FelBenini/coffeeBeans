import userModel from "../models/user.js";
import bcrypt from 'bcryptjs';
import Jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'

const salt = bcrypt.genSaltSync(10);
dotenv.config()

class userController {

    static RegisterUser = async (req, res) => {
        const { username, email, password } = req.body
        let userExists = await userModel.findOne({ "$or": [{ email: req.body.email }, { username: req.body.username }] })
        if (userExists) {
            res.status(409).json('Username or email already taken')
        } else {
            let user = await new userModel({ username, email, password: bcrypt.hashSync(password, salt) })
            user.save()
            res.status(200).json(user)
        }
    }

    static loginUser = async (req, res) => {
        const { username, password } = req.body
        const user = await userModel.findOne({ username: username })
        if (user) {
            const passVerification = bcrypt.compareSync(password, user.password)
            if (passVerification) {
                //logged
                Jwt.sign({ username, id: user._id }, process.env.SECRET_KEY, {}, (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json({
                        id: user._id,
                        username
                    })
                })
            } else {
                res.status(400).json('Could not login')
            }
        } else {
            res.status(400).json('Username does not exist')
        }

    }

    static profile = (req, res) => {
        const { token } = req.cookies
        Jwt.verify(token, process.env.SECRET_KEY, {}, (err, info) => {
            if (err) throw err;
            res.json(info)
        })
    }

    static logout = (req, res) => {
        res.cookie('token', '').json('ok')
    }
}

export default userController