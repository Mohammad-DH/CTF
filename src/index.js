import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import API from "./context/API";

ReactDOM.render(
  <React.StrictMode>
    <API>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </API>
  </React.StrictMode>,
  document.getElementById('root')
);

