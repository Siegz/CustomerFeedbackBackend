var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
	grade:{
		type: String,
		required: true
	},
	message:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}},
	{versionKey:false}
	);
var Feedback = module.exports = mongoose.model('feedback', feedbackSchema);

//gets all feedback
module.exports.getFeedback = function(callback, limit){
	Feedback.find(callback).limit(limit);
}
//adds feedback
module.exports.addFeedback = function(feedback, callback){
	Feedback.create(feedback, callback); 
}
