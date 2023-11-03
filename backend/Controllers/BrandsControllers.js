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
    const Keyword=req.query ? {
        $and:[
            {Name: { $regex: req.query.Name, $options: "i" }},
            {Field: { $regex: req.query.Field, $options: "i" }}     
        ]
        
         } : {}
    if(!Keyword){
        return res.status(400).json({error:"ERROR IN REQUEST QUERY"});
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