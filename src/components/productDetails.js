// src/components/ShopAll.js
import React from 'react';
import Navbar from './Navbar'; // Corrected import path


function productDetails() {
    <section className="preloader">
    <div className="spinner">
        <span className="sk-inner-circle"></span>
    </div>
  </section>
  return (
<div>
<body>

<Navbar />

<main>



    <header className="site-header section-padding d-flex justify-content-center align-items-center">
        <div className="container">
            <div className="row">

                <div className="col-lg-10 col-12">
                    <h1>
                        <span className="d-block text-primary">We provide you</span>
                        <span className="d-block text-dark">Fashionable Stuffs</span>
                    </h1>
                </div>
            </div>
        </div>
    </header>

    <section className="product-detail section-padding">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12">
                    <div className="product-thumb">
                        <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt=""/>
                    </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="product-info d-flex">
                        <div>
                            <h2 className="product-title mb-0">Tree pot</h2>

                            <p className="product-p">Original package design from house</p>
                        </div>

                        <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
                    </div>

                    <div className="product-description">

                        <strong className="d-block mt-4 mb-2">Description</strong>

                        <p className="lead mb-5">Over three years in business, We’ve had the chance to work on a variety of projects, with companies</p>
                    </div>

                    <div className="product-cart-thumb row">
                        <div className="col-lg-6 col-12">
                            
                            <select className="form-select cart-form-select" id="inputGroupSelect01">
                                <option selected>Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                            <button type="submit" className="btn custom-btn cart-btn" data-bs-toggle="modal" data-bs-target="#cart-modal">Add to Cart</button>
                        </div>

                        <p>
                            <a href="#" className="product-additional-link">Details</a>

                            <a href="#" className="product-additional-link">Delivery and Payment</a>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <section className="related-product section-padding border-top">
        <div className="container">
            <div className="row">

                <div className="col-12">
                    <h3 className="mb-5">You might also like</h3>
                </div>

                <div className="col-lg-4 col-12 mb-3">
                    <div className="product-thumb">
                        <a href="product-detail.html">
                            <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt=""/>
                        </a>

                        <div className="product-top d-flex">
                            <span className="product-alert me-auto">New arrival</span>

                            <a href="#" className="bi-heart-fill product-icon"></a>
                        </div>

                        <div className="product-info d-flex">
                            <div>
                                <h5 className="product-title mb-0">
                                    <a href="product-detail.html" className="product-title-link">Tree pot</a>
                                </h5>

                                <p className="product-p">Original package design from house</p>
                            </div>

                            <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-12 mb-3">
                    <div className="product-thumb">
                        <a href="product-detail.html">
                            <img src="images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg" className="img-fluid product-image" alt=""/>
                        </a>

                        <div className="product-top d-flex">
                            <span className="product-alert">Low Price</span>

                            <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                        </div>

                        <div className="product-info d-flex">
                            <div>
                                <h5 className="product-title mb-0">
                                    <a href="product-detail.html" className="product-title-link">Fashion set</a>
                                </h5>

                                <p className="product-p">Costume package</p>
                            </div>

                            <small className="product-price text-muted ms-auto mt-auto mb-5">$35</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-12">
                    <div className="product-thumb">
                        <a href="product-detail.html">
                            <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt=""/>
                        </a>

                        <div className="product-top d-flex">
                            <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                        </div>

                        <div className="product-info d-flex">
                            <div>
                                <h5 className="product-title mb-0">
                                    <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
                                </h5>

                                <p className="product-p">Nature made another world</p>
                            </div>

                            <small className="product-price text-muted ms-auto mt-auto mb-5">$45</small>
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

<div className="modal fade" id="cart-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0">
            <div className="modal-header flex-column">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
                <div className="row">
                    <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                        <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt=""/>
                    </div>

                    <div className="col-lg-6 col-12 mt-3 mt-lg-0">
                        <h3 className="modal-title" id="exampleModalLabel">Tree pot</h3>

                        <p className="product-price text-muted mt-3">$25</p>

                        <p className="product-p">Quatity: <span className="ms-1">4</span></p>

                        <p className="product-p">Colour: <span className="ms-1">Black</span></p>

                        <p className="product-p pb-3">Size: <span className="ms-1">S/S</span></p>

                        <div className="border-top mt-4 pt-3">
                            <p className="product-p"><strong>Total: <span className="ms-1">$100</span></strong></p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <div className="row w-50">
                    <button type="button" className="btn custom-btn cart-btn ms-lg-4">Checkout</button>
                </div>
            </div>
        </div>

    </div>
</div>


</body>
</div>
  );
}

export default productDetails;
