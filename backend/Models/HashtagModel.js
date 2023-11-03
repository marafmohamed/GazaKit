
const mongoose=require("mongoose")
const schema=mongoose.Schema

const HashtagModel=new schema({
    content: {
        type:String,
        required:true
    }
},{timestamps:true})


module.exports=mongoose.model('hashtag',HashtagModel)