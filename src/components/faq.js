// HomePage.js
import React from 'react';
import './HomePage.scss'; // Import the SCSS file

const HomePage = () => {

  <section className="preloader">
    <div className="spinner">
        <span className="sk-inner-circle"></span>
    </div>
</section>
  return (
    <div>

<body>

<section className="preloader">
    <div className="spinner">
        <span className="sk-inner-circle"></span>
    </div>
</section>

<main>

    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand" href="index.html">
                <strong><span>Little</span> Fashion</strong>
            </a>

            <div className="d-lg-none">
                <a href="sign-in.html" className="bi-person custom-icon me-3"></a>

                <a href="product-detail.html" className="bi-bag custom-icon"></a>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="about.html">Story</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="products.html">Products</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" href="faq.html">FAQs</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>

                <div className="d-none d-lg-block">
                    <a href="sign-in.html" className="bi-person custom-icon me-3"></a>

                    <a href="product-detail.html" className="bi-bag custom-icon"></a>
                </div>
            </div>
        </div>
    </nav>

    <header className="site-header section-padding d-flex justify-content-center align-items-center">
        <div className="container">
            <div className="row">

                <div className="col-lg-10 col-12">
                    <h1>
                        <span className="d-block text-primary">Your favorite questions</span>
                        <span className="d-block text-dark">and our answers to them</span>
                    </h1>
                </div>
            </div>
        </div>
    </header>

    <section className="faq section-padding">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-8 col-12">
                    <h2>General Info.</h2>

                    <div className="accordion" id="accordionGeneral">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralOne" aria-expanded="true" aria-controls="accordionGeneralOne">
                                What is this Little Fashion?
                                </button>
                            </h2>

                            <div id="accordionGeneralOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionGeneral">

                                <div className="accordion-body">
                                    <p className="large-paragraph"><strong>Little Fashion</strong> is free Bootstrap 5 website template for everyone. There are 8 HTML pages included in this template and you can expand more pages as you need.</p>

                                    <p className="large-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralTwo" aria-expanded="false" aria-controls="accordionGeneralTwo">
                                What is Tooplate website?
                                </button>
                            </h2>

                            <div id="accordionGeneralTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionGeneral">

                                <div className="accordion-body">
                                    <p className="large-paragraph"><a href="https://www.tooplate.com/free-templates" target="_blank">Tooplate</a> is a great website to download free HTML website templates for your business or personal use. Tooplate website has been online for almost 8 years now. Thank you for visiting our website.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralThree" aria-expanded="false" aria-controls="accordionGeneralThree">
                                How do I support your website?
                                </button>
                            </h2>

                            <div id="accordionGeneralThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionGeneral">

                                <div className="accordion-body">
                                    <p className="large-paragraph">You can support our Tooplate website by sharing it to your friends or colleagues on the web or social media.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h2 className="mt-5">About <span>our products</span></h2>

                    <div className="accordion" id="accordionProduct">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProductOne" aria-expanded="true" aria-controls="accordionProductOne">
                                What is Fashion Design?
                                </button>
                            </h2>

                            <div id="accordionProductOne" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionProduct">

                                <div className="accordion-body">
                                    <p className="large-paragraph"><strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <p className="large-paragraph">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProductTwo" aria-expanded="false" aria-controls="accordionProductTwo">
                                How do I use the product?
                                </button>
                            </h2>

                            <div id="accordionProductTwo" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionProduct">

                                <div className="accordion-body">
                                    <p className="large-paragraph">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>

</main>

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
</footer>


<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/Headroom.js"></script>
<script src="js/jQuery.headroom.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/custom.js"></script>

</body>

    




    </div>
  );
};

export default HomePage;
