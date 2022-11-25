const express = require('express');
const Countdown = require('../models/countdown.model');
const slug = require("slugify")
const createCountdown = async (req, res) => {
  try {
    
      const countdown = await Countdown.create(req.body)
      if(countdown) 
      {
        const userId = await User.findOne(countdown._id);
        const userid = userId.id;
        const titleSlug = slug(userId.countdownTitle, {
          replacement: '_',
          lower: true,
        });
        if (userid === countdown.id) {
          User.findByIdAndUpdate(countdown.id, {
            $set: { link: titleSlug + '_' + userid },
          }).then((result) => {
            if (!result) {
              res.status(400).json({msg: 'Link not created'});
            } else {
              res.status(201).json({ success: true, countdown })
            }
          });
        }
      }
     
  } catch (error) {
      res.status(500).json({ msg: error.message })
  }

}


const getCountDown = async (req, res) => {
  const events = await Countdown.find();
  try {
    res.status(200).json({ events });
  } catch (e) {
    throw new Error(e);
  }
};

const updateCountDown = async (req, res) => {
  const id = req.params.id;
  const countDown = Countdown.findById(id);
  if (!countDown) {
    res.json({
      message: 'countdown does not exist',
    });
  }
  const updatedCountDown =await Countdown.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json({
    updatedCountDown,
  });
};

module.exports = { createCountdown, updateCountDown, getCountDown };
