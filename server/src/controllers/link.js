const User = require("../models/countdown.model")

const GetLink = async(req, res) => {

    const  userId = await User.findOne(req.params._id)
    const userSlug = userId.slug 

    if(userSlug === req.params.slug) 
    {
       User.findByIdAndUpdate(req.params.slug, {
            $set : 
                {link : userId.countdownTitle}
            
        }).then((result) => {
              if(!result) 
              {
                  res.json("Link not created")
              }
        })
    } else{
        res.json(result)
    }
}
module.exports = {GetLink}