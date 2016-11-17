var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_angular', { title: 'CV', layout: 'layout_angular' });
});

module.exports = router;
