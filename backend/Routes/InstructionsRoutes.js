const express=require("express")
const {  GetInstructions } = require("../Controllers/InstructionsControllers")
const router=express.Router()

router.route('/getInstruction').get(GetInstructions)

module.exports=router