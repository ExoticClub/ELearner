const LearnModel = require("../Models/LearnModel.js")

//   CRED

//   CREATE

const createLearn = async(req,res)=>{
    const{Title,Link}=req.body

    try{
        const Learn=await LearnModel.create({Title,Link})
        res.status(200).json(Learn)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

//   READ ALL

const getLearn = async(req,res)=>{
    try{
        const Learn=await LearnModel.find({});
        res.status(200).json(Learn)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports={createLearn,getLearn}