/* =====================================================================
   ✦  EL CANDADO DE AVRIL  ✦
   Archivo de configuración — ESTE ES EL ÚNICO ARCHIVO QUE TENÉS QUE TOCAR.
   Para agregar una pregunta: copiá un bloque { ... } y agregalo al array.
   Todo lo demás (candado, código, corazones, progreso) se adapta solo.

   ⚠ Este archivo tiene que quedar en una carpeta llamada "data",
     al lado del index.html:
        index.html
        data/questions.js
     Si falta, el index.html igual funciona con estos mismos valores.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) NOMBRE DE ELLA  (aparece en la bienvenida)
   --------------------------------------------------------------------- */
window.HER_NAME = "Avril";


/* ---------------------------------------------------------------------
   2) LAS PREGUNTAS
   Campos de cada pregunta:
     id        → número (solo para orden y referencia)
     question  → el texto de la pregunta
     answer    → la respuesta correcta (esta letra entra en el código)
     hint      → la pista (no debe revelar la respuesta)
     page      → número de página de la revista, o null si no aplica
                 si ponés un número, la pista muestra:
                 "📖 Volvé a mirar la página 8..."
     accept    → (opcional) otras respuestas que también valen.
                 Ej: accept: ["ni"]  —  dejalo [] si no hace falta.

   El código final se arma automáticamente con las "answer" en orden.
   Hoy: P · I · F · Ñ · T
   --------------------------------------------------------------------- */
window.QUESTIONS = [
  {
    id: 1,
    question: "¿Primera inicial del apodo que te di?",
    answer: "P",
    hint: "❤️ Pensá en ese apodo especial que solo yo te digo...",
    page: null,
    accept: []
  },
  {
    id: 2,
    question: "¿Primera inicial de mi segundo nombre?",
    answer: "I",
    hint: "👀 Mi nombre tiene una segunda parte... quizás la encuentres en alguna página de la revista.",
    page: null,
    accept: []
  },
  {
    id: 3,
    question: "¿Primera inicial de mi perro?",
    answer: "F",
    hint: "🐶 Hay alguien de cuatro patas que también forma parte de mi vida...",
    page: null,
    accept: []
  },
  {
    id: 4,
    question: "¿Primera inicial de mi comida favorita?",
    answer: "Ñ",
    hint: "🍽️ Esta respuesta puede ser un poquito tramposa... pensá en esa comida que tanto me gusta.",
    page: null,
    accept: []
  },
  {
    id: 5,
    question: "¿Primera inicial de una comida que me encanta que me cocines?",
    answer: "T",
    hint: "👨‍🍳 Hay una comida que me encanta cuando la preparás vos...",
    page: null,
    accept: []
  }

  /* ---- EJEMPLO para agregar más adelante (borrá el // para activarlo) ----
  ,{
    id: 6,
    question: "¿Primera inicial del lugar de nuestra primera cita?",
    answer: "A",
    hint: "📍 Ese lugar donde todo empezó...",
    page: 10,
    accept: []
  }
  ------------------------------------------------------------------------ */
];


/* ---------------------------------------------------------------------
   3) LA SORPRESA FINAL
   Si dejás FINAL_SURPRISE_URL vacío (""), el botón abre la carta final
   que está más abajo, dentro de la misma web.
   Si ponés un link (ej: "https://..."), el botón lleva a ese link.
   --------------------------------------------------------------------- */
window.FINAL_SURPRISE_URL = "";

window.FINAL_MESSAGE = {
  title: "Para vos, Avril",
  // Cada línea del array es un párrafo de la carta.
  lines: [
    "Si llegaste hasta acá es porque te acordaste de todo. De los apodos, del perro, de las comidas, de las cosas chiquitas que nadie más sabe.",
    "Y eso es exactamente lo que más me gusta de nosotros: que lo importante está escondido en los detalles.",
    "Esta revista, este candado y esta pequeña aventura son mi manera de decirte que te pienso incluso cuando no estoy.",
    "Gracias por ser mi lugar favorito."
  ],
  signature: "Te amo ❤️",
  // Botón opcional debajo de la carta. Dejá label o url vacíos para ocultarlo.
  button: { label: "", url: "" }
};


/* ---------------------------------------------------------------------
   4) FRASES (se eligen al azar)
   --------------------------------------------------------------------- */
window.CORRECT_PHRASES = [
  "Sabía que lo ibas a recordar ❤️",
  "Obvio que lo sabías 🤍",
  "Esa memoria tuya me enamora ❤️",
  "Perfecto. Seguimos...",
  "Te dije que era fácil para vos ❤️"
];

window.WRONG_PHRASES = [
  "mmm... no es esa 👀",
  "Pensalo un poquito más...",
  "Estoy seguro de que lo sabés ❤️",
  "Casi... probá de nuevo 🤍",
  "No, mi amor. Volvé a la revista 📖"
];

window.HINT_INTRO = "Quizás la respuesta esté escondida en alguna página de nuestra historia...";

// Frases que aparecen durante la animación de "comprobando"
window.CHECKING_PHRASES = [
  "veamos...",
  "dejame pensar...",
  "probando la llave...",
  "mmm... a ver...",
  "un segundo ❤️"
];

// Cuánto dura la animación de "comprobando", en milisegundos.
// 1000 = 1 segundo. Subilo o bajalo a gusto.
window.CHECK_DELAY = 1000;


/* ---------------------------------------------------------------------
   5) OPCIONES

   SAVE_PROGRESS
     false → cada vez que entra, la aventura empieza de cero y tiene que
             descubrir el código de nuevo. (Está así ahora.)
     true  → guarda el avance en el navegador: si cierra la página,
             al volver sigue donde quedó y el candado ya abierto sigue abierto.
   --------------------------------------------------------------------- */
window.SAVE_PROGRESS = false;
