/**
 * @swagger
 * tags:
 *   name: Food Delivery
 *   description: API endpoints for Food Delivery
 */

const express = require('express');
const router = express.Router();
const { calculateCost } = require('../food_delivery/controller');

/**
 * @swagger
 * /app/calculateCost:
 *   post:
 *     summary: Calculate delivery cost
 *     tags: [Food Delivery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 description: Zone name
 *               organization_id:
 *                 type: string
 *                 description: Organization ID
 *               total_distance:
 *                 type: number
 *                 description: Total distance for delivery
 *               item_type:
 *                 type: string
 *                 description: Type of item (perishable or non-perishable)
 *     responses:
 *       '200':
 *         description: Successful response with total price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *                   description: Total price for delivery
 *       '400':
 *         description: Invalid request payload
 *       '404':
 *         description: Pricing data not found
 *       '500':
 *         description: Internal server error
 */
router.post('/calculateCost', calculateCost);

module.exports = router;
