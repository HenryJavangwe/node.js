var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let data = {
    title: 'All pokemon',
    pokemon: Pokemon,
    message: false,
  }
  res.render('index', data);
});

module.exports = router;



// Learning about the process object ://www.linkedIn.com/learning/node-js-essential-training-2/argument-variables-with-process-argv?u=2143209
// console.log(process.argv);
// console.log(process.pid);
// console.log(process.versions);
// console.log(`This filename is ${path.basename(__filename)}`);
