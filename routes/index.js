var express = require('express');
var router = express.Router();
var axios = require('axios');
require('dotenv').config()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Monique Michele Deliz' });
});


module.exports = router;
