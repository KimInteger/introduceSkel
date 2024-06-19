const http = require('node:http');

const fs = require('node:fs');

const path = require("node:path");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.method === 'GET'){
    if(req.url === '/'){

    } else if (req.url === '/hrim') {

    } else if (req.url === '/index.html') {

    } else if (req.url === '/script.js') {

    } else {

    }
  } else {

  }
});

server.listen(PORT,(err)=>{
  if(err){
    console.error('에러발생' + err);
  } else {
    console.log('서버 오픈');
    console.log(`http://localhost:${PORT}`);
  }
});