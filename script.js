/*
let roja = document.querySelector(".rojo");
let amarilla = document.querySelector(".amarillo");
let verde = document.querySelector(".verde");

function luzRoja() {
    luzRoja.style.backgroundColor = 'red';
    luzAmarilla.style.backgroundColor = 'black';
    luzVerde.style.backgroundColor = 'black';
}
function encenderAmarilla() {
    luzRoja.style.backgroundColor = 'black';
    luzAmarilla.style.backgroundColor = 'yellow';
    luzVerde.style.backgroundColor = 'black';
  }
  
  // Función para encender la luz verde
  function encenderVerde() {
    luzRoja.style.backgroundColor = 'black';
    luzAmarilla.style.backgroundColor = 'black';
    luzVerde.style.backgroundColor = 'green';
  }
  
  function cambiarLuces() {
    encenderRoja();
    setTimeout(function() {
      encenderAmarilla();
      setTimeout(function() {
        encenderVerde();
        setTimeout(cambiarLuces, 2000); // Llamada recursiva para repetir el ciclo
      }, 2000);
    }, 2000);
  }
  
  // Iniciar el ciclo de cambio de luces
  cambiarLuces();
  */

  // Obtener referencias a las luces del semáforo
var luzRoja = document.querySelector('.roja');
var luzAmarilla = document.querySelector('.amarilla');
var luzVerde = document.querySelector('.verde');

// Función para encender la luz roja
function encenderRoja() {
  luzRoja.style.backgroundColor = 'red';
  luzAmarilla.style.backgroundColor = 'black';
  luzVerde.style.backgroundColor = 'black';
}

// Función para encender la luz amarilla
function encenderAmarilla() {
  luzRoja.style.backgroundColor = 'black';
  luzAmarilla.style.backgroundColor = 'yellow';
  luzVerde.style.backgroundColor = 'black';
}

// Función para encender la luz verde
function encenderVerde() {
  luzRoja.style.backgroundColor = 'black';
  luzAmarilla.style.backgroundColor = 'black';
  luzVerde.style.backgroundColor = 'green';
}

// Función para cambiar las luces del semáforo
function cambiarLuces() {
  encenderRoja();
  setTimeout(function() {
    encenderAmarilla();
    setTimeout(function() {
      encenderVerde();
      setTimeout(cambiarLuces, 2000); // Llamada recursiva para repetir el ciclo
    }, 2000);
  }, 2000);
}

// Iniciar el ciclo de cambio de luces
cambiarLuces();