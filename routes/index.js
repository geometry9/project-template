var express = require('express');
var router = express.Router();
var axios = require('axios');
var client = require('../shopify');
require('dotenv').config()





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Monique Michele Deliz' });
});

router.get('/products', function(req,res,next) {
  client.productListing.list(function(products){
    console.log(products)
  })
});

router.get('/products/{id}', function(req,res,next) {

});


module.exports = router;
