export default { seed: (knex, Promise) => {
  return Promise.all([
    knex('sample_table').insert({
      id: 'de305d54-75b4-431b-adb2-eb6b9e546014'
    })
  ]);
}};
