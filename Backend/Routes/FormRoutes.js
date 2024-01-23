const express = require("express");
const router = express.Router();
const {createForm,getForm}=require("../Controllers/FormController");

router.post("/",createForm);
router.get("/",getForm);

module.exports=router;