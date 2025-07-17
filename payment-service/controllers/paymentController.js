exports.processPayment = async (req, res) => {
  const { orderId, method } = req.body;

  console.log(`Received payment for order ${orderId} via ${method}`);

  // Giả lập xử lý thanh toán
  if (method === "stripe") {
    // gọi đến Stripe sandbox nếu cần
    return res.json({ status: "PAID via Stripe" });
  } else if (method === "paypal") {
    return res.json({ status: "PAID via PayPal" });
  } else {
    return res.json({ status: "COD selected" });
  }
};
