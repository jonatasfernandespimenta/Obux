const Sequelize = require('sequelize');
const dbconfig = require('../Config/database');

const User = require('../Models/userModel');
const Book = require('../Models/booksSchema');

const connection = new Sequelize(dbconfig);

User.init(connection);
Book.init(connection);

Book.associate(connection.models)
User.associate(connection.models)

module.exports = connection; 
