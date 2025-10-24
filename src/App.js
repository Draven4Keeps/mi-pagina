import React from "react";
import Mensaje from "./Mensaje";
import Formulario from "./Formulario";
import "./App.css";

function App() {
  return (
    <div className="App">
    {/* Corazones con imagen */}
{[...Array(15)].map((_, i) => (
  <img
    key={i}
    src="/Cora.png"
    alt="corazon flotante"
    className="heart-img"
    style={{
      left: `${Math.random() * 95}%`,

      animationDuration: `${5 + Math.random() * 5}s`,
      animationDelay: `${Math.random() * 5}s`
    }}
  />
))}

{[...Array(10)].map((_, i) => (
  <img
    key={`rose-${i}`}
    src="/Rosa.png"
    alt="rosa flotante"
    className="rosa-img"
    style={{
      left: `${Math.random() * 95}%`,
      
      animationDuration: `${6 + Math.random() * 6}s`,
      animationDelay: `${Math.random() * 5}s`
    }}
  />
))}

      <header className="header-container">
        <img src="/Titulo.png" alt="izquierda" className="header-icon" />
        <h1>Holap, bienvenida:p </h1>
        <img src="/Titulo.png" alt="derecha" className="header-icon" />
      </header>
      <Mensaje />
      <Formulario />
      <footer>
        <p>Mucha suerte en el correo que te llegara:3</p>
      </footer>
    </div>
  );
}

export default App;
