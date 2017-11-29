
const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');

var server = express();
server.listen(8080);

//cookieParser
server.use(cookieParser('lskdfj349202fjidf4#@4323'));

//cookieSession
let keys = [];
for(let i = 0 ;i<100000;i++){
  keys.push('_KEY_'+Math.random()+new Date().getTime());
}
server.use(cookieSession({
  name:'SESS_ID',
  keys:keys,
  maxAge:20*3600*1000//20minuntes
}));

//post
server.use(bodyParser.urlencoded({
  extended:false
}));

server.use('/',(req,res,next)=>{
  console.log(req.query,req.body,req.cookies,req.session);
  next();
});

//expressStatic
server.use(expressStatic('./www'));
