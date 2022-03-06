const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    const html = fs.readFileSync(path.join(__dirname, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }
  if(req.url.indexOf('/static') === 0){

    try {
      const content = fs.readFileSync(path.join(__dirname, './' + req.url));
      res.end(content);
      return;
    } catch(e){

    }

  } else if(req.url === '/api/success'){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
    return;
  }
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('NotFound');
});

const PORT = 3008;

server.listen(PORT, () => {
  console.log('server listening ' + PORT);
})