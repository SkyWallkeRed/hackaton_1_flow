var mongoose = require('mongoose');

let attendeeSchema = new mongoose.Schema({
     attendeeName: String,
     comment: String
});

let eventSchema = new mongoose.Schema({
    activityName: String,
    activitylocation: String,
    activityTime: Date,
    activityMaker: String,
    activityAttending: [attendeeSchema]
});


let Event = mongoose.model('event', eventSchema);

module.exports = Event;
