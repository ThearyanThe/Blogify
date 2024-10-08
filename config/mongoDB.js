const mongoose=require("mongoose")
const connectDB=async()=>{
    try {
       await mongoose.connect("mongodb+srv://Aryan:Jrj3mzVOLBpXJ1KF@mern-blog-v1.h0wjn.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog-v1")
        console.log("mongodb connected");
        
    } catch (error) {
        console.log(error.message);
      
        
    }
}
module.exports=connectDB
//Jrj3mzVOLBpXJ1KF