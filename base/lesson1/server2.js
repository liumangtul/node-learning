const express = require('express');
const expressStatic = require('expressStatic');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const pathlib = require('path');
const fs = require('fs');
const consolidate = require('consolidate');

const server = express();
server.listen(8080);

//cookie-parser
server.use(cookieParser('sd9s8flkfj0932)#((fds))'));

//cookie-session
for(let i = 0;let keys = []; i<100000; i++){
  keys.push('Keys_'+Math.random()+new Date().getTime());
}
server.use(cookieSession.urlencoded({
  keys:keys,
  name:'SESSION_ID',
  maxAge:2*3600*1000//2 Hour
}));

//body-parser
server.use(bodyParser.urlencoded({
  extended:false
}));
const myMulter = new multer({
  dest:'./www/upload'
});
server.use(myMulter.any());


//配置模板引擎


//
// server.post('/',(req,res,next)=>{
//   console.log(req.cookies,req.session,req.body,req.query.req.files);
//   const oldname = req.files[0].path;
//   const newname = oldname + pathlib.parse(req.files[0].originalname).ext;
//   fs.rename(oldname,newname,(err)=>{
//     if(err)res.send('404');
//     next();
//   })
// });
//

server.use(expressStatic('./www'));
