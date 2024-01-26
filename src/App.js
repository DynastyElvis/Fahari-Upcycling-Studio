// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Contacts from './components/Contacts';
import ShopAll from './components/ShopAll';
import Stories from './components/Stories';
import Trending from './components/Trending';
import FAQ from './components/faq';  // Change the element name to capitalize
import SignIn from './components/signIn';  // Change the element name to capitalize
import SignUp from './components/signUp';  // Change the element name to capitalize
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductDetails from './components/productDetails';  // Change the element name to capitalize

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/HomePage" element={<HomePage/>} />
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/ShopAll" element={<ShopAll/>} />
          <Route path="/product/:productID" element={<ProductDetails/>} />
          <Route path="/Stories" element={<Stories/>} />
          <Route path="/Trending" element={<Trending/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/Footer" element={<Footer/>} />
          {/* <Redirect to="/HomePage" /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
