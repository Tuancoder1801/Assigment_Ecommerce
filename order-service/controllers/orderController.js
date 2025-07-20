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

exports.getOrderById = async (req, res) => {
   console.log("🛠️ orderId nhận được:", req.params.id);
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    console.error("Error in getOrderById:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.updateOrderPaid = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);

    if (!order) {
      console.log("⚠️ Không tìm thấy đơn hàng với ID:", id);
      return res.status(404).json({ error: "Order not found" });
    }

    order.paymentStatus = req.body.paymentStatus || "Đã thanh toán";
    order.paymentMethod = req.body.paymentMethod || "mock";
    order.paidAt = new Date();

    await order.save();
    console.log("✅ Đơn hàng đã được cập nhật:", order);
    res.json({ message: "✅ Đã cập nhật trạng thái thanh toán", order });
  } catch (err) {
    console.error("❌ Lỗi updateOrderPaid:", err.message);
    res.status(500).json({ error: "Cập nhật trạng thái thanh toán thất bại" });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (err) {
    console.error("Lỗi lấy danh sách đơn hàng:", err);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
};
