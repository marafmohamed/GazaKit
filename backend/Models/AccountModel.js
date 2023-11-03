const mongoose=require("mongoose")
const schema=mongoose.Schema
const AccountModel=new schema({
    Name:{
        type:String,
        required:true
    },
    Pic:{
        type:String,
    },
    AccountUrl:{
        type:String,
        required:true
    },
    Platform:{
        type:String
    }
},{timestamps:true})
module.exports=mongoose.model('Account',AccountModel)