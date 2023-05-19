const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');
const mongoConnecter = require('./config/db');
const cookie_parser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const adminRouter = require('./routes/adminRouter');

dotenv.config();
const port = process.env.port || 5000;

//connecting mongo db
mongoConnecter();
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookie_parser());

//this will be the api which is going to provide the functionalities
app.use('/api/users',userRoute); 
app.use('/api/admin',adminRouter);

if(process.env.NODE_ENV == 'production'){
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
}else{
  app.get('/',(req,res) => res.send('server is ready'));
}


//for handling the errors we have done a costom error handling module
app.use(errorMiddleware.notFount);
app.use(errorMiddleware.errorHandler);

app.listen(port,()=> console.log(`server started on ${port}`));