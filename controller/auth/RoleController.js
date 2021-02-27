const Role = require('../../model/Role');

class RoleController {
  async index(req, res) {
    const roles = await Role.query();
    res.send({ roles });
  }
}

module.exports = RoleController;
