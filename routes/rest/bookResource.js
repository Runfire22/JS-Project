var express = require('express');
var router = express.Router();
var bookFacade = require('../../facade/bookFacade');

router.get('/', function(req, res){
    bookFacade.getAllBooks(function(error, result){
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

router.get('/:isbn', function(req, res){
    bookFacade.findByISBN(req.params.isbn)
    .then(bookFound => {
        if(!bookFound){return res.status(404).end();}
        return res.status(200).json(bookFound);
    })
    .catch(error => next(error));   
});

router.post('/addbook', function(req, res){
    var data = [
        req.body.title,
        req.body.author,
        req.body.summary,
        req.body.isbn
    ]
    bookFacade.addBook(data[0], data[1], data[2], data[3],
        function(error, result){
            if (error) {
                console.error(error);
                res.statusCode = 403;
                return res.json({
                    errors: ['{msg: "Book cannot be added to database", status: 403}']
                });
            }
            res.statusCode = 201;
            res.json(result);
        });
});

module.exports = router;