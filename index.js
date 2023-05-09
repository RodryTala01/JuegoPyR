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
  

function animarBoton() {
  var boton = document.getElementById("botonPlay");
  var boton2 = document.getElementById("botonPlay2");
  var nroJugadores = document.getElementById("nroDeJugadores")
  
  boton.style.display = "none";
  boton2.style.display ="block";
  boton2.style.cursor = "pointer";

  setTimeout(function() {
    boton2.style.transform = "scale(25)";
    boton2.style.backgroundColor = "rgb(177, 4, 4)";
  }, 100);
  boton2.style.transition = "transform 3s ease-in-out";

  setTimeout(function() {
    boton2.style.display = "none";
    nroJugadores.style.display = "none";
  }, 3000);
}