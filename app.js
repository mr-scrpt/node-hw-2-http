require('dotenv').config();
const http = require('http');
let i = 0;

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url !== '/favicon.ico'){
    i++;
    const date = new Date();
    const runtime = date.getTime();

    res.writeHead(200, {'Content-Type': 'text/html'});

    const interval = setInterval(()=>{
     if(new Date().getTime() - runtime >= +process.env.TIME_OUT){
       clearInterval(interval);
       res.end(`${date}`);
     }
      console.log(`User-${i}: ${date}`);
    }, process.env.INTER_VAL);
  }
}).listen(3000);