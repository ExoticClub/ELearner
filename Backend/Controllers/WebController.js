const { default: mongoose } = require("mongoose")
const WebModel = require("../Models/WebModel.js")

//   CRED

//   CREATE

const createWeb = async(req,res)=>{
    const{Id,Title,Question,Options,Answer,Author}=req.body

    try{
        const Web=await WebModel.create({Id,Title,Question,Options,Answer,Author})
        res.status(200).json(Web)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

//   READ ALL

const getWeb = async(req,res)=>{
    try{
        const Web=await WebModel.find({});
        res.status(200).json(Web)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

// PATCH

const updateWeb = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Web Not Found"})
    }
    try{
        const Web=await WebModel.findByIdAndUpdate({
            _id:id
        },{
            ...req.body
        })
        res.status(200).json(Web)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

// DELETE

const deleteWeb = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Web Not Found"})
    }
    try{
        const Web=await WebModel.findByIdAndDelete(id);
        res.status(200).json(Web)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports={createWeb,getWeb,updateWeb,deleteWeb}