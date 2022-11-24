const express = require('express');
const Countdown = require('../models/countdown.model');

const createCountdown = async (req, res) => {
  try {
    const countdown = await Countdown.create(req.body);
    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
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
  const updatedCountDown = Countdown.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json({
    updatedCountDown,
  });
};

module.exports = { createCountdown, updateCountDown };
