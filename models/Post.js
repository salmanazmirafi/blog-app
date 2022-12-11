import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
    },
    image:{
        type:String,
    },
    username:{
        type:String,
        required:true
    },
    category:{
        type:Array,
        
    }


},{timestamps:true})

export default mongoose.model("Post", postSchema)