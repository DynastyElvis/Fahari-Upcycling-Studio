// src/components/Contacts.js
import React from 'react';
import Navbar from './Navbar'; // Corrected import path
import Footer from "./Footer"; // Corrected import path


function Contacts() {
//   <section className="preloader">
//   <div className="spinner">
//       <span className="sk-inner-circle"></span>
//   </div>
// </section>
  return (
    <div>
<Navbar />

<main>



    <header className="site-header section-padding-img site-header-image">
        <div className="container">
            <div className="row">

                <div className="col-lg-10 col-12 header-info">
                    <h1>
                        <span className="d-block text-primary">Say hello to us</span>
                        <span className="d-block text-dark">love to hear you</span>
                    </h1>
                </div>
            </div>
        </div>

        <img src="images/header/positive-european-woman-has-break-after-work.jpg" className="header-image img-fluid" alt=""/>
    </header>

    <section className="contact section-padding">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-6 col-12">
                    <h2 className="mb-4">Let's <span>begin</span></h2>

                    <form className="contact-form me-lg-5 pe-lg-3" role="form">

                        <div className="form-floating">
                            <input type="text" name="name" id="name" className="form-control" placeholder="Full name" required/>

                            <label for="name">Full name</label>
                        </div>

                        <div className="form-floating my-4">
                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required/>

                            <label for="email">Email address</label>
                        </div>
                        
                        <div className="form-floating my-4">
                            <input type="subject" name="subject" id="subject"className="form-control" placeholder="Subject" required/>

                            <label for="subject">Subject</label>
                        </div>

                        <div className="form-floating mb-4">
                        <textarea id="message" name="message" className="form-control" placeholder="Leave a comment here" required style={{ height: "160px" }}></textarea>

                            <label for="message">Tell us about the project</label>
                        </div>

                        <div className="col-lg-5 col-6">
                            <button type="submit" className="form-control">Send</button>
                        </div>
                    </form>
                </div>

                <div className="col-lg-6 col-12 mt-5 ms-auto">
                    <div className="row">
                        <div className="col-6 border-end contact-info">
                            <h6 className="mb-3">New Business</h6>

                            <a href="mailto:hello@company.com" className="custom-link">
                                hello@company.com
                                <i className="bi-arrow-right ms-2"></i>
                            </a>
                        </div>

                        <div className="col-6 contact-info">
                          <h6 className="mb-3">Main Studio</h6>

                            <a href="mailto:studio@company.com" className="custom-link">
                                studio@company.com
                                <i className="bi-arrow-right ms-2"></i>
                            </a>
                        </div>

                        <div className="col-6 border-top border-end contact-info">
                            <h6 className="mb-3">Our Office</h6>

                            <p className="text-muted">Akershusstranda 20, 0150 Oslo, Norway</p>
                        </div>

                        <div className="col-6 border-top contact-info">
                            <h6 className="mb-3">Our Socials</h6>

                            <ul className="social-icon">

                                <li><a href="#" className="social-icon-link bi-messenger"></a></li>

                                <li><a href="#" className="social-icon-link bi-youtube"></a></li>

                                <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                                <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</main>

<Footer />

{/* 
<footer className="site-footer">
    <div className="container">
        <div className="row">

            <div className="col-lg-3 col-10 me-auto mb-4">
                <h4 className="text-white mb-3"><a href="index.html">Little</a> Fashion</h4>
                <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2022 <strong>Little Fashion</strong></p>
                <br/>
                <p className="copyright-text">Designed by <a href="https://www.tooplate.com/" target="_blank">Tooplate</a></p>
            </div>

            <div className="col-lg-5 col-8">
                <h5 className="text-white mb-3">Sitemap</h5>

                <ul className="footer-menu d-flex flex-wrap">
                    <li className="footer-menu-item"><a href="about.html" className="footer-menu-link">Story</a></li>

                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Products</a></li>

                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Privacy policy</a></li>

                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">FAQs</a></li>

                    <li className="footer-menu-item"><a href="#" className="footer-menu-link">Contact</a></li>
                </ul>
            </div>

            <div className="col-lg-3 col-4">
                <h5 className="text-white mb-3">Social</h5>

                <ul className="social-icon">

                    <li><a href="#" className="social-icon-link bi-youtube"></a></li>

                    <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>

                    <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                    <li><a href="#" className="social-icon-link bi-skype"></a></li>
                </ul>
            </div>

        </div>
    </div>
</footer> */}

    </div>
  );
}

export default Contacts;
