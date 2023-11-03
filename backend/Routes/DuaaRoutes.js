const express=require("express")
const {GetDuaa, AddDuaa}=require("../Controllers/GetDuaa")
const {requireAuth}=require("../requireAuth/requireAuth")
const router=express.Router()

router.route('/getDuaa').get(GetDuaa);
router.route('/addDuaa').post(AddDuaa);
module.exports=router