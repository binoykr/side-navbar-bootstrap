import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //https://startbootstrap.com/templates/simple-sidebar/

  return (
    <div class="d-flex chiller-theme" id="wrapper">

      {/* <!-- Sidebar --> */}
      <div class="sidebar-wrapper">
        <div class="sidebar-heading">Admin UI</div>
        <div class="sidebar-content">
          <nav class="navbar bg-light">
            <ul class="navbar-nav menu-bar">

              <li class="nav-item header">
                <span>General</span>
              </li>

              <li class="nav-item sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                  <span class="badge badge-pill badge-warning">New</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Dashboard 1
                    <span class="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-shopping-cart"></i>
                  <span>E-commerce</span>
                  <span class="badge badge-pill badge-danger">3</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Credit cart</a>
                    </li>
                  </ul>
                </div>
              </li>


              <li class="nav-item sidebar-dropdown">
                <a href="#">
                  <i class="far fa-gem"></i>
                  <span>Components</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">General</a>
                    </li>
                    <li>
                      <a href="#">Panels</a>
                    </li>
                    <li>
                      <a href="#">Tables</a>
                    </li>
                    <li>
                      <a href="#">Icons</a>
                    </li>
                    <li>
                      <a href="#">Forms</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-chart-line"></i>
                  <span>Charts</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Pie chart</a>
                    </li>
                    <li>
                      <a href="#">Line chart</a>
                    </li>
                    <li>
                      <a href="#">Bar chart</a>
                    </li>
                    <li>
                      <a href="#">Histogram</a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item sidebar-dropdown">
                <a href="#">
                  <i class="fa fa-globe"></i>
                  <span>Maps</span>
                </a>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Google maps</a>
                    </li>
                    <li>
                      <a href="#">Open street map</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item header">
                <span>Extra</span>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-book"></i>
                  <span>Documentation</span>
                  <span class="badge badge-pill badge-primary">Beta</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-calendar"></i>
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-folder"></i>
                  <span>Examples</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!-- /#sidebar-wrapper --> */}

      {/* <!-- Page Content --> */}
      <div class="page-content-wrapper">

        <nav class="navbar sticky-top navbar-expand-lg navbar-light topbar border-bottom">
          <a class="nav-link" id="menu-toggle" href="#"><i class="fa fa-arrow-left"></i></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTopbar" aria-controls="navbarTopbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTopbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-search"></i></a>
              </li>
            </ul>

            <ul class="navbar-nav navbar-right">
              <li class="nav-item dropdown" id="dropdownTopMenuNotification" data-toggle="dropdown" aria-expanded="false">
                <a class="nav-link" href="#">
                  <i class="fa fa-bell"></i>
                  <span class="badge icon badge-pill badge-danger up">3</span>
                </a>

                <div class="dropdown-menu dropdown-menu-right style-media" aria-labelledby="dropdownTopMenuNotification">
                  <div class="dropdown-menu-container">

                    <div class="header">
                      <h5 class="title">Notifications</h5>
                      <span class="badge list badge-round badge-danger">New 5</span>
                    </div>


                    <div class="container">
                      <div class="content">

                        <a class="item-group" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <i class="icon wb wb-order bg-red-600 white circle"></i>
                            </div>
                            <div class="body">
                              <h6 class="heading">A new order has been placed</h6>
                              <time class="meta" datetime="2018-06-12T20:50:48+08:00">5 hours ago</time>
                            </div>
                          </div>
                        </a>

                        <a class="item-group" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <i class="icon wb wb-user bg-green-600 white circle" aria-hidden="true"></i>
                            </div>
                            <div class="body">
                              <h6 class="heading">Completed the task</h6>
                              <time class="meta" datetime="2018-06-11T18:29:20+08:00">2 days ago</time>
                            </div>
                          </div>
                        </a>

                        <a class="item-group" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <i class="icon wb wb-settings bg-red-600 white circle" aria-hidden="true"></i>
                            </div>
                            <div class="body">
                              <h6 class="heading">Settings updated</h6>
                              <time class="meta" datetime="2018-06-11T14:05:00+08:00">2 days ago</time>
                            </div>
                          </div>
                        </a>

                        <a class="item-group" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <i class="icon wb wb-calendar bg-blue-600 white circle" aria-hidden="true"></i>
                            </div>
                            <div class="body">
                              <h6 class="heading">Event started</h6>
                              <time class="meta" datetime="2018-06-10T13:50:18+08:00">3 days ago</time>
                            </div>
                          </div>
                        </a>

                        <a class="item-group" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <i class="icon wb wb-chat bg-orange-600 white circle" aria-hidden="true"></i>
                            </div>
                            <div class="body">
                              <h6 class="heading">Message received</h6>
                              <time class="meta" datetime="2018-06-10T12:34:48+08:00">3 days ago</time>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>


                    <div class="footer size">
                      <a class="body">All notifications</a>
                      <a class="button">
                        <i class="fa fa-cog"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="dropdownTopMenuMessage" data-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-envelope"></i>
                  <span class="badge icon badge-pill badge-info up">5</span>
                </a>

                <div class="dropdown-menu dropdown-menu-right style-media" aria-labelledby="dropdownTopMenuMessage">
                  <div class="dropdown-menu-container">
                    <div class="header">
                      <h5 class="title">MESSAGES</h5>
                      <span class="badge list badge-round badge-info">New 3</span>
                    </div>

                    <div class="container">
                      <div class="content">

                        <a class="item-group" href="javascript:void(0)" role="menuitem">

                          <div class="media">
                            <div class="pr-10">
                              <span class="avatar md online">
                                <img src="https://raw.githubusercontent.com/binoykr/top-navbar-bootstrap/master/public/imgs/user-binoy.jpg" alt="..."
                                  class="rounded-circle" width="40px" height="40px" />
                                <i></i>
                              </span>
                            </div>

                            <div class="body">
                              <h6 class="heading">Mary Adams</h6>
                              <time class="meta" datetime="2018-06-12T20:50:48+08:00">30 minutes ago</time>
                              <div class="detail">Anyways, i would like just do it</div>
                            </div>
                          </div>
                        </a>

                        <a class="item-group" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <span class="avatar md online">
                                <img src="https://raw.githubusercontent.com/binoykr/top-navbar-bootstrap/master/public/imgs/user-binoy.jpg" alt="..."
                                  class="rounded-circle" width="40px" height="40px" />
                                <i></i>
                              </span>
                            </div>
                            <div class="body">
                              <h6 class="heading">Caleb Richards</h6>
                              <time class="meta" datetime="2018-06-11T18:29:20+08:00">12 hours ago</time>
                              <div class="detail">I checheck the document. But there seems</div>
                            </div>
                          </div>
                        </a>

                        <a class="item-group" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <span class="avatar md online">
                                <img src="https://raw.githubusercontent.com/binoykr/top-navbar-bootstrap/master/public/imgs/user-binoy.jpg" alt="..."
                                  class="rounded-circle" width="40px" height="40px" />
                                <i></i>
                              </span>
                            </div>
                            <div class="body">
                              <h6 class="heading">June Lane</h6>
                              <time class="meta" datetime="2018-06-11T14:05:00+08:00">2 days ago</time>
                              <div class="detail">Lorem ipsum Id consectetur et minim</div>
                            </div>
                          </div>
                        </a>

                        <a class="item-group" href="javascript:void(0)" role="menuitem">
                          <div class="media">
                            <div class="pr-10">
                              <span class="avatar md online">
                                <img src="https://raw.githubusercontent.com/binoykr/top-navbar-bootstrap/master/public/imgs/user-binoy.jpg" alt="..."
                                  class="rounded-circle" width="40px" height="40px" />
                                <i></i>
                              </span>
                            </div>
                            <div class="body">
                              <h6 class="heading">Edward Fletcher</h6>
                              <time class="meta" datetime="2018-06-10T13:50:18+08:00">3 days ago</time>
                              <div class="detail">Dolor et irure cupidatat commodo nostrud nostrud.</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div class="footer">
                      <a class="body">See all messages</a>
                      <a class="button">
                        <i class="fa fa-cog"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="dropdownTopMenuProfile" data-toggle="dropdown" aria-expanded="false">
                  <span>
                    Hi Binoy
              </span>
                  <span class="online">
                    <img src="https://raw.githubusercontent.com/binoykr/top-navbar-bootstrap/master/public/imgs/user-binoy.jpg"
                      class="rounded-circle" width="30px" height="30px" />
                  </span>
                </a>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownTopMenuProfile">
                  <a class="dropdown-item" href="#">
                    <i class="icon wb wb-user" aria-hidden="true"></i>
                    Profile
              </a>
                  <a class="dropdown-item" href="#">
                    <i class="icon wb wb-payment" aria-hidden="true"></i>
                    Billing
              </a>
                  <a class="dropdown-item" href="#">
                    <i class="icon wb wb-settings" aria-hidden="true"></i>
                    Settings
              </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    <i class="icon wb wb-power" aria-hidden="true"></i>
                    Logout
              </a>
                </div>
              </li>
            </ul>
          </div>

        </nav>

        <div class="container-fluid">
          <h1 class="mt-4">Simple Sidebar</h1>
          <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
          <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
        </div>
      </div>
      {/* <!-- /#page-content-wrapper --> */}

    </div>
  );
}

export default App;
