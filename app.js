var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Technical = require('./models/technical');
Feedback = require('./models/feedback');

//connec mongoose
mongoose.connect('mongodb://localhost/devatusdb');
var bd = mongoose.connection;

app.get('/', function(reg, res){
	res.send('now at a new location  <br>' +
		'<a href="http://46.101.195.246:3000/api/feedback">/api/feedback</a> <br> <a href="http://46.101.195.246:3000/api/technicalRequest">/api/technicalRequest</a> <br>' +
		'vaihda urliin halutun kohteen id <br>' +
		'<a href="http://46.101.195.246:3000/api/technicalRequest/">/api/technicalRequest/id get by id </a><br>' +
		'<a href="http://46.101.195.246:3000/api/technicalRequest/">/api/technicalRequest/id put by id for editing a entry </a><br>' +
		'<a href="http://46.101.195.246:3000/api/technicalRequest/">/api/technicalRequest/id delete by id for deleting a entry </a><br>');
});

//====================Technical requests
app.get('/api/technicalRequest', function(req, res){
	Technical.getTechnical(function(err, technical){
		if(err){
			throw err;
		}
		res.json(technical);
	});
});

app.post('/api/technicalRequest', function(req, res){
	var technical1 = req.body;
	Technical.addTechnical(technical1, function(err, technical1){
		if(err){
			throw err;
		}
		res.json(technical1);
	});
});

app.get('/api/technicalRequest/:_id', function(req, res){
	Technical.getTechnicalById(req.params._id, function(err, technical2){
		if(err){
			throw err;
		}
		res.json(technical2);
	});
});

app.put('/api/technicalRequest/:_id', function(req, res){
	var id = req.params._id;
	var technical1 = req.body;
	Technical.updateTechnical(id, technical1, {}, function(err, technical1){
		if(err){
			throw err;
		}
		res.json(technical1);
	});
});

app.delete('/api/technicalRequest/:_id', function(req, res){
	var id = req.params._id;
	Technical.deleteTechnical(id, function(err, technical1){
		if(err){
			throw err;
		}
		res.json(technical1);
	});
});
//====================


//====================feedback
app.get('/api/feedback', function(req, res){
	Feedback.getFeedback(function(err, feedback){
		if(err){
			throw err;
		}
		res.json(feedback);
	});
});

app.post('/api/feedback', function(req, res){
	var feedback1 = req.body;
	Feedback.addFeedback(feedback1, function(err, feedback1){
		if(err){
			throw err;
		}
		res.json(feedback1);
	});
});
//====================

app.listen(3000);
console.log('running at 3000');
