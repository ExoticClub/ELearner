const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WebSchema = new Schema(
    {
        Id:{
            type:String,
            require:true,
            unique: true
        },
        Title:{
            type:String,
            require:true
        },
        Question:{
            type:Array,
            require:true
        },
        Options:{
            type:Array,
            require:true
        },
        Answer:{
            type:Array,
            require:true
        },
        Author:{
            type:String,
            require:true
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Web",WebSchema);