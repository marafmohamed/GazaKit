const mongoose=require("mongoose")
const schema=mongoose.Schema

const BrandModel=new schema({
    Name:{
        type:String,
        required:true
    },
    pic:{
        type:String,
    },
    zionist:{
        type:Boolean,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model("Brand",BrandModel)
