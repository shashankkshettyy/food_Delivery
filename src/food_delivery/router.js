
const express = require('express');
const router = express.Router();
const { calculateCost } = require('../food_delivery/controller');

router.post('/calculateCost', calculateCost);

module.exports = router;
