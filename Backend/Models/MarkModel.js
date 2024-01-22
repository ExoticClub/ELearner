const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MarkSchema = new Schema(
    {
        RegNo:{
            type:String,
            require:true
        },
        TestId:{
            type:String,
            require:true
        },
        MarkGet:{
            type:Number,
            require:true
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Mark",MarkSchema);