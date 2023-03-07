import mongoose, { model } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    summary: {type: String},
    img: {type: String},
    content: {type: String, required: true},
    users: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"}
}, {
    timestamps: true
})

const postModel = model('Post', postSchema);

export default postModel