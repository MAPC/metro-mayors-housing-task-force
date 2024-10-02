import React from 'react';
import ReactDOM from 'react-dom/client';
import '../sass/index.scss';

import './polyfills/array-from';
import './polyfills/array-includes';

import App from './components/App.jsx';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
