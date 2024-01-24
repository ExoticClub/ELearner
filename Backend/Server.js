const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const MarkRoutes = require("./Routes/MarkRoutes.js");
const FormRoutes = require("./Routes/FormRoutes.js");
const WebRoutes = require("./Routes/WebRoutes.js");
const LogRoutes = require("./Routes/LogRoutes.js");
const LearnRoutes = require("./Routes/LearnRoutes.js");
const cors = require('cors');

const port=process.env.PORT;


app.use((req,res,next)=>{
    console.log(req.method);
    next();
});

app.use(express.json());
app.use(cors());

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

app.use("/api/marks",MarkRoutes);
app.use("/api/forms",FormRoutes);
app.use("/api/web",WebRoutes);
app.use("/api/log",LogRoutes);
app.use("/api/learn",LearnRoutes);
