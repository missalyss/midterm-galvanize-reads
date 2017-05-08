var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function (req, res, next) {
  knex('books').then((allBooks) => {
    res.render('books/show-all', {allBooks})
  })
})

module.exports = router
