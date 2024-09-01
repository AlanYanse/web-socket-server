const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);
    
    // Puedes procesar el mensaje aquí y responder si es necesario.
    //ws.send(`${message}`);
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar el servidor
server.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor en ejecución en el puerto ${server.address().port}`);
});



























/*

// Importa los módulos Fastify y fastify-websocket
const fastify = require('fastify')({ logger: true });
const fastifyWebSocket = require('fastify-websocket');

// Registra fastify-websocket como un plugin de Fastify
fastify.register(fastifyWebSocket);

// Maneja las solicitudes WebSocket
fastify.get('/socket', { websocket: true }, (connection, req) => {
  connection.socket.on('message', (message) => {
    // Manejar los mensajes entrantes desde el cliente
    console.log('Mensaje del cliente:', message);
    // Puedes responder al cliente
    connection.socket.send('¡Mensaje recibido!');
  });
});


// Iniciar el servidor Fastify
fastify.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor WebSocket en ejecución en ${address}`);
});






// Run the server and report out to the logs
fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
  }
);

*/