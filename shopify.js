var fetch = require('node-fetch');
var ShopifyAPI = require('shopify-node-api');

global.fetch = fetch;

var client = new ShopifyAPI({
  shop: 'monique-michele-jewelry', // MYSHOP.myshopify.com
  shopify_api_key: '72eccf8b0c61463cde2296ea401250c8', // Your API key
  access_token: '2b5bc28317842dfd4a72f47252568520' // Your API password
});
console.log(client)
module.exports = client;
