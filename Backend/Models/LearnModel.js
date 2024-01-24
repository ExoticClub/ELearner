const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LearnSchema = new Schema(
    {
        Title:{
            type:String,
            require:true,
            unique:true
        },
        Link:{
            type:String,
            require:true,
            unique:true
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Learn",LearnSchema);