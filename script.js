// Mostrar campo de fecha de vuelta si se selecciona "ida-vuelta"
document.querySelectorAll('input[name="viaje"]').forEach(radio => {
  radio.addEventListener("change", function () {
    const vuelta = document.getElementById("fecha-vuelta-container");
    vuelta.style.display = this.value === "ida-vuelta" ? "block" : "none";
  });
});

// Formulario de búsqueda de viajes
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const origen = document.getElementById("origen").value.trim();
  const destino = document.getElementById("destino").value.trim();
  const fecha = document.getElementById("fecha").value;
  const fechaVuelta = document.getElementById("fecha-vuelta")?.value || "";
  const tipo = document.getElementById("tipo").value;
  const directo = document.getElementById("directo").checked;
  const hotel = document.getElementById("hotel").checked;

  const iconos = {
    avion: "img/logo.png", // temporal hasta que subas img/avion.png
    tren: "img/logo.png",  // temporal hasta que subas img/tren.png
    bus: "img/logo.png"    // temporal hasta que subas img/bus.png
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
      <div class="card-info">
        <h3>${op.nombre}</h3>
        <p>${origen} → ${destino}</p>
        <p>${fecha}${fechaVuelta ? ` → ${fechaVuelta}` : ""}</p>
        <p>${op.precio} · ${op.duracion}</p>
        ${hotel ? "<p>+ Hotel incluido</p>" : ""}
      </div>
    </div>
  `).join("");

  document.getElementById("resultados").innerHTML = html;
});

// Formulario de contacto
document.getElementById('form-contacto')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  try {
    const res = await fetch('http://localhost:3000/api/contacto/enviar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, mensaje })
    });

    const data = await res.json();
    alert(data.mensaje || 'Mensaje enviado correctamente');
  } catch (error) {
    alert('Error al enviar el mensaje');
    console.error('❌ Error:', error);
  }
});

// Traducción automática
const traducciones = {
  es: {
    "destinos-titulo": "Destinos populares",
    "destinos-subtitulo": "Elige entre trenes, autobuses, vuelos y ferris y reserva hoy mismo tu billete perfecto.",
    "destino-barcelona": "Barcelona",
    "precio-barcelona": "Desde 2€",
    "destino-sevilla": "Sevilla",
    "precio-sevilla": "Desde 11€",
    "destino-valencia": "Valencia",
    "precio-valencia": "Desde 10€",
    "destino-malaga": "Málaga",
    "precio-malaga": "Desde 7€",
    "destino-lisboa": "Lisboa",
    "precio-lisboa": "Desde 10€",
    "destino-granada": "Granada",
    "precio-granada": "Desde 23€",
    "destino-paris": "París",
    "precio-paris": "Desde 32€",
    "destino-toledo": "Toledo",
    "precio-toledo": "Desde 7€"
  },
  en: {
    "destinos-titulo": "Popular destinations",
    "destinos-subtitulo": "Choose between trains, buses, flights and ferries and book your perfect ticket today.",
    "destino-barcelona": "Barcelona",
    "precio-barcelona": "From €2",
    "destino-sevilla": "Seville",
    "precio-sevilla": "From €11",
    "destino-valencia": "Valencia",
    "precio-valencia": "From €10",
    "destino-malaga": "Malaga",
    "precio-malaga": "From €7",
    "destino-lisboa": "Lisbon",
    "precio-lisboa": "From €10",
    "destino-granada": "Granada",
    "precio-granada": "From €23",
    "destino-paris": "Paris",
    "precio-paris": "From €32",
    "destino-toledo": "Toledo",
    "precio-toledo": "From €7"
  }
};

// Aplicar traducción al cambiar idioma
document.getElementById("idioma")?.addEventListener("change", function () {
  const idioma = this.value;
  const textos = traducciones[idioma];
  for (const id in textos) {
    const el = document.getElementById(id);
    if (el) el.textContent = textos[id];
  }
});
