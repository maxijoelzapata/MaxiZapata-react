import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CompuMaxi</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/Computadoras">Computadoras</Link></li>
        <li><Link to="/category/Celulares">Celulares</Link></li>
        <li><Link to="/category/Consolas">Consolas</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
