var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8082;

mongoose.connect('mongodb://localhost/flowDB', function() {
  console.log("DB connection established!!!");
})

var Event = require('./models/flowModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var time1 = new Date('2018-05-16T15:20:00');
var time2 = new Date('2018-05-17T13:17:00');
var time3 = new Date('2018-05-17T10:10:00');

var event1 = new Event({activityName: "Basketball", activityMaker: "Ari Liron", activityTime: time1});
var event2 = new Event ({activityName: "Minchah", activityMaker: "Amos Sidelnik", activityTime: time2});
var event3 = new Event ({activityName: "Weekly Koffee Klatch", activityMaker: "Ovadya Pinsker", activityTime: time3});

// event1.activityAttending.push({attendeeName: "Ari Liron", comment: "Looking forward"},
//   {attendeeName: "Avidan Schwab", comment: "Look out, Mickey Rottenberg is here"}); 

// event2.activityAttending.push({attendeeName: "Ovadya Pinsker"},
//   {attendeeName: "Isiah Isaacson"},
//     {attendeeName: "Eran Berlinger"}, 
//       {attendeeName: "Tzadok Mendelson"}, 
//         {attendeeName: "Jotham Davidson"}, 
//           {attendeeName: "Miron Wolf"}, 
//             {attendeeName: "Eliyohu Levinstein"}, 
//               {attendeeName: "Elijah Frank"},
//                 {attendeeName: "Daniel Sarasohn"},
//                   {attendeeName: "Lev Ran"}); 

// event3.activityAttending.push({attendeeName: "Dganit Hyamson", comment: "WHat a wonderfil idea"},
//                   {attendeeName: "Laura Spiegel", comment: "Don't forget the hazelnut coffee"},
//                     {attendeeName: "Anna Ganani", comment: "Yum"}); 

event1.save();
event2.save();
event3.save();

