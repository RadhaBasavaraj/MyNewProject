'use strict';

module.exports = function(Account) {

		/**
		 * Gets account balance
		 * @param {number} Account_Number Account Number
		 * @param {Function(Error, object)} callback
		 */



		Account.getAccountBalance = function(Account_Number, callback) {

			var request = require('request');

			var vcmResponse = new Promise(function(resolve, reject){

			request({

						uri: "http://localhost:3030/getTransactions",
						qs : {acctId : Account_Number},
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
					callback(null, respBody);

				}).catch(function(error){

					console.log(error);
				});

		  
		};

};
