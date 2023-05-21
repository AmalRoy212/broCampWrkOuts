const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./config/db');
const userRoute = require('./routes/userRoter')

const port = process.env.PORT || 8000
dbConnect();

app.use(express.json())

app.use('/api/users',userRoute);
app.get('/',(req,res) => res.send('yep am readt',port));



app.listen(port)