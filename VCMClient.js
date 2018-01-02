var request = require('request');


var vcmResponse = new Promise(function(resolve, reject){

			request({

						uri: "http://localhost:3030/getTransactions",
						qs : {acctId : 1234},
						method: 'GET',
						headers: { "content-type" : "application/json" }


					}, function(err, resp, body){

						if(err){reject(err);}
						else{

							resolve(body);
						}

			});


});


vcmResponse.then(function(respBody){

	console.log("Promise fulfilled");
	console.log(respBody);

}).catch(function(error){

	console.log(error);
});