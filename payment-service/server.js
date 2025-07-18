const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const paymentRoutes = require("./routers/paymentRoutes");
app.use("/payment-service", paymentRoutes);

app.listen(5004, () => {
  console.log("Payment service running on port 5004");
});
