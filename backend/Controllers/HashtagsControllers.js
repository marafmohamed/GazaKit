const Hashtag=require("../Models/HashtagModel")

const GetHashtags=async(req,res)=>{
    try{
        const hashtags=await Hashtag.find().sort({updatedAt:-1});
        res.status(200).json(hashtags)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// const postHashtag=async(req,res)=>{
//     try{
//         const hashtagposted=await Hashtag.create(req.body)
//         res.status(200).json(hashtagposted)
//     }catch(err){
//         res.status(400).json({error:err.message})
//     }
// }


module.exports={
    GetHashtags,
}