const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var meetingSchema = new Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    day: { type: String, required: true },
    note: { type: String, required: true }
  });

  const Meeting = mongoose.model('Meeting', meetingSchema);

  module.exports = Meeting;   
