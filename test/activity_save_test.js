let ActivitySuggestion = require('../models/suggestions')
const assert = require('assert');



describe('saving to the database', function(){
  // body...
  var activity;

  it('adds new suggestion to the database', function(done){
    var activity = new ActivitySuggestion({
      title: "Museum, De Young",
      body: "I would like to see the black exhibit!",
      location: "San Francisco",
      rating: 7
    })
    activity.save().then(function(){
      assert(activity.isNew === false);
      done();
    })
  }) 
})