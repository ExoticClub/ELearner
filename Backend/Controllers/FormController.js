const FormModel = require("../Models/FormModel.js")

//   CRED

//   CREATE

const createForm = async(req,res)=>{
    const{Title,Link,Id}=req.body

    try{
        const Form=await FormModel.create({Title,Link,Id})
        res.status(200).json(Form)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

//   READ ALL

const getForm = async(req,res)=>{
    try{
        const Form=await FormModel.find({});
        res.status(200).json(Form)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports={createForm,getForm}