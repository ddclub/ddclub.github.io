import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import PrimaryPage from './PrimaryPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/pages/:slug" component={PrimaryPage}/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*
<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p>
<Button color="danger">Danger!</Button>
</div>
*/
