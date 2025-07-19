const express = require("express");
const router = express.Router();
const { fakePayment } = require("../controllers/paymentController");

// Route POST cho fake-checkout
router.post("/fake-checkout", fakePayment);

module.exports = router;
