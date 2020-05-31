import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ideaSchema = new Schema({
    name:String,
    description:String,
    weeklyRevenue:Number,
    numWeeks:Number
  });
  
 export default mongoose.model('Idea', ideaSchema);
   
  
