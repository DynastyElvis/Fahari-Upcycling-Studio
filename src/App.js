// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Contacts from './components/Contacts';
import ShopAll from './components/ShopAll';
import Stories from './components/Stories';
import Trending from './components/Trending';
import faq from './components/faq';
import signIn from './components/signIn';
import signUp from './components/signUp';
import productDetails from './components/productDetails';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/About" component={AboutPage} />         
          <Route path="/Contacts" component={Contacts} />
          <Route path="/HomePage" component={HomePage} /> {/* THIS IS THE MAIN HOMEPAGE ROUTE */}
          <Route path="/ShopAll" component={ShopAll} />
          <Route path="/Stories" component={Stories} />
          <Route path="/Trending" component={Trending} />
          <Route path="/productDetails" component={productDetails} />
          <Route path="/faq" component={faq} />
          <Route path="/signIn" component={signIn} />
          <Route path="/signUp" component={signUp} />
          <Redirect to="/HomePage" /> {/* Redirect to home page if no matching route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
