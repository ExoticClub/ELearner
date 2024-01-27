const bcrypt = require("bcrypt");
const LogModel = require("../Models/LogModel.js");
const { default: mongoose } = require("mongoose")


//   CRED

//   CREATE

const createLog = async (req, res) => {
    const { Name, RegNo, Department, Password } = req.body;
  
    try {
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      // Create a new user with the hashed password
      const newUser = new LogModel({
        Name,
        RegNo,
        Department,
        Password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
  

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