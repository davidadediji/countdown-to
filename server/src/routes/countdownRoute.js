const router = require('express').Router();
const {
  getCountDown,
  createCountdown,
  updateCountDown,
} = require('../controllers/countdown.controllers');


/**
 * @swagger
 * /api/v1/countdown:
 *   get:
 *     summary: Retrieve a list of countdown events.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       
 */
router.get('/', getCountDown);


router.post('/', createCountdown);


router.put('/updateCountDown', updateCountDown);

module.exports = router;
