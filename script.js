document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const resultados = document.getElementById("resultados");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const origen = document.getElementById("origen").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const fecha = document.getElementById("fecha").value;
    const tipo = document.getElementById("tipo").value;

    if (!origen || !destino || !fecha || !tipo) {
      resultados.innerHTML = "<p>Por favor, completa todos los campos.</p>";
      return;
    }

    const opciones = {
      avion: [
        { nombre: "Compañía Económica", precio: "29.99€" },
        { nombre: "Compañía Express", precio: "34.50€" },
        { nombre: "Compañía Flex", precio: "39.00€" }
      ],
      tren: [
        { nombre: "Tren Regional", precio: "19.90€" },
        { nombre: "Tren Rápido", precio: "24.75€" },
        { nombre: "Tren Premium", precio: "31.00€" }
      ],
      bus: [
        { nombre: "Bus Local", precio: "14.50€" },
        { nombre: "Bus Directo", precio: "18.00€" },
        { nombre: "Bus Confort", precio: "22.30€" }
      ]
    };

    const resultadosHTML = opciones[tipo].map(opcion => `
      <div class="card">
        <h3>${opcion.nombre}</h3>
        <p>Precio: ${opcion.precio}</p>
        <p>Ruta: ${origen} → ${destino}</p>
        <p>Fecha: ${fecha}</p>
      </div>
    `).join("");

    resultados.innerHTML = `
      <h2>Resultados para ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h2>
      ${resultadosHTML}
    `;
  });
});
