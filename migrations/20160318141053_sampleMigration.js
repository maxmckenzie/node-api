exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('sample_table', function(table) {
      table.uuid('id').notNullable().primary();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('sample_table');
};
