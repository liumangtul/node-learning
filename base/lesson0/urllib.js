const http = require('http');
const urllib = require('url');

const server = http.createServer((req,res)=>{
  const GET = urllib.parse(req.url,true).query;
  console.log(GET)
  res.end();
});
server.listen(8080);
