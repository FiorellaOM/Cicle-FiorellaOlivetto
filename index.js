/*Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida
por cada resultado, hasta que se ingresa “ESC”.
*/

let entrada = prompt("Ingresar un color");
let colors = "Colores ingresados: " ;

while (entrada != "ESC") {
  colors = colors + " " + entrada.toUpperCase();
  alert(colors);
  entrada = prompt("Ingresar otro color");
}