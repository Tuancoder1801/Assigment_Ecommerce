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
                      <h3>Add Order</h3>
                      <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                        <li>
                          <a href="index-2.html">
                            <div className="text-tiny">Dashboard</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <a href="all-product.html">
                            <div className="text-tiny">Orders</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <div className="text-tiny">Add order</div>
                        </li>
                      </ul>
                    </div>
                    {/* form-add-product */}
                    <form
                      className="tf-section-2 form-add-product"
                      method="POST"
                      encType="multipart/form-data"
                      action="http://localhost:8000/admin/product/store"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="8LNRTO4LPXHvbK2vgRcXqMeLgqtqNGjzWSNru7Xx"
                        autoComplete="off"
                      />
                      <div className="wg-box">
                        <fieldset className="nameCustomer">
                          <div className="body-title mb-10">
                            Name Customer <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="mb-10"
                            type="text"
                            placeholder="Enter product name"
                            name="name"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required=""
                          />
                        </fieldset>

                        <fieldset className="phone">
                          <div className="body-title mb-10">
                            Phone <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="mb-10"
                            type="text"
                            placeholder="Enter product slug"
                            name="slug"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required=""
                          />
                        </fieldset>

                        <fieldset className="totalProducts">
                          <div className="body-title mb-10">
                            số sản phẩm <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="mb-10"
                            type="text"
                            placeholder="Enter product slug"
                            name="slug"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required=""
                          />
                        </fieldset>

                        <div className="gap22 cols">
                          <fieldset className="product">
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

                          <fieldset className="product">
                            <div className="body-title mb-10">
                              Product 2 <span className="tf-color-1">*</span>
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
                          <div className="body-title mb-10">
                            Tổng số tiền <span className="tf-color-1">*</span>
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

                        <div className="cols gap10">
                          <button className="tf-button w-full" type="submit">
                            Add product
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* /form-add-product */}
                  </div>
                  {/* /main-content-wrap */}
                </div>
                {/* /main-content-wrap */}
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
