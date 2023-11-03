const Account=require("../Models/AccountModel");
const Prototype=require("../Models/PrototypeAccountModel")
const GetAccounts=async(req,res)=>{
    try{
        const accounts=await Account.find()
        res.status(200).json(accounts)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}
const Contribute=async(req,res)=>{
    const {content}=req.body
    if(!content){
        return res.status(400).json({error:"the field is empty"})
    }
    const suggestedAccount={
        content
    }
    try{
        const accounts=await Account.find({AccountUrl: content});
        if(accounts){
            throw new Error("Account already in data base")
        }
        const PrototypeAccount=await Prototype.create(suggestedAccount)
        res.status(200).json(PrototypeAccount)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}


module.exports={
    GetAccounts,
    Contribute
}