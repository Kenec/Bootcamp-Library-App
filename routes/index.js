var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var firebase = require('./config.js');
var cookie = require("../public/javascripts/cookies.js");

var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.post('/',urlencodedParser, function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  //var msg=  msg = "Your account have been created";
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
   res.render('index', { title: 'Wrong username or password' });
  });

  firebase.auth().onAuthStateChanged(user => {
  if(user) {
    var cat = "Engineering";
    //cookie.setCookie("user",email,60);
    //sessionStorage.setItem('email', email);
    res.cookie('email',email);
    res.render('user/index',{cat:cat});
    }
  });
});

module.exports = router;
