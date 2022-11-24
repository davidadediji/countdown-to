const mongoose = require('mongoose');

const CountdownSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'must provide name'],
		trim: true,
		maxlength: [20, 'name cannot exceed 20 characters'],
	},
	countdownTitle: {
		type: String,
		required: [true, 'must provide a title'],
	},
	countdownDescription: {
		type: String,
	},
	countdownDate: {
		type: Date,
	},
	link: {
		type: String,
	},
});

const Countdown = mongoose.model('Countdown', CountdownSchema);

module.exports = Countdown;
