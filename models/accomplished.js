const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);


// Create Schema and Model


const AccomplishedActivitySchema = new Schema({
  title: {
    type: String,
    // required: [true: 'Title field required']
  },
  body:  {
    type: String
  }, 
  category: {
    type: String
  },
  location: {
    type: String
  },
  rating: {
    type: Number
  },  
  cost: {
    type: Number
  },
  accomplished: {
    type: Boolean,
    default: true
  }


})

const AccomplishedActivity = mongoose.model('suggestion', AccomplishedActivitySchema);

module.exports = AccomplishedActivity;