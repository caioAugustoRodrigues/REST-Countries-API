import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import './css/main.css';
import Home from './pages/home';
import Details from './pages/details';
import Navbar from './components/navbar';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Home path="/" />
      <Details path="/details/:countryCode"/>
    </Router>
  </React.StrictMode>,
  root
);

