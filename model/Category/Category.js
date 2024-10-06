const mongoose=require("mongoose")
//schema
const categorySchema=new mongoose.Schema({
  name:{
        type:String,
        require:true
    },
    
    author:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
 
   shares:{
        type:Number,
        default:0
    },
    
    posts:{
        type:mongoose.Schema.Types.ObjectId,
       
        ref:"Post"
    },

    
},{timestamps:true})
//compile schema to model
const Category=mongoose.model("User",categorySchema)
module.exports=Category