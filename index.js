const fastify = require('fastify')({
  ignoreTrailingSlash: true,
});

const route = require('./start/route');

fastify.register(route);

fastify.listen(8080);
