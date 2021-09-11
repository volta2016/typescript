//inferencia
let casa = {
	calle: "Broadway ",
	numero: 2222,
	guardia: false,
	familia: {
		padre: "Charly",
		integrantes: 7,
	},
};

const {
	calle,
	numero,
	guardia,
	familia: { padre, integrantes },
} = casa;

console.log(calle, numero, guardia, padre, integrantes);

//con type ts
//initialize(in theory this is to declare in js)
let home2: {
	street: string;
	num: number;
	guard: boolean;
	family: {
		father: string;
		members: number;
	};
} = {
	street: "New York",
	num: 22,
	guard: true,
	family: {
		father: "Keichi",
		members: 7,
	},
};
//initialize
// home2.street = "new york update";
console.log(home2);
