import { Footer } from "../components/footer";
import { NavigationMenu } from "../components/navigationMenu";
import { Header } from "../components/header";

export function AdminIndex(){
    return (
        <div id="wrapper">
        <div id="page" className="">
          <div className="layout-wrap">
            <NavigationMenu />
            <div className="section-content-right">
              <Header />
              <div className="main-content">
                <div className="main-content-inner">
                  <div className="main-content-wrap">
                    <div className="tf-section-2 mb-30">
                      <div className="flex gap20 flex-wrap-mobile">
                        <div className="w-half">
                          <div className="wg-chart-default mb-20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap14">
                                <div className="image ic-bg">
                                  <i className="icon-shopping-bag" />
                                </div>
                                <div>
                                  <div className="body-text mb-2">
                                    Total Orders
                                  </div>
                                  <h4>3</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wg-chart-default mb-20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap14">
                                <div className="image ic-bg">
                                  <i className="icon-dollar-sign" />
                                </div>
                                <div>
                                  <div className="body-text mb-2">
                                    Total Amount
                                  </div>
                                  <h4>481.34</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wg-chart-default mb-20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap14">
                                <div className="image ic-bg">
                                  <i className="icon-shopping-bag" />
                                </div>
                                <div>
                                  <div className="body-text mb-2">
                                    Pending Orders
                                  </div>
                                  <h4>3</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wg-chart-default">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap14">
                                <div className="image ic-bg">
                                  <i className="icon-dollar-sign" />
                                </div>
                                <div>
                                  <div className="body-text mb-2">
                                    Pending Orders Amount
                                  </div>
                                  <h4>481.34</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-half">
                          <div className="wg-chart-default mb-20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap14">
                                <div className="image ic-bg">
                                  <i className="icon-shopping-bag" />
                                </div>
                                <div>
                                  <div className="body-text mb-2">
                                    Delivered Orders
                                  </div>
                                  <h4>0</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wg-chart-default mb-20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap14">
                                <div className="image ic-bg">
                                  <i className="icon-dollar-sign" />
                                </div>
                                <div>
                                  <div className="body-text mb-2">
                                    Delivered Orders Amount
                                  </div>
                                  <h4>0.00</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wg-chart-default mb-20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap14">
                                <div className="image ic-bg">
                                  <i className="icon-shopping-bag" />
                                </div>
                                <div>
                                  <div className="body-text mb-2">
                                    Canceled Orders
                                  </div>
                                  <h4>0</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wg-chart-default">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap14">
                                <div className="image ic-bg">
                                  <i className="icon-dollar-sign" />
                                </div>
                                <div>
                                  <div className="body-text mb-2">
                                    Canceled Orders Amount
                                  </div>
                                  <h4>0.00</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wg-box">
                        <div className="flex items-center justify-between">
                          <h5>Earnings revenue</h5>
                          <div className="dropdown default">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="icon-more">
                                <i className="icon-more-horizontal" />
                              </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a href="javascript:void(0);">This Week</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Last Week</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap40">
                          <div>
                            <div className="mb-2">
                              <div className="block-legend">
                                <div className="dot t1" />
                                <div className="text-tiny">Revenue</div>
                              </div>
                            </div>
                            <div className="flex items-center gap10">
                              <h4>$37,802</h4>
                              <div className="box-icon-trending up">
                                <i className="icon-trending-up" />
                                <div className="body-title number">0.56%</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-2">
                              <div className="block-legend">
                                <div className="dot t2" />
                                <div className="text-tiny">Order</div>
                              </div>
                            </div>
                            <div className="flex items-center gap10">
                              <h4>$28,305</h4>
                              <div className="box-icon-trending up">
                                <i className="icon-trending-up" />
                                <div className="body-title number">0.56%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="line-chart-8" />
                      </div>
                    </div>
                    <div className="tf-section mb-30">
                      <div className="wg-box">
                        <div className="flex items-center justify-between">
                          <h5>Recent orders</h5>
                          <div className="dropdown default">
                            <a
                              className="btn btn-secondary dropdown-toggle"
                              href="#"
                            >
                              <span className="view-all">View all</span>
                            </a>
                          </div>
                        </div>
                        <div className="wg-table table-all-user">
                          <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                              <thead>
                                <tr>
                                  <th style={{ width: 80 }}>OrderNo</th>
                                  <th>Name</th>
                                  <th className="text-center">Phone</th>
                                  <th className="text-center">Subtotal</th>
                                  <th className="text-center">Tax</th>
                                  <th className="text-center">Total</th>
                                  <th className="text-center">Status</th>
                                  <th className="text-center">Order Date</th>
                                  <th className="text-center">Total Items</th>
                                  <th className="text-center">Delivered On</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-center">1</td>
                                  <td className="text-center">
                                    Divyansh Kumar
                                  </td>
                                  <td className="text-center">1234567891</td>
                                  <td className="text-center">$172.00</td>
                                  <td className="text-center">$36.12</td>
                                  <td className="text-center">$208.12</td>
                                  <td className="text-center">ordered</td>
                                  <td className="text-center">
                                    2024-07-11 00:54:14
                                  </td>
                                  <td className="text-center">2</td>
                                  <td />
                                  <td className="text-center">
                                    <a href="#">
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
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}