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

router.get('/:family_name', function(req, res){
    authorFacade.findByFamilyName(req.params.family_name)
    .then(authorFound => {
        if(!authorFound){return res.status(404).end();}
        return res.status(200).json(authorFound);
    })
    .catch(error => next(error));   
});

module.exports = router;