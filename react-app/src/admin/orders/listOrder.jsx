import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";

import { useEffect, useState } from "react";
import axios from "axios";

export function ListOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/order-service/admin/order-service/orders")
      .then((res) => {
        if (res.data.success) {
          setOrders(res.data.orders);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                      <h3>Danh sách đơn hàng</h3>
                    </div>
                    <div className="wg-box">
                      {/* <div className="flex items-center justify-between gap10 flex-wrap">
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
                      </div> */}
                      <div className="wg-table table-all-user">
                        <div className="table-responsive">
                          <table className="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th style={{ width: 70 }}>Stt</th>
                                <th className="text-center">Tên khách hàng</th>
                                <th className="text-center">Số điện thoại</th>
                                <th className="text-center">Tổng sản phẩm</th>
                                <th className="text-center">Tổng giá tiền</th>
                                {/* <th className="text-center">Trạng thái</th> */}
                                <th className="text-center">Ngày tạo</th>
                                {/* <th /> */}
                              </tr>
                            </thead>
                            <tbody>
                              {filteredOrders.map((order, index) => (
                                <tr key={order._id}>
                                  <td className="text-center">{index + 1}</td>
                                  <td className="text-center">
                                    {order.customerName}
                                  </td>
                                  <td className="text-center">{order.phone}</td>
                                  <td className="text-center">
                                    {order.products.length}
                                  </td>
                                  <td className="text-center">
                                    {order.totalPrice.toLocaleString()} VNĐ
                                  </td>
                                  <td className="text-center">
                                    {order.status}
                                  </td>
                                  <td className="text-center">
                                    {new Date(order.createdAt).toLocaleString(
                                      "vi-VN"
                                    )}
                                  </td>
                                  {/* <td className="text-center">
                                    <a
                                      href={`/admin/order-details/${order._id}`}
                                    >
                                      <div className="list-icon-function view-icon">
                                        <div className="item eye">
                                          <i className="icon-eye" />
                                        </div>
                                      </div>
                                    </a>
                                  </td> */}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
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
