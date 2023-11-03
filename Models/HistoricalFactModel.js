const mongoose=require("mongoose")
const schema=mongoose.Schema

const HistoryModel=new schema({
    Title:{
        type:String,
        required:true
    },
    arcticle:{
        type:String
    }

},{timestamps:true})


module.exports=mongoose.model('HistoryFact',HistoryModel)