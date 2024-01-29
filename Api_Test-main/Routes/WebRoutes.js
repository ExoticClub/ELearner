const express = require("express");
const router = express.Router();
const {createWeb,getWeb,updateWeb,deleteWeb}=require("../Controllers/WebController");

router.post("/",createWeb);
router.get("/",getWeb);
router.patch("/:id",updateWeb);
router.delete("/:id",deleteWeb);

module.exports=router;