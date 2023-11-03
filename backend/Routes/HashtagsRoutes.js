const express=require("express")
const { GetHashtags, postHashtag } = require("../Controllers/HashtagsControllers")
const router=express.Router()

router.route('/getHashtags').get(GetHashtags)
router.route('/postHashtags').post(postHashtag)

module.exports=router