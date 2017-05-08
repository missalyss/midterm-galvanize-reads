var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

// Render routes
router.get('/', (req, res, next) => {
  knex('books').then((allBooks) => {
    knex('books').count('id as counted').then((bookCount) => {
      res.render('books/show-all', {allBooks, bookCount})
    })
  })
})

router.get('/edit/:id', (req, res) => {
  knex('books').where('id', req.params.id).then((thisBook) => {
    res.render('books/edit', {thisBook})
  })
})

router.get('/delete/:id', (req, res) => {
  var thisId = req.params.id
  res.render('books/delete', {thisId})
})

router.get('/new', (req, res) => {
  res.render('books/new')
})

router.get('/:id', (req, res) => {
  var id = req.params.id
  knex('books').where({id}).then((thisBook) => {
    res.render('books/show-one', {thisBook})
  })
})

// Other routes
router.post('/api', (req, res) => {
  var newBook = { title, genre, description, cover_url } = req.body
  knex('books').insert(newBook).then(() => {
    res.redirect('/books')
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
