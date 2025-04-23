import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './DetallePersonaje.css';


const DetallePersonaje = () => {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => response.json())
      .then(data => setPersonaje(data));
  }, [id]);

  if (!personaje) return <p>Cargando personaje...</p>;

  return (
    <div className="detalle-personaje" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>{personaje.name}</h2>
      <img
        src={personaje.image}
        alt={personaje.name}
        style={{ maxWidth: "300px", borderRadius: "10px" }}
      />
      <p><strong>Raza:</strong> {personaje.race}</p>
      <p><strong>Género:</strong> {personaje.gender}</p>
      <p><strong>Ki:</strong> {personaje.ki}</p>
      <p><strong>Max Ki:</strong> {personaje.maxKi}</p>
      <p><strong>Afiliación:</strong> {personaje.affiliation}</p>
      <p><strong>Descripción:</strong> {personaje.description}</p>

      {/* FASES */}
      {personaje.transformations && personaje.transformations.length > 0 && (
        <div className="fases-transformaciones" style={{ marginTop: "2rem" }}>
          <h3>Fases / Transformaciones</h3>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem"
          }}>
            {personaje.transformations.map(fase => (
              <div key={fase.id} style={{
                background: "#fff3e0",
                padding: "1rem",
                borderRadius: "10px",
                width: "200px",
                boxShadow: "0 4px 8px"
              }}>
                <img
                  src={fase.image}
                  alt={fase.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{fase.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetallePersonaje;
