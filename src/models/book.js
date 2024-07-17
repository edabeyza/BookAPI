"use strict"

const { DataTypes } = require('sequelize')
const sequelize = require('../dbConnection')

const Book = sequelize.define('Book', {
   title:{
        type: DataTypes.STRING,
        allowNull: false
   },

   author: {
        type: DataTypes.STRING,
        allowNull: false
   }
})


