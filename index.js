const express = require('express');
const app = express();
const request = require('request');

request({
    url: 'https://smarts-totem.s3-sa-east-1.amazonaws.com/code-challenge/customers.json',
    json: true
  }, function(error, response, body) {
    //console.log(body);
  }, function (req, res) {
      res.send(body);
  } 
  );

app.get('/', function (req, res) {
  res.send('Hello World denis!');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
