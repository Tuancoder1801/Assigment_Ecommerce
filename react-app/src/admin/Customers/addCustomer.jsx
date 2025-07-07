import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";
import { useState } from "react";

export function AddProduct() {
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
                      <h3>ADD CUSTOMER</h3>
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
                            <div className="text-tiny">Brands</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <div className="text-tiny">New Brand</div>
                        </li>
                      </ul>
                    </div>
                    {/* new-customer */}
                    <div className="wg-box">
                      <form
                        className="form-new-product form-style-1"
                        action="#"
                        method="POST"
                        encType="multipart/form-data"
                      >
                        <fieldset className="name">
                          <div className="body-title">
                            Full Name <span className="tf-color-1">*</span>
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
                        
                        <fieldset className="email">
                          <div className="body-title">
                            Email <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="Email"
                            name="email"
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
                            placeholder="Phone"
                            name="phone"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required=""
                          />
                        </fieldset>

                        <fieldset className="address">
                          <div className="body-title">
                            Address <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="Address"
                            name="address"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required=""
                          />
                        </fieldset>

                        <div className="bot">
                          <div />
                          <button className="tf-button w208" type="submit">
                            Add Customer
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
