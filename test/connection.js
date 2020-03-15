const mongoose = require('mongoose');
mongoose.Promise = global.Promise

// Connect to DB before tests run; added before block

before(function(done){
  var url = 'mongodb://localhost:27017/mongojsdb';
  mongoose.connect(url);  
  mongoose.connection.once('open', function(){
    console.log("connection has been made; now, make magic..."); 
    done();
  }).on('error', function(error){
    console.log('connection error', error);
  })
})

// Drop the collection before each test

beforeEach(function(done){
  // Drop the collection
  mongoose.connection.collections.suggestions.drop(function(){
    done();
  })
})







