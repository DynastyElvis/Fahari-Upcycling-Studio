// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Contacts from './components/Contacts';
import ShopAll from './components/ShopAll';
import Stories from './components/Stories';
import Trending from './components/Trending';
import FAQ from './components/faq';  // Change the component name to capitalize
import SignIn from './components/signIn';  // Change the component name to capitalize
import SignUp from './components/signUp';  // Change the component name to capitalize
import Navbar from './components/Navbar';
import ProductDetails from './components/productDetails';  // Change the component name to capitalize

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/HomePage" component={HomePage} />
          <Route path="/AboutPage" component={AboutPage} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/ShopAll" component={ShopAll} />
          <Route path="/Stories" component={Stories} />
          <Route path="/Trending" component={Trending} />
          <Route path="/productDetails" component={ProductDetails} />
          <Route path="/faq" component={FAQ} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/Navbar" component={Navbar} />
          <Redirect to="/HomePage" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
