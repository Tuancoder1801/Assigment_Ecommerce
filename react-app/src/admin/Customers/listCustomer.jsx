import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";

export function ListProduct() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <div className="layout-wrap">
            <NavigationMenu/>
            <div className="section-content-right">
              <Header />
              <div className="main-content">
                <div className="main-content-inner">
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>Brands</h3>
                      <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                        <li>
                          <a href="index.html">
                            <div className="text-tiny">Dashboard</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <div className="text-tiny">Brands</div>
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
                          href="add-brand.html"
                        >
                          <i className="icon-plus" />
                          Add new
                        </a>
                      </div>
                      <div className="wg-table table-all-user">
                        <div className="table-responsive">
                          <table className="table table-striped table-bordered">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>4</td>
                                <td className="pname">
                                  <div className="image">
                                    <img
                                      src="1718066367.html"
                                      alt=""
                                      className="image"
                                    />
                                  </div>
                                  <div className="name">
                                    <a href="#" className="body-title-2">
                                      Brand4
                                    </a>
                                  </div>
                                </td>
                                <td>brand4</td>
                                <td>
                                  <a href="#" target="_blank">
                                    1
                                  </a>
                                </td>
                                <td>
                                  <div className="list-icon-function">
                                    <a href="#">
                                      <div className="item edit">
                                        <i className="icon-edit-3" />
                                      </div>
                                    </a>
                                    <form action="#" method="POST">
                                      <div className="item text-danger delete">
                                        <i className="icon-trash-2" />
                                      </div>
                                    </form>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="divider" />
                        <div className="flex items-center justify-between flex-wrap gap10 wgp-pagination"></div>
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
    </>
  );
}
