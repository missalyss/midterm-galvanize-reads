var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function (req, res, next) {
  knex('authors').then((allAuthors) => {
    res.render('authors/show-all', {allAuthors})
  })
})

router.get('/edit/:id', (req, res) => {
  res.render('authors/edit')
})

router.get('/delete/:id', (req, res) => {
  var id = req.params.id
  res.render('authors/delete', {id})
})

router.get('/:id', (req, res) => {
  var id = req.params.id
  knex('authors').where({id}).then((thisAuthor) => {
    res.render('authors/show-one', {thisAuthor})
  })
})

module.exports = router
