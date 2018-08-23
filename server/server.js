
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/operations.js');
const responseTime = require('response-time')
const axios = require('axios');
const redis = require('redis');


var client = redis.createClient();

client.on('error', function (err) {
    console.log("Error " + err);
});

app.set('port', (process.env.PORT || 5000));

app.use(responseTime());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/listing/ratings/:listingid', (req, res) => {
  const listing_id = Number(req.params.listingid);
  client.get(listing_id, function(error, result) {
      if (result) {
        var ParseResult = JSON.parse(result)
        // res.json({ "listingReivews": ParseResult, "source": "redis cache" });
        res.status(200).json(ParseResult);
      } else {
        db.getRatings(listing_id, function(err, results) {
          if (err) {
            console.log('err in server - reviews: ', err)
            return;
          }
          var StringResult = JSON.stringify(results.rows);

          client.setex(listing_id, 160, StringResult);
          // res.json({ "listingReivews": results.rows, "source": "database" });
          res.status(200).json(results.rows);
        });
      }
  });
});

app.get('/api/listing/comments/:listingid', (req, res) => {
  const listing_id = Number(req.params.listingid);
  client.get(listing_id, function(error, result) {
      if (result) {
        var ParseResult = JSON.parse(result)
        // res.json({ "listingReivews": ParseResult, "source": "redis cache" });
        res.status(200).json(ParseResult);
      } else {
        db.getReviews(listing_id, function(err, results) {
          if (err) {
            console.log('err in server - reviews: ', err)
            return;
          }
          var StringResult = JSON.stringify(results.rows);

          client.setex(listing_id, 160, StringResult);
          // res.json({ "listingReivews": results.rows, "source": "database" });
          res.status(200).json(results.rows);
        });
      }
  });
}); 


app.post('/api/listing/insert', function (req, res) {
  db.insertReview(req.body, (err, result) => {
    if (err) {
      console.log('err in server - reviews: ', err)
      return;
    }
    res.sendStatus(201)
  })
})

app.listen(3002, console.log('Listening on port 3002'));

module.exports = app;
