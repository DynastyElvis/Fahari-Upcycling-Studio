import React from "react";
import "./HomePage.scss"; // Import the SCSS file
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <section className="preloader">
        <div className="spinner">
          <span className="sk-inner-circle"></span>
        </div>
      </section> */}

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
            <img
              src="/logos/Colored-Icon.png"
              alt="Little Fashion Logo"
              style={{ width: "60px", height: "auto" }}
            />
          </Link>

          <Link to="/" className="navbar-brand">
            <strong>
              <span>Upcycling </span> Studio
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
                <Link to="/ShopAll" className="nav-link">
                  Shop All
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Stories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutPage" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Contacts" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="d-none d-lg-block">
              <a href="sign-in.html" className="bi-person custom-icon me-3"></a>
              <Link to="/productDetails" className="bi-bag custom-icon"></Link>
              {/* <Link to="/productDetails" className="bi-bag custom-icon">
                <span className="trending-text">Trending</span>
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;















// import React from "react";
// import "./HomePage.scss"; // Import the SCSS file
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <Link to="/" className="navbar-brand">
//           <img
//             src="/logos/Colored-Icon.png"
//             alt="Little Fashion Logo"
//             style={{ width: "60px", height: "auto" }}
//           />
//         </Link>

//         <Link to="/" className="navbar-brand">
//           <strong>
//             <span>Upcycling </span> Studio
//           </strong>
//         </Link>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/ShopAll" className="nav-link">
//                 Shop All
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 Stories
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/AboutPage" className="nav-link">
//                 About Us
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to="/Contacts" className="nav-link">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           <div className="d-none d-lg-block">
//             <a href="sign-in.html" className="bi-person custom-icon me-3"></a>
//             <Link to="/productDetails" className="bi-bag custom-icon"></Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
