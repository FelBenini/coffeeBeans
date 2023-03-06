import postModel from "../models/post.js";
import fs from 'fs'

class postController {
    static newPost = async (req, res) => {
        const {originalname, path} = req.file
        const parts = originalname.split('.')
        const format = parts[parts.length - 1]
        const newPath = path + '.' + format
        fs.renameSync(path, newPath)
        const {title, summary, content} = req.body
        const post = await new postModel({
            title,
            summary,
            img: newPath.replace("\\", "/"),
            content
        })
        post.save()
        res.json(post)
    }

    static displayPost = async (req, res) => {
        const posts = await postModel.find().sort({createdAt: -1})
        res.json(posts)
    }
}

export default postController