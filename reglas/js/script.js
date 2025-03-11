// Variables para almacenar el puntaje y el resultado
let puntos = 0;
let resultados = 0;

// Array de preguntas: cada objeto representa una pregunta con su teoría, texto explicativo, opciones y la respuesta correcta
let questions = [
  {
    teoría: 'Teoría de las Aceitunas',
    texto: 'Esta teoría sugiere que una pareja es compatible si uno de los dos ama las aceitunas y el otro las odia. Se basa en la idea de que los opuestos pueden complementarse y lograr un equilibrio, usando a Marshall y Lily como ejemplo, ya que él recuerda que Marshall “detestaba” las aceitunas mientras que a Lily le encantaban',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Ted'
  },
  {
    teoría: 'Teoría de "Nada Bueno Pasa Después de las 2AM"',
    texto: 'Esta teoria sugiere que las decisiones tomadas después las 2 de la mañana suelen ser erróneas. La teoría enfatiza que, a altas horas de la noche, el cansancio y las emociones pueden nublar el juicio.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Ted'
  },
  {
    teoría: 'Teoría de la Autopista',
    texto: 'Compara las relaciones con una autopista llena de salidas en puntos clave: 6 horas, 4 días, 3 semanas, 7 meses, 1 año y medio, 18 años y, finalmente, la muerte. Cada salida representa una oportunidad para terminar la relación antes de comprometerse más profundamente.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría de la Escala Sexy-Loca',
    texto: 'Propone que existe una correlación directa entre lo atractiva que es una persona y su nivel de locura. Según la Teoría, una persona puede ser tan loca como sea proporcional a lo sexy que es; si una persona es más loca de lo que es atractiva, la relación no es sostenible. Se utiliza como justificación para evaluar parejas potenciales.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría de la Sirena',
    texto: 'Postula que, con el tiempo, hombres y mujeres que inicialmente no se atraen pueden desarrollar atracción debido a la proximidad constante. Se basa en la idea de que los marineros, después de mucho tiempo en el mar, comenzaban a ver a los manatíes como sirenas.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría del Cristal Roto',
    texto: 'Sugiere que, en una relación, una vez que notas un defecto en tu pareja, es difícil dejar de enfocarse en él, lo que puede llevar al deterioro de la relación.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Marshall'
  },
  {
    teoría: 'Teoría del Doppelgänger',
    texto: 'Según esta teoría, cada miembro del grupo tiene un doble en la ciudad. Estos doppelgängers representan caminos alternativos o deseos ocultos de los personajes, como la versión lesbiana de Robin o la versión stripper de Lily. Su aparición simboliza posibilidades de lo que podrían haber sido.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Ted'
  },
  {
    teoría: 'Teoría del Continuo Cita-Tiempo',
    texto: 'Sugiere que no se deben hacer planes con una pareja para un período más largo del que se ha estado saliendo. Por ejemplo, si has estado saliendo con alguien por tres meses, no deberías planear unas vacaciones para dentro de seis meses, porque la relación podría no durar tanto.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría de los Ojos de Loca',
    texto: 'Advierte que se puede identificar a una mujer potencialmente problemática por una mirada particular en sus ojos a la que él llama “ojos de loca”.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría de Dobler-Dahmer',
    texto: 'Toda declaración romántica puede ser vista como adorable o aterradora dependiendo de los sentimientos de la otra persona.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Ted'
  },
  {
    teoría: 'Teoría de la Mermelada',
    texto: 'Sugiere que cada persona en la vida de otra tiene una “mermelada”, es decir, algo que necesita constantemente.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Robin'
  },
  {
    teoría: 'Teoría de Ventana de Oportunidad',
    texto: 'Indica que existe un período de tiempo en el que una persona tiene una oportunidad con alguien antes de que esta se cierre para siempre.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Ted'
  },
  {
    teoría: 'Teoría del Platino',
    texto: 'Afirma que cuando un hombre alcanza cierto nivel de éxito con las mujeres, ya no puede salir con una chica promedio.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría del Blitz',
    texto: 'Plantea que algunas personas están malditas y se pierden los mejores momentos porque se van antes de que ocurra algo legendario.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Marshall'
  },
  {
    teoría: 'Teoría del Desfasaje Temporal',
    texto: 'Sugiere que algunas relaciones no funcionan porque las dos personas no están en la misma frecuencia temporal.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Ted'
  },
  {
    teoría: 'Teoría del Tránsito de Nueva York',
    texto: 'Si alguien deja pasar el primer taxi en Nueva York, lo más probable es que tenga que esperar mucho más para encontrar otro.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Lily'
  },
  {
    teoría: 'Teoría de la Cadena de los Gritos',
    texto: 'Describe un ciclo en el que una persona reprende a otra, generando una cadena de gritos que se transmite de uno a otro.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría del Efecto Animadora',
    texto: 'Sugiere que las personas parecen más atractivas cuando están en grupo debido a una ilusión colectiva, ya que al observar un grupo, el cerebro genera un “rostro promedio” más simétrico y atractivo.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría del Ambicioso y Conformista',
    texto: 'Afirma que en toda pareja hay una persona ambiciosa y otra conformista.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Barney'
  },
  {
    teoría: 'Teoría del Pato o Conejo',
    texto: 'Sugiere que la percepción de una persona puede cambiar con el tiempo, pasando de desagrado a atracción, o viceversa.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Marshall'
  },
  {
    teoría: 'Teoría del Anzuelo',
    texto: 'Describe la situación en la que una persona mantiene a otra interesada y enganchada sin intención de comprometerse.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Ted'
  },
  {
    teoría: 'Teoría del Efecto Sepia',
    texto: 'Sugiere que los recuerdos y emociones del pasado tiñen la percepción de las relaciones actuales con un tono nostálgico.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Ted'
  },
  {
    teoría: 'Teoría de la Langosta',
    texto: 'Sugiere que las personas desean más aquello que no pueden tener, ejemplificado con la experiencia de Robin con la langosta.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Robin'
  },
  {
    teoría: 'Teoría de los Regalos de los Exs',
    texto: 'Plantea que los regalos de los ex de tu pareja traen recuerdos del pasado, afectando la relación actual.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Robin'
  },
  {
    teoría: 'Teoría de la Prueba del Porche',
    texto: 'Lily utiliza esta prueba para evaluar si las parejas de sus amigos son adecuadas, imaginando un futuro en el porche.',
    opciones: ['Ted', 'Marshall', 'Lily', 'Barney', 'Robin'],
    respuesta: 'Lily'
  }
];

