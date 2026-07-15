function TarjetaNoticia({ info }) {
  return (
    <article className="card">
      <div className="card-etiqueta">
        <span>Autor #{info.userId}</span>
      </div>

      <h3>{info.title}</h3>

      <p>{info.body}</p>

      <button>Leer más</button>
    </article>
  );
}

export default TarjetaNoticia;