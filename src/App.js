import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="appContent">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}  component={Page} />
          <Route path={`${process.env.PUBLIC_URL}/:slug`}  component={Page} />
          <Route component={Page} />
        </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;