var input = document.getElementById("nroJugadores");
input.addEventListener("input", function () {
    if (input.value < 2) {
        input.value = "";
    }
});



function crearJugadores() {
    var cdad = document.getElementById("nroJugadores");
    var eldiv = document.getElementById("jugadores");
    eldiv.innerHTML = ""; // Limpiamos el contenido anterior de eldiv
    for (let i = 0; i < cdad.value; i++) {
      // Creamos los elementos HTML manualmente
      var label = document.createElement("label");
      label.setAttribute("for", `jugador[${i}]`);
      label.textContent = `Jugador ${i+1}: >`;
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("id", `jugador[${i}]`);
      input.setAttribute("class", "inputJugador");
      // Agregamos los elementos al div
      eldiv.appendChild(label);
      eldiv.appendChild(input);
      eldiv.appendChild(document.createElement("br"));
    }
  }
  