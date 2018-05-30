import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import { browserHistory } from 'react-router';
import Routes from './routes';


ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
   );
registerServiceWorker();
