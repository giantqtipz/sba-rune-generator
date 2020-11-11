import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Logo } from './imgs/index';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="header">
      <a href="www.sba-nyc.com">
        <img src={Logo} alt="SBA Logo"/>
      </a>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
