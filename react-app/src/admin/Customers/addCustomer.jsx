import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";
import { useState } from "react";

export function AddCustomer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5001/admin/customer-service/add-customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        const resData = await res.json();
        console.log(resData);
        alert("Customer added!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
        });
      } else {
        const errorData = await res.json();
        console.error(errorData);
        alert("Error adding customer: " + errorData.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error adding customer");
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
                      <h3>Thêm khách hàng mới</h3>
                    </div>
                    {/* new-customer */}
                    <div className="wg-box">
                      <form
                        className="form-new-product form-style-1"
                        onSubmit={handleSubmit}
                      >
                        <fieldset className="fullName">
                          <div className="body-title">
                            Họ và tên <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="nhập họ và tên"
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
                            placeholder="nhập email"
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
                            Số điện thoại <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="nhập số điện thoại"
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
                            Địa chỉ <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="nhập địa chỉ"
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
                            Thêm khách hàng
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
