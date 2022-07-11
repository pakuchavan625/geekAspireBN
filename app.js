const express= require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const router = require("./Router/index")


app.use(cors())
app.use(express.json());
app.use("/",router)

const port=2255;
const hostname="localhost";
const URL="mongodb+srv://geekaspire:paku@cluster0.dpue9.mongodb.net/geekaspire?retryWrites=true&w=majority"


mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true}).then((res)=>{
    app.listen(2255,()=>{
        console.log(`sever is running at ${hostname}:${port}`);
    })
}).catch((err)=>{
    console.log("sever is not connected");
})
