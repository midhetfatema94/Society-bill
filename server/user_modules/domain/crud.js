module.exports = function(){
	// var appObject = params.appObject;
	var domainModel = require('./schema.js')();
	// console.log(appObject);
	// console.log(domainModel);



	// var readNotice = function(req, res, next){
	// 	// req.crudMsg ="NOVAL";
	// 	noticeModel.find().exec(function(err,result){
	// 		req.params.noticeDetails = result;
	// 		next();
	// 		// console.log(result);
	// 		// req.params.resultData = result;
	// 		// next();
	// 	});
	// };

	var readDomain = function(req, res, next){
		domainModel.find().exec(function(err, result){
			req.params.domainDetails = result;
			next();
		});
	}


	var createDomain = function(req, res, next){
		console.log(req.body);

		// if(!req.params.permissionStatus){
		// 	req.params.crudStatus = "err";
		// 	next();
		// }

		var record = new domainModel({
			"name" : req.body.name,
			"code" : req.body.code,
			"parent" : req.body.parent,
			"status" : "okay"
		});

		record.save(function(err){
			if(err){
				console.log('Error'+ err);
				req.params.crudStatus = "err";
			}
			else{
				console.log('Domain created');
				req.params.crudStatus = "success";
			}

			next();
		});

	}

	var updateDomain = function(req, res, next){

		// if(!req.params.permissionStatus){
		// 	req.params.crudStatus = "err";
		// 	next();
		// }

		noticeModel.findById(req.body._id).exec(function(err, results){
			results.name = req.body.name ? req.body.name : results.name;
			results.code = req.body.code ? req.body.code : results.code;
			results.parent = req.body.parent ? req.body.parent : results.parent;
			
			// results.posted.push(req.body.posted);

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Domain updated');
					req.params.crudStatus = "success";

				}

							next();

			});

		});

	}

	var deleteDomain = function(req, res, next){

		domainModel.findOne({"_id":req.body._id}).exec(function(err, results){
			console.log(results);
			results.status = 'deleted';

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Domain deleted');
					req.params.crudStatus = "success";

				}

				next();

			});


		});

	}	

	var CRUD = { 
		read: readDomain, 
		create: createDomain, 
		delete: deleteDomain
	};

	return CRUD;
}