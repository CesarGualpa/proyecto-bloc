import { useEffect, useState } from "react";
import TarjetaNoticia from "./TarjetaNoticia";

function ListaNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la información");
        }

        return response.json();
      })
      .then((data) => {
        setNoticias(data.slice(0, 12));
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <section className="estado-pagina">
        <h2>Cargando noticias...</h2>
        <p>Espera mientras se obtiene la información desde la API.</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="estado-pagina error">
        <h2>Ocurrió un error</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="seccion-noticias">
      <div className="seccion-header">
        <h2>Últimas publicaciones</h2>
        <p>Mostrando 12 noticias obtenidas desde JSONPlaceholder</p>
      </div>

      <div className="grid-noticias">
        {noticias.map((noticia) => (
          <TarjetaNoticia key={noticia.id} info={noticia} />
        ))}
      </div>
    </section>
  );
}

export default ListaNoticias;