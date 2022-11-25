const router = require('express').Router();
const {
  getCountDown,
  createCountdown,
  updateCountDown,
} = require('../controllers/countdown.controllers');
/**
 *  @swagger
 *    components:
 *      schemas:
 *        Countdown:
 *          type: object
 *          required:
 *            - email
 *            - countdownTitle
 *            - countdownDate
 *          properties:
 *            id:
 *              type: integer
 *              description: The auto-generated objectid of the countdown event.
 *            email:
 *              type: string
 *              description: The email of the user
 *            countdownTitle:
 *              type: string
 *              description: Title of the countdown event
 *            countdownDescription:
 *              type: string
 *              description: Description of the countdown event
 *            countdownDate:
 *              type: string
 *              format: date
 *              description: Date for the countdown
 *          example:
 *             email: sam@gmail.com
 *             countdownTitle: Christmas Day
 *             countdownDate: 12-25-2022
*/

/**
 * @swagger
 * tags:
 *     - name: Countdown Events
 *       description: countdown apis
 */

/**
 * @swagger
 * /api/v1/countdown:
 *   get:
 *     summary: Retrieve a list of countdown events.
 *     tags:
 *        - Countdown Events
 *     responses:
 *       200:
 *         description: A list of events.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       
 */
router.get('/', getCountDown);

/**
 * @swagger
 * /api/v1/countdown:
 *     post:
 *         summary: user creates a countdown event
 *         tags:
 *             - Countdown Events
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                          $ref: '#/components/schemas/Countdown'
 *         responses:
 *             '201':
 *                description: Created count down event successfully
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 */
router.post('/', createCountdown);

/** 
 * @swagger
 * /api/v1/countdown/{id}:
 *      put:
 *         summary: update count down event
 *         tags:
 *             - Countdown Events
 *         parameters:
 *             - in: path
 *               name: id
 *               schema:
 *                    type: string
 *                    required: true
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                          $ref: '#/components/schemas/Countdown'
*/
router.put('/:id', updateCountDown);

module.exports = router;
