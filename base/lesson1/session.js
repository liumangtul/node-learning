const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const server = express();
server.listen(8080);

// keys
let keys = [];
for(var i=0;i<100000;i++){
  keys.push('_keys_'+Math.random()+new Date().getTime());
}

server.use(cookieParser('abc'));
//Option Session
server.use(cookieSession({
  name:'promise',
  keys:keys,
  maxAge:2*3600*1000//2hour
}));

//Set Session
server.use('/',(req,res)=>{
  if(!req.session['count']){
    req.session['count'] = 1;
  }else{
    req.session['count']++;
  }
  //Delete Session
  delete req.session['count'];
  //Get Session
  console.log(req.session);
  res.end();
});
