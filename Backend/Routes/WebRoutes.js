const express = require("express");
const router = express.Router();
const {createWeb,getWeb}=require("../Controllers/WebController");

router.post("/",createWeb);
router.get("/",getWeb);

module.exports=router;