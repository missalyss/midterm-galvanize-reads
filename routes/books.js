var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('books').then((allBooks) => {
    res.render('books/show-all', {allBooks})
  })
})

router.get('/edit/:id', (req, res) => {
  res.render('books/edit')
})

router.get('/delete/:id', (req, res) => {
  var thisId = req.params.id
  console.log(thisId)
  res.render('books/delete', {thisId})
})

router.get('/:id', (req, res) => {
  var id = req.params.id
  knex('books').where({id}).then((thisBook) => {
    res.render('books/show-one', {thisBook})
  })
})



module.exports = router
