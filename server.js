

// Importa el módulo Fastify
const fastify = require('fastify')();

// Definir una ruta y manejar la solicitud
fastify.get('/', (request, reply) => {
  reply.send({ message: '¡Hola, mundo!' });
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

