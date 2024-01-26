const LogModel = require("../Models/LogModel.js");
const { default: mongoose } = require("mongoose")


//   CRED

//   CREATE

const createLog = async(req,res)=>{
    const{Name,RegNo,Department,Password}=req.body

    try{
        const Log=await LogModel.create({Name,RegNo,Department,Password})
        res.status(200).json(Log)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

//   READ ALL

const getLog = async(req,res)=>{
    try{
        const Log=await LogModel.find({});
        res.status(200).json(Log)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

// PATCH

const updateLog = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Log Not Found"})
    }
    try{
        const Log=await LogModel.findByIdAndUpdate({
            _id:id
        },{
            ...req.body
        })
        res.status(200).json(Log)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

// DELETE

const deleteLog = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Log Not Found"})
    }
    try{
        const Log=await LogModel.findByIdAndDelete(id);
        res.status(200).json(Log)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports={createLog,getLog,updateLog,deleteLog}