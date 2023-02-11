const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		lastName: {
			type: Number,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
	},
	//adds a timestamp that says when th doc was created and updated
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
