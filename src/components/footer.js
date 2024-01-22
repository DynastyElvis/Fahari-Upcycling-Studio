// src/components/Footer.js
import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="site-footer">   
        <div className="container">
          <div className="container">
            <img
              src="logos/KQ-Logos-white.png"
              alt="Little Fashion Logo"
              style={{ width: "160px", height: "auto" }}
            />
          </div>

          <div className="row">
            <div className="col-lg-3 col-10 me-auto mb-4">
              <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
                Copyright © 2024 <strong>The Upcycling Studio</strong>
              </p>
              <br />
              <p className="copyright-text">
                Fahari Innovation Hub •{" "}
                <a href="www.kenya-airways.com" target="_blank">
                  The Kenya Airways
                </a>
              </p>
            </div>

            <div className="col-lg-5 col-8">
              <h5 className="text-white mb-3">Sitemap</h5>

              <ul className="footer-menu d-flex flex-wrap">
                <li className="footer-menu-item">
                  <Link to="/Stories" className="footer-menu-link">
                    Story
                  </Link>
                </li>

                <li className="footer-menu-item">
                <Link to="/ShopAll" className="footer-menu-link">
                    Products
                  </Link>
                </li>

                <li className="footer-menu-item">
                  <a href="#" className="footer-menu-link">
                    Privacy policy
                  </a>
                </li>

                <li className="footer-menu-item">
                <Link to="/faq" className="footer-menu-link">
                    FAQs
                  </Link>
                </li>

                <li className="footer-menu-item">
                <Link to="/Contacts" className="footer-menu-link">
                Contacts
                  </Link>
                    
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-4">
              <h5 className="text-white mb-3">Social</h5>

              <ul className="social-icon">
                <li>
                  <a href="#" className="social-icon-link bi-youtube"></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-whatsapp"></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-skype"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
