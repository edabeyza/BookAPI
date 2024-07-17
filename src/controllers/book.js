"use strict"
/* ---------------------------------------------------
            EXPRESSJS - CONTROLLER FOR BOOK
-----------------------------------------------------*/

const Book = require('../models/book')

module.exports = {

    // To list all books
    list: async (req, res) => {
        const data = await Book.findAll(req.body)
        res.status(200).send({
            error: false,
            result: data
       })
    }

    create: async (req, res)
}