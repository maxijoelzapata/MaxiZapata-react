// src/containers/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imagen1 from '../assets/images/imagen1.jpg';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productsArray = [
      { id: 1, name: 'Computadora gama media', price: 78.258, category: 'categoria1', img: '' },
      { id: 2, name: 'Computadora ofice', price: 11.998, category: 'categoria1', img: '/assets/images/imagen2.jpg' },
      { id: 3, name: 'Computadora gama alta', price: 214.321, category: 'categoria1', img: '/assets/images/imagen3.jpg' },
      { id: 4, name: 'Super Computadora', price: 487.999, category: 'categoria1', img: '/assets/images/imagen4.jpg' },
      { id: 5, name: 'Samsung', price: 800.999, category: 'categoria2', img: '/assets/images/imagen5.jpg' },
      { id: 6, name: 'Motorola', price: 650.999, category: 'categoria2', img: '/assets/images/imagen6.jpg' },
      { id: 7, name: 'Xiaomi', price: 720.000, category: 'categoria2', img: '/assets/images/imagen7.jpg' },
      { id: 8, name: 'Iphone', price: 999.999, category: 'categoria2', img: '/assets/images/imagen8.jpg' },
      { id: 9, name: 'Ps5', price: 980.999, category: 'categoria3', img: '/assets/images/imagen9.jpg' },
      { id: 10, name: 'Ps4', price: 540.999, category: 'categoria3', img: '/assets/images/imagen10.jpg' },
      { id: 11, name: 'Xbox', price: 600.999, category: 'categoria3', img: '/assets/images/imagen11.jpg' },
      { id: 12, name: 'Nintendo wii', price: 380.999, category: 'categoria3', img: '/assets/images/imagen12.jpg' },
    ];

    const product = productsArray.find(p => p.id === parseInt(productId));

    const productPromise = new Promise((resolve) => {
      setTimeout(() => resolve(product), 1000);
    });

    productPromise.then((data) => {
      setProduct(data);
    });
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name} />
          <p>${product.price}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
