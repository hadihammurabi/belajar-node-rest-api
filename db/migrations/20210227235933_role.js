const tableName = 'roles';

exports.up = ({ schema }) => schema.createTable(tableName, (table) => {
  table.increments('id');
  table.string('name').notNullable();
  table.string('description');
  table.timestamps(true, true);
});

exports.down = ({ schema }) => schema.dropTable(tableName);
