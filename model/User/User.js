const mongoose=require("mongoose")
//schema
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true,
        enum:["admin","user"],
        default:"user"
    },
    password:{
        type:String,
        require:true
    },
  lastLogin:{
        type:Date,
        default:Date.now()
    },
    isVerified:{
        type:String,
        default:false
    },
    accountLevel:{
        type:String,
       enum:["bronze","silver","gold"],
       default:"bronze"
    },
    gender:{
        type:String,
       enum:["male","female","prefer not to say","none-binary"],
       default:"bronze"
    },
    profilePicture:{
        type:String,
       default:""
    },
    coverImage:{
        type:String,
       default:""
    },
    bio:{
        type:String,
       
    },
    location:{
        type:String,
    
    },
    profileViewers:{
        type:String,
    
    },
    notificationPreferences:{
      email:{type:String,default:true}
      //..other notiftype
    
    },
    profileViewers:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    followers:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    blockedUsers:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],
    likedPosts:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}],
    passwordResetToken:{
        type:String
    },
    passwordResetExpires:{
        type:Date
    },
    accountVerificationToken:{
        type:String
    },
    accountVerificationExpires:{
        type:Date
    },
},{timestamps:true})
//compile schema to model
const User=mongoose.model("User",userSchema)
module.exports=User