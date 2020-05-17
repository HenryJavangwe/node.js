var express = require ('express');
var router =express.Router();
var Pokemon = require('../db.json');
var request = require('request');

router.get('/:pokeId', function(req, res, next){
    
    request.get(
        'http://localhost:8080/pokemon/' + req.params.pokeId,
        function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            res.render('view', {poke: JSON.parse(body)} );
    });
})
module.exports = router;