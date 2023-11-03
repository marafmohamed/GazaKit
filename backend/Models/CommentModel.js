const mongoose=require("mongoose")
const schema=mongoose.Schema

const CommentModel=new schema({
    content:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("Comment",CommentModel)
