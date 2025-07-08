import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";

import { useEffect, useState } from "react";

export function ListCustomer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await fetch("http://localhost:5001/admin/customer-service/customers");
      const data = await res.json();
      setCustomers(data.customers || []);
    } catch (err) {
      console.error("Error fetching customers:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const res = await fetch(`http://localhost:5001/admin/customer-service/customers/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Customer deleted!");
        fetchCustomers();
      } else {
        const errData = await res.json();
        alert("Error deleting customer: " + errData.message);
      }
    } catch (err) {
      console.error("Error deleting customer:", err);
      alert("Network error while deleting customer");
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
                      <h3>LIST CUSTOMER</h3>
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
                          <div className="text-tiny">List Customer</div>
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
                              {customers.map((customer, index) => (
                                <tr key={customer._id}>
                                  <td>{index + 1}</td>
                                  <td>{customer.fullName}</td>
                                  <td>{customer.email}</td>
                                  <td>{customer.phone}</td>
                                  <td>{customer.address}</td>
                                  <td>
                                    <div className="list-icon-function">
                                      <a
                                        href={`/admin/update-customer/${customer._id}`}
                                      >
                                        <div className="item edit">
                                          <i className="icon-edit-3" />
                                        </div>
                                      </a>
                                      <div
                                        className="item text-danger delete"
                                        onClick={() =>
                                          handleDelete(customer._id)
                                        }
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
                          {customers.length === 0 && (
                            <div
                              style={{ textAlign: "center", marginTop: "20px" }}
                            >
                              No customers found.
                            </div>
                          )}
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
