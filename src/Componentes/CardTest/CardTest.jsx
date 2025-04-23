import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import './CardTest.css';

const CardTest = ({ id, name, img, especies, genero, ki, maxKi, affiliation, description }) => {
  return (
    <Tooltip
      title={description ? description : "Sin descripción disponible"}
      placement="top"
      arrow
      classes={{ tooltip: 'custom-tooltip', arrow: 'custom-arrow' }}
    >
      {/* Enlace a la vista detallada del personaje */}
      <Link to={`/personaje/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card className="card-dragonball">
          <div className="card-img-container">
            <CardMedia
              component="img"
              image={img}
              alt={`Imagen de ${name}`}
              className="card-img"
              sx={{
                height: '100%',
                width: 'auto',
                objectFit: 'cover', 
                objectPosition: 'top center',
                display: 'block',
                maxWidth: '100%',
              }}
            />
          </div>

          <div className="card-info-container">
            <CardContent className="card-content">
              <Typography gutterBottom variant="h6" component="div" className="character-name">
                {name}
              </Typography>
              <Typography variant="body2" className="species-gender">
                {especies} - {genero}
              </Typography>
            </CardContent>

            <CardContent className="card-footer">
              <Typography variant="body2"><strong>Base KI:</strong> {ki}</Typography>
              <Typography variant="body2"><strong>Total KI:</strong> {maxKi}</Typography>
              <Typography variant="body2">
                <strong>Affiliation:</strong> <span className="highlight">{affiliation}</span>
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Link>
    </Tooltip>
  );
};

export default CardTest;



