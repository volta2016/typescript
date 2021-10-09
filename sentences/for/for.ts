//for
//es para para acceder a elementos de una matriz o lista de tuplas

//for
for (let i = 0; i <= 6; i++) {
	console.log(`el numero es ${i}`);
}

//for 2
let fullname = ["hola", "me", "llamo", "kyo"];

for (let element of fullname) {
	console.log(element);
}

let array = ["hola", "me", "llamo", "kyo"];

for (let indice in array) {
	console.log(indice, array[indice]);
}
