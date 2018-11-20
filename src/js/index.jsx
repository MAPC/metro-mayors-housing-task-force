import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/index.scss';

import './polyfills/array-from';
import './polyfills/array-includes';

import App from './components/App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
