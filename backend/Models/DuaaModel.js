const mongoose=require("mongoose")
const schema=mongoose.Schema

const DuaaModel=new schema({
    content: {
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})


module.exports=mongoose.model('Duaa',DuaaModel)