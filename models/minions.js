import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const minionSchema = new Schema(
  {
    full_name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    weaknesses: String,
    salary: Number,
  },
  {
    timestamps: true,},
);

export default mongoose.model("Minion", minionSchema)