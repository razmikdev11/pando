import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './index.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home.js'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/team">
          <Header />
          <div className='page'>Our Team</div>
          <Footer />
        </Route>
        <Route path="/contact">
          <Header />
          <div className='page'>Contact Us</div>
          <Footer />
        </Route>
        <Route path="/news">
          <Header />
          <div className='page'>News</div>
          <Footer />
        </Route>
        <Route path="/services">
          <Header />
          <div className='page'>Our Services</div>
          <Footer />
        </Route>
        <Route path="/about">
          <Header />
          <div className='page'>About Us</div>
          <Footer />
        </Route>
        <Route path="/process">
          <Header />
          <div className='page'>The Process</div>
          <Footer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
