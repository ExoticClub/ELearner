const express = require("express");
const app = express();
require("dotenv").config();

app.use((req,res,next)=>{
    console.log(req.method);
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello Worlds");
});



const port=process.env.PORT;
app.listen(port,()=>{
    console.log("Listening To Port "+port);
});