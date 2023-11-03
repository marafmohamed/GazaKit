const Comment=require("../Models/CommentModel")

const GetComments=async(req,res)=>{
    try{
        const comments=await Comment.find().sort({updatedAt:-1});
        res.status(200).json(comments)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

// const postComment=async(req,res)=>{
//     try{
//         const commentposted=await Comment.create(req.body)
//         res.status(200).json(commentposted)
//     }catch(err){
//         res.status(400).json({error:err.message})
//     }
// }


module.exports={
    GetComments,
}