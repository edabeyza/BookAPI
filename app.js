"use strict"
/* ---------------------------------------------------
      EXPRESSJS - LIBRARY PROJECT WİTH SEQUELİZE
-----------------------------------------------------*/

// Import the express library
const express = require('express')
const app = express()

// Import the dotenv library
require('dotenv').config()
const PORT = process.env.PORT || 8000

// For catching async errors
require('express-async-errors')

// For accepting json data
app.use(express.json())

// DB Connection
require('./src/dbConnection')

// Routes
app.use(require('./src/routes/book'))

// For catching the errors
app.use(require('./src/middlewares/errorHandler'))

// For running the server
app.listen(PORT, () => {'Running on http://127.0.0.1:' + PORT})