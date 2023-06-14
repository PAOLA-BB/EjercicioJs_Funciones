
let rojo = document.querySelector(".rojo");
let amarillo = document.querySelector(".amarillo");
let verde = document.querySelector(".verde");

function encenderRojo() {
    rojo.style.backgroundColor = 'red';
    amarillo.style.backgroundColor = 'black';
    verde.style.backgroundColor = 'black';
}

function encenderVerde() {
    rojo.style.backgroundColor = 'black';
    amarillo.style.backgroundColor = 'black';
    verde.style.backgroundColor = 'green';
}

function encenderAmarillo() {
    rojo.style.backgroundColor = 'black';
    amarillo.style.backgroundColor = 'yellow';
    verde.style.backgroundColor = 'black';
}
  
function cambiarLuces() {
    encenderRojo();
    setTimeout(function() {
        encenderVerde();
        setTimeout(function() {
            encenderAmarillo();
            setTimeout(cambiarLuces, 2000); // Llamada recursiva para repetir el ciclo
        }, 2000);
    }, 2000);
}
  
// Iniciar el ciclo de cambio de luces
cambiarLuces();
