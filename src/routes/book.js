"use strict"
/* ---------------------------------------------------
             EXPRESSJS - ROUTES FOR BOOK
-----------------------------------------------------*/

const router = require('express').Router()

const book = require('../controllers/book')

router.route('/')
    .get(book.list)
    .post(book.create)

router.route('/:id')
    .get(book.read)
    .put(book.update)
    .delete(book.delete)

module.exports = router