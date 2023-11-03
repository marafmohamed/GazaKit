const Brand=require("../Models/BrandModel")

const GetBrands=async(req,res)=>{
    try{
        const brands=await Brand.find().sort({updatedAt:-1})
        res.status(200).json(brands)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

const SearchBrands=async(req,res)=>{
    const Keyword=req.body ? {
        $and:[
            {Name: { $regex: req.body.Name, $options: "i" }},
        {Field: { $regex: req.body.Field, $options: "i" }}     
        ]
        
         } : {}
    if(!Keyword){
        return res.status(400).json({error:"ERROR IN REQUEST BODY"});
    }
    try{
        const brands=await Brand.find(Keyword)
        res.status(200).json(brands);
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports={
    GetBrands,
    SearchBrands,
}