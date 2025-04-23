import { useState, useEffect } from 'react';
import logo from '../../img/Logo.png';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = ({ total }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Contador actualizado: " + counter);
  });

  useEffect(() => {
    console.log("Se cargó la página con contador: " + counter);
  }, []);

  useEffect(() => {
    console.log("Algo pasó con el estado");
  }, [counter]);

  return (
    <header className="header-dragonball">
      <img src={logo} alt="Dragon Ball API Logo" className="logo-dragonball" />
      <h1>Dragon Ball Universe</h1>
      <p>Explora a tus personajes favoritos</p>

      {/* Barra de navegación */}
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/masculino">Masculino</Link>
        <Link to="/femenino">Femenino</Link>
        <Link to="/acerca-de">Acerca de</Link>
      </nav>

      
    </header>
  );
};

export default Header;
