const express=require("express")
const { GetComments, postComment } = require("../Controllers/CommentControllers")
const router=express.Router()

router.route('/getComments').get(GetComments);
router.route('/postComments').post(postComment);


module.exports=router