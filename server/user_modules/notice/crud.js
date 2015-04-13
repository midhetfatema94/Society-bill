module.exports= function(){

	// var appObject = params.appObject;
	var noticeModel = require('./schema.js');
	// console.log(noticeModel);

	var readNotice = function(req, res, next){
		// req.crudMsg ="NOVAL";
		noticeModel.find().exec(function(err,result){
			req.params.noticeDetails = result;
			next();
			// console.log(result);
			// req.params.resultData = result;
			// next();
		});
	};

	var createNotice = function(req, res, next){
		console.log(req.body);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		
		var record = new noticeModel(
		{

			"title": req.body.title,
			"body": req.body.body,
			//"username":"Chinmay",
			"status" : "okay"
		}
		);
		record.save(function(err){
			if(err){
				console.log('Error'+ err);
				req.params.crudStatus = "err";
			}
			else{
				console.log('Notice created');
				req.params.crudStatus = "success";
			}

			next();
		});
	};


	var updateNotice = function(req, res, next){
		// console.log(req.params.permissionStatus);
		if(!req.params.permissionStatus){
			req.params.crudStatus = "err";
			next();
		}
		noticeModel.findById(req.body._id).exec(function(err, results){
			results.title = req.body.title ? req.body.title : results.title;
			results.body = req.body.body ? req.body.body : results.body;
			results.posted.push(req.body.posted);

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Notice updated');
					req.params.crudStatus = "success";

				}

							next();

			});

		});

	};


	var deleteNotice = function(req, res, next){

		noticeModel.findOne({"_id":req.body._id}).exec(function(err, results){
			console.log(err);
			results.status = 'deleted';

			results.save(function(err){
				if(err){
					console.log('Error'+err);
					req.params.crudStatus = "err";

				}
				else{
					console.log('Notice deleted');
					req.params.crudStatus = "success";

				}
				next();
			});


		});

	};


	var CRUD = { create: createNotice, update:updateNotice, read:readNotice, delete: deleteNotice};
	return CRUD;

};	