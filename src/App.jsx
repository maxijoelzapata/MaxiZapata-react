import React from 'react';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      {/* Renderiza el NavBar y pasa el nombre de la tienda como props */}
      <NavBar title="El Taruguito" />

      {/* Contenido principal */}
      <h1 style={mainContentStyle}>Bienvenido a El Taruguito</h1>
    </div>
  );
};

const mainContentStyle = {
  textAlign: 'center',
  marginTop: '50px',
  fontFamily: 'Arial, sans-serif',
};

export default App;
