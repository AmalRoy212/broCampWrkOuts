const express = require('express');
const cors = require('cors');
const mongoConnecter = require('./helpers/mongodb')

const app = express();

app.use(express.json());
app.use(cors());

mongoConnecter();

app.listen(5000,()=>{
  console.log('server started');
})