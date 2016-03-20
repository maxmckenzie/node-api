export default (knex, Promise) => Promise.all([
  knex('samples').insert({
    id: 'de305d54-75b4-431b-adb2-eb6b9e546014',
    page: 'default',
  }),
]);
