const express = require("express");
const router = express.Router();
const {createMark}=require("../Controllers/MarkController");

router.post("/",createMark);

module.exports=router;