const express=require("express")
const { GetAccounts, Contribute } = require("../Controllers/AccountsController")
const router=express.Router()

router.route('/getAccounts').get(GetAccounts)
router.route('/Contribute').post(Contribute)

module.exports=router