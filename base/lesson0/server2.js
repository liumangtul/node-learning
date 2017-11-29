const http = require('http');
const fs = require('fs');
const urllib = require('url');

const server = http.createServer((req,res)=>{
  const obj = urllib.parse(req.url,true);
  const pathname = obj.pathname;
  const GET = obj.query;

  fs.readFile('./www/'+pathname+'.html',(err,data)=>{
    if(err){
      res.write('404');
    }else{
      res.write(data);
    }
    res.end();
  });
});
server.listen(8080);
