var express = require('express');
var router = express.Router();
var BookInstance = require('../models/bookinstance');

function getAllBookInstances(callback){
    return BookInstance.find({}).exec(function(error, result){
        return callback(error, result);
    });
}

module.exports = {
    getAllBookInstances: getAllBookInstances
}