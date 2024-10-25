// src/components/ItemList.jsx
import React from 'react';
import './../styles/ItemList.css'; // Asegúrate de que esta ruta es correcta
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
