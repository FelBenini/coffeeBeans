import postModel from "../models/post.js";
import fs from 'fs'
import sharp from "sharp";

class postController {
    static newPost = async (req, res) => {
        const {originalname, path} = req.file
        const parts = originalname.split('.')
        const format = parts[parts.length - 1]
        const newPath = path + '.' + format
        await sharp(path).resize(1920).webp({quality: 100,
        chromaSubsampling: '4:4:4'}).toFile(newPath)
        const {title, summary, content, user} = req.body
        const post = await new postModel({
            title,
            summary,
            img: newPath.replace("\\", "/"),
            content,
            users: user
        })
        post.save()
        res.json(post)
    }

    static displayPost = async (req, res) => {
        const page = req.query.page || 1
        const limit = req.query.limit || 15
        const posts = await postModel.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({createdAt: -1})
        res.json(posts)
    }

    static getPost = async (req, res) => {
        const post = await postModel.findById(req.params.id).populate('users', ['username']).exec()
        res.status(200).json(post)
    }
}

export default postController