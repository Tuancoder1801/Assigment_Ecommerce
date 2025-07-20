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
const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));