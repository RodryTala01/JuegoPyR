var input = document.getElementById("nroJugadores");
input.addEventListener("input", function () {
  if (input.value < 2) {
    input.value = "";
  }
});

function crearJugadores() {
  var cdad = document.getElementById("nroJugadores");
  var divCdad = document.getElementById("nroDeJugadores");
  var eldiv = document.getElementById("jugadores");
  var boton = document.getElementById("botonPlay");
  eldiv.innerHTML = ""; // Limpiamos el contenido anterior de eldiv

  for (let i = 0; i < cdad.value; i++) {
    // Creamos los elementos HTML manualmente
    var label = document.createElement("label");
    label.setAttribute("for", `jugador${i + 1}`);
    label.textContent = `Jugador ${i + 1}: >`;
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", `jugador${i + 1}, inputJugador`);
    input.setAttribute("class", "inputJugador");


    input.addEventListener("input", () => {
      // Verificamos si todos los campos de entrada han sido llenados
      var todosLlenos = true;
      var inputs = document.getElementsByClassName("inputJugador");
      for (var j = 0; j < inputs.length; j++) {
        if (inputs[j].value === "") {
          todosLlenos = false;
          break;
        }
      }

      // Si todos los campos de entrada han sido llenados, mostramos el botón de jugar
      if (todosLlenos) {
        boton.style.display = "block";
      } else {
        boton.style.display = "none";
      }
    });


    // Agregamos los elementos al div
    eldiv.appendChild(label);
    eldiv.appendChild(input);
    eldiv.appendChild(document.createElement("br"));
  } divCdad.style.marginTop = "4rem";
}


function animarBoton() {
  var boton = document.getElementById("botonPlay");
  var boton2 = document.getElementById("botonPlay2");

  boton.style.display = "none";
  boton2.style.display = "block";
  boton2.style.cursor = "default";

  setTimeout(function () {
    boton2.style.transform = "scale(25)";
    boton2.style.backgroundColor = "rgb(177, 4, 4)";
  }, 100);
  document.body.style.overflow = "hidden";
  boton2.style.transition = "transform 3s ease-in-out, background-color 3s ease";


  setTimeout(function () {
    comenzarJuego();
  }, 3000);


}

function comenzarJuego() {
  var inputs = document.getElementsByClassName("inputJugador");
  var pregunta1 = document.getElementById("pregunta1");

  var boton = document.getElementById("botonPlay");
  var boton2 = document.getElementById("botonPlay2");
  var nroJugadores = document.getElementById("nroDeJugadores")
  var eldiv = document.getElementById("jugadores");


  var nombresJugadores = [];
  for (var i = 0; i < inputs.length; i++) {
    nombresJugadores.push(inputs[i].value);
  }

  var cantidadJugadores = nombresJugadores.length;
  var nroDelJugadorQueJuega = Math.floor(Math.random() * cantidadJugadores);
  var nombreDeljugadorQueJuega = nombresJugadores[nroDelJugadorQueJuega].toUpperCase();

  var divJugadorQueEmpieza = document.getElementById("jugadorQueEmpieza");
  var pregunta1 = document.getElementById("pregunta1");

  boton.remove();
  boton2.remove();
  nroJugadores.remove();
  eldiv.remove();

  setTimeout(function () {
    divJugadorQueEmpieza.style.transform = "scale(1)";
  }, 100);
  divJugadorQueEmpieza.style.transition = "transform 3s";

  divJugadorQueEmpieza.innerHTML = "Comienza respondiendo " + nombreDeljugadorQueJuega + ". <br>QUE NADIE TE ESPÍE";


  setTimeout(function () {
    divJugadorQueEmpieza.style.transform = "translate(0%, -200%) scale(0.4)";
    divJugadorQueEmpieza.style.transition = "transform 1.4s";
    pregunta1.style.display = "block";
  }, 4000);


  var pregunta1 = document.getElementById("pregunta1");

  setTimeout(function () {
    pregunta1.classList.add("mostrar");
  }, 5400);
}

function siguiente(numPregunta) {
  var pregunta = document.getElementById("pregunta" + numPregunta);
  var preguntaAnt = document.getElementById("pregunta" + (numPregunta - 1));

  preguntaAnt.classList.add("hiddenSig");
  preguntaAnt.classList.remove("mostrar");

  setTimeout(function () {
    pregunta.classList.remove("hidden");
    pregunta.style.display = "block";
    pregunta.classList.add("mostrar");
  }, 1000);
}



var opciones = document.getElementsByClassName("opcion");
var seleccionada = null;

for (var i = 0; i < opciones.length; i++) {
  opciones[i].addEventListener("click", function () {
    if (seleccionada) {
      seleccionada.classList.remove("seleccionada");
    }
    this.classList.add("seleccionada");
    seleccionada = this;
  });
}

var respuestas = [];

document.getElementById("btn-continuar").addEventListener("click", function () {
  // Obtener la opción seleccionada
  var seleccionada = document.querySelector('.opcion.active');

  if (seleccionada === null) {
    alert("Selecciona una opción");
  } else {
    // Agregar la respuesta seleccionada a la lista
    respuestas.push(seleccionada.textContent.trim());

    // Puedes hacer algo con la lista de respuestas aquí
    console.log("Respuestas almacenadas:", respuestas);
  }
});

// Añadir clase 'active' al hacer clic en un botón de opción
var botonesOpcion = document.querySelectorAll('.opcion');
botonesOpcion.forEach(function (boton) {
  boton.addEventListener('click', function () {
    botonesOpcion.forEach(function (b) {
      b.classList.remove('active');
    });
    boton.classList.add('active');
  });
});

