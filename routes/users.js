var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send("You're so cool!");
});

//INFO PAGE
router.get('/info', function(req, res, next){
  res.render('info', { title: 'Info page'});
});

module.exports = router;
