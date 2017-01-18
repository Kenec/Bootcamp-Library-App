var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var cat = "Engineering";
  res.render('user/index', { cat: cat });
});

router.get('/books', function(req, res, next) {
  var cat = req.query;
  if(cat == {} ){
    cat = "Engineering";
  } else {
    cat = req.query.cat;
  }

  res.render('user/index', { cat: cat });
});






module.exports = router;
