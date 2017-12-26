var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());


var appleRoute = require('./appleRoute.js');
var orangeRoute = require('./orangeRoute.js');

app.use('/apples',appleRoute);
app.use('/oranges',orangeRoute);


module.exports = app;

