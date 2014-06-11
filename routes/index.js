var express = require('express');
var router = express.Router();

var User = require('../models/User');
var mongoose = require('mongoose');
// connecto to mongo
mongoose.connect('mongodb://localhost/BuzzerTest');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* POST register */
router.post('/register' , function(req,res){
         var user = new User( {
           name: req.body,
           email: req.body.email 
         });
        console.log("checkpoint1");
        user.save(function(err){
         if(err) {console.log("Error inserting user" , err);next();}
          res.render ('members',{title: 'Members Home'});
        });
});


module.exports = router;
