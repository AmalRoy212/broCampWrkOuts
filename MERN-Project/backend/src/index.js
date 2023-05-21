const express = require('express');
const app = express();
require('dotenv').config();
const dbConnecter = require('./config/db');
const userRouter=require("./routes/userRouter")
port = process.env.PORT || 3000

const data = 'amal';

dbConnecter();
app.use("/api/user",userRouter)
app.get('/',(req,res)=>res.json({data}))

app.listen(port,()=> console.log(`server started on port ${port}`));