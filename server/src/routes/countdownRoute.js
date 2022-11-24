const router = require('express').Router();
const {
  getCountDown,
  createCountdown,
  updateCountDown,
} = require('../controllers/countdown.controllers');
router.get('/', getCountDown);
router.post('/', createCountdown);
router.put('/updateCountDown', updateCountDown);

module.exports = router;
