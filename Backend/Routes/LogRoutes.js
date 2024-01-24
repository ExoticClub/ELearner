const express = require("express");
const router = express.Router();
const {createLog,getLog}=require("../Controllers/LogController");

router.post("/",createLog);
router.get("/",getLog);

module.exports=router;