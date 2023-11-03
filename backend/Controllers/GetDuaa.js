const Duaa=require("../Models/DuaaModel")

const GetDuaa=async(req,res)=>{
    try{
        const duaa=await Duaa.find().sort({updatedAt:-1})
        res.status(200).json(duaa)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
// const postDuaa=async(req,res)=>{
//     try{
//         const duaaposted=await Duaa.create(req.body)
//         res.status(200).json(duaaposted);
//     }catch(err){
//         res.status(400).json({error:err.message})
//     }
// }
module.exports={
    GetDuaa,
}