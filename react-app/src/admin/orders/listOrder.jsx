import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";

export function ListOrder() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <div className="layout-wrap">
            <NavigationMenu />
            <div className="section-content-right">
              <Header/>
              <div className="main-content">
                <div className="main-content-inner">
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>Danh sách đơn hàng</h3>
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
                      </div>
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
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Ngày tạo</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">1</td>
                                <td className="text-center">Divyansh Kumar</td>
                                <td className="text-center">1234567891</td>
                                <td className="text-center">2</td>
                                <td className="text-center">$172.00</td>
                                <td className="text-center">ordered</td>
                                <td className="text-center">
                                  2024-07-11 00:54:14
                                </td>
                                <td className="text-center">
                                  <a href="order-details.html">
                                    <div className="list-icon-function view-icon">
                                      <div className="item eye">
                                        <i className="icon-eye" />
                                      </div>
                                    </div>
                                  </a>
                                </td>
                              </tr>
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
