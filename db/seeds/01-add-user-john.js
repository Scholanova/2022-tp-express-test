exports.seed = function (knex) {
  return knex('users')
    .insert({
      name: 'John',
    })
}
