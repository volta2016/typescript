/*Función personalizada para determinar si un numero especifico
Es primo si es divisible por si mismo y la unidad es decir (1)
es decir si la cantidad de divisores de ese numero entero positivo es igual a (2).

Ejemplo
5 => 5, 1 > si es primo
6 => 1 2 3 6 > no es primo tiene 4 divisores
7 => 7, 1 > si es primo

1- Utilicemos la tecnica de raiz cuadrada para determinar si es numero es primo (raiz cuadrada de ese numero)
2- sobre el resultado Math.floor() aplicamos el entero mas cercano hacia abajo. A esto le sumamos 1
*/

function esPrimo(numero) {
	if (typeof numero != "number") {
		throw TypeError("El argumento debe ser un número");
	}

	if (!Number.isInteger(numero)) {
		throw TypeError("El argumento debe ser un número entero");
	}

	if (numero <= 1) {
		throw Error("El argumento debe ser un número entero positivo");
	}

	let raiz = Math.floor(Math.sqrt(numero)) + 1;
	for (let i = 2; i < raiz; ++i) {
		if (numero % i == 0) {
			return false;
		}
	}
	return true;
}

try {
	console.log(esPrimo(5)); //true
} catch (e) {
	console.log(`Error: ${e.message}`);
}

try {
	console.log(esPrimo(6)); //false
} catch (e) {
	console.log(`Error: ${e.message}`);
}
try {
	console.log(esPrimo(1.7)); //true
} catch (e) {
	console.log(`Error: ${e.message}`);
}
try {
	console.log(esPrimo(-1)); //true
} catch (e) {
	console.log(`Error: ${e.message}`);
}

try {
	console.log(esPrimo("1")); //true
} catch (e) {
	console.log(`Error: ${e.message}`);
}
