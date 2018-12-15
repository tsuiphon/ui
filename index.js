"use strict";
const express = require('express')
const app = express()
let WebSocketServer = require('ws').Server;
let port = 3001;
let wsServer = new WebSocketServer({ port: port });
console.log('websocket server start. port=' + port);
 
wsServer.on('connection', function(ws) {
  console.log('-- websocket connected --');
  ws.on('message', function(message) {
    wsServer.clients.forEach(function each(client) {
      if (isSame(ws, client)) {
        console.log('- skip sender -');
      }
      else {
        client.send(message);
      }
    });
  });
});
app.use('/', express.static('pages'));
app.listen(80, () => console.log('Example app listening on port 80!'))
 
function isSame(ws1, ws2) {
  // -- compare object --
  return (ws1 === ws2);     
}
