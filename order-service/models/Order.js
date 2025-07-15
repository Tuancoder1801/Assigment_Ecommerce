const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  products: [{
    productId: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
  }],
  totalProducts: Number,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
