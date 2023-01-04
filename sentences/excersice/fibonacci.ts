//1) Hacer la serie de fibonacci
//2) Devolver los primeros 100 numeros impares
//3) Hacer un menu que nos devuelva una opción u otra
/* - Debe tener un par de números para empezar 
porque el siguiente número se obtiene es la suma de los 2 anteriores.
La suma de los 2 números anteriores siempre es lo que consiste la succesion de fibonacci*/


//nos va a calcular este valor 15 veces
let vecesSuccesion = 15;

//numeros anteriores
let numeros = [0, 1];
let i = 2;

while (i <= vecesSuccesion) {
	numeros[i] = numeros[i - 2] + numeros[i - 1];
	// console.log(numeros);
	i++;
}

console.log(numeros);
console.log(numeros.length);
