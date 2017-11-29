const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
  if(req.url.indexOf('?')!=-1){
    const query = querystring.parse(req.url.split('?')[1]);
    console.log(query)
  }
}).listen(8080);
