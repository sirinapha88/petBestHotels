var express = require('express');
var router = express.Router();
var knex = require('../../db/knex');
var Yelp = require('yelp');


var yelp = new Yelp({
  consumer_key: process.env.CONSUMERKEY,
  consumer_secret: process.env.CONSUMERSECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKENSECRET
});

router.get('/', function(req,res){
  yelp.search({ term: 'dog-hotel', location: 'san-francisco' })
    .then(function (data) {
      console.log(data.businesses[0].name);
      res.json(data.businesses)
  })
  .catch(function (err) {
    console.error(err);
  });
})


module.exports = router;