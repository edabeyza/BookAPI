"use strict"
/* ---------------------------------------------------
      EXPRESSJS - DB CONNECTION WITH SEQUELIZE
-----------------------------------------------------*/

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || '.db.sqlite3')) 

sequelize.authenticate()
        .then(() => console.log('* DB Connected. *'))
        .catch(() => console.log('* DB Not Connected: *'))

module.exports = sequelize