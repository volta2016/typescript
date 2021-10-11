let num: number = 3;

//ejemlo 1
//mientras num sea menor a 57 se va ejecutar todo esto
while (num < 57) {
	num = num * 2;
	console.log("1- El numero es: " + num);
}

//imprima cuando el numero sea impar y menor que 57 > esto nos va imprimir en pantalla solo
//la primera iteracion cuando el numero es 3 cuando el numero es impar.
//ejemplo 2
//menor a 57 y el numero divido x 2 nos deje como resto 1
while (num < 57 && num % 2 == 1) {
	console.log("2- El numero es: " + num);
	num = num * 2;
}

//ejemplo 3
//mietras el numero sea menor a 57 o el numero siguiente cuyo resto sea 1 va ejecutar esta condición
//la segunda expresión no se evaluaría.
while (num < 57 || num % 2 == 1) {
	num = num * 2;
	console.log("2- El numero es: " + num);
}
