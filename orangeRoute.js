var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	console.log("The request JSON for oranges API : ");
	console.log(req.body);

	var data = {title: "GET - Oranges"};
	//res.writeHead(200,{'Content-Type':'application/json'});

	res.json(data);


});


module.exports = router;