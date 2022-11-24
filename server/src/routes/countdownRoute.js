const router = require('express').Router();
const { createCountdown } = require('../controllers/countdown.controllers');


router.post('/', createCountdown);

module.exports = router;
