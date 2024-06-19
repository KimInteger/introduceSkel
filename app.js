const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.method === 'GET') {
    let filePath = './public' + (req.url === '/' ? '/index.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html; charset=UTF-8';

    switch (extname) {
      case '.js':
        contentType = 'application/javascript; charset=UTF-8';
        break;
      case '.css':
        contentType = 'text/css; charset=UTF-8';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
        contentType = 'image/jpg';
        break;
      case '.gif':
        contentType = 'image/gif';
        break;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code == 'ENOENT') {
          fs.readFile('./public/404.html', (err, data) => {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(data, 'utf-8');
          });
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
          res.end('서버 오류: ' + err.code);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data, 'utf-8');
      }
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=UTF-8' });
    res.end('메서드가 허용되지 않음');
  }
});

server.listen(PORT, err => {
  if (err) {
    console.error('에러발생: ' + err);
  } else {
    console.log('서버 오픈');
    console.log(`http://localhost:${PORT}`);
  }
});