import React from 'react';
import './custom.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import LeadsState from './context/leads/LeadsState';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertState>
        <AuthState>
          <LeadsState>
            <App />
          </LeadsState>
        </AuthState>
      </AlertState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

