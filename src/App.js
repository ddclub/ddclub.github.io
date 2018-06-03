import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Page from './Page';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Route exact path="/" component={Page}/>
            <Route exact path="/:slug" component={Page} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;