const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();



const port=process.env.PORT;


app.use((req,res,next)=>{
    console.log(req.method);
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello Worlds");
});


mongoose.connect(process.env.DB_URI)
    .then(()=>{
        app.listen(port,()=>{
            console.log("DB Connected Successfully And Listening To Port "+port);
        });
    }).catch((error)=>{
        console.log(error);
    })


