const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (v) => v && v.trim().length > 0,
      message: "Address is required.",
    },
  },

  products: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      name: String,
      price: Number,
    },
  ],
  totalProducts: Number,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
