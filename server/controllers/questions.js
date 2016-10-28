var Question = require('../models/question');

module.exports = {
	index: function(req, res){
		Question.find({}, function(err, questions){
			if (err) {
				res.json(err);
			}
			else {
				res.json(questions);
			}
		})
	},
	create: function(req, res){
		Question.create(req.body, function(err, question){
			if (err) {
				res.json(err);
			}
			else {
				res.json(question);
			}
		})
	},
	show: function(req, res){
		console.log(req.params.id);
		Question.findById(req.params.id)
		.populate('answers')
		.exec(function(err, result){
			res.json(result);
		})
	}
}