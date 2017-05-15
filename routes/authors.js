var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

// Rendering routes
router.get('/', function (req, res, next) {
  knex.select('authors.id as authors_id', 'authors.first_name', 'authors.last_name', 'authors.bio', 'authors.portrait_url', 'books.title', 'books.id as books_id')
  .table('authors')
  .fullOuterJoin('authors_books', 'authors.id', 'authors_books.author_id')
  .leftOuterJoin('books', 'authors_books.book_id', 'books.id')
  .then((allAuthors) => {
    knex('authors').count('id as counted').then((authCount) => {
      res.render('authors/show-all', {allAuthors, authCount})
    })
  })
})

router.get('/edit/:id', (req, res) => {
  knex('authors').where('id', req.params.id).then((thisAuthor) => {
    res.render('authors/edit', {thisAuthor})
  })
})

router.get('/delete/:id', (req, res) => {
  var thisId = req.params.id
  res.render('authors/delete', {thisId})
})

router.get('/new', (req, res) => {
  res.render('authors/new')
})

router.get('/:id', (req, res) => {
  knex.select('authors.id as authors_id', 'authors.first_name', 'authors.last_name', 'authors.bio', 'authors.portrait_url', 'books.title', 'books.id as books_id')
  .table('authors')
  .fullOuterJoin('authors_books', 'authors.id', 'authors_books.author_id')
  .leftOuterJoin('books', 'authors_books.book_id', 'books.id').where('authors.id', req.params.id).then((thisAuthor) => {
    res.render('authors/show-one', {thisAuthor})
  })
})

// Other Routes
router.post('/api', (req, res) => {
  var newAuthor = { first_name, last_name, bio, portrait_url } = req.body
  knex('authors').insert(newAuthor).then(() => {
    res.redirect('/authors')
  })
})

router.put('/:id', (req, res) => {
  var id = req.params.id
  var editedAuthor = { first_name, last_name, bio, portrait_url } = req.body
  knex('authors').where('id', id).update(editedAuthor)
  .then(() => {
    res.redirect('/authors')
  })
})

router.delete('/:id', (req, res, next) => {
  var id = req.params.id
  knex('authors').where('id', id).del()
  .then(() => {
    res.redirect('/authors')
  })
})

module.exports = router
