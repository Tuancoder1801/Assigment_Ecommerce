import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function UpdateCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const res = await fetch(`http://localhost:5001/admin/customer-service/customers/${id}`);
        const data = await res.json();

        setFormData({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          address: data.address,
        });
      } catch (err) {
        console.error("Error fetching customer:", err);
      }
    }

    fetchCustomer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`http://localhost:5001/admin/customer-service/customers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Customer updated successfully!");
      navigate("/admin/list-customer");
    } else {
      const errData = await res.json();
      alert("Error updating customer: " + errData.message);
    }
  } catch (err) {
    console.error("Error updating customer:", err);
    alert("Network error while updating customer");
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
                      <h3>UPDATE CUSTOMER</h3>
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
                            <div className="text-tiny">Customers</div>
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
                        onSubmit={handleSubmit}
                      >
                        <fieldset className="fullName">
                          <div className="body-title">
                            Full Name <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="Full Name"
                            name="fullName"
                            tabIndex={0}
                            value={formData.fullName}
                            aria-required="true"
                            required=""
                            onChange={handleChange}
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
                            value={formData.email}
                            aria-required="true"
                            required=""
                            onChange={handleChange}
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
                            value={formData.phone}
                            aria-required="true"
                            required=""
                            onChange={handleChange}
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
                            value={formData.address}
                            aria-required="true"
                            required=""
                            onChange={handleChange}
                          />
                        </fieldset>

                        <div className="bot">
                          <div />
                          <button className="tf-button w208" type="submit">
                            Update Customer
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
