const express = require('express');
const router = express.Router();
const { createOrder, updateOrderPaid, getOrderById } = require('../controllers/orderController');

router.post('/add-order', createOrder);
router.get("/order/:id", getOrderById);
router.put("/paid/:id", updateOrderPaid);

module.exports = router;
