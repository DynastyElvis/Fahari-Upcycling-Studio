// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Contacts from './components/Contacts';
import ShopAll from './components/ShopAll';
import Stories from './components/Stories';
import Trending from './components/Trending';

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
          <Redirect to="/HomePage" /> {/* Redirect to home page if no matching route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
