const mongoose=require("mongoose")
//schema
const postSchema=new mongoose.Schema({
  name:{
        type:String,
        require:true
    },
    
    author:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Category"
    },
   shares:{
        type:Number,
        default:0
    },
    
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
       
        ref:"User"
    }],
    disLikes:[{
        type:mongoose.Schema.Types.ObjectId,
       
        ref:"User"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
       
        ref:"Comments"
    }],
    
},{timestamps:true})
//compile schema to model
const Post=mongoose.model("User",postSchema)
module.exports=Post