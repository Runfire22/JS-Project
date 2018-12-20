var express = require('express');
var router = express.Router();
var Book = require('../models/book');

function getAllBooks(callback){
    return Book.find({}).exec(function(error, result){
        return callback(error, result);
    });
}

function findByISBN(isbn){
    return Book.findOne({isbn: isbn}).exec();
}

function addBook(title, author, summary, isbn){
    const book = new Book({title, author, summary, isbn});
    return book.save();
}

module.exports = {
    getAllBooks: getAllBooks,
    findByISBN: findByISBN,
    addBook: addBook
}