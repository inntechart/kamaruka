import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

// styles
import './index.scss';

// components
import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


