var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var firebase = require('./config.js');
//var fbase = require('./config.js').FbApp;

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('register', { msg: '' });
});

router.post('/',urlencodedParser, function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var msg=  msg = "Your account have been created";
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   console.log(error.code);
   console.log(error.message);
    msg = error.message;
  });

  res.render('register',{msg:msg});
});

module.exports = router;
