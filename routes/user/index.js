var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.cookies.email) {
    res.render('index', { title: '' });
  } else {
    var cat = "Engineering";
    var email = req.cookies.email;
    res.render('user/index', { cat: cat, email:email });
  }
});

router.get('/books', function(req, res, next) {
  if (!req.cookies.email) {
      res.render('index', { title: '' });
  }else{
      var cat = req.query;
      var email = req.cookies.email;
      if(cat == {} ){
        cat = "Engineering";
      } else {
        cat = req.query.cat;
      }
      res.render('user/index', { cat: cat,email:email });
  }

});






module.exports = router;
