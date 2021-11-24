import React from 'react';
import ReactDOM from 'react-dom';
import Barra from './components/barra/barra';
import Main from './components/Main';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Barra/>
    <Main/>
    </React.StrictMode>,
  document.getElementById('root')
);