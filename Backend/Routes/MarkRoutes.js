const express = require("express");
const router = express.Router();
const {createMark,getMark}=require("../Controllers/MarkController");

router.post("/",createMark);
router.get("/",getMark);

module.exports=router;