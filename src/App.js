import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Page from './Components/Page.js';
import Preview from './Components/Preview.js';
import Helmet from 'react-helmet';
import PrismicConfig from './Prismic/PrismicConfig';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Helmet>
          <title>{PrismicConfig.siteTitle}</title>
        </Helmet>
        <Header />
        <div className="appContent">
          <Switch>
            <Route exact path='/' render={routeProps => <Page {...routeProps} />} />
            <Route exact path="/preview" render={routeProps => <Preview {...routeProps} />} />
            <Route path='/pages/:slug' render={routeProps => <Page {...routeProps} />} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;