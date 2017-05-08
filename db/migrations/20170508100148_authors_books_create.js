
exports.up = function (knex, Promise) {
  return knex.schema.createTable('authors_books', (t) => {
    t.integer('book_id').notNullable().references('id').inTable('books').onDelete('CASCADE').index()
    t.integer('author_id').notNullable().references('id').inTable('authors').onDelete('CASCADE').index()
    t.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('authors_books')
}
