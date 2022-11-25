const express = require('express');
const Countdown = require('../models/countdown.model');

const createCountdown = async (req, res) => {
  try {
      const countdown = await Countdown.create(req.body)
      res.status(201).json({ success: true, countdown })
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
