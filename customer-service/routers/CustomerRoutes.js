const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.post("/add-customer", customerController.addCustomer);

router.get("/customers", customerController.getCustomers);

router.get("/customers/:id", customerController.getCustomerById);

router.delete("/customers/:id", customerController.deleteCustomer);

router.put("/customers/:id", customerController.updateCustomer);

router.get('/phone/:phone', customerController.getCustomerByPhone);

module.exports = router;
