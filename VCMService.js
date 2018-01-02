var express = require('express');
var app = express();
var querystring = require('querystring');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());


app.get('/getTransactions',function(req,res){

		console.log("The account Id is : " + req.query.acctId);

		getTransactionDetails(req.query.acctId,function(results){

				res.json({

					Account_Number : results[0][0],
					Account_Name : results[0][1],
					Account_Type : results[0][2],
					Account_Status : results[0][3],
				});

		});

		


});




function getTransactionDetails(acctId, callback){

var oracledb = require('oracledb');

oracledb.getConnection(
		 {
		 	user : "radha",
		 	password : "Password@13",
		 	connectString : "localhost:1521/ORC1"

		 },

		 function(err, connection)
		 {


		 	if(err){throw err;}

		 	connection.execute(
		 			   `SELECT * FROM Account WHERE AccountID = :id`,[acctId],
		 			   function(err, result)
		 			   {
		 			   		if(err){
		 			   		doRelease(connection);
		 			   		throw err;}
		 			   		var results = result.rows;
		 			   		//console.log(result.rows);
		 			   		doRelease(connection);
		 			   		callback(results);
		 			   });


		 }

	);
}




function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}

app.listen(3030);

console.log('VCM REST API getTransactions is running on 3030');