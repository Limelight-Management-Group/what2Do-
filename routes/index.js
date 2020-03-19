var express = require('express');
var router = express.Router();
var app = express();
var path = require("path");
var mongodb = require('mongodb')
var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
let objectID = require("mongodb").ObjectID;
var MongoClient = require('mongodb').MongoClient;
var ActivitySuggestion = require('../models/suggestions')
const assert = require('assert');


var url = 'mongodb://localhost:27017/mongojsdb';
// app.use(express.static(path.join(__dirname, 'views/')));
// res.sendFile('index.html', { root: __dirname });

router.get('/', (req,res) => {
  res.status(200).render('home');
});


router.get('/addnewtodo', (req, res) => {
    console.log('document ready!')
    // res.sendFile('home.html');
    res.sendFile('addnewtodo.html', { root: __dirname + '/../views' });

})
// Get a list of activites we've added to the DB
router.get('/activity', function(req,res){
  var eventsArray = [];
  var MongoClient = mongodb.MongoClient;
      // res.sendFile('home.html', { root: __dirname + '/../views' });

  MongoClient.connect(url, function(err, db){
    if(err){
    console.log('Unable to connect.------->');
    console.log("heres the err", err)  
    }
    else{
      console.log("connect established successfully! for Get <---------");
      var getQueryObject = db.collection('suggestions').find();
      getQueryObject.forEach(function(doc, err){
        console.log('in the array:', eventsArray.length)
        eventsArray.push(doc);
    },function(){
      db.close();
      // console.log("i still have the array here:-->", eventsArray)
      res.render('activity', { activities: eventsArray});
    })  
   }
  });
});

// Get a acivity from list of activites we've added to the DB
router.get('/activity/:id', function(req,res){
  console.log("-----> ->", res.params)
  var eventArray = [];
  var idArray = [];
  var MongoClient = mongodb.MongoClient;
      // res.sendFile('home.html', { root: __dirname + '/../views' });

  MongoClient.connect(url, function(err, db){
    if(err){
    console.log('Unable to connect.------->');  
  }
   else{
    console.log("connect established successfully! for Get <---------", req.params);
    var paramId =req.params
    idArray.push(paramId)
    console.log("id array has:" + idArray.length + "in the array")
        console.log("The req.params.id--->", req.params.id.toString())
        // let _id = req.params.id
        let idCheck = {};
        var id = req.params.id;
        console.log("SANITY CHECK ID:", id)
        // idCheck['_id'] = _id
        // console.log("this should work:", req.params.id.toString())
        idCheck = {_id : objectID(id)}
        // ({ _id: ObjectId("5580c79aa11e7310b2985ab1") })
        // console.log(_id,"lllll0000")
        console.log(idCheck,"2string")
        let paramvalue = idCheck.id
        console.log("this is the req.params.id IDCHECK---->",req.params.id + "<----")
        var getObject = db.collection('suggestions')
        // console.log("this is the getObject", getObject)
        getObject.findOne(idCheck, function(err, doc){
        console.log("HERE IS THE DOC", doc)
        console.log(err,"got an ERRRRRR")

        // console.log(doc['_id'],"the doc");
      db.close();
        return res.render("show",{activity: doc})
        // throw new Error("something is broken",err);
      });

   }
  });
});

// Add new activity to the DB
router.post('/addnewtodo', function(req,res){
  let eventObj = {
    title: req.body.title,
    body: req.body.body,
    rating: req.body.rating,
    location: req.body.location,
    cost: req.body.cost,
    rating: req.body.rating
  }

console.log('this is eventObj', eventObj)
  var url = 'mongodb://localhost:27017/mongojsdb';
  var MongoClient = mongodb.MongoClient;
    ActivitySuggestion.create(req.body).then(function(activity){
      console.log("this is req.body", req.body)
    console.log("this is the activity", activity)
    res.redirect('home.html', { root: __dirname + '/../views' });
  })

  MongoClient.connect(url, function(err, db){
    if(err){
      alert('Unable to connect.------->');  
    }
   else{
    console.log("connect established successfully!  for POST<---------");
    assert.equal(null, err);
    db.collection('suggestions').insertOne(eventObj, function(err, result){
      assert.equal(null, err);
      console.log('item inserted');
      db.close();
      res.status(200).render('home');
      // res.render('activity', { activities: eventsArray});

    })
   }
  });
});
// EDIT route
router.get('/activity/:id/edit', async function(req,res){
  console.log("hit the route!")
  var id = {};
  try{
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/mongojsdb';
  id = req.params.id
  idCheck = {_id : objectID(id)}
  console.log("this is the IDCHECK:", idCheck)
  MongoClient.connect(url, async function(err, db){
    let update  = await db.collection('suggestions').findOne(idCheck).then(function(result){
    console.log("ERROR", err)
    console.log("Here is the result:", result)
    return res.render(`edit`, {activity: result})    
  })
    
})
  
  
}catch{
  errorMessage: 'Error Updating Activity'
  console.log('ERROR!!!')
  return res.render(`edit`, {activity: result})    
  }
})
// Update route
router.put('/activity/:id', function(req,res){
  try{
    let activity;
    id = req.params.id;
    idCheck = {_id : objectID(id)};
    var MongoClient = mongodb.MongoClient;
    
      MongoClient.connect(url, async function(err, db){
      console.log('put connect success');
      console.log("REQ.BODY", req.body)
      let update = req.body
      var id = req.params.id;
      db.collection('suggestions').update(idCheck, {$set: update}).then(function(err, result){
        console.log("GOT A RESULT:", result);
        return res.status(200).render('home', {activity: result});       
      })
      
    })

    } catch {
      if (err){
      alert("Put connect fail-->", err);
    }
  }

})  

router.delete('/activity/:id', function(req,res){
  var MongoClient = mongodb.MongoClient;
  MongoClient.connect(url, function(err, db){
    if(err){
      alert("delete connect fail-->", err);
    }else{
      console.log('deleteconnect success');
      var id = req.params.id;
      db.collection('suggestions').remove({_id : objectID(id)});
      res.status(200).render('home');
    }
  })

})


module.exports = router;