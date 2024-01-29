const MarkModel = require("../Models/MarkModel.js");
const { default: mongoose } = require("mongoose")


//   CRED

//   CREATE

const createMark = async(req,res)=>{
    const{RegNo,TestId,MarkGet}=req.body

    try{
        const Mark=await MarkModel.create({RegNo,TestId,MarkGet})
        res.status(200).json(Mark)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

//   READ ALL

const getMark = async(req,res)=>{
    try{
        const Mark=await MarkModel.find({});
        res.status(200).json(Mark)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

// PATCH

const updateMark = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Mark Not Found"})
    }
    try{
        const Mark=await MarkModel.findByIdAndUpdate({
            _id:id
        },{
            ...req.body
        })
        res.status(200).json(Mark)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

// DELETE

const deleteMark = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Mark Not Found"})
    }
    try{
        const Mark=await MarkModel.findByIdAndDelete(id);
        res.status(200).json(Mark)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports={createMark,getMark,updateMark,deleteMark}
