const Customer = require("../models/Customer");

exports.addCustomer = async (req, res) => {
  try {
    const { fullName, email, phone, address } = req.body;

    const customer = new Customer({
      fullName,
      email,
      phone,
      address,
    });

    await customer.save();
    res.status(201).json({ message: "Customer created successfully", customer });
  } catch (err) {
    console.error(err);
  }
};

// LẤY DANH SÁCH CUSTOMER
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.status(200).json({ customers });
  } catch (err) {
    console.error(err);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (err) {
    console.error(err);
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: "Error fetching Customer" });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    customer.fullName = req.body.fullName;
    customer.email = req.body.email;
    customer.phone = req.body.phone;
    customer.address = req.body.address;

    await customer.save();
    res.json({ message: "Customer updated successfully", customer });
  } catch (err) {
    res.status(500).json({ message: "Error updating Customer" });
  }
};