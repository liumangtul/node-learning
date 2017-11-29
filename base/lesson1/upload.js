const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const expressStatic = require('express-static');
const fs = require('fs');
const pathlib = require('path');

const myMulter = new multer({
  dest:'./www/upload/'
});

const server = express();
server.listen(8080);

// post 数据
server.use(bodyParser.urlencoded({
  extended:false
}));
server.use(myMulter.any());

//用户请求
server.post('/',(req,res,next)=>{
  console.log(req.body);
  console.log(req.files);
  const ext = pathlib.parse(req.files[0].originalname).ext;

  fs.rename(req.files[0].path,req.files[0].path+ext,(err)=>{
    if(err){
      res.send('Error');
      res.end();
    }
    next();
  });
});

// static数据
server.use(expressStatic('/'));
