export function UpdateCustomer() {
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
                    {/* new-category */}
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
                        <div className="bot">
                          <div />
                          <button className="tf-button w208" type="submit">
                            Save
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
