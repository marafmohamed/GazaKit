const express=require("express")
const { GetComments } = require("../Controllers/CommentControllers")
const router=express.Router()

router.route('/getComments').get(GetComments);


module.exports=router