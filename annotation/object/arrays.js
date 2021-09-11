//array number
var num = [1, 2, 3, 5, 7];
// console.log(num);
//array string
var cadena1 = ["Hi", "from", "array"];
// console.log(cadena1);
var cadena2;
cadena2 = ["Hi", "from", "array"];
// console.log(cadena2);
//any primite type
var mix;
var mix3;
var home1 = {
    calle: "Broadway ",
    numero: 2222,
    guardia: false,
    familia: {
        padre: "Charly",
        integrantes: 7
    },
    presentacion: ["hi", "from", "object casa"]
};
var hometwo = {
    calle: "new york",
    numero: 3452,
    guardia: true,
    familia: {
        padre: "Bob",
        integrantes: 3
    },
    presentacion: ["hi", "from", "object casa home2"]
};
mix = ["mix", "any", "primitive", true, 10];
console.log(mix);
//por inferencia
var mix2 = ["mix2", "any2", "primitive2", false, 22, home1];
mix3 = [home1, hometwo];
console.log(mix3);
