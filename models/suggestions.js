const anime = require('animejs');

const mongoose = require('mongoose');
let ObjectID = require("mongodb").ObjectID;
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);


// Create Schema and Model

var ObjectId = Schema.Types.ObjectId;

const ActivitySuggestionSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: {
    type: String,
    // required: [true: 'Title field required']
  },
  body:  {
    type: String,
  }, 
  category: {
    type: String,
  },
  location: {
    type: String,
  },
  rating: {
    type: Number,
  },  
  cost: {
    type: Number,
  },
  accomplished: {
    type: Boolean,
    default: false
  },


})

const ActivitySuggestion = mongoose.model('suggestion', ActivitySuggestionSchema);

module.exports = ActivitySuggestion;