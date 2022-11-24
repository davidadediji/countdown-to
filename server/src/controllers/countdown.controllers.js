const express = require('express');
const Countdown = require('../models/countdown.model');


const createCountdown = async (req, res) => {
    try {
        const countdown = await Countdown.create(req.body)
        res.status(201).json({ success: true, task })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }

}


module.exports = {createCountdown}