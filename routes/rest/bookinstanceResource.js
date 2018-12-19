var express = require('express');
var router = express.Router();
var bookinstanceFacade = require('../../facade/bookinstanceFacade');

router.get('/', function(req, res){
    bookinstanceFacade.getAllBookInstances(function(error, result){
        if(error){
            console.error(error);
            res.statusCode = 403;
            return res.json({
                errors: ['{msg: "Backend error", status: 403}']
            });
        }
        res.statusCode = 201;
        res.json(result);
    });
});

module.exports = router;