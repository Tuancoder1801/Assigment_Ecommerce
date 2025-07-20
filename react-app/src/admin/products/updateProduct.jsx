import { Footer } from "../../components/footer";
import { NavigationMenu } from "../../components/navigationMenu";
import { Header } from "../../components/header";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `http://localhost/product-service/admin/product-service/products/${id}`
        );
        const data = await res.json();

        setFormData({
          name: data.name,
          description: data.description,
          price: data.price,
          quantity: data.quantity,
        });

        setPreviewImage(`/product-service${data.image}`);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("quantity", formData.quantity);

    if (image) {
      formDataToSend.append("image", image);
    }

    try {
      const res = await fetch(
        `http://localhost:5000/admin/product-service/products/${id}`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );

      if (res.ok) {
        alert("Product updated successfully!");
        navigate("/admin/list-product");
      } else {
        const errData = await res.json();
        alert("Error updating product: " + errData.message);
      }
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Network error while updating product");
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
                      <h3>Chỉnh sửa sản phẩm</h3>
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
                            placeholder="nhập tên sản phẩm"
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
                            placeholder="nhập tên mô tả sản phẩm"
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
                            Tải hình ảnh <span className="tf-color-1">*</span>
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
                              placeholder="nhập giá sản phẩm"
                              name="price"
                              tabIndex={0}
                              value={formData.price}
                              aria-required="true"
                              required=""
                              onChange={handleChange}
                            />
                          </fieldset>
                        </div>

                        <div className="cols gap22">
                          <fieldset className="name">
                            <div className="body-title mb-10">
                              Số lượng trong kho
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
                            lưu sản phẩm
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
