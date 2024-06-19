const http = require('node:http');

const fs = require('node:fs');

const path = require("node:path");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.method === 'GET'){
    if(req.url === '/'){
      fs.readFile('./public/index.html',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end('서버 자체 에러');
        } else {
          res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
          res.end(data);
        }
      });
    } else if (req.url === '/hrim') {
      res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
      res.end(`나는 코딩 뚝딱이들의 리더 헤이호다!`);
    } else if (req.url === '/index.html') {
      fs.readFile('./public/index.html',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end('서버 자체 에러');
        } else {
          res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
          res.end(data);
        }
      });
    } else if (req.url === '/script.js') {
      fs.readFile('./public/script.js',(err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end('서버 자체 에러');
        } else {
          res.writeHead(200,{"Content-Type":"application/javascript; charset=UTF-8"});
          res.end(data);
        }
      });
    } else {
      res.writeHead(404,{"Content-Type":"text/plain charset=UTF-8"});
      res.end('페이지를 찾을 수 없습니다.');
    }
  } else {
    res.writeHead(404,{"Content-Type":"text/plain charset=UTF-8"});
    res.end('페이지를 찾을 수 없습니다.');
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