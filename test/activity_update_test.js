let ActivitySuggestion = require('../models/suggestions')
const assert = require('assert');



describe('modifying activity', function(){
  
  var activity;

  beforeEach(function(done){
    activity = new ActivitySuggestion({
      title: "Museum, De Young",
      body: "I would like to see the black exhibit!",
      location: "San Francisco",
      cost: 1.99,
      rating: 7
    })
    activity.save().then(function(){
      done();
    })
    

  })
  it('Updates one activity from the database', function(done){

    ActivitySuggestion.findOneAndUpdate({rating: 7},{rating: 8}).then(function(){
        ActivitySuggestion.findOne({_id: activity._id}).then(function(result){
          assert(result.rating === 8)
          done();
        })
    })
  })
    it('Increments activity cost from the database by 1', function(done){

    ActivitySuggestion.updateMany({},{$inc: {cost: 1}}).then(function(){
        ActivitySuggestion.findOne({rating: 7}).then(function(result){
          assert(result.rating === 7)
          done();
        })
    })
  })


  }) 
