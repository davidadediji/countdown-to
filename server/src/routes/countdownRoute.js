const router = require('express').Router();
const {
  createCountdown,
  updateCountDown,
} = require('../controllers/countdown.controllers');

router.post('/', createCountdown);
router.put('/updateCountDown', updateCountDown);

module.exports = router;
