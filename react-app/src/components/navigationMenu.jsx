export function NavigationMenu() {
  return (
    <>
      <div className="section-menu-left">
        <div className="box-logo">
          <a href="/" id="site-logo-inner">
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
            <div className="center-heading">Trang chủ</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="/" className="">
                  <div className="icon">
                    <i className="icon-grid" />
                  </div>
                  {/* <div className="text">Dashboard</div> */}
                </a>
              </li>
            </ul>
          </div>
          <div className="center-item">
            <ul className="menu-list">
              <li className="menu-item has-children">
                <a
                  href="#"
                  className="menu-item-button"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="icon">
                    <i className="icon-shopping-cart" />
                  </div>
                  <div className="text">Sản phẩm</div>
                </a>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href="/admin/add-product" className="">
                      <div className="text">Thêm sản phẩm</div>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a href="/admin/list-product" className="">
                      <div className="text">Danh sách sản phẩm</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item has-children">
                <a
                  href="#"
                  className="menu-item-button"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="icon">
                    <i className="icon-layers" />
                  </div>
                  <div className="text">Khách hàng</div>
                </a>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href="/admin/add-customer" className="">
                      <div className="text">Thêm khách hàng</div>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a href="/admin/list-customer" className="">
                      <div className="text">Danh sách khách hàng</div>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-item has-children">
                <a
                  href="#"
                  className="menu-item-button"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="icon">
                    <i className="icon-file-plus" />
                  </div>
                  <div className="text">Đơn hàng</div>
                </a>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <a href="/admin/add-order" className="">
                      <div className="text">Thêm đơn hàng</div>
                    </a>
                  </li>
                  <li className="sub-menu-item">
                    <a href="order-tracking.html" className="">
                      <div className="text">danh sách trạng thái đơn hàng</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
