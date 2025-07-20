import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Payment() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // 🔧 Thêm dòng này

  // Lấy đơn hàng theo orderId
  useEffect(() => {
    axios
      .get(`http://localhost/order-service/admin/order-service/order/${id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log("Đang gọi API lấy orderId:", id));
  }, [id]);

  const handleFakePayment = async () => {
    setLoading(true);

    try {
      const url = "http://localhost/payment-service/payment-service/fake-checkout";
      const payload = { id };

      const res = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert(res.data.message || "Đã thanh toán thành công!");

      // 🔧 Dừng loading TRƯỚC khi điều hướng
      setLoading(false);
      navigate("/admin/add-order");
    } catch (err) {
      alert("Thanh toán thất bại.");
      console.error(err);
      setLoading(false); // 🔧 đảm bảo luôn dừng loading
    }
  };

  if (!order) return <div className="main-content">Đang tải đơn hàng...</div>;

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <div className="layout-wrap">
            <NavigationMenu />
            <div className="section-content-right">
              <Header />
              <div className="main-content">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      .table-transaction>tbody>tr:nth-of-type(odd) {
                        --bs-table-accent-bg: #fff !important;
                      }
                    `,
                  }}
                />
                <div className="main-content-inner">
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>Thanh Toán Đơn Hàng</h3>
                    </div>

                    {/* Danh sách sản phẩm */}
                    <div className="wg-box">
                      <h5>Các Sản Phẩm Đã Đặt Hàng</h5>
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>Tên sản phẩm</th>
                              <th className="text-center">Giá tiền</th>
                              <th className="text-center">Số lượng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.products.map((p, index) => (
                              <tr key={index}>
                                <td>{p.name}</td>
                                <td className="text-center">
                                  {p.price.toLocaleString()}đ
                                </td>
                                <td className="text-center">1</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Địa chỉ giao hàng */}
                    <div className="wg-box mt-5">
                      <h5>Địa chỉ giao hàng</h5>
                      <div className="my-account__address-item col-md-6">
                        <div className="my-account__address-item__detail">
                          <p>Họ và tên: {order.customerName}</p>
                          <p>Địa chỉ: {order.address}</p>
                          <p>Số Điện Thoại: {order.phone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Thông tin giao dịch */}
                    <div className="wg-box mt-5">
                      <h5>Giao dịch</h5>
                      <table className="table table-striped table-bordered table-transaction">
                        <tbody>
                          <tr>
                            <th>Tổng tiền</th>
                            <td>{order.totalPrice.toLocaleString()}đ</td>
                            <th>Trạng thái</th>
                            <td>{order.paymentStatus || "Chưa thanh toán"}</td>
                            <th>Phương thức</th>
                            <td>{order.paymentMethod || "-"}</td>
                          </tr>
                          <tr>
                            <th>Ngày đặt</th>
                            <td>
                              {new Date(order.createdAt).toLocaleString()}
                            </td>
                            <th>Thanh toán lúc</th>
                            <td>
                              {order.paidAt
                                ? new Date(order.paidAt).toLocaleString()
                                : "-"}
                            </td>
                            <th />
                            <td />
                          </tr>
                        </tbody>
                      </table>

                      {/* Nút thanh toán giả lập */}
                      {order.paymentStatus !== "Đã thanh toán" && (
                        <button
                          className="tf-button style-1 w208 mt-3"
                          onClick={handleFakePayment}
                          disabled={loading}
                        >
                          {loading ? "Đang xử lý..." : "Thanh toán"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
