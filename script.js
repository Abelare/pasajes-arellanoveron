// script.js

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const resultados = document.getElementById("resultados");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const origen = document.getElementById("origen").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const fecha = document.getElementById("fecha").value;
    const tipo = document.getElementById("tipo").value;

    if (!origen || !destino || !fecha || !tipo) {
      resultados.innerHTML = `<p style="color:red;">Por favor, completa todos los campos.</p>`;
      return;
    }

    // Simulación de resultados
    const opciones = {
      avion: [
        { empresa: "Ryanair", precio: "29.99€" },
        { empresa: "Vueling", precio: "34.50€" },
        { empresa: "EasyJet", precio: "39.00€" }
      ],
      tren: [
        { empresa: "Renfe", precio: "19.99€" },
        { empresa: "Ouigo", precio: "22.50€" },
        { empresa: "Iryo", precio: "25.00€" }
      ],
      bus: [
        { empresa: "Alsa", precio: "14.99€" },
        { empresa: "FlixBus", precio: "16.50€" },
        { empresa: "BlaBlaBus", precio: "18.00€" }
      ]
    };

    const resultadosHTML = opciones[tipo]
      .map(opcion => `<li>${opcion.empresa} – ${opcion.precio}</li>`)
      .join("");

    resultados.innerHTML = `
      <h2>Resultados para ${tipo} de ${origen} a ${destino} el ${fecha}</h2>
      <ul>${resultadosHTML}</ul>
    `;
  });
});
