import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";
import { useState } from "react";

export function AddOrder() {
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
                    {/* new-ordder */}
                    <div className="wg-box">
                      <form
                        className="form-new-product form-style-1"
                        action="#"
                        method="POST"
                        encType="multipart/form-data"
                      >
                        <fieldset className="name">
                          <div className="body-title">
                            Customer Name <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="Brand name"
                            name="name"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required=""
                          />
                        </fieldset>

                        <fieldset className="phone">
                          <div className="body-title">
                            Phone <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="phone"
                            name="phone"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required=""
                          />
                        </fieldset>

                        <fieldset className="totalProduct">
                          <div className="body-title">
                            tổng sản phẩm <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="total product"
                            name="totalProduct"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required=""
                          />
                        </fieldset>

                        <div className="gap22 cols">
                          <fieldset className="product" style={{ width: 300 }}>
                            <div className="body-title mb-10">
                              Product 1 <span className="tf-color-1">*</span>
                            </div>
                            <div className="select">
                              <select className="" name="product_id">
                                <option>Choose product</option>
                                <option value={1}>item 1</option>
                                <option value={2}>item 2</option>
                                <option value={3}>item 3</option>
                                <option value={4}>item 4</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              name="price"
                              value="0đ"
                              readOnly
                              className="readonly-price"
                              style={{
                                border: "1px solid #ccc",
                                padding: "5px 10px",
                                backgroundColor: "#f5f5f5",
                              }}
                            />
                          </fieldset>

                          <fieldset className="product" style={{ width: 300 }}>
                            <div className="body-title mb-10">
                              Product 1 <span className="tf-color-1">*</span>
                            </div>
                            <div className="select">
                              <select className="" name="product_id">
                                <option>Choose product</option>
                                <option value={1}>item 1</option>
                                <option value={2}>item 2</option>
                                <option value={3}>item 3</option>
                                <option value={4}>item 4</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              name="price"
                              value="0đ"
                              readOnly
                              className="readonly-price"
                              style={{
                                border: "1px solid #ccc",
                                padding: "5px 10px",
                                backgroundColor: "#f5f5f5",
                              }}
                            />
                          </fieldset>

                          <fieldset className="product" style={{ width: 300 }}>
                            <div className="body-title mb-10">
                              Product 1 <span className="tf-color-1">*</span>
                            </div>
                            <div className="select">
                              <select className="" name="product_id">
                                <option>Choose product</option>
                                <option value={1}>item 1</option>
                                <option value={2}>item 2</option>
                                <option value={3}>item 3</option>
                                <option value={4}>item 4</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              name="price"
                              value="0đ"
                              readOnly
                              className="readonly-price"
                              style={{
                                border: "1px solid #ccc",
                                padding: "5px 10px",
                                backgroundColor: "#f5f5f5",
                              }}
                            />
                          </fieldset>

                          <fieldset className="product" style={{ width: 300 }}>
                            <div className="body-title mb-10">
                              Product 1 <span className="tf-color-1">*</span>
                            </div>
                            <div className="select">
                              <select className="" name="product_id">
                                <option>Choose product</option>
                                <option value={1}>item 1</option>
                                <option value={2}>item 2</option>
                                <option value={3}>item 3</option>
                                <option value={4}>item 4</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              name="price"
                              value="0đ"
                              readOnly
                              className="readonly-price"
                              style={{
                                border: "1px solid #ccc",
                                padding: "5px 10px",
                                backgroundColor: "#f5f5f5",
                              }}
                            />
                          </fieldset>
                        </div>

                        <fieldset className="totalPrice">
                          <div className="body-title">
                            tổng số tiền <span className="tf-color-1">*</span>
                          </div>
                          <input
                            type="text"
                            name="totalPrice"
                            value="0đ"
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
