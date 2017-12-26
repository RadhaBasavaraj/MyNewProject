var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());


var appleRoute = require('./routes/appleRoute.js');
var orangeRoute = require('./routes/orangeRoute.js');

app.use('/apples',appleRoute);
app.use('/oranges',orangeRoute);


module.exports = app;

