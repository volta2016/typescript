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
