var mongoose = require('mongoose');

var technicalSchema = mongoose.Schema({
	user:{
		type: String,
//		required: true
	},
	title:{
		type: String,
//		required: true
	},
	message:{
		type: String,
//		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}},
	{versionKey:false}
	);

var Technical = module.exports = mongoose.model('technical', technicalSchema);

// get books
module.exports.getTechnical = function(callback, limit){
	Technical.find(callback).limit(limit);
}
//add genre
module.exports.addTechnical = function(technical, callback){
	Technical.create(technical, callback);
}

module.exports.getTechnicalById = function(id, callback){
	Technical.findById(id, callback);
}
module.exports.updateTechnical = function(id, technical, options, callback){
	var query = {_id: id};
	var update = {
		user: technical.user,
		title: technical.title,
		message: technical.message
	}
	Technical.findOneAndUpdate(query, update, options, callback);
}
module.exports.deleteTechnical = function(id, callback){
	var query = {_id: id};
	Technical.remove(query, callback);
}
