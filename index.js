require('dotenv').config();
const fastify = require('fastify')({
  logger: true,
});
const weatherRoutes = require('./src/routes');

weatherRoutes.forEach((route) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();