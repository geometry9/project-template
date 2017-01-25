var express = require('express');
var router = express.Router();
var axios = require('axios');
require('dotenv').config()

var key = process.env.OPEN_WEATHER_API;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '5 Day Weather Forecast' });
});


module.exports = router;
