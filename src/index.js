import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
// import Post from './Post';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';


  ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
