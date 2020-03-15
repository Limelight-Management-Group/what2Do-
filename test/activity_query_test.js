let ActivitySuggestion = require('../models/suggestions')
const assert = require('assert');



describe('finding activity', function(){
  
  var activity;

  beforeEach(function(done){
    activity = new ActivitySuggestion({
      title: "Museum, De Young",
      body: "I would like to see the black exhibit!",
      location: "San Francisco",
      rating: 7
    })
    activity.save().then(function(){
      done();
    })
    
  })

  it('finds one activity from the database', function(done){

    ActivitySuggestion.findOne({rating: 7}).then(function(result){
      assert(result.rating === 7)
      done();
    })


  }) 

  it('finds one activity by ID from the database', function(done){

    ActivitySuggestion.findOne({_id: activity._id}).then(function(result){
      assert(result._id.toString() === activity._id.toString());
      done();
    })


  })
})