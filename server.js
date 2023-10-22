

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

