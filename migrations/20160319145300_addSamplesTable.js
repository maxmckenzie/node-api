exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('samples', function(table) {
      table.uuid('id').notNullable().primary();
      table.string('page').notNullable();
      table.integer('count').defaultTo(0);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('samples');
};
