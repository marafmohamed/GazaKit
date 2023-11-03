const express=require("express")
const {GetBrands, SearchBrands}=require("../Controllers/BrandsControllers")
const router=express.Router()

router.route('/getBrands').get(GetBrands);
router.route('/SearchBrands').get(SearchBrands);

module.exports=router