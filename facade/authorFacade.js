var express = require('express');
var router = express.Router();
var Author = require('../models/author');

function getAllAuthors(callback){
    return Author.find({}).exec(function(error, result){
        return callback(error, result);
    });
}

function findByFamilyName(family_name){
    return Author.findOne({family_name: family_name}).exec();
}

module.exports = {
    getAllAuthors: getAllAuthors,
    findByFamilyName: findByFamilyName
}