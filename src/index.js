import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";

//CSS Files
import './Styles/index.css';
import './Styles/homepage.css';
import './Styles/standardpage.css';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
