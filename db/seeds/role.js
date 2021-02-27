const tableName = 'roles';

exports.seed = async (table) => {
  await table(tableName).del();
  return table(tableName).insert([
    { id: 1, name: 'superadmin' },
    { id: 2, name: 'admin' },
    { id: 3, name: 'guest' },
  ]);
};
