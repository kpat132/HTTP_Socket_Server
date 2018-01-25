const net = require('net');

//Keep track of clients
let clients = [];

//Start TCP Server
net.server(function(socket){

  clients.push(socket);
  socket.write("Connected");

  
});
server.listen(8080,'0.0.0.0', function(){
  console.log('Server on.')
});