// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>El Taruguito</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/categoria1">Computadoras</Link></li>
        <li><Link to="/category/categoria2">Celulares</Link></li>
        <li><Link to="/category/categoria3">Consolas</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
