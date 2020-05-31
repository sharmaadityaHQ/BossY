import mongoose from "mongoose";
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  title: String,
  description: String,
  hours: Number,
  minionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Minion",
  }
});

export default mongoose.model("Work", WorkSchema);
