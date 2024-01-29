const express = require("express");
const router = express.Router();
const {createForm,getForm,updateForm,deleteForm}=require("../Controllers/FormController");

router.post("/",createForm);
router.get("/",getForm);
router.patch("/:id",updateForm);
router.delete("/:id",deleteForm);

module.exports=router;