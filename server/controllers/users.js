var User = require('../models/user');

module.exports = {
	create: function(req, res){
		User.create(req.body, function(err, user){
			if (err){
				res.json(err);
			}
			else {
				res.json(user);
			}
		})
	},
	show: function(req, res){
		User.find({}, function(err, user){
			if (err){
				res.json(err);
			}
			else {
				res.json(user);
			}
		})
	},
	delete: function(req, res){
		User.remove({_id: req.params.id}, function(err){
			if (err) {
				res.json(err);
			}
			else {
				res.json(true);
			}
		})
	}
}