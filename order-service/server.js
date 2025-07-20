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

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
