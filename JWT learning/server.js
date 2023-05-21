require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
  {
    name:'amal',
    title:'post 1'
  },
  {
    name:'akhil',
    title:'post 2'
  }
]

app.get('/',authenticateToken,(req,res)=>{
  res.json(posts.filter(post => post.name === req.user.name));
})

app.post('/login',(req,res)=>{
  //authentication of user
  const username = req.body.username;
  const user = { name : username};
  const accesToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
  res.json(accesToken);
})


//for authenticate the user valid or not middleware
function authenticateToken( req,res,next){
  const authHeader = req.headers['Authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(token === null) return res.sendStatus(401); //token is null means the req is not autherized or loggined

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err) return res.sendStatus(403) // the you have but not longer valid
    req.user = user;
    next();
  })
}

app.listen(3000);