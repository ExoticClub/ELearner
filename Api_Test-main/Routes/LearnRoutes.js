const express = require("express");
const router = express.Router();
const {createLearn,getLearn,updateLearn,deleteLearn}=require("../Controllers/LearnController");

router.post("/",createLearn);
router.get("/",getLearn);
router.patch("/:id",updateLearn);
router.delete("/:id",deleteLearn);

module.exports=router;