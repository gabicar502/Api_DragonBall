import React from "react";
import miFoto from "../img/1006148419_1.jpg";
import fernandaFoto from "../img/Fernanda.jpg";
import { FaInstagram } from "react-icons/fa";
import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <div className="acerca-container">
      <h2>Acerca de esta API</h2>
      <p className="acerca-descripcion">
        Esta app muestra personajes de Dragon Ball usando una API pública y esta creada por
      </p>

      <div className="acerca-autores">
        {/* Gabriel */}
        <div className="autor">
          <img src={miFoto} alt="Gabriel" className="acerca-foto" />
          <h3>Gabriel Daniel Cardenas Lozano</h3>
          <p className="autor-desc">Estudiante de Ingeniería de Sistemas</p>
          <a
            href="https://www.instagram.com/daniel_cl2811/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram"
          >
            <FaInstagram className="icono-red" /> Instagram
          </a>
        </div>

        {/* Fernanda */}
        <div className="autor">
          <img src={fernandaFoto} alt="Fernanda" className="acerca-foto" />
          <h3>Laura Fernanda Gonzalez Rivera</h3>
          <p className="autor-desc">Estudiante de Ingeniería de Sistemas</p>
          <a
            href="https://www.instagram.com/fernanda_gr_04?igsh=MWU4ZTc4NzZmMHI2cA=="
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram"
          >
            <FaInstagram className="icono-red" /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
