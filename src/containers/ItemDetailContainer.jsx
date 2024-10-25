
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import gamaMedia from '../assets/img/imagen1.jpg';
import oficce from '../assets/img/imagen2.jpg';
import gamaAlta from '../assets/img/imagen3.jpg';
import gamaSuper from '../assets/img/imagen4.jpg';
import samsung from '../assets/img/imagen5.jpg';
import motorola from '../assets/img/imagen6.jpg';
import xiaomi from '../assets/img/imagen7.jpg';
import iphone from '../assets/img/imagen8.jpg';
import ps5 from '../assets/img/imagen9.jpg';
import ps4 from '../assets/img/imagen10.jpg';
import xbox from '../assets/img/imagen11.jpg';
import nintendo from '../assets/img/imagen12.jpg';


const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productsArray = [
      { id: 1, name: 'Computadora gama media', price: 78.258, category: 'Computadoras', img: gamaMedia },
      { id: 2, name: 'Computadora ofice', price: 11.998, category: 'Computadoras', img: oficce },
      { id: 3, name: 'Computadora gama alta', price: 214.321, category: 'Computadoras', img: gamaAlta },
      { id: 4, name: 'Super Computadora', price: 487.999, category: 'Computadoras', img: gamaSuper },
      { id: 5, name: 'Samsung', price: 800.999, category: 'Celulares', img: samsung },
      { id: 6, name: 'Motorola', price: 650.999, category: 'Celulares', img: motorola },
      { id: 7, name: 'Xiaomi', price: 720.000, category: 'Celulares', img: xiaomi },
      { id: 8, name: 'Iphone', price: 999.999, category: 'Celulares', img: iphone},
      { id: 9, name: 'Ps5', price: 980.999, category: 'Consolas', img: ps5 },
      { id: 10, name: 'Ps4', price: 540.999, category: 'Consolas', img: ps4 },
      { id: 11, name: 'Xbox', price: 600.999, category: 'Consolas', img: xbox },
      { id: 12, name: 'Nintendo wii', price: 380.999, category: 'Consolas', img: nintendo },
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
