import { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./Componentes/Header/Header";
import CardTest from "./Componentes/CardTest/CardTest";
import AcercaDe from './Pages/AcercaDe';
import DetallePersonaje from './Pages/DetallePersonaje';
import Masculino from './Pages/Masculino';
import Femenino from './Pages/Femenino';
import Particulas from "./Efectos/ParticlesKi";
import NotFound from './Pages/NotFound';
import "./App.css";

const App = () => {
  const [arrayObjects, setArrayObjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const location = useLocation();

  const fetchCharacters = useCallback(async (page) => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
      const data = await response.json();

      if (data.items.length > 0) {
        const nuevos = [...arrayObjects, ...data.items];

        // Eliminar duplicados por ID y ordenar por ID ascendente
        const unicos = Array.from(new Map(nuevos.map(obj => [obj.id, obj])).values());
        unicos.sort((a, b) => a.id - b.id);

        setArrayObjects(unicos);
        setCurrentPage(page);
        if (page >= data.meta.totalPages) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, arrayObjects]);

  // Cargar personajes si estamos en inicio
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0 });
      setArrayObjects([]);
      setCurrentPage(1);
      setHasMore(true);
      fetchCharacters(1);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (nearBottom && hasMore && !loading) {
        fetchCharacters(currentPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, hasMore, loading, fetchCharacters]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <Header />
      <Particulas />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={
            <main className="card-container">
              {arrayObjects.length > 0 ? (
                arrayObjects.map(item => (
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
                !loading && <p style={{ textAlign: 'center', padding: '1rem' }}>No hay personajes.</p>
              )}
              {loading && <p style={{ textAlign: 'center', padding: '1rem' }}>Cargando más personajes...</p>}
            </main>
          } />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/personaje/:id" element={<DetallePersonaje />} />
          <Route path="/masculino" element={<Masculino />} />
          <Route path="/femenino" element={<Femenino />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
