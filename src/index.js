import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import Barra from './components/navBar/barra';
import Footer from './components/footer/footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Game from './pages/Game/Game';
import Login from './pages/Login/Login';
import Perfil from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import WishList from './pages/WishList/WishList';
import axios from 'axios'

// axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <Barra/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={< Register/>} />
        <Route path="/profile" element={<Perfil/>} />
        <Route path="/game" element={<Game />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </React.StrictMode>,
  document.getElementById('root')
);