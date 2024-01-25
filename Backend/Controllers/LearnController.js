const { default: mongoose } = require("mongoose")
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

// PATCH

const updateLearn = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Learn Not Found"})
    }
    try{
        const learn=await LearnModel.findByIdAndUpdate({
            _id:id
        },{
            ...req.body
        })
        res.status(200).json(learn)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

// DELETE

const deleteLearn = async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Learn Not Found"})
    }
    try{
        const learn=await LearnModel.findByIdAndDelete(id);
        res.status(200).json(learn)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}

module.exports={createLearn,getLearn,updateLearn,deleteLearn}