//array number
//por inferencia (el propio motor de typescript le asigna un valor 
//a estas variables)
let num = [1, 2, 3, 5, 7];
// console.log(num);

//array string
let cadena1 = ["Hi", "from", "array"];
// console.log(cadena1);

//acá los estamos definiendo como un array de string
let cadena2: string[];
cadena2 = ["Hi", "from", "array"];//acá le estamos asignando valores

//cadena2 = ["Hi", "from", "array", 2];//esto nos marcara un error
// console.log(cadena2);

//any primite type

//podemos crear un array que si permita mezclar tipos
let mix: any[];
let mix3: any[];

let homeone = {
	calle: "Broadway ",
	numero: 2222,
	guardia: false,
	familia: {
		padre: "Charly",
		integrantes: 7,
	},
	presentacion: ["hi", "from", "object home1"],
};

let hometwo = {
	calle: "new york",
	numero: 3452,
	guardia: true,
	familia: {
		padre: "Bob",
		integrantes: 3,
	},
	presentacion: ["hi", "from", "object casa home2"],
};

mix = ["mix", "any", "primitive", true, 10];
console.log(mix);

//por inferencia
let mix2 = ["mix2", "any2", "primitive2", false, 22, homeone];

mix3 = [homeone, hometwo];
console.log(mix3);
