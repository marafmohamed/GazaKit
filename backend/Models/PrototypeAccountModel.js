
const mongoose=require("mongoose")
const schema=mongoose.Schema

const Prototype=new schema({
    content: {
        type:String,
        required:true
    }
},{timestamps:true})


module.exports=mongoose.model('Prototype',Prototype)