let express = require('express');
let app = express();
const path = require("path");
const ejs = require( 'ejs' );
var mongoose = require('mongoose');
var errorHandler = require('errorhandler');
var bodyParser = require('body-parser');
const methodOverride = require('method-override');
const anime = require('animejs');


app.use(express.static(path.join(__dirname, 'public')));
// app.set('/views', __dirname + '/views');


// set up template
app.set( 'view engine', 'ejs' );

// parse requestbody from form & parse JSON
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );

// methodeoverride for put and delete methods
app.use(methodOverride('_method'))

var newDiv = require('./public/js/custom.js');

// development only
// if('development' == app.get('env')) {
//   // app.use(express.errorHandler());
//   mongoose.connect('mongodb://55.55.55.5/mongojsdb');
//   mongoose.Promise = global.Promise;  
// }

// Middleware

// app.use('/', () =>{
//   console.log("this is the middleware running!!")
// })
// Routes
var routes = require('./routes/index')

app.use('/', routes);


let port = process.env.PORT || 3000;

app.listen(port, () =>{
  console.log('JS server is live on port:', port)
})
module.exports = app;