/* Hacer un menu que nos devuelva o una opción u otra

Los números impares son aquellos números que no son múltiplos de 2, por lo tanto, un número
impar no es divisible entre 2. Un número impar no puede tener decimales.

*/
var option = 1; //se cumple la 3
switch (option) {
  case 1:
    var vecesSuccesion = 15;
    var numeros = [0, 1];
    var i = 2;
    while (i <= vecesSuccesion) {
      numeros[i] = numeros[i - 2] + numeros[i - 1];
      i++;
    }
    console.log(numeros);
    break;
  case 2:
    for (var j = 0; j < 100; j++) if (j % 2 == 0) console.log(j);
    break;
  case 3:
    for (var j = 0; j < 100; j++) if (j % 2 == 1) console.log(j);
    break;
  default:
    console.log("No se ha seleccionado una opción");
}
