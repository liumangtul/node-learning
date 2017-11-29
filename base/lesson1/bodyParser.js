const express = require('express');
const expressStatic = require('express-static');
const fs = require('fs');
const bodyParser = require('body-parser');

let Users = {"a":"a"};

const server = express();

server.listen(8080);

server.use('/user',(req,res)=>{
  res.send('User');
  res.end();
});

server.use('/index',(req,res)=>{
  res.send('Index');
  res.end();
});


server.use('/login/get',(req,res)=>{
  const user = req.query['user'];
  const pass = req.query['pass'];
  if(!Users[user]){
    res.send({"ok":false,"msg":"不存在该用户"});
  }else if(Users[user]!=pass){
    res.send({"ok":false,"msg":"密码错误"});
  }else{
    res.send({"ok":true,"msg":"登陆成功"});
  }
  res.end();
});

server.use(bodyParser.urlencoded({
  extended:false,//扩展
  limit:1*1024*1024 // 1M
}));

server.use('/login/post',(req,res)=>{
  const username = req.body['username'];
  const passname = req.body['passname'];
  if(!Users[username]){
    res.send({"ok":false,"msg":"不存在该用户"});
  }else if(Users[username]!=passname){
    res.send({"ok":false,"msg":"密码错误"});
  }else{
    res.send({"ok":true,"msg":"登陆成功"});
  }
  res.end();
});

server.use(expressStatic('./www'));
