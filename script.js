const preguntas = [
    {
        pregunta: "¿Que lenguaje se usa para estilos web?",
        opciones: ["HTML", "Java", "CSS", "Python"],
        correcta: 2
    },
    {
        pregunta: "¿Cual lenguaje da logica a la web?",
        opciones: ["CSS", "HMTL", "JavaScript", "PHP"],
        correcta: 2
    },
    {
        pregunta: "¿Que etiqueta crea un boton?",
        opciones: ["<div>", "<input>", "<button>", "<span>"],
        correcta: 2
    },
];

let indice = 0;
let puntos = 0;

const preguntaTxt = document.getElementById("pregunta");
const botones = document.querySelectorAll(".opcion");
const resultado = document.getElementById("resultado");
const puntajeTxt = document.getElementById("puntaje");
const btnSiguiente = document.getElementById("btnSiguiente");

cargarPregunta();

function cargarPregunta() {
    resultado.textContent = "";
    btnSiguiente.style.display = "none";

    const preguntaActual = preguntas[indice];
    preguntaTxt.textContent = preguntaActual.pregunta;

    botones.forEach((boton, i) => {
        boton.textContent = preguntaActual.opciones[i];
        boton.disable = false;
    });
}

function verificarRespuesta(opcionSeleccionada) {
    const correcta = preguntas[indice].correcta;
    const respuestaCorrectaTexto = preguntas[indice].opciones[correcta];

    if (opcionSeleccionada === correcta) {
        resultado.textContent = "Correcto";
        puntos++;
        puntajeTxt.textContent = `Puntaje: ${puntos}`;

        setTimeout(() => {siguientePregunta(); }, 800);

    } else {
        resultado.textContent = `Incorecto. La respuesta correcta es: ${respuestaCorrectaTexto  }`;
    }

    botones.forEach(boton => boton.disable = true);
    puntajeTxt.textContent = `Puntaje: ${puntos}`;
    btnSiguiente.style.display = "block";
}

function siguientePregunta() {
    indice++;

    if (indice < preguntas.length) {
        cargarPregunta();
    } else {
        mostrarResultadoFinal();
    }
} 

function reiniciarJuego() {
    indice = 0;
    puntos = 0;

    document.getElementById("opciones").style.display = "block";
    btnSiguiente.style.display = "block";
    resultado.textContent = "";

    cargarPregunta();
}

document.addEventListener("DOMContentLoaded", () => {
    const btnReiniciar = document.getElementById("btnReiniciar");
    btnReiniciar.addEventListener("click", reiniciarJuego);
});


function mostrarResultadoFinal() {
    preguntaTxt.textContent = "Quiz Terminado";
    document.getElementById("opciones").style.display = "none";
    resultado.textContent = `Puntaje final: ${puntos} / ${preguntas.length}`;
    btnSiguiente.style.display = "none";
}

//if ("serviceWorker" in navigator) {
    //navigator.serviceWorker.register("service-worker.js")
    //.then(() => console.log("Service Worker registrado"))
   // .catch(error => console.log("Error:", error));
//}