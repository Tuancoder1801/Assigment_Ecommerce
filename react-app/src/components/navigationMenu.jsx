import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function NavigationMenu() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  // Tự động mở menu tương ứng với đường dẫn hiện tại
  useEffect(() => {
    if (location.pathname.includes("/admin/add-product") || location.pathname.includes("/admin/list-product")) {
      setOpenMenu("product");
    } else if (location.pathname.includes("/admin/add-customer") || location.pathname.includes("/admin/list-customer")) {
      setOpenMenu("customer");
    } else if (location.pathname.includes("/admin/add-order") || location.pathname.includes("/admin/list-order")) {
      setOpenMenu("order");
    } else {
      setOpenMenu(null);
    }
  }, [location.pathname]);

  // Toggle khi click
  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div className="section-menu-left">
      <div className="box-logo">
        <a href="/" id="site-logo-inner">
          <img src="/images/logo/logo.png" alt="Logo" />
        </a>
      </div>

      <ul className="menu-list">
        {/* Trang chủ */}
        <li className="menu-item">
          <Link to="/" className="menu-item-button">
            <div className="icon"><i className="icon-grid" /></div>
            <div className="text">Trang chủ</div>
          </Link>
        </li>

        {/* Sản phẩm */}
        <li className="menu-item has-children">
          <button type="button" className="menu-item-button" onClick={() => toggleMenu("product")}>
            <div className="icon"><i className="icon-shopping-cart" /></div>
            <div className="text">Sản phẩm</div>
          </button>
          <ul className={`sub-menu ${openMenu === "product" ? "show" : ""}`}>
            <li className="sub-menu-item">
              <Link to="/admin/add-product"><div className="text">Thêm sản phẩm</div></Link>
            </li>
            <li className="sub-menu-item">
              <Link to="/admin/list-product"><div className="text">Danh sách sản phẩm</div></Link>
            </li>
          </ul>
        </li>

        {/* Khách hàng */}
        <li className="menu-item has-children">
          <button type="button" className="menu-item-button" onClick={() => toggleMenu("customer")}>
            <div className="icon"><i className="icon-layers" /></div>
            <div className="text">Khách hàng</div>
          </button>
          <ul className={`sub-menu ${openMenu === "customer" ? "show" : ""}`}>
            <li className="sub-menu-item">
              <Link to="/admin/add-customer"><div className="text">Thêm khách hàng</div></Link>
            </li>
            <li className="sub-menu-item">
              <Link to="/admin/list-customer"><div className="text">Danh sách khách hàng</div></Link>
            </li>
          </ul>
        </li>

        {/* Đơn hàng */}
        <li className="menu-item has-children">
          <button type="button" className="menu-item-button" onClick={() => toggleMenu("order")}>
            <div className="icon"><i className="icon-file-plus" /></div>
            <div className="text">Đơn hàng</div>
          </button>
          <ul className={`sub-menu ${openMenu === "order" ? "show" : ""}`}>
            <li className="sub-menu-item">
              <Link to="/admin/add-order"><div className="text">Thêm đơn hàng</div></Link>
            </li>
            <li className="sub-menu-item">
              <Link to="/admin/list-order"><div className="text">Danh sách đơn hàng</div></Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
