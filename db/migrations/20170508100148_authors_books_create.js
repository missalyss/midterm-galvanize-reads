
exports.up = function (knex, Promise) {
  return knex.schema.createTable('authors_books', (t) => {
    t.integer('book_id').notNullable()
    t.integer('author_id').notNullable()
    t.integer('author_position')
    t.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('authors_books')
}
