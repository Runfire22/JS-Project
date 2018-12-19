var express = require('express');
var router = express.Router();
var Author = require('../models/author');

function getAllAuthors(callback){
    return Author.find({}).exec(function(error, result){
        return callback(error, result);
    });
}

module.exports = {
    getAllAuthors: getAllAuthors
}