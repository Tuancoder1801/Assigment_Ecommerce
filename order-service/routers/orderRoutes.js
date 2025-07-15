const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');

router.post('/add-order', createOrder);

module.exports = router;
