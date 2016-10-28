var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
require('../models/answer');
require('../models/user');

var QuestionSchema = new Schema({
	question: {type: String, required: true, minlength: 10},
	description: {type: String},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
	// _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

module.exports = mongoose.model("Question", QuestionSchema);