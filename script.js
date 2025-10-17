document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const origen = document.getElementById("origen").value.trim();
  const destino = document.getElementById("destino").value.trim();
  const fecha = document.getElementById("fecha").value;
  const tipo = document.getElementById("tipo").value;
  const directo = document.getElementById("directo").checked;
  const hotel = document.getElementById("hotel").checked;

  const iconos = {
    avion: "img/avion.png",
    tren: "img/tren.png",
    bus: "img/bus.png"
  };

  const opciones = {
    avion: [
      { nombre: "Ryanair", precio: "29.99€", duracion: "1h 15min", directo: true },
      { nombre: "Vueling", precio: "34.50€", duracion: "1h 20min", directo: false }
    ],
    tren: [
      { nombre: "Renfe", precio: "19.90€", duracion: "2h 45min", directo: true },
      { nombre: "Iryo", precio: "24.75€", duracion: "2h 30min", directo: true }
    ],
    bus: [
      { nombre: "Alsa", precio: "14.50€", duracion: "4h 30min", directo: false },
      { nombre: "FlixBus", precio: "18.00€", duracion: "4h 15min", directo: true }
    ]
  };

  let resultados = opciones[tipo];

  if (directo) {
    resultados = resultados.filter(op => op.directo);
  }

  const html = resultados.map(op => `
    <div class="card">
      <img src="${iconos[tipo]}" alt="${tipo}" />
      <h3>${op.nombre}</h3>
      <p>${origen} → ${destino}</p>
      <p>${fecha}</p>
      <p>${op.precio} · ${op.duracion}</p>
      ${hotel ? "<p>+ Hotel incluido</p>" : ""}
    </div>
  `).
