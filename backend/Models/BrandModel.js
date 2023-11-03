const mongoose=require("mongoose")
const schema=mongoose.Schema

const BrandModel=new schema({
    Name:{
        type:String,
        required:true
    },
    Pic:{
        type:String,
    },
    Zionist:{
        type:Boolean,
        required:true
    },
    Field:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("Brand",BrandModel)
