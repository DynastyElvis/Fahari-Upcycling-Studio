// HomePage.js
import React from 'react';
import './HomePage.scss'; // Import the SCSS file

const HomePage = () => {
  return (
<html>
  
  <body>
    

<div dataScrollBehavior="shy" className="hexbit-navbar container-fluid">

  
  <div className="main-panel">

    
    <div className="left-wrapper text-left">

      <nav id="nav-drawer" dataSideDrawer="true" className="header-navigation to-right">
        <div className="content">
          <div className="nav-menu-content">
            <ul>
              <li className="has-subs drop-down active">
                <a href="#">Home</a>
                <ul>
                  <li><a href="#">Categories</a></li>
                  <li><a href="#">Product</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Check out</a></li>
                  <li className="has-subs drop-down">
                    <a href="#">Contact</a>
                    <ul>
                      <li><a href="#">Category</a></li>
                      <li><a href="#">Category</a></li>
                      <li className="has-subs drop-down">
                        <a href="#">Contact</a>
                        <ul>
                          <li><a href="#">Category</a></li>
                          <li><a href="#">Category</a></li>
                          <li><a href="#">Category</a></li>
                          <li><a href="#">Category</a></li>
                          <li><a href="#">Category</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-subs drop-down">
                <a href="#">Categories</a>
                <ul>
                  <li><a href="#">Category</a></li>
                  <li><a href="#">Category</a></li>
                  <li><a href="#">Category</a></li>
                  <li><a href="#">Category</a></li>
                  <li><a href="#">Category</a></li>
                </ul>
              </li>
              <li className="has-subs mega-menu">
                <a href="#">Accessories</a>
                <ul>
                  <li>
                    <a href="#">Category Layouts</a>
                    <ul>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                    </ul>
                  </li>
                    <li>
                    <a href="#">Category Layouts</a>
                    <ul>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Shop Pages</a>
                    <ul>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Product Layouts</a>
                    <ul>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Product Types</a>
                    <ul>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                      <li><a href="#">Sticky Layout</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="drawer-footer">
          <ul>
            <li><a href="#"><i className="fa fa-pinterest" ariaHidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram" ariaHidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-facebook" ariaHidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter" ariaHidden="true"></i></a></li>
          </ul>
        </div>
      </nav>

     <a className="header-action hamburger" href="#nav-drawer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    

    
    <div className="logo-wrapper position-relative">
      <img className="img-fluid" src="public/images/Colored-Icon.png" alt="" />
    </div>
    

    
    <div className="right-wrapper text-end">
      <a className="header-action cart" href="#cart-drawer">
        <i className="icon-basket"></i>
        <span className="cart-counter-badge">32</span>
      </a>
      <i className="header-action-divider"></i>
      <a className="header-action user" href="#user-drawer">
        <i className="icon-user"></i>
      </a>
      <a className="header-action search" href="#search-drawer">
        <i className="icon-magnifier"></i>
      </a>
    </div>
    
  </div>
  

  
  <div id="cart-drawer" dataSideDrawer="true" className="side-drawer to-left cart">
    <div className="content">
      cart
    </div>
    <div className="drawer-footer">
      <ul>
        <li><a href="#"><i className="fa fa-pinterest" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-instagram" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-facebook" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter" ariaHidden="true"></i></a></li>
      </ul>
    </div>

  </div>
  

  
  <div id="user-drawer" dataSideDrawer="true" className="side-drawer to-left user">
    <div className="content">
      user
    </div>
    <div className="drawer-footer">
      <ul>
        <li><a href="#"><i className="fa fa-pinterest" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-instagram" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-facebook" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter" ariaHidden="true"></i></a></li>
      </ul>
    </div>

  </div>
  

  
  <div id="search-drawer" dataSideDrawer="true" className="side-drawer to-left search">
    <div className="content">
      search
    </div>

    <div className="drawer-footer">
      <ul>
        <li><a href="#"><i className="fa fa-pinterest" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-instagram" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-facebook" ariaHidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter" ariaHidden="true"></i></a></li>
      </ul>
    </div>
  </div>
  

  
  <div className="screen-dim"></div>

</div>

   <br/>
    <br/>
    <br/>
    <br/>
    <br/>
     <label>
      Dark Mode
      <input type="checkbox" name="dark-mode-toggle" />
    </label>
  </body>

</html>
  );
};

export default HomePage;
