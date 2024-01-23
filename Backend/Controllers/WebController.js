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

module.exports={createWeb,getWeb}