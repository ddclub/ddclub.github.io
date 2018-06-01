import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import PrimaryPage from './PrimaryPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          
            <Route exact path="/" component={PrimaryPage}/>
            <Route exact path="/:slug" component={PrimaryPage} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;