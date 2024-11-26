import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import RouterCustom from './router';
import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(React.version);
// console.log(ReactDOM.version);
root.render(
  <React.StrictMode>
    <Router>
      <RouterCustom />
    </Router>
  </React.StrictMode>
);
reportWebVitals();
