//funciones lambda - arrow function

let sumarAnonima = (x:number, y:number):number => x + y
 

function sumar(x, y) {
	return x + y;
}


//aca especificamos el type que nos devuelve un array de numeros
let fibonacciAnonima = (vecesSuccesion:number ):number[] => {
    let numeros = [0, 1];
	let i = 2;

	console.log("function fibonacci");
	while (i <= vecesSuccesion) {
		numeros[i] = sumar(numeros[i - 2], numeros[i - 1]);
		i++;
	}

	return numeros;
} 


console.log(fibonacciAnonima(15));
//en este caso le estamos pasando fibonacciAnonima(15)






