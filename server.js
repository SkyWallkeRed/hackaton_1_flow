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
  Event.find({}, function (err, allEvents) {
    if (err) {
      console.log(err);
    } else {
      res.send(allEvents);
    }
  });
});

app.post("/events", function (req, res) {
  if (!req) {
    console.log("Error adding event");
  }
  var newEvent = new Event(req.body);
  newEvent.save(function (err, response) {
    if (err) {
      console.error(err);
    }
    res.send({id: response.id, text: "saved"});
  });
});

app.delete("/delete/:id", function (req, res) {
  if (!req) {
    console.log("Error");
  }
  Event.findByIdAndRemove(req.params.id, function(err, deleted){
    if(err){
    console.error(err);
    }
  }); 
  res.send("Deleted");  
});

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
