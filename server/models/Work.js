const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  title: String,
  description: String,
  hours: Number,
  minionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Minion",
  }
});

module.exports = mongoose.model("Work", WorkSchema);
