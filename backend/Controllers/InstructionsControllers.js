const Instruction=require("../Models/Instructions")

const GetInstructions=async(req,res)=>{
    try{
        const _instruction=await Instruction.find()
        res.status(200).json(_instruction)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}
// const postInstruction=async(req,res)=>{
//     const {Case,Instructions}=req.body
//     console.log(Instructions)
//     const b={
//         Case,
//         Instructions
//     }
//     try{
//         const dataposted=await Instruction.create(b)
//         res.status(200).json(dataposted);
//     }catch(err){
//         res.status(400).json({error:err.message})
//     }
// }


module.exports={
    GetInstructions,
    
}