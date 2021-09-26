//los tipos básicos en TS

let number: number;
let cadena: string;
let soyBolean: boolean;

//type string
cadena = "Hola mundo";

console.log(cadena);

//type bolean
soyBolean = true;

//type numeber > podemos usar valor negativos con decimales no da error
number = -8.89;
console.log(number);

function sumaDatos(num: number, num2: number) {
	return num + num2;
}

console.log(sumaDatos(3, 27));

//exercises

// let numberOne: number;
// let data: string;
// let yes: boolean;
// let vacio: null;
// let nodefinido: undefined;

// numberOne = 1;
// data = "text";
// yes = true;
// vacio = null;
// nodefinido;

// console.log(numberOne, data, yes, vacio, nodefinido);

// function restarNumeros(numa: number, numb: number) {
// 	return numa - numb;
// }

// console.log(restarNumeros(2, 5));
