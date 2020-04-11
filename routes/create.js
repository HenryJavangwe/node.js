var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');

// GET create page:
router.get('/', function(req, res, next) {
    let data = {
        title: 'Add Pokemon',
        message: false
    }
    res.render('create', data);
});

// post to DB
router.post('/', function(req, res, next) {
  // test if data is coming through
  // check for the last pokemon hero id
  // set a new dynamic id
    let newId = Number(++Pokemon.pokemon.length);
    console.log("Creating " + req.body.name + " on the new id of: " + newId);

  // make a post request to our database and update the id
  request({
    url: "http://localhost:3000/pokemon",
    method: "POST",
    form: {
      id: Number(newId),
      name: req.body.name,
      image: req.body.pokemonImage,
    }
  }, function(error, response, body) {
      // send a response message
      console.log("The body:");
      console.log(body);
      res.render.apply('create', {message: 'Successfully Added new Pokemon'});
    });

    res.redirect('/');
});

module.exports = router;