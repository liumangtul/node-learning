const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
  if(req.url.indexOf('?')!=-1){
    let url = req.url;
    res.write(url);
    url = url.split('?');
    let arr = url[1].split('&');
    let json = {};
    for(var i=0;i<arr.length;i++){
      let temp = arr[i].split('=');
      json[temp[0]] = temp[1];
    }
    console.log(json);
    res.write('abc');
    res.end();
  }else{
    res.end();
  }
});
server.listen(8080);