// Función para calcular el resultado y actualizar el HTML con el porcentaje de aciertos
function calcularResultado() {
  // Se calcula el porcentaje basado en la cantidad total de preguntas
  resultados = Math.round((puntos / 25) * 100);
  const resultadoElement = document.querySelector('.card-text.resultado');
  resultadoElement.innerHTML = `¡Felicitaciones! Acertaste el ${resultados}% de las veces.`;
  // Se muestra el resultado
  resultadoElement.style.display = 'block';
}

// Función para manejar la selección de respuesta en una card y bloquear todos sus botones
function checkStaticAnswer(event, index) {
  // Se obtiene la opción seleccionada a partir del atributo data-option
  const selectedOption = event.target.getAttribute('data-option');
  // Se obtiene la respuesta correcta de la pregunta correspondiente
  const correctAnswer = questions[index].respuesta;
  const alertContainer = document.getElementById('alertContainer');
  
  // Se bloquean todos los botones de la card para evitar re-selecciones
  const card = event.target.closest('.card');
  const answerButtons = card.querySelectorAll('button[data-option]');
  answerButtons.forEach(button => {
    button.disabled = true;
  });
  
  // Se muestra una alerta dependiendo de si la respuesta es correcta o incorrecta
  if (selectedOption === correctAnswer) {
    puntos++; // Se incrementa el puntaje
    alertContainer.innerHTML = `<div class="alert alert-success alert-dismissible fade show bg-success" role="alert">
      <strong>¡Acertaste!</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  } else {
    alertContainer.innerHTML = `<div class="alert alert-warning alert-dismissible fade show bg-danger text-light" role="alert">
      <strong>¡Lo siento!</strong> La respuesta correcta era: ${correctAnswer}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  }
}

// Se agrega un listener para el botón "Ver Resultados" que llama a calcularResultado()
document.getElementById("verResultados").addEventListener("click", function() {
  calcularResultado();
});

// Función para reiniciar el juego: se reinician variables, se oculta el resultado y se re-habilitan los botones
function reiniciarJuego() {
  // Reinicia los puntajes y el resultado
  puntos = 0;
  resultados = 0;
  
  // Se oculta y limpia el contenido del elemento de resultado
  const resultadoElement = document.querySelector('.card-text.resultado');
  resultadoElement.innerHTML = "";
  resultadoElement.style.display = "none";
  
  // Se re-habilitan todos los botones de cada card
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    const answerButtons = card.querySelectorAll('button[data-option]');
    answerButtons.forEach(button => {
      button.disabled = false;
    });
  });
  
  // Se limpia el contenedor de alertas
  const alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = "";
}

// Se agrega un listener para el botón "Reiniciar" que llama a la función reiniciarJuego
document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);
