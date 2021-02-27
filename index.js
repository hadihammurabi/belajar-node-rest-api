const { Model } = require('objection');
const Knex = require('knex');
const fastify = require('fastify')({
  ignoreTrailingSlash: true,
});

const knexfile = require('./knexfile');
const route = require('./start/route');

const db = Knex(knexfile[process.env.NODE_ENV || 'development']);
Model.knex(db);

fastify.register(route);

fastify.listen(8080);
