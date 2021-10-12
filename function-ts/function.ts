//infernecia > por inferencia va saber de que tipos son
/*Como son los objetos de tipo any
y los va resolver en tiempo de ejecución lo que va hacer es concatenar estas 2 cadenas
Como no hemos recibido type son los type que recibimos como parametros en tiempo de ejcución, pues el decide que estos
son string. 
Esto se puede definir de forma statica por si no le pasamos los valores que nostros queremos
*/

//Ejemplo 1: tipo de dato any
function suma(x, y) {
	return x + y;
}

console.log(suma("3", "5")); //35

//Ejemplo 2: podemos definir los type
function sumaTwo(x: number, y: number): number {
	console.log("function sumaTwo");

	return x + y;
}

console.log(sumaTwo(8, 6)); //35

//Ejemplo  3: - Le vamos a deicir que nos devuelva un array de numeros
function fibonacci(vecesSuccesion: number): number[] {
	let numeros = [0, 1];
	let i = 2;

	console.log("function fibonacci");
	while (i <= vecesSuccesion) {
		numeros[i] = sumaTwo(numeros[i - 2], numeros[i - 1]);
		i++;
	}

	return numeros;
}

fibonacci(15);

//Ejemplo 4: si le pasamos parametro de entrada pasa el valor si no con
//void no devuelve ningun valor

// function sinRetornoNiParams(x: string): void {
// 	console.log(x);
// }

// sinRetornoNiParams("");
