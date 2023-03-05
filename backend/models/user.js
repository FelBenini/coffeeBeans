import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, min: 4, max: 18},
    email: {type: String, required: true, unique: true, min: 4},
    password: {type: String, required: true, unique: true, min: 4}
})

const userModel = model('User', userSchema);

export default userModel