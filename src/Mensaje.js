import React, { useState, useEffect } from "react";
import "./Mensaje.css";

function Mensaje() {
  const textos = [
    "Hola viri, realmente no se cuando estes leyendo esto, pero si me dara mucha pena verte a la cara despues de esto JAJA.",
    "No se si te has dado cuenta, y la verdad es que creo que si y se ha de notar mucho, pero sinceramente siento una fuerte atraccion hacia ti.",
    "Me gustas y demasiado, no me da miedo decirtelo (por aqui, claro JAJA).",
    "Eres una niña muy interesante para mi, y me llamas muchisimo la atencion, claro que no nos conocemos por completo y por eso mismo me gustaria que nos empezaramos a conocer un poco más.",
    "Abajo pon tu correo electronico y presiona enviar, te va a llegar una sorpresajajaja"
    
    
  ];

 const [displayedParagraphs, setDisplayedParagraphs] = useState([]); // párrafos ya escritos
  const [currentText, setCurrentText] = useState(""); // texto que se escribe actualmente
  const [textIndex, setTextIndex] = useState(0); // índice del texto actual
  const [charIndex, setCharIndex] = useState(0); // índice del caracter actual

 useEffect(() => {
    if (textIndex < textos.length) {
      if (charIndex < textos[textIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + textos[textIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 40); // velocidad de escritura (ms)
        return () => clearTimeout(timeout);
      } else {
        // Una vez que termina el párrafo actual
        setDisplayedParagraphs((prev) => [...prev, textos[textIndex]]);
        setCurrentText("");
        setCharIndex(0);
        setTextIndex(textIndex + 1);
      }
    }
  }, [charIndex, textIndex, textos]);

  return (
    <div className="mensaje-container">
      {displayedParagraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {currentText && <p>{currentText}</p>}
      <img src="/viri.jpg" alt="Decorativa" />
    </div>
  );
}

export default Mensaje;
