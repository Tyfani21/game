import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer/footer';
import Barra from './components/navBar/barra';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Barra/>
    <Footer/>
    </React.StrictMode>,
  document.getElementById('root')
);