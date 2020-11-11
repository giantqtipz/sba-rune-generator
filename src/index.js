import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Logo } from './imgs/index';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="header">
      <a href="http://www.sba-nyc.com" target="_blank" rel="noreferrer">
        <img src={Logo} alt="SBA Logo"/>
      </a>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
