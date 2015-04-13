module.exports = function(params){
	
	var mongoose = require('mongoose');
	var domainSchema = mongoose.Schema({
			domainId : Number,
			name : String,
			code : String,
			parent : Number,
			status : String

	});

	return mongoose.model('Domain',domainSchema);
}