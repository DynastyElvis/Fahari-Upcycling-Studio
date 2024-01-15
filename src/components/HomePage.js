// HomePage.js
import React from "react";
import "./HomePage.scss"; // Import the SCSS file
import Navbar from "./Navbar"; // Corrected import path
import Footer from "./Footer"; // Corrected import path
import { Link } from "react-router-dom";
import ShopAll from "./ShopAll"; // Make sure to provide the correct path

const HomePage = () => {
  <section className="preloader">
    <div className="spinner">
      <span className="sk-inner-circle"></span>
    </div>
  </section>;
  
  return (
    
    <div>
      <Navbar />

      <section className="slick-slideshow">
        <div className="slick-custom">
          <img
            src="images/slideshow/medium-shot-business-women-high-five.jpeg"
            className="img-fluid"
            alt=""
          />

          <div className="slick-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-10">
                  <h1 className="slick-title">Upcycled Creations</h1>

                  <p className="lead text-white mt-lg-3 mb-lg-5">
                    Reviving Beauty from Discarded Treasures: Explore the Art of
                    Upcycling at the Kenya Airways Innovation Hub's Upcycling
                    Studio. Elevating Discarded into Desirable, One Unique
                    Creation at a Time
                  </p>
                  <Link to="/ShopAll" className="btn custom-btn">
                    {" "}
                    SHOP ALL
                  </Link>

                  {/* <a href="about.html" className="btn custom-btn">SHOP ALL</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="slick-custom">
            <img src="images/slideshow/team-meeting-renewable-energy-project.jpeg" className="img-fluid" alt=""/>

            <div className="slick-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-10">
                            <h1 className="slick-title">New Design</h1>

                            <p className="lead text-white mt-lg-3 mb-lg-5">Please share this Little Fashion template to your friends. Thank you for supporting us.</p>

                            <a href="product.html" className="btn custom-btn">Explore products</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="slick-custom">
            <img src="images/slideshow/two-business-partners-working-together-office-computer.jpeg" className="img-fluid" alt=""/>

            <div className="slick-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-10">
                            <h1 className="slick-title">Talk to us</h1>

                            <p className="lead text-white mt-lg-3 mb-lg-5">Tooplate is one of the best HTML CSS template websites for everyone.</p>

                            <a href="contact.html" className="btn custom-btn">Work with us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      </section>

      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5">
                Quisque eu <span>efficitur</span> sapien
              </h2>
            </div>

            <div className="col-lg-2 col-12 mt-auto mb-auto">
              <ul
                className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Introduction
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-youtube-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-youtube"
                    type="button"
                    role="tab"
                    aria-controls="pills-youtube"
                    aria-selected="true"
                  >
                    How we work?
                  </button>
                </li>

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-skill-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-skill"
                    type="button"
                    role="tab"
                    aria-controls="pills-skill"
                    aria-selected="false"
                  >
                    Capabilites
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-lg-10 col-12">
              <div className="tab-content mt-2" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img
                        src="https://img.freepik.com/free-photo/different-modern-vases-with-blue-red-light_23-2149835474.jpg?w=2000&t=st=1705062316~exp=1705062916~hmac=6d34129897d1a2c643f8aa3524c2085b626131768ab0a6e5bff8b266751f4e00"
                        className="img-fluid"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">
                          Good <span>Design</span> <br />
                          Ideas for <span>your</span> fashion
                        </h4>
                        <p>
                          In vehicula felis a justo tristique, nec posuere{" "}
                          <strong>
                            <Link to="/signIn">Sign In</Link>
                          </strong>{" "}
                          /{" "}
                          <strong>
                            <Link to="/signUp">Sign Up</Link>
                          </strong>{" "}
                          pages, product listing / product detail, about, FAQs,
                          and contact page.
                        </p>
                        {/* <p>In vehicula felis a justo tristique, nec posuere <a href="sign-in.html">sign in</a> / <a href="sign-up.html">sign up</a> pages, product listing / product detail, about, FAQs, and contact page.</p> */}

                        <p>
                          Sed auctor, ligula vel finibus laoreet, justo odio
                          iaculis est, a iaculis purus tellus ut ex. Ut in
                          varius ligula. Proin nec dapibus elit.
                        </p>

                        <div className="mt-2 mt-lg-auto">
                          <Link to="/AboutPage" className="custom-link mb-2">
                            Learn more about us
                            <i className="bi-arrow-right ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-youtube"
                  role="tabpanel"
                  aria-labelledby="pills-youtube-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="ratio ratio-16x9">
                        <iframe
                          src="https://www.youtube-nocookie.com/embed/f_7JqPDWhfw?controls=0"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>

                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">Life at Studio</h4>

                        <p>
                          Sed auctor, ligula vel finibus laoreet, justo odio
                          iaculis est, a iaculis purus tellus ut ex. Ut in
                          varius ligula. Proin nec dapibus elit.
                        </p>

                        <p>
                          Integer vel tristique dui. Aenean nec metus vel erat
                          efficitur fermentum. Duis congue bibendum risus, vel
                          accumsan purus. Sed odio, in finibus neque. Donec
                          ultricies fringilla tortor.
                        </p>

                        <div className="mt-2 mt-lg-auto">
                          <Link to="/Contacts" className="custom-link mb-2">
                            Work with us
                            <i className="bi-arrow-right ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="pills-skill"
                  role="tabpanel"
                  aria-labelledby="pills-skill-tab"
                >
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <img
                        src="https://img.freepik.com/free-photo/different-vases-with-yellow-purple-light-assortment_23-2149835481.jpg?w=2000&t=st=1705062289~exp=1705062889~hmac=d9625553497105173ae9c690af5589349919f06eca23e8ea6c75b37affd5779c"
                        className="img-fluid"
                        alt=""
                      />
                    </div>

                    <div className="col-lg-5 col-12">
                      <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">What can help you?</h4>

                        <p>
                          Integer vel tristique dui. Aenean nec metus vel erat
                          efficitur fermentum. Duis congue bibendum risus, Sed
                          ac tincidunt odio, in finibus neque. Donec ultricies
                          fringilla tortor.
                        </p>

                        <div className="skill-thumb mt-3">
                          <div>
                            <strong>Branding</strong>
                            <span className="float-end">90%</span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-primary"
                                role="progressbar"
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            <strong>Design & Strategy</strong>
                            <span className="float-end">70%</span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-primary"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            <strong>Online Platform</strong>
                            <span className="float-end">80%</span>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-primary"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 mt-lg-auto">
                          <Link to="/ShopAll" className="custom-link mb-2">
                            Explore products
                            <i className="bi-arrow-right ms-2"></i>
                          </Link>
                          {/* <a href="products.html" className="custom-link mb-2">
                                                Explore products
                                                <i className="bi-arrow-right ms-2"></i>
                                            </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="front-product">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <img
                src="https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196699.jpg?w=2000&t=st=1705063035~exp=1705063635~hmac=8e6ac923e652d18b5ac32f4fcc34d1f84569487c9d3c53537a27d36f18f11526"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-12">
              <div className="px-5 py-5 py-lg-0">
                <h2 className="mb-4">
                  <span>Retail</span> shop owners
                </h2>

                <p className="lead mb-4">
                  Credits go to Unsplash and FreePik websites for images used in
                  this Little Fashion by Tooplate.
                </p>

                <Link to="/shopAll" className="custom-link">
                  Explore Products
                  <i className="bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-product section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-5">Featured Products</h2>
            </div>

            <div className="col-lg-4 col-12 mb-3">
              <div className="product-thumb">
                <Link to="/productDetails">
                  <img
                    src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg"
                    className="img-fluid product-image"
                    alt=""
                  />
                </Link>

                <div className="product-top d-flex">
                  <span className="product-alert me-auto">New Arrival</span>

                  {/* <a href="#" className="bi-heart-fill product-icon"></a> */}
                </div>

                <div className="product-info d-flex">
                  <div>
                    <h5 className="product-title mb-0">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Tree pot
                      </a>
                    </h5>

                    <p className="product-p">
                      Original package design from house
                    </p>
                  </div>

                  <small className="product-price text-muted ms-auto mt-auto mb-5">
                    $25
                  </small>
                </div>
              </div>
            </div>
            {
              <div className="col-lg-4 col-12 mb-3">
                <div className="product-thumb">
                  <a href="product-detail.html">
                    <img
                      src="images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg"
                      className="img-fluid product-image"
                      alt=""
                    />
                  </a>

                  {/* <div className="product-top d-flex">
                            <span className="product-alert">Low Price</span>

                            <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                        </div> */}

                  <div className="product-info d-flex">
                    <div>
                      <h5 className="product-title mb-0">
                        <a
                          href="product-detail.html"
                          className="product-title-link"
                        >
                          Fashion Set
                        </a>
                      </h5>

                      <p className="product-p">Costume Package</p>
                    </div>

                    <small className="product-price text-muted ms-auto mt-auto mb-5">
                      $35
                    </small>
                  </div>
                </div>
              </div>
            }

            <div className="col-lg-4 col-12">
              <div className="product-thumb">
                <a href="product-detail.html">
                  <img
                    src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg"
                    className="img-fluid product-image"
                    alt=""
                  />
                </a>

                <div className="product-top d-flex">
                  <a
                    href="#"
                    className="bi-heart-fill product-icon ms-auto"
                  ></a>
                </div>

                <div className="product-info d-flex">
                  <div>
                    <h5 className="product-title mb-0">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Juice Drinks
                      </a>
                    </h5>

                    <p className="product-p">Nature made another world</p>
                  </div>

                  <small className="product-price text-muted ms-auto mt-auto mb-5">
                    $45
                  </small>
                </div>
              </div>
            </div>

            <div className="col-12 text-center">
              <Link to="/ShopAll" className="view-all">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
