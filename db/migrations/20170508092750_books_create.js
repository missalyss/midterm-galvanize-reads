
exports.up = function (knex, Promise) {
  return knex.schema.createTable('books', (t) => {
    t.increments()
    t.string('title').notNullable()
    t.string('genre')
    t.string('description')
    t.text('cover_url')
    t.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('books')
}
