var request = require('request');
var data = {title: "getFruits"};


var options = {method : 'GET',
			   url : "http://localhost:3030/apples",
			   json: data};
				

request(options, function(error, response, body){


	console.log("The response from apples API : ")
	console.log(body);

});



 options = {method : 'GET',
			   url : "http://localhost:3030/oranges",
			   json: data};
				


request(options, function(error, response, body){


	console.log("The response from oranges API : ")
	console.log(body);

});