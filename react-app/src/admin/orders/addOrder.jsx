import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import axios from "axios";

export function AddOrder() {
  const [phone, setPhone] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCount, setProductCount] = useState(1);
  const [customerId, setCustomerId] = useState(null);

  // Load danh sách sản phẩm từ Product Service
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/product-service/products")
      .then((res) => {
        setProducts(res.data.products); // đảm bảo res.data.products là mảng
      })
      .catch((err) => console.error(err));
  }, []);

  // Tính tổng giá sản phẩm
  useEffect(() => {
    setSelectedProducts((prev) => {
      const updated = [...prev];
      while (updated.length < productCount) {
        updated.push("");
      }
      return updated.slice(0, productCount); // giữ đúng số lượng
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
    try {
      const res = await axios.get(
        `http://localhost:5001/admin/customer-service/phone/${phone}`
      );
      setCustomerName(res.data.name);
      setCustomerId(res.data._id); // giữ lại ID để gửi kèm đơn hàng
    } catch {
      setCustomerName("Khách vãng lai");
      setCustomerId(null); // không có ID
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
      customerId, // có thể null
      customerName,
      products: selectedProducts.filter(Boolean),
    };

    try {
      const res = await axios.post(
        "http://localhost:5003/admin/order-service/add-order",
        orderData
      );
      alert("Order created: " + res.data._id);
    } catch {
      alert("Failed to create order.");
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
                      <h3>Brand infomation</h3>
                      <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                        <li>
                          <a href="#">
                            <div className="text-tiny">Dashboard</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <a href="#">
                            <div className="text-tiny">Orders</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <div className="text-tiny">New Order</div>
                        </li>
                      </ul>
                    </div>

                    {/* form order */}
                    <div className="wg-box">
                      <form
                        className="form-new-product form-style-1"
                        onSubmit={handleSubmit}
                      >
                        <fieldset className="phone">
                          <div className="body-title">
                            Phone <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="Enter phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={handleCheckCustomer}
                            required
                          />
                        </fieldset>

                        <fieldset className="name">
                          <div className="body-title">
                            Customer Name <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="Auto-filled"
                            value={customerName}
                            readOnly
                          />
                        </fieldset>

                        <fieldset className="totalProduct">
                          <div className="body-title">
                            Tổng sản phẩm <span className="tf-color-1">*</span>
                          </div>
                          <input
                            type="number"
                            value={productCount}
                            onChange={handleTotalProductChange} // ✅ dùng function đúng
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
                                  Product {index + 1}{" "}
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
                                    <option value="">Choose product</option>
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
                            Add Order
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
