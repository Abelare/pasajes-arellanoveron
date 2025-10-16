document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const origen = document.getElementById("origen").value;
  const destino = document.getElementById("destino").value;
  const fecha = document.getElementById("fecha").value;
  const tipo = document.getElementById("tipo").value;

  const resultados = document.getElementById("resultados");
  resultados.innerHTML = `
    <h2>Resultados para ${tipo} de ${origen} a ${destino} el ${fecha}</h2>
    <ul>
      <li>Compañía Económica - €29.99</li>
      <li>Compañía Express - €34.50</li>
      <li>Compañía Flex - €39.00</li>
    </ul>
  `;
});

