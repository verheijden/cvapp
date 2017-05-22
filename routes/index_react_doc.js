var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_react_doc', { title: 'Erik Verheijden - CV', layout: 'layout_react_doc' });
});

module.exports = router;