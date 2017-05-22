var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_root', { title: 'verheijden.io', layout: 'layout_root' });
});

module.exports = router;