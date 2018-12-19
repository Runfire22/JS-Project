var express = require('express');
var router = express.Router();
var authorFacade = require('../../facade/authorFacade');

router.get('/', function(req, res){
    authorFacade.getAllAuthors(function(error, result){
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