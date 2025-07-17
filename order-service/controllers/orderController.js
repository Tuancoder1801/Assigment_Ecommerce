const Order = require("../models/Order");
const customerService = require("../services/customerService");
const productService = require("../services/productService");

exports.createOrder = async (req, res) => {
  const { phone, products, customerId, customerName, address } = req.body;

  try {
    if (!phone || !Array.isArray(products) || products.length === 0) {
      return res
        .status(400)
        .json({ error: "Phone and products are required." });
    }

    if (!address || address.trim() === "") {
      return res.status(400).json({ error: "Address is required." });
    }

    let customer = null;
    let finalCustomerId = null;
    let finalCustomerName = "Khách vãng lai";
    let finalPhone = phone;

    // Nếu không có customerId, tìm theo số điện thoại
    if (!customerId) {
      customer = await customerService.getCustomerByPhone(phone);
      if (customer) {
        finalCustomerId = customer._id;
        finalCustomerName = customer.name;
        finalPhone = customer.phone;
      }
    } else {
      finalCustomerId = customerId;
      finalCustomerName = customerName || "Unknown";
    }

    // Lấy thông tin sản phẩm
    const productDetails = await Promise.all(
      products.map(async (productId) => {
        const product = await productService.getProductById(productId);
        if (!product) throw new Error(`Product not found: ${productId}`);
        return {
          productId: product._id,
          name: product.name,
          price: product.price,
        };
      })
    );

    const totalPrice = productDetails.reduce((sum, p) => sum + p.price, 0);

    // Tạo đơn hàng
    const newOrder = new Order({
      customerId: finalCustomerId,
      customerName: finalCustomerName,
      phone: finalPhone,
      address: address.trim(), // ✅ thêm dòng này
      products: productDetails,
      totalProducts: productDetails.length,
      totalPrice,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("❌ Error in createOrder:", error);
    res.status(500).json({ error: error.message });
  }
};
