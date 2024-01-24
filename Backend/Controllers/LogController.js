const LogModel = require("../Models/LogModel.js")

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

module.exports={createLog,getLog}