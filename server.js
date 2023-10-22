

const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado.');

  socket.on('data', (data) => {
    console.log('Datos recibidos del cliente:', data.toString());
    socket.write('¡Hola, cliente!');
  });

  socket.on('end', () => {
    console.log('Cliente desconectado.');
  });
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});








/*


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