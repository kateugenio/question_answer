var Answer = require('../models/answer');
var Question = require('../models/question');

module.exports = {
	create: function(req, res){
		Question.findById(req.params.qid, function(err, question){
			var answer = new Answer(req.body);
			answer._question = question._id;
			answer.user = req.params.user;
			answer.save(function(err){
				question.answers.push(answer._id);
				question.save(function(err){
					if(err){
						res.json(err);
					}
					else {
						res.json(question);
					}
				})
			})
		})
	},
	update: function(req, res){
		console.log("params id: ", req.params.id);
		Answer.findById(req.params.id, function(err, answer){
			if (err){
				console.log("err is: ", err);
				res.json(err);
			}
			else {
				console.log("answer: ", answer);
				answer.likes += 1;
				answer.save(function(err, result){
					res.json(result);
				})
			}
		})
	}
}