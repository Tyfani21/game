import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import Barra from './components/navBar/barra'
import Footer from './components/footer/footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Barra/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={"<Login />"} />
        <Route path="/register" element={"< Register/>"} />
        <Route path="/profile" element={"< Profile/>"} />
        <Route path="/game" element={"<Game />"} />
        <Route path="/wishlist" element={"<WishList />"} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </React.StrictMode>,
  document.getElementById('root')
);