const express = require("express");
const router = express.Router();
const {createLog,getLog,updateLog,deleteLog}=require("../Controllers/LogController");

router.post("/",createLog);
router.get("/",getLog);
router.patch("/:id",updateLog);
router.delete("/:id",deleteLog);

module.exports=router;