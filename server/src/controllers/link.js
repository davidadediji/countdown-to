const User = require('../models/countdown.model');
const slug = require('slugify');
const GetLink = async (req, res) => {
	const userId = await User.findOne(req.params._id);
	const userid = userId.id;
	const titleSlug = slug(userId.countdownTitle, {
		replacement: '_',
		lower: true,
	});
	if (userid === req.params.id) {
		User.findByIdAndUpdate(req.params.id, {
			$set: { link: titleSlug + '_' + userid },
		}).then((result) => {
			if (!result) {
				res.json('Link not created');
			} else {
				res.json(result);
			}
		});
	}
};


module.exports = { GetLink };
