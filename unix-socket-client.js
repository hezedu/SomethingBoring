const WebSocket = require('ws');
let unixSocket = 'ws+unix:///dev/shm/linux-remote/PfC6loeqZk20Syd5S4nhTm99vPXnpDzb+dw.sock:/terminal/123';

const client = new WebSocket(unixSocket, {
  perMessageDeflate: false
});
console.log('client', client);
client.on('open', function open() {
  client.send('something');
});

client.on('message', function incoming(data) {
  console.log('message' , data);
});

// const client2 = new WebSocket(unixSocket2);
// client2.send('client2 ok');