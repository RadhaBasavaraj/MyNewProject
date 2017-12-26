var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	console.log("The request JSON for apples API : ")
	console.log(req.body);

	var data = {title: "GET - Apples"};

	res.json(data);


});


module.exports = router;