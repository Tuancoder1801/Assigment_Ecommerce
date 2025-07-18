import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";

import { useEffect, useState } from "react";

export function ListProduct() {
  const [products, setProducts] = useState([]);

  // Load danh sách khi mở trang
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/admin/product-service/products"
      );
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const res = await fetch(
        `http://localhost:5000/admin/product-service/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        alert("Product deleted!");
        fetchProducts();
      } else {
        const errData = await res.json();
        alert("Error deleting product: " + errData.message);
      }
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Network error while deleting product");
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
                      <h3>Danh sách sản phẩm</h3>
                    </div>
                    <div className="wg-box">
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>Stt</th>
                              <th>Tên</th>
                              <th>Hình ảnh</th>
                              <th>Giá tiền</th>
                              <th>Số lượng trong kho</th>
                              <th>Tính năng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((product, index) => (
                              <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>
                                  <a
                                    href={`http://localhost:5000${product.image}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <img
                                      src={`http://localhost:5000${product.image}`}
                                      alt={product.name}
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </a>
                                </td>
                                <td>${product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                  <div className="list-icon-function">
                                    <a
                                      href={`/admin/update-product/${product._id}`}
                                    >
                                      <div className="item edit">
                                        <i className="icon-edit-3" />
                                      </div>
                                    </a>
                                    <div
                                      className="item text-danger delete"
                                      onClick={() => handleDelete(product._id)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      <i className="icon-trash-2" />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        {products.length === 0 && (
                          <div
                            style={{ textAlign: "center", marginTop: "20px" }}
                          >
                            Không có sản phẩm nào trong dữ liệu
                          </div>
                        )}
                      </div>
                      <div className="divider" />
                      <div className="flex items-center justify-between flex-wrap gap10 wgp-pagination"></div>
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
