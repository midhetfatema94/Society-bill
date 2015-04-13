module.exports=function(params){
	
	var mongoose = require('mongoose');

	var permissionObject = {};

	//will return crud code, will take user_mongoId and module number

	var getCrudCode = function(params){
		var userId = params.userId;
		var crudCode = 244444;


		return crudCode;

	};


	//will return domain, will take user_mongoId

	permissionObject.getDomainCode = function(req,res,next){
		var userId = req.user.userId;
		var domainCode = 'ENGG-CSE-FE:A';

		req.user.domainCode='';
		next();

	};




	//will return boolean if it can read, will take 
	permissionObject.canRead = function(req, res, next){
		var userId = req.user.userId;
		var moduleCode = req.params.moduleCode;

		var crudCode = getCrudCode({userId:userId});
		var crudLvl= crudCode.split("")[moduleCode - 1];
		if(crudLvl >= 1) {
			req.params.permissionStatus=true;
			next();
		}
		else{
			req.params.permissionStatus=false;
			next();
		}


	};

	permissionObject.canCreate = function(req, res, next){
		var userId = req.user.userId;
		var moduleCode = req.params.moduleCode;

		var crudCode = getCrudCode({userId:userId})+"";
		var crudLvl= (crudCode).split("")[moduleCode - 1];
		// console.log(moduleCode);
		if(crudLvl >= 2) {
			req.params.permissionStatus=true;
			next();
		}
		else{
			req.params.permissionStatus=false;
			next();
		}
	};

	permissionObject.canUpdate = function(req, res, next){
		var userId = req.user.userId;
		var moduleCode = req.params.moduleCode;

		var crudCode = getCrudCode({userId:userId})+"";
		var crudLvl= (crudCode).split("")[moduleCode - 1];
		// console.log(crudLvl);
		if(crudLvl >= 3) {
			req.params.permissionStatus=true;
			next();
		}
		else{
			req.params.permissionStatus=false;
			next();
		}
	};

	permissionObject.canDelete = function(req, res, next){
		var userId = req.user.userId;

		var moduleCode = req.params.moduleCode;

		var crudCode = getCrudCode({userId:userId});
		var crudLvl= crudCode.split("")[moduleCode - 1];
		if(crudLvl >= 4) {
			req.params.permissionStatus=true;
			next();
		}
		else{
			req.params.permissionStatus=false;
			next();
		}
	};



	return permissionObject;
}