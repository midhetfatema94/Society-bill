module.exports = function(){

	// var appObject = params.appObject;
	var mongoose = require('mongoose');
	var noticeSchema = mongoose.Schema(
		{
			title: String,
			body: String,
			posted:[
					{
						userId:Number,
						timeStamp:{
									type: Date,
									default: Date.now()
								},
						mode:String
					}],
			// domainLevel : [
			// 		{
			// 			domainId : Number,
			// 			domainCode:String
			// 		}],
			status : String
		}
	);	

	return mongoose.model('Notice',noticeSchema);

}