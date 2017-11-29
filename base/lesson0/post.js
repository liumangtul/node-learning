const http = require('http');

const querystring = require('querystring');
const urllib = require('url');

const server = http.createServer((req,res)=>{
  let str = '';
  req.on('data',(data)=>{
    str += data;
  });
  req.on('end',()=>{
    res.write(str);
    const POST = querystring.parse(str);
    console.log(POST);
    res.end();
  })
});
server.listen(8080);
