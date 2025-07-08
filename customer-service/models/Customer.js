const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[0-9]+$/.test(v);
        },
        message: (props) =>
          `${props.value} không phải là số điện thoại hợp lệ!`,
      },
    },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);