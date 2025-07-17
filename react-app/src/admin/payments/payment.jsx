import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";

export function Payment() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <div className="layout-wrap">
            <NavigationMenu />
            <div className="section-content-right">
              <Header/>
              <div className="main-content">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                            .table-transaction>tbody>tr:nth-of-type(odd) {\n                                --bs-table-accent-bg: #fff !important;\n                            }\n                        ",
                  }}
                />
                <div className="main-content-inner">
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>Thanh Toán</h3>
                      {/* <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                        <li>
                          <a href="#">
                            <div className="text-tiny">Dashboard</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <div className="text-tiny">Order Items</div>
                        </li>
                      </ul> */}
                    </div>
                    <div className="wg-box">
                      <div className="flex items-center justify-between gap10 flex-wrap">
                        <div className="wg-filter flex-grow">
                          <h5>Các Sản Phẩm Đã Đặt Hàng</h5>
                        </div>
                        <a
                          className="tf-button style-1 w208"
                          href="orders.html"
                        >
                          Quay lại
                        </a>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                          <thead>
                            <tr>
                              <th>Tên sản phẩm</th>
                              <th className="text-center">Price</th>
                              <th className="text-center">Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="pname">
                                <div className="image">
                                  <img
                                    src="1718066538.html"
                                    alt=""
                                    className="image"
                                  />
                                </div>
                                <div className="name">
                                  <a
                                    href="#"
                                    target="_blank"
                                    className="body-title-2"
                                  >
                                    Product1
                                  </a>
                                </div>
                              </td>
                              <td className="text-center">$71.00</td>
                              <td className="text-center">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="divider" />
                      <div className="flex items-center justify-between flex-wrap gap10 wgp-pagination"></div>
                    </div>
                    <div className="wg-box mt-5">
                      <h5>Địa chỉ giao hàng</h5>
                      <div className="my-account__address-item col-md-6">
                        <div className="my-account__address-item__detail">
                          <p>Địa chỉ: </p>
                          <br />
                          <p>Số Điện Thoại: 1234567891</p>
                        </div>
                      </div>
                    </div>
                    <div className="wg-box mt-5">
                      <h5>Giao dịch</h5>
                      <table className="table table-striped table-bordered table-transaction">
                        <tbody>
                          <tr>
                            <th>Subtotal</th>
                            <td>172.00</td>
                            <th>Tax</th>
                            <td>36.12</td>
                            <th>Discount</th>
                            <td>0.00</td>
                          </tr>
                          <tr>
                            <th>Total</th>
                            <td>208.12</td>
                            <th>Payment Mode</th>
                            <td>cod</td>
                            <th>Status</th>
                            <td>pending</td>
                          </tr>
                          <tr>
                            <th>Order Date</th>
                            <td>2024-07-11 00:54:14</td>
                            <th>Delivered Date</th>
                            <td />
                            <th>Canceled Date</th>
                            <td />
                          </tr>
                        </tbody>
                      </table>
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
