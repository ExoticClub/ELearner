const express = require("express");
const router = express.Router();
const {createLearn,getLearn}=require("../Controllers/LearnController");

router.post("/",createLearn);
router.get("/",getLearn);

module.exports=router;