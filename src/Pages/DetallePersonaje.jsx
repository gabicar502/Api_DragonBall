import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
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
        <div style={{ marginTop: "2rem" }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'orange', mb: 2 }}>
            Fases / Transformaciones
          </Typography>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem"
          }}>
            {personaje.transformations.map(fase => (
              <Card key={fase.id}
                sx={{
                  width: 240,
                  height: 340,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#fff3e0",
                  boxShadow: 4,
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              >
                <CardMedia
                  component="img"
                  image={fase.image}
                  alt={fase.name}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "contain",
                    backgroundColor: "#fff"
                  }}
                />
                <CardContent sx={{ textAlign: "center", padding: "0.5rem" }}>
                  <Typography variant="body1" fontWeight="bold">
                    {fase.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetallePersonaje;
