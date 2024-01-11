// src/components/Contacts.js
import React from 'react';

function Contacts() {
  return (
    <div>

<section className="preloader">
    <div className="spinner">
        <span className="sk-inner-circle"></span>
    </div>
</section>

<body>

<section className="preloader">
    <div className="spinner">
        <span className="sk-inner-circle"></span>
    </div>
</section>

<main>

    <section className="sign-in-form section-padding">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 mx-auto col-12">

                    <h1 className="hero-title text-center mb-5">Sign Up</h1>

                    <div className="social-login d-flex flex-column w-50 m-auto">
                        
                        <a href="#" className="btn custom-btn social-btn mb-4">
                            <i className="bi bi-google me-3"></i>

                            Continue with Google
                        </a>

                        <a href="#" className="btn custom-btn social-btn">
                            <i className="bi bi-facebook me-3"></i>

                            Continue with Facebook
                        </a>
                    </div>

                    <div className="div-separator w-50 m-auto my-5"><span>or</span></div>

                    <div className="row">
                        <div className="col-lg-8 col-11 mx-auto">
                            <form role="form" method="post">

                                <div className="form-floating">
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />

                                    <label for="email">Email address</label>
                                </div>

                                <div className="form-floating my-4">
                                    <input type="password" name="password" id="password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />

                                    <label for="password">Password</label>
                                    
                                    <p className="text-center">* shall include 0-9 a-z A-Z in 4 to 10 characters</p>
                                </div>

                                <div className="form-floating">
                                    <input type="password" name="confirm_password" id="confirm_password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />

                                    <label for="confirm_password">Password Confirmation</label>
                                </div>

                                <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                    Create account
                                </button>

                                <p className="text-center">Already have an account? Please <a href="sign-in.html">Sign In</a></p>

                            </form>
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
}

export default Contacts;
