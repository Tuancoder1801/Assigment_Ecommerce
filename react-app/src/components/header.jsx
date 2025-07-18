export function Header() {
  return (
    <>
      <div className="header-dashboard">
        <div className="wrap">
          <div className="header-left">
            <a href="/">
              <img
                className=""
                id="logo_header"
                alt=""
                src="images/logo/logo.png"
                data-light="images/logo/logo.png"
                data-dark="images/logo/logo.png"
                data-width="154px"
                data-height="52px"
                data-retina="images/logo/logo.png"
              />
            </a>
            <div className="button-show-hide">
              <i className="icon-menu-left" />
            </div>
          </div>
          <div className="header-grid">
            <div className="popup-wrap message type-header">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="header-item">
                    <span className="text-tiny">1</span>
                    <i className="icon-bell" />
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end has-content"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <h6>Notifications</h6>
                  </li>
                  <li>
                    <div className="message-item item-1">
                      <div className="image">
                        <i className="icon-noti-1" />
                      </div>
                      <div>
                        <div className="body-title-2">Discount available</div>
                        <div className="text-tiny">
                          Morbi sapien massa, ultricies at rhoncus at,
                          ullamcorper nec diam
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="message-item item-2">
                      <div className="image">
                        <i className="icon-noti-2" />
                      </div>
                      <div>
                        <div className="body-title-2">
                          Account has been verified
                        </div>
                        <div className="text-tiny">
                          Mauris libero ex, iaculis vitae rhoncus et
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="message-item item-3">
                      <div className="image">
                        <i className="icon-noti-3" />
                      </div>
                      <div>
                        <div className="body-title-2">
                          Order shipped successfully
                        </div>
                        <div className="text-tiny">
                          Integer aliquam eros nec sollicitudin sollicitudin
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="message-item item-4">
                      <div className="image">
                        <i className="icon-noti-4" />
                      </div>
                      <div>
                        <div className="body-title-2">
                          Order pending: <span>ID 305830</span>
                        </div>
                        <div className="text-tiny">
                          Ultricies at rhoncus at ullamcorper
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="tf-button w-full">
                      View all
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="popup-wrap user type-header">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="header-user wg-user">
                    <span className="image">
                      <img src="images/avatar/user-1.png" alt="" />
                    </span>
                    <span className="flex flex-column">
                      <span className="body-title mb-2">Kristin Watson</span>
                      <span className="text-tiny">Admin</span>
                    </span>
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end has-content"
                  aria-labelledby="dropdownMenuButton3"
                >
                  <li>
                    <a href="#" className="user-item">
                      <div className="icon">
                        <i className="icon-user" />
                      </div>
                      <div className="body-title-2">Account</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="user-item">
                      <div className="icon">
                        <i className="icon-mail" />
                      </div>
                      <div className="body-title-2">Inbox</div>
                      <div className="number">27</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="user-item">
                      <div className="icon">
                        <i className="icon-file-text" />
                      </div>
                      <div className="body-title-2">Taskboard</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="user-item">
                      <div className="icon">
                        <i className="icon-headphones" />
                      </div>
                      <div className="body-title-2">Support</div>
                    </a>
                  </li>
                  <li>
                    <a href="login.html" className="user-item">
                      <div className="icon">
                        <i className="icon-log-out" />
                      </div>
                      <div className="body-title-2">Log out</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
