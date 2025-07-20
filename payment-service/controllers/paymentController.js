const axios = require("axios");

exports.fakePayment = async (req, res) => {
  console.log("📥 TOÀN BỘ req.body:", req.body);

  const id = req.body?.id;
  if (!id) return res.status(400).json({ error: "Thiếu orderId trong body" });

  console.log("🧾 ID nhận được từ frontend:", id);

  try {
    const response = await axios.put(
      `http://order-service:5003/admin/order-service/paid/${id}`, // ✅ sửa lại hostname theo tên service Docker
      {
        paymentStatus: "Đã thanh toán",
        paymentMethod: "mock",
      }
    );

    console.log("✅ Kết quả từ order-service:", response.data);
    res.json({ message: "Thanh toán thành công (giả lập)" });
  } catch (err) {
    console.error(
      "❌ Lỗi cập nhật đơn hàng:",
      err.response?.data || err.message
    );
    res
      .status(500)
      .json({ error: "Đã thanh toán nhưng không cập nhật được đơn hàng" });
  }
};
