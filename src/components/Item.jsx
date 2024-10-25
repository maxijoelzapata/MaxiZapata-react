// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Item.css';

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <img className="item-img" src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="item-link">Detalles</Link>
    </div>
  );
};

export default Item;
