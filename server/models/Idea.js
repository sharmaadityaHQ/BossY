const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ideaSchema = new Schema({
    name:String,
    description:String,
    weeklyRevenue:Number,
    numWeeks:Number
  });
  
  const Idea = mongoose.model('Idea', ideaSchema);
   
  module.exports=Idea;
