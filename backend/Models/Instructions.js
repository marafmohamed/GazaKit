
const mongoose=require("mongoose")
const schema=mongoose.Schema

const Instructions=new schema({
   Case:{
    type:String
   },
   Indicator:{
   Type:String
   },
   Instructions:{
      type:[String]
   }
},{timestamps:true})


module.exports=mongoose.model('Instruction',Instructions)