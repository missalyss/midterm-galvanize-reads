var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

// Render routes
router.get('/', (req, res, next) => {
  knex.select('books.id as books_id', 'books.title', 'books.genre', 'books.description', 'books.cover_url', 'authors.id as authors_id', 'authors.first_name', 'authors.last_name')
  .table('books')
  .innerJoin('authors_books', 'books.id', 'authors_books.book_id')
  .innerJoin('authors', 'authors_books.author_id', 'authors.id')
  .then((allBooks) => {
    knex('books').count('id as counted').then((bookCount) => {
      res.render('books/show-all', {allBooks, bookCount})
    })
  })
})

// Render edit page for books
router.get('/edit/:id', (req, res) => {
  knex.select('books.id as books_id', 'books.title', 'books.genre', 'books.description', 'books.cover_url', 'authors.id as authors_id', 'authors.first_name', 'authors.last_name')
  .table('books')
  .where('books.id', req.params.id)
  .innerJoin('authors_books', 'books.id', 'authors_books.book_id')
  .innerJoin('authors', 'authors_books.author_id', 'authors.id')
  .then((thisBook) => {
    res.render('books/edit', {thisBook})
  })
})

// Render delete page for books
router.get('/delete/:id', (req, res) => {
  var thisId = req.params.id
  res.render('books/delete', {thisId})
})

router.get('/new', (req, res) => {
  knex('authors').then((allAuthors) => {
    res.render('books/new', {allAuthors})
  })
})

router.get('/:id', (req, res) => {
  var id = req.params.id
  knex.select('books.id as books_id', 'books.title', 'books.genre', 'books.description', 'books.cover_url', 'authors.id as authors_id', 'authors.first_name', 'authors.last_name')
  .table('books')
  .where('books.id', req.params.id)
  .innerJoin('authors_books', 'books.id', 'authors_books.book_id')
  .innerJoin('authors', 'authors_books.author_id', 'authors.id').then((thisBook) => {
    res.render('books/show-one', {thisBook})
  })
})

// Other routes
router.post('/api', (req, res) => {
  var newBook = { title: req.body.title, genre: req.body.genre, description: req.body.description, cover_url: req.body.cover_url }
  var theAuthors = { author_id: parseInt(req.body.anAuthor) }
  console.log(theAuthors)

  knex('books').insert(newBook, '*').then((thisBook) => {
    console.log(thisBook)
    var newBookId = thisBook[0].id
    theAuthors.book_id = newBookId
    console.log(theAuthors)
    knex('authors_books').insert(theAuthors).then(() => {
      res.redirect('/books')
    })
  })
})

router.put('/:id', (req, res) => {
  var id = req.params.id
  var editedBook = { title, genre, description, cover_url } = req.body
  knex('books').where('id', id).update(editedBook)
  .then(() => {
    res.redirect('/books')
  })
})

router.delete('/:id', (req, res, next) => {
  var id = req.params.id
  knex('books').where('id', id).del()
  .then(() => {
    res.redirect('/books')
  })
})

module.exports = router
