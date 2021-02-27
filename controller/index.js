const HomeController = require('./HomeController');

// auth
const RoleController = require('./auth/RoleController');

module.exports = {
  Home: new HomeController(),
  Auth: {
    Role: new RoleController(),
  },
};
