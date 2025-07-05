export function NavigationMenu() {
  return (
    <>
      <div className="section-menu-left">
        <div className="box-logo">
          <a href="index.html" id="site-logo-inner">
            <img
              className=""
              id="logo_header"
              alt=""
              src="images/logo/logo.png"
              data-light="images/logo/logo.png"
              data-dark="images/logo/logo.png"
            />
          </a>
          <div className="button-show-hide">
            <i className="icon-menu-left" />
          </div>
        </div>
        <div className="center">
          <div className="center-item">
            <div className="center-heading">Main Home</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="index.html" className="">
                  <div className="icon">
                    <i className="icon-grid" />
                  </div>
                  <div className="text">Dashboard</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="center-item">
            <ul className="menu-list">
              <li className="menu-item has-children">
                <a href="javascript:void(0);" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-shopping-cart" />
                  </div>
                  <div className="text">Products</div>
                </a>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href="/admin/add-product" className="">
                      <div className="text">Add Product</div>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a href="/admin/list-product" className="">
                      <div className="text">Products</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item has-children">
                <a href="javascript:void(0);" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-layers" />
                  </div>
                  <div className="text">Brand</div>
                </a>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href="add-brand.html" className="">
                      <div className="text">New Brand</div>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a href="brands.html" className="">
                      <div className="text">Brands</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item has-children">
                <a href="javascript:void(0);" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-layers" />
                  </div>
                  <div className="text">Category</div>
                </a>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href="add-category.html" className="">
                      <div className="text">New Category</div>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a href="categories.html" className="">
                      <div className="text">Categories</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item has-children">
                <a href="javascript:void(0);" className="menu-item-button">
                  <div className="icon">
                    <i className="icon-file-plus" />
                  </div>
                  <div className="text">Order</div>
                </a>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href="orders.html" className="">
                      <div className="text">Orders</div>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a href="order-tracking.html" className="">
                      <div className="text">Order tracking</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="slider.html" className="">
                  <div className="icon">
                    <i className="icon-image" />
                  </div>
                  <div className="text">Slider</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="coupons.html" className="">
                  <div className="icon">
                    <i className="icon-grid" />
                  </div>
                  <div className="text">Coupns</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="users.html" className="">
                  <div className="icon">
                    <i className="icon-user" />
                  </div>
                  <div className="text">User</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="settings.html" className="">
                  <div className="icon">
                    <i className="icon-settings" />
                  </div>
                  <div className="text">Settings</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
