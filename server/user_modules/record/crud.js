module.exports = function(params){
	var recordModel = require('./schema.js')();

	var readRecord = function(req, res, next){
		recordModel.find().exec(function(err, result){
			req.params.recordDetails = result;
			next();
		});
	}

	var createRecord = function(req, res, next){
		console.log(req.body);
		var record = new recordModel({
			"name" : req.body.name,
			"flat" : req.body.flat,
			"address" : req.body.address,
			"year" : req.body.year,
			"month" : req.body.month,
			"total1" : req.body.total1,
			"total2" : req.body.total2,
			"total3" : req.body.total3,
			"total4" : req.body.total4,
			"total5" : req.body.total5,
			"total6" : req.body.total6,
			"gtotal" : req.body.gtotal,
			"status" : "okay"
		});

		record.save(function(err){
			if(err){
				console.log('Error creating record');
				req.params.crudStatus = "err";
			}

			else{
				console.log('Record created');
				req.params.crudStatus = "success";
			}
			next();
		});

	}


	var CRUD = {create : createRecord, read: readRecord};
	return CRUD;
}