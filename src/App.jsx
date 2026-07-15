import "./App.css";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="contenido-principal">
        <ListaNoticias />
      </main>
    </div>
  );
}

export default App;