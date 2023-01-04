//if else

// let condition = true;
// if (condition) {
// 	console.log("Esto se ejecutara siempre");
// }
// condition = false;

// if (condition) {
// 	console.log("Esto no se ejecutara siempre");
// }

// if (condition) {
// 	console.log("se ejecuta esto si es TRUE");
// } else {
// 	console.log("se ejecuta esto si es FALSE");
// }

//type of data
let x: number = 5;
let y: number = 4;

if (x + y == 10) {
	console.log("se ejecuta esto si es TRUE");
} else if (x + y == 15) {
	console.log("la suma es igual 15");
} else if (x + y == 11) {
	console.log("la suma es igual a 11");
} else {
	console.log("la suma es menor a 10");
}

//ternary
//condition ? true : false;
x + y >= 10
	? console.log("La suma de x + y: es mayor o igual que 10")
	: console.log("La suma de x + y: es menor a 10");
