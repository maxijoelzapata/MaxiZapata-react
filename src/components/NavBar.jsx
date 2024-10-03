import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({ title }) => {
    return (
        <nav style={navStyle}>
        {/* Nombre de la tienda (El Taruguito) */}
        <div style={brandStyle}>{title}</div>

      {/* ejemplos de categorias */}
        <ul style={ulStyle}>
            <li><a href="/category/ropa" style={linkStyle}>Alacenas</a></li>
            <li><a href="/category/electronica" style={linkStyle}>Bajo Mesadas</a></li>
            <li><a href="/category/hogar" style={linkStyle}>Placards</a></li>
            <li><a href="/category/deportes" style={linkStyle}>escritorios</a></li>
        </ul>

      {/* Widget del carrito de compras */}
      <CartWidget cantidad={5} /> {/* valor de props */}
    </nav>
    );
};

// Estilos en línea
const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 20px',
    backgroundColor: '#de3510', 
    borderBottom: '4px solid #ddd',
    width: '100%',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
};

const brandStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
};

const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    };

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.1rem',
};

export default NavBar;
