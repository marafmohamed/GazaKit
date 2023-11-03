const mongoose=require("mongoose")
const schema=mongoose.Schema

const DuaaModel=new schema({
    content: {
        type:String,
        required:true
    }
},{timestamps:true})


module.exports=mongoose.model('Duaa',DuaaModel)