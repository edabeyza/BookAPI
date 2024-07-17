"use strict"

const { DataTypes } = require('sequelize')
const sequelize = require('../dbConnection')

const Book = sequelize.define('Book', {
   
    // id column will be created automatically.

    title:{
        type: DataTypes.STRING,
        allowNull: false
   },

   author: {
        type: DataTypes.STRING,
        allowNull: false
   },

   ISBN: {
        type: DataTypes.STRING,
        allowNull: false
   },

   genre: {
        type: DataTypes.STRING,
        allowNull: false
   },

   publicationYear: {
        type: DataTypes.DATE,
        allowNull: false
   },

   image: {
        type: DataTypes.TEXT,
        allowNull: false
   }

   // createdAt and updatedAt columns will be created automatically.

})

module.exports = Book


