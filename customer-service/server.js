require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/admin/customers', require('./routers/CustomerRoutes'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
