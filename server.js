var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8082;

mongoose.connect('mongodb://localhost/flowDB', function () {
  console.log("DB connection established!!!");
})

var Post = require('./models/flowModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get("/events", function (req, res) {
  Post.find({}, function (err, allEvents) {
    if (err) {
      console.log(err);
    } else {
      res.send(allEvents);
    }
  });
});
