var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Henry\'s Web app', message:'Hi I am Henry'});
});

module.exports = router;
