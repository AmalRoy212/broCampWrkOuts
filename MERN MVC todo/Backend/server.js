const express = require('express');
const cors = require('cors');
const mongoConnecter = require('./helpers/mongodb');
const todoRouter = require('./routes/todoRoute');

const app = express();

app.use(express.json());
app.use(cors());

mongoConnecter();

app.use('/api', todoRouter);

app.listen(5000, () => {
  console.log('server started');
})