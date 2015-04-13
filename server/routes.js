module.exports = function(params){
	var express = require('express');
	var router = express.Router();
	var appObject = params.appObject;

	var domain = require('./user_modules/domain/routes')({appObject: appObject});
	var record = require('./user_modules/record/routes')({appObject: appObject});
	// var record = require('./user_modules/record/routes')();


	router.get('/', function(req, res, next) {
		res.send('Home page');
		console.log('Home page');
	});
	appObject.use('/', router);
	appObject.use('/domain', domain);
	appObject.use('/record', record);


}
