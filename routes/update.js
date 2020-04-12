var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');

router.get("/:pokeId", function(req, res, next){
    // res.send("Got a patch request from the user")
    request.get(
        'http://localhost:3001/pokemon/' + req.params.pokeId, 
        function (error, response, body) {
            console.log('body:', body); // Print the HTML 
            res.render('update', {message: false, poke: JSON.parse(body)})
        }
    );
});

router.post('/:pokeId', function(req, res, next) {
    request({
        url: 'http://localhost:3001/pokemon/' + req.params.pokeId,
        method: "PATCH",
        form: {
            name: req.body.updateName,
            image: req.body.updateImage
        }
    },
    function(error, response, body) {
        console.log("The new body:");
        console.log(body);
        // res.render.apply('patch', {message: "Updated Successfully"});
    }
    );

    res.redirect('/view/' + req.params.pokeId);
});


module.exports = router;