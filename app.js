require('dotenv').config();
const app = require('express')();


app.get('/', (req, res)=>{
  const date = new Date();
  const interval = setInterval(()=>{
    console.log(date);
  }, process.env.INTER_VAL);
  setTimeout(()=>{
    clearInterval(interval);
    res.send(date);
  }, process.env.TIME_OUT);
});


const server = app.listen(3000, ()=>{
  console.log('start server');
});