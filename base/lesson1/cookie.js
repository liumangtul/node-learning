const express = require('express');
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
// const cookieSession = requrie('cookie-session');

const server = express();
server.listen(8080);

const secret = 'sdflkj34243dskflj#($)23423';
server.use(cookieParser(secret));

server.use('/cookie',(req,res)=>{
  //Set Cookie
  req.secret = secret;
  res.cookie('user','wangyan',{
    path:'/cookie',
    maxAge:30*24*3600*1000,//30day
    signed:true,
    httpOnly:true
  });
  // res.cookie('user','w');
  //

  // //Get Cookie
  res.send(req.cookies);
  console.log(req.signedCookies);
  // res.send('Cookie&Session');

  //Clear Cookie
  res.clearCookie('user',{
      path:'/cookie'
  });
  res.send('ok');
  res.end();
});

server.use(expressStatic('./www'));
