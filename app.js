const app = require('express')();


app.get('/', (req, res)=>{
  console.log('test here');
  res.send('запрос')
});
app.listen(3000, ()=>{
  console.log('start server');
});