var express = require('express');
var router = express.Router();
var ocra = require('../ocra');
 

/* GET home page. */
router.get('/', function(req, res, next) {
    var ocraSuite = req.query.ocraSuite;
    var seed = req.query.seed;
    var counter = '';
    var question = parseInt(req.query.question).toString(16);
    var password = '';
    var sessionInformation = req.query.session;
    var timeStamp = '';
    
    var ocraresponse = ocra.generateOCRA(
        ocraSuite,          // ocra suite
        seed,               // shared secret key
        counter,            // ocra counter 
        question,           // question in hex string format
        password,           // password string hash
        sessionInformation, // session information 
        timeStamp);         // timestamp ;

    res.send({ response: ocraresponse });
});

module.exports = router;