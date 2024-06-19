const http = require('node:http');

const fs = require('node:fs');

const path = require("node:path");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.method === 'GET'){
    if(req.url === '/'){
      
    }
  }
});