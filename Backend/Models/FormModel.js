const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema(
    {
        Title:{
            type:String,
            require:true
        },
        Link:{
            type:String,
            require:true
        },
        Id:{
            type:String,
            require:true
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model("Form",FormSchema);