// HomePage.js
import React from 'react';
import './HomePage.scss'; // Import the SCSS file
import Footer from "./Footer"; // Corrected import path

const HomePage = () => {

  <section className="preloader">
    <div className="spinner">
        <span className="sk-inner-circle"></span>
    </div>
</section>
  return (
    <div>

<body>

<main>

    <section className="sign-in-form section-padding">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 mx-auto col-12">

                    <h1 className="hero-title text-center mb-5">Sign In</h1>

                    <div className="row">
                        <div className="col-lg-8 col-11 mx-auto">
                            <form role="form" method="post">

                                <div className="form-floating mb-4 p-0">
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />

                                    <label for="email">Email address</label>
                                </div>

                                <div className="form-floating p-0">
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" required />

                                      

                                    <label for="password">Password</label>
                                </div>

                                <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                                    Sign in
                                </button>

                                <p className="text-center">Don’t have an account? <a href="sign-up.html">Create One</a></p>

                            </form>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>

</main>

<Footer />



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
