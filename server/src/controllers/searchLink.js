const User = require('../models/countdown.model');

const SearchLink = async (req, res) => {
	 await User.findOne({link:req.params.link})
		.then((result) => {
			if (result.link === req.params.link){
			    return res.status(200).json({"events":result})
			}
		})
		.catch((err) => {
			return res.status(500).json({ msg: err.message });
		});
	// const userLink = userId.link;
};

module.exports={SearchLink}