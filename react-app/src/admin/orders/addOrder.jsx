import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddOrder() {
  const [phone, setPhone] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCount, setProductCount] = useState(1);
  const [customerId, setCustomerId] = useState(null);

  const [address, setAddress] = useState("");
  const [isGuest, setIsGuest] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/product-service/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setSelectedProducts((prev) => {
      const updated = [...prev];
      while (updated.length < productCount) {
        updated.push("");
      }
      return updated.slice(0, productCount);
    });
  }, [productCount]);

  useEffect(() => {
    const total = selectedProducts.reduce((sum, id) => {
      const product = products.find((p) => p._id === id);
      return product ? sum + Number(product.price) : sum;
    }, 0);
    setTotalPrice(total);
  }, [selectedProducts, products]);

  // Lấy tên khách hàng theo số điện thoại
  const handleCheckCustomer = async () => {
    if (!phone || phone.length < 5) return; // bỏ gọi nếu phone không hợp lệ

    try {
      const res = await axios.get(
        `http://localhost:5001/admin/customer-service/phone/${phone}`
      );
      setCustomerName(res.data.fullName);
      setCustomerId(res.data._id);
      setAddress(res.data.address || "");
      setIsGuest(false);
    } catch {
      setCustomerName("Khách vãng lai");
      setCustomerId(null);
      setAddress("");
      setIsGuest(true);
    }
  };

  const handleTotalProductChange = (e) => {
    const count = parseInt(e.target.value) || 0;
    setProductCount(count); // ✅ sửa đúng biến

    const newSelection = Array(count).fill("");
    setSelectedProducts(newSelection);
  };

  // Chọn sản phẩm
  const handleSelectProduct = (index, productId) => {
    const updated = [...selectedProducts];
    updated[index] = productId;
    setSelectedProducts(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      phone,
      customerId,
      customerName,
      address,
      products: selectedProducts.filter(Boolean),
    };

    try {
      const res = await axios.post(
        "http://localhost:5003/admin/order-service/add-order",
        orderData
      );
      navigate(`/payment/${res.data._id}`);
    } catch (err) {
      console.error("❌ Error from server:", err.response?.data || err.message);
      alert(
        "Tạo đơn hàng thất bại: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <div className="layout-wrap">
            <NavigationMenu />
            <div className="section-content-right">
              <Header />
              <div className="main-content">
                <div className="main-content-inner">
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>Thêm đơn hàng</h3>
                    </div>

                    {/* form order */}
                    <div className="wg-box">
                      <form
                        className="form-new-product form-style-1"
                        onSubmit={handleSubmit}
                      >
                        <fieldset className="phone">
                          <div className="body-title">
                            Số điện thoại <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="nhập số điện thoại"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={handleCheckCustomer}
                            required
                          />
                        </fieldset>

                        <fieldset className="name">
                          <div className="body-title">
                            Tên khách hàng <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="tự động hiển thị tên"
                            value={customerName}
                            readOnly
                          />
                        </fieldset>

                        <fieldset className="address">
                          <div className="body-title">
                            Địa chỉ <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder={
                              isGuest
                                ? "nhập địa chỉ"
                                : "tự động hiển thị địa chỉ"
                            }
                            value={address}
                            onChange={(e) => {
                              if (isGuest) setAddress(e.target.value); // chỉ cho nhập nếu là khách vãng lai
                            }}
                            readOnly={!isGuest}
                            required
                          />
                        </fieldset>

                        <fieldset className="totalProduct">
                          <div className="body-title">
                            Tổng sản phẩm <span className="tf-color-1">*</span>
                          </div>
                          <input
                            type="number"
                            value={productCount}
                            onChange={handleTotalProductChange}
                            required
                          />
                        </fieldset>

                        <div className="gap22 cols">
                          {selectedProducts.map((value, index) => {
                            const product = products.find(
                              (p) => p._id === value
                            );
                            return (
                              <fieldset
                                key={index}
                                className="product"
                                style={{ width: 300 }}
                              >
                                <div className="body-title mb-10">
                                  Sản phẩm {index + 1}{" "}
                                  <span className="tf-color-1">*</span>
                                </div>
                                <div className="select">
                                  <select
                                    name={`product_id_${index}`}
                                    value={value}
                                    onChange={(e) =>
                                      handleSelectProduct(index, e.target.value)
                                    }
                                  >
                                    <option value="">Chọn sản phẩm</option>
                                    {products.map((p) => (
                                      <option key={p._id} value={p._id}>
                                        {p.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                <input
                                  type="text"
                                  name="price"
                                  value={
                                    product
                                      ? product.price.toLocaleString() + "đ"
                                      : "0đ"
                                  }
                                  readOnly
                                  className="readonly-price"
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: "5px 10px",
                                    backgroundColor: "#f5f5f5",
                                  }}
                                />
                              </fieldset>
                            );
                          })}
                        </div>

                        <fieldset className="totalPrice">
                          <div className="body-title">
                            Tổng số tiền <span className="tf-color-1">*</span>
                          </div>
                          <input
                            type="text"
                            name="totalPrice"
                            value={totalPrice.toLocaleString() + "đ"}
                            readOnly
                            className="readonly-price"
                            style={{
                              border: "1px solid #ccc",
                              padding: "5px 10px",
                              backgroundColor: "#f5f5f5",
                            }}
                          />
                        </fieldset>

                        <div className="bot">
                          <div />
                          <button className="tf-button w208" type="submit">
                            Thêm và đến trang thanh toán
                          </button>
                        </div>
                      </form>
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
