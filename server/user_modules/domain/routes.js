
module.exports = function() {

	var express = require('express');
	var router = express.Router();
	var crudObject = require('./crud')();
	// console.log(crudObject.read());
	// var appObject = params.appObject;

	router.get('/fetch', crudObject.read, function(req, res, next){
		res.send(req.params.domainDetails);
		

	});

	router.post('/create', crudObject.create, function(req, res, next){
		if(req.params.crudStatus === "success"){
			res.send('Domain created');
		}
		else{
			res.send('Error');
		}
	});

	router.get('/', function(req,res, next){
		res.send('domain page');
		console.log('domain page');

	});

	return router;

}