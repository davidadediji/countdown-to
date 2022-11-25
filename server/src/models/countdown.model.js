const mongoose = require('mongoose');

const CountdownSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'must provide an email'],
		trim: true,
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
		required:[true, 'date is required']
	},
	link: {
		type: String,
	},
});

const Countdown = mongoose.model('Countdown', CountdownSchema);

module.exports = Countdown;
