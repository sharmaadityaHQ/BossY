import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const meetingSchema = new Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    day: { type: String, required: true },
    note: { type: String, required: true }
  });

  export default mongoose.model('Meeting', meetingSchema);

 
