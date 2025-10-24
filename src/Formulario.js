import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Formulario.css";

function Formulario() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      email: email,
      from_name: "Tadeo Perez"
    };
  
     emailjs
      .send(
        "service_4gvyudi",
        "template_x4f1omb",
        templateParams,
        "ranS0eDRUU0oJn2ie"
      )
      .then(
        (response) => {
          console.log("Correo enviado!", response.status, response.text);
          alert("Gracias! Se ha enviado el link a tu correo.");
          setEmail("");
        },
        (err) => {
            console.error("Error al enviar:", err, err.text);
            alert("Hubo un problema al enviar el correo.");
          }
      );
  };


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
