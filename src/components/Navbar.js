import React from 'react';
import './HomePage.scss'; // Import the SCSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link to="/" className="navbar-brand">
          <strong>
            <span>Little</span> Fashion
          </strong>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/AboutPage" className="nav-link">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="products.html">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="faq.html">
                FAQs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-none d-lg-block">
            <a href="sign-in.html" className="bi-person custom-icon me-3"></a>
            <a href="product-detail.html" className="bi-bag custom-icon"></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
