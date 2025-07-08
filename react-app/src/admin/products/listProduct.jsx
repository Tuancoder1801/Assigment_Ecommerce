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
      const res = await fetch("http://localhost:5000/admin/product-service/products");
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
      const res = await fetch(`http://localhost:5000/admin/product-service/products/${id}`, {
        method: "DELETE",
      });

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
                      <h3>LIST PRODUCTS</h3>
                      <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                        <li>
                          {/* <a href="index.html">
                            <div className="text-tiny">Dashboard</div>
                          </a> */}
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <div className="text-tiny">List Products</div>
                        </li>
                      </ul>
                    </div>
                    <div className="wg-box">
                      <div className="flex items-center justify-between gap10 flex-wrap">
                        <div className="wg-filter flex-grow">
                          <form className="form-search">
                            <fieldset className="name">
                              <input
                                type="text"
                                placeholder="Search here..."
                                className=""
                                name="name"
                                tabIndex={2}
                                defaultValue=""
                                aria-required="true"
                                required=""
                              />
                            </fieldset>
                            <div className="button-submit">
                              <button className="" type="submit">
                                <i className="icon-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                        <a
                          className="tf-button style-1 w208"
                          href="/admin/add-product"
                        >
                          <i className="icon-plus" />
                          Add new
                        </a>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Image</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Action</th>
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
                            No products found.
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
