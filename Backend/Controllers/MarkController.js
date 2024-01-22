const MarkModel = require("../Models/MarkModel.js")

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

module.exports={createMark}