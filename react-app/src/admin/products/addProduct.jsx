import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";
import { useState } from "react";

export function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (image) {
      data.append("image", image);
    }

    try {
      const res = await fetch(
        "http://localhost/product-service/admin/product-service/add-product",
        {
          method: "POST",
          body: data,
        }
      );

      if (res.ok) {
        const resData = await res.json();
        console.log(resData);
        alert("Product added!");
        setFormData({
          name: "",
          description: "",
          price: "",
          quantity: "",
        });
        setImage(null);
        setPreviewImage(null);
      } else {
        const errorData = await res.json();
        console.error(errorData);
        alert("Error adding product: " + errorData.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error adding product");
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
                      <h3>Thêm sản phẩm mới</h3>
                    </div>
                    {/* form-add-product */}
                    <form
                      className="tf-section-2 form-add-product"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="8LNRTO4LPXHvbK2vgRcXqMeLgqtqNGjzWSNru7Xx"
                        autoComplete="off"
                      />
                      <div className="wg-box">
                        <fieldset className="name">
                          <div className="body-title mb-10">
                            Tên sản phẩm <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="mb-10"
                            type="text"
                            placeholder="Nhập tên sản phẩm"
                            name="name"
                            tabIndex={0}
                            value={formData.name}
                            aria-required="true"
                            required=""
                            onChange={handleChange}
                          />
                        </fieldset>

                        <fieldset className="description">
                          <div className="body-title mb-10">
                            Mô tả <span className="tf-color-1">*</span>
                          </div>
                          <textarea
                            className="mb-10"
                            name="description"
                            placeholder="nhập mô tả sản phẩm"
                            tabIndex={0}
                            aria-required="true"
                            required=""
                            value={formData.description}
                            onChange={handleChange}
                          />
                        </fieldset>
                      </div>
                      <div className="wg-box">
                        <fieldset>
                          <div className="body-title">
                            Tải hình ảnh sản phẩm{" "}
                            <span className="tf-color-1">*</span>
                          </div>
                          <div className="upload-image flex-grow">
                            <div
                              className="item"
                              id="imgpreview"
                              style={{
                                display: previewImage ? "block" : "none",
                              }}
                            >
                              <img
                                src={previewImage}
                                className="effect8"
                                alt="Preview"
                              />
                            </div>
                            <div id="upload-file" className="item up-load">
                              <label className="uploadfile" htmlFor="myFile">
                                <span className="icon">
                                  <i className="icon-upload-cloud" />
                                </span>
                                <span className="body-text">
                                  Thả hình ảnh của bạn vào đây hoặc chọn{" "}
                                  <span className="tf-color">
                                    nhấp để duyệt
                                  </span>
                                </span>
                                <input
                                  type="file"
                                  id="myFile"
                                  name="image"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                />
                              </label>
                            </div>
                          </div>
                        </fieldset>

                        <div className="cols gap22">
                          <fieldset className="name">
                            <div className="body-title mb-10">
                              Giá tiền <span className="tf-color-1">*</span>
                            </div>
                            <input
                              className="mb-10"
                              type="text"
                              placeholder="nhập giá tiền sản phẩm"
                              name="price"
                              tabIndex={0}
                              defaultValue=""
                              aria-required="true"
                              required=""
                              onChange={handleChange}
                            />
                          </fieldset>
                        </div>
                        <div className="cols gap22">
                          <fieldset className="name">
                            <div className="body-title mb-10">
                              Số lương trong kho{" "}
                              <span className="tf-color-1">*</span>
                            </div>
                            <input
                              className="mb-10"
                              type="number"
                              placeholder="nhập số lượng trong kho"
                              name="quantity"
                              tabIndex={0}
                              value={formData.quantity}
                              aria-required="true"
                              required=""
                              onChange={handleChange}
                            />
                          </fieldset>
                        </div>
                        <div className="cols gap10">
                          <button className="tf-button w-full" type="submit">
                            Thêm sản phẩm
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
