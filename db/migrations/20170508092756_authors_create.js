
exports.up = function (knex, Promise) {
  return knex.schema.createTable('authors', (t) => {
    t.increments()
    t.string('first_name').notNullable()
    t.string('last_name').notNullable()
    t.text('bio')
    t.text('portrait_url')
    t.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('authors')
}
