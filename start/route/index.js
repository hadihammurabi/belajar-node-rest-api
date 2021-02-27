const controller = require('../../controller');

const role = require('./role');

module.exports = (route, opts, done) => {
  route.get('/', controller.Home.index);

  route.register(role, { prefix: '/roles' });

  done();
};
