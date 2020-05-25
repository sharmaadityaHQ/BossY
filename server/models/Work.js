const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  hours: Number,
  minionId: String
});

module.exports = mongoose.model("Work", WorkSchema);
