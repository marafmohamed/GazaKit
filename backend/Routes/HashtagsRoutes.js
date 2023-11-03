const express=require("express")
const { GetHashtags } = require("../Controllers/HashtagsControllers")
const router=express.Router()

router.route('/getHashtags').get(GetHashtags)

module.exports=router