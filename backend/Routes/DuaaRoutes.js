const express=require("express")
const {GetDuaa, postDuaa}=require("../Controllers/GetDuaa")
const router=express.Router()

router.route('/getDuaa').get(GetDuaa)
router.route('/postDuaa').post(postDuaa)
module.exports=router