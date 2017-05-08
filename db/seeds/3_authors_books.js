
exports.seed = function (knex, Promise) {
  return knex('authors_books').del()
    .then(function () {
      return knex('authors_books').insert([
        {book_id: 1, author_id: 1, author_position: 1},
        {book_id: 1, author_id: 5, author_position: 2},
        {book_id: 1, author_id: 6, author_position: 3},
        {book_id: 2, author_id: 2, author_position: 1},
        {book_id: 3, author_id: 3, author_position: 1},
        {book_id: 4, author_id: 4, author_position: 1},
        {book_id: 5, author_id: 4, author_position: 1},
        {book_id: 6, author_id: 4, author_position: 1}
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('authors_books_id_seq', (SELECT MAX (id) FROM authors_books))"
      )
    }).catch(function (error) {
      console.error('Oops! ', error)
    })
}
