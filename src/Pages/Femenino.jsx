import { useEffect, useState } from "react";
import CardTest from "../Componentes/CardTest/CardTest";

const Femenino = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtenerTodos = async () => {
      let pagina = 1;
      let todos = [];
      let totalPages = 1;

      do {
        const res = await fetch(`https://dragonball-api.com/api/characters?page=${pagina}`);
        const data = await res.json();
        totalPages = data.meta.totalPages;

        const filtrados = data.items.filter(p => p.gender === "Female");
        todos = [...todos, ...filtrados];

        pagina++;
      } while (pagina <= totalPages);

      setPersonajes(todos);
    };

    obtenerTodos();
  }, []);

  return (
    <main className="card-container">
      {personajes.length > 0 ? (
        personajes.map(item => (
          <CardTest
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.image}
            especies={item.race}
            genero={item.gender}
            ki={item.ki}
            maxKi={item.maxKi}
            affiliation={item.affiliation}
            description={item.description}
          />
        ))
      ) : (
        <p style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>
          Cargando personajes femeninos...
        </p>
      )}
    </main>
  );
};

export default Femenino;



