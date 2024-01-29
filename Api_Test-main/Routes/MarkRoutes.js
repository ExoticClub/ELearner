const express = require("express");
const router = express.Router();
const {createMark,getMark,updateMark,deleteMark}=require("../Controllers/MarkController");

router.post("/",createMark);
router.get("/",getMark);
router.patch("/:id",updateMark);
router.delete("/:id",deleteMark);

module.exports=router;