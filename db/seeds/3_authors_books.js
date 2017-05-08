
exports.seed = function (knex, Promise) {
  return knex('authors_books').del()
    .then(function () {
      return knex('authors_books').insert([
        {book_id: 1, author_id: 1},
        {book_id: 1, author_id: 5},
        {book_id: 1, author_id: 6},
        {book_id: 2, author_id: 2},
        {book_id: 3, author_id: 3},
        {book_id: 4, author_id: 4},
        {book_id: 5, author_id: 4},
        {book_id: 6, author_id: 4}
      ])
    }).catch(function (error) {
      console.error('Oops! ', error)
    })
}
