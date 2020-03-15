let ActivitySuggestion = require('../models/suggestions')
const assert = require('assert');



describe('deleting activity', function(){
  
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

  it('deletes one activity from the database', function(done){

    ActivitySuggestion.findOneAndRemove({rating: 7}).then(function(){
      ActivitySuggestion.findOne({rating: 7}).then(function(result){
      assert(result === null)
      done();
      })
    })


  }) 

})