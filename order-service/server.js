const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const orderRoutes = require('./routers/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/admin/order-service', orderRoutes);

app.listen(5003, () => {
  console.log('Order service running on port 5003');
});
