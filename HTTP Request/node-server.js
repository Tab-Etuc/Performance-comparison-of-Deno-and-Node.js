const http = require('http');

http.createServer((_, res) => {
  res.write('Node.js!'); 
  res.end(); 
}).listen(4506);
