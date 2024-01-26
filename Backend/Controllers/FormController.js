const { default: mongoose } = require("mongoose")
const FormModel = require("../Models/FormModel.js")

//   CRED

//   CREATE

const createForm = async(req,res)=>{
    const{Title,Link}=req.body

    try{
        const Form=await FormModel.create({Title,Link})
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

// PATCH

const updateForm = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Form Not Found"})
    }
    try{
        const form=await FormModel.findByIdAndUpdate({
            _id:id
        },{
            ...req.body
        })
        res.status(200).json(form)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

// DELETE

const deleteForm = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Form Not Found"})
    }
    try{
        const form=await FormModel.findByIdAndDelete(id);
        res.status(200).json(form)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}


module.exports={createForm,getForm,updateForm,deleteForm}