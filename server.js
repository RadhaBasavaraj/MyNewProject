var http = require('http');
var app = require('./app.js');


var server = http.createServer(app);

server.listen(3030);

console.log("API is running on 3030");