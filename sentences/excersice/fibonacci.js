//1) Hacer la serie de fibonacci
/* - Debe tener un par de numeros para empezar por que el siguiente numero se obtiene >
porque el siguiente numero se obtiene se la suma de los 2 anteriores.
La suma de los 2 numeros anteriores siempre es lo que consiste la succesion de fibonacci*/
var vecesSuccesion = 15;
var numeros = [0, 1];
var i = 2;
while (i <= vecesSuccesion) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
    i++;
}
console.log(numeros);
console.log(numeros.length);
