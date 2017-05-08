var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', function (req, res, next) {
  knex('authors').then((allAuthors) => {
    res.render('authors/show-all', {allAuthors})
  })
})

module.exports = router
