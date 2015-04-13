module.exports = function(params){

	var mongoose = require('mongoose');
	var recordSchema = mongoose.Schema({
		name : String,
		flat : String,
		address : String,
		year : Number,
		month : String,
		total1 : Number,
		total2 : Number,
		total3 : Number,
		total4 : Number,
		total5 : Number,
		total6 : Number,
		gtotal : Number,
		status : String

	});

	return mongoose.model('Record',recordSchema);
}