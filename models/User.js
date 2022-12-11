import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    profilePuncture:{
        type:String,
        required:false,
        default:''
    }

},{timestamps:true})

export default mongoose.model("User", userSchema)