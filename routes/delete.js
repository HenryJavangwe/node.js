const express = require('express'); // Import express
const router = express.Router(); // Link the express router
const Pokemon = require('../db.json'); // We require our DB for this
const request = require('request'); // Request to handle requests

// we first register the router with the app:
router.get('/:pokeId', function(req, res, next){

    var id = 0;
    var Pokes = Pokemon.pokemon;
    console.log(req.params.pokeId);
    // loop to find index
    for(var i = 0; i < Pokes.length; i++){
      if (Pokes[i].id == req.params.pokeId){
        id = i;
      }
    }

    res.render('delete',{
      title : "Delete",
      poke : Pokemon.pokemon,
      id : id,
    })
})

router.post('/:pokeId', function(req, res, next){
    request({
        url: 'http://localhost:8080/pokemon/' + req.params.pokeId,
        method: 'DELETE'        
    },
    function(error, response, body){
        res.render('index', {message: "Deleted"});
    });
    res.redirect('/');
});

module.exports = router; // avails this router to our app for importing it