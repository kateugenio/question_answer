var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
require('../models/question');
require('../models/user');


var AnswerSchema = new Schema({
	answer: {type: String, required: true, minlength: 5},
	details: {type: String},
	likes: {type: Number, default: 0},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'},
	user: {type: String}
}, {timestamps: true});


module.exports = mongoose.model("Answer", AnswerSchema);