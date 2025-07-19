const express = require("express");
const cors = require("cors");
require("dotenv").config();

const paymentRoutes = require("./routers/paymentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Mount route
app.use("/payment-service", paymentRoutes);

// Start server
app.listen(5004, () => {
  console.log("✅ Payment service running on port 5004");
});
