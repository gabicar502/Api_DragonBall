// src/Pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>¡Oops! Página no encontrada.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
