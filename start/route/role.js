const controller = require('../../controller');

module.exports = (route, opts, done) => {
  route.get('/', controller.Auth.Role.index);

  done();
};
