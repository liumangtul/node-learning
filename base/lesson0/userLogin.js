const http =require('http');
const querystring =require('querystring');
const urllib = require('url');
const fs = require('fs');

//
// 用户登录
//   user?act=login&user=wangyan&pass=123456
//
// 用户注册
//   user?act=reg&user=lisi&pass=123
//
//lesson0内的仅供 学习练习，不适用于真实项目，很多地方不适用。
let Users = {};
const server = http.createServer((req,res)=>{
  //Header
  const obj = urllib.parse(req.url,true);
  const url = obj.pathname;
  if(url == '/user'){
    //GET
    const GET = obj.query;
    //POST
    let str = '';
    req.on('data',(data)=>{
      str += data;
    });
    req.on('end',()=>{
      const POST = querystring.parse(str);
      console.log(POST)
      switch(POST.act){
        case 'login':
          if(!Users[POST.user]){
            res.write('{"ok":false,"msg":"没有此用户"}');
          }else if(Users[POST.user] !== POST.pass){
            res.write('{"ok":false,"msg":"用户名密码错误！"}');
          }else{
            res.write('{"ok":true,"msg":"登录成功！"}');
          }
        break;
        case 'reg':
          if(Users[POST.user]){
            res.write('{"ok":false,"msg":"此用户已经存在"}');
          }else{
            Users[POST.user] = POST.pass;
            console.log(Users)
            res.write('{"ok":true,"msg":"注册成功！"}');
          }
        break;
        default:
          res.write('{"ok":false,"msg":"未知的act"}');
        break;
      }
      res.end();
    });


  }else{
    //请求文件
    var file_name = './www'+url;
    fs.readFile(file_name,(err,data)=>{
      if(err)
        res.write('404');
      else
        res.write(data);
        res.end();
    });
  }



});
server.listen(8080);
