const express=require("express")
const {GetDuaa}=require("../Controllers/GetDuaa")
const router=express.Router()

router.route('/getDuaa').get(GetDuaa)
module.exports=router