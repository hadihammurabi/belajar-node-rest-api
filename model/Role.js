const { Model } = require('objection');

class Role extends Model {
  static get tableName() {
    return 'roles';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string' },
      },
    };
  }
}

module.exports = Role;
